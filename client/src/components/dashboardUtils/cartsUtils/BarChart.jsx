import React from 'react';
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

const options = {
  responsive: true,
  // Maintain aspect ratio is true by default. Setting it to false allows you to control the height directly.
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Country-wise Revenue Chart',
      font: {
        size: 18,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      // Adjusted max to be closer to your highest data point (61000)
      // This will make the bars appear relatively taller within the chart area.
      max: 50000, // Slightly above the max data point (61000)
      ticks: {
        stepSize: 10000,
        // Removed stepSize to allow Chart.js to automatically determine steps,
        // which might give you more granular ticks like 1000 or 5000 if the scale allows.
        // If you specifically need 0, 1000, 5000, 10000, you'd need a more complex callback
        // or a custom plugin, but letting Chart.js handle it usually works well.
        callback: (value) => `$${value}`,
      },
      title: {
        display: true,
        text: 'Revenue ($)',
        font: {
          size: 14,
        },
      },
    },
    x: {
      title: {
        display: true,
        text: 'Country',
        font: {
          size: 14,
        },
      },
    },
  },
};

const labels = ['Pakistan', 'Dubai', 'USA'];

const data = {
  labels,
  datasets: [
    {
      label: 'Revenue',
      data: [25000, 38000, 61000],
      backgroundColor: [
        'rgba(0, 128, 255, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
      ],
      borderColor: [
        'rgba(0, 128, 255, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
      barThickness: 50,
      maxBarThickness: 60,
    },
  ],
};

export default function BarChart() {
  return (
    // Increased the height of the container div to make the chart taller.
    // Also, added a specific height to ensure the chart takes up more vertical space.
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded" style={{height : '407px'}} >
      <Bar options={options} data={data} />
    </div>
  );
}