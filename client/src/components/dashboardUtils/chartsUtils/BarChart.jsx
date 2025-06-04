import React, { useState, useEffect, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import useOrders from "../../../utils/useOrders";

export default function BarChart() {
  const { orders, loading, error } = useOrders(); // Your actual hook
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Detect initial screen size

  // Effect to update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update breakpoint as needed
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate revenue by country using useMemo for performance
  const revenueData = useMemo(() => {
    const countryRevenue = {};
    const countriesOfInterest = ['Pakistan', 'Dubai', 'United States']; // Countries you want to display

    orders.forEach(order => {
      const country = order.shippingAddress?.country;
      const total = order.total;

      // Only include if country is in our list of interest and total is a number
      if (country && countriesOfInterest.includes(country) && typeof total === 'number') {
        countryRevenue[country] = (countryRevenue[country] || 0) + total;
      }
    });

    // Ensure labels and data arrays are in the same order
    const labels = countriesOfInterest;
    const dataPoints = labels.map(country => countryRevenue[country] || 0);
    const maxRevenue = Math.max(...dataPoints, 0); // Get max for y-axis scale

    return {
      labels,
      dataPoints,
      maxRevenue: maxRevenue > 0 ? Math.ceil(maxRevenue / 10000) * 10000 : 10000 // Round up to nearest 10000, ensure at least 10000
    };
  }, [orders]); // Recalculate only when orders change

  // Chart options, dynamically adjust font sizes for mobile
  const options = useMemo(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: {
              size: isMobile ? 10 : 14, // Smaller font for legend on mobile
            },
          },
        },
        title: {
          display: true,
          text: 'Country-wise Revenue Chart',
          font: {
            size: isMobile ? 16 : 18, // Smaller font for chart title on mobile
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: revenueData.maxRevenue, // Dynamic max based on data
          ticks: {
            stepSize: 20000, // Explicitly set step size
            callback: (value) => `$${value}`,
            font: {
              size: isMobile ? 10 : 12, // Smaller font for y-axis ticks
            }
          },
          title: {
            display: true,
            text: 'Revenue ($)',
            font: {
              size: isMobile ? 12 : 14, // Smaller font for y-axis title
            },
          },
        },
        x: {
          ticks: {
            font: {
              size: isMobile ? 10 : 12, // Smaller font for x-axis ticks (country names)
            }
          },
          title: {
            display: true,
            text: 'Country',
            font: {
              size: isMobile ? 12 : 14, // Smaller font for x-axis title
            },
          },
        },
      },
    };
  }, [isMobile, revenueData.maxRevenue]); // Recreate options if isMobile or maxRevenue changes

  // Chart data
  const chartData = useMemo(() => {
    return {
      labels: revenueData.labels,
      datasets: [
        {
          label: 'Revenue',
          data: revenueData.dataPoints,
          backgroundColor: [
            'rgba(0, 128, 255, 0.7)', // Blue
            'rgba(255, 206, 86, 0.7)', // Yellow
            'rgba(75, 192, 192, 0.7)', // Green
          ],
          borderColor: [
            'rgba(0, 128, 255, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
          barThickness: isMobile ? 30 : 50, // Smaller bars on mobile
          maxBarThickness: isMobile ? 40 : 60,
        },
      ],
    };
  }, [revenueData.labels, revenueData.dataPoints, isMobile]); // Recreate chart data if revenueData or isMobile changes

  if (loading) return <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded text-center">Loading revenue data...</div>;
  if (error) return <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded text-center text-red-600">Error: {error.message}</div>;

  return (
    <div
      className="max-w-4xl mx-auto p-3 bg-white shadow rounded"
      // Responsive height: use 'h-96' for a fixed height, or 'min-h-[400px]' for minimum
      // On mobile, you might want a percentage of viewport height, e.g., '60vh'
      // Or just let it take its content height if you don't set a height here and rely on maintainAspectRatio:false
      style={{ height: isMobile ? '300px' : '407px' }} // Dynamic height based on device
    >
      {/* Check if data points exist before rendering to avoid empty chart */}
      {revenueData.dataPoints.length > 0 ? (
        <Bar options={options} data={chartData} />
      ) : (
        <div className="text-center text-gray-500">No revenue data available for selected countries.</div>
      )}
    </div>
  );
}
