// var config = {// LineChart.js
import React, { useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import useProducts from '../../../utils/useProducts';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const chartRef = useRef(null);
  const { products, loading, error } = useProducts();
  

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Products',
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        data: [10, 20, 30, 40, 100, 50, 150],
        fill: false
      },
      {
        label: 'Category',
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        data: [50, 300, 100, 450, 150, 200, 300],
        fill: false
      },
      {
        label: 'Total Revenue',
        borderColor: 'rgba(70, 235, 52 )',
        backgroundColor: 'rgba(70, 235, 52)',
        data: [50, 400, 10, 450, 150, 200, 300],
        fill: false
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Logarithmic'
      },
      legend: {
        position: 'top'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Index Returns'
        },
        min: 0,
        max: 500,
        ticks: {
          stepSize: 100
        }
      }
    }
  };

  // Function to randomize data
  const randomizeData = () => {
    const chart = chartRef.current;
    if (!chart) return;

    chart.data.datasets.forEach(dataset => {
      dataset.data = dataset.data.map(() =>
        Math.floor(Math.random() * 500)
      );
    });
    chart.update();
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Line ref={chartRef} data={data} options={options} />
      <button
        onClick={randomizeData}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Randomize Data
      </button>
    </div>
  );
};

export default LineChart;

// 		type: 'line',
// 		data: {
// 			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
// 			datasets: [{
// 				label: 'APAC RE Index',
// 				backgroundColor: window.chartColors.red,
// 				borderColor: window.chartColors.red,
// 				fill: false,
// 				data: [
// 					10,
// 					20,
// 					30,
// 					40,
// 					100,
// 					50,
// 					150
// 					/*randomScalingFactor(),
// 					randomScalingFactor(),
// 					randomScalingFactor(),
// 					randomScalingFactor(),
// 					randomScalingFactor(),
// 					randomScalingFactor(),
// 					randomScalingFactor()*/
// 				],
// 			}, {
// 				label: 'APAC PME',
// 				backgroundColor: window.chartColors.blue,
// 				borderColor: window.chartColors.blue,
// 				fill: false,
// 				data: [
// 					50,
// 					300,
// 					100,
// 					450,
// 					150,
// 					200,
// 					300
// 				],
		
// 			}]
// 		},
// 		options: {
// 			responsive: true,
// 			title: {
// 				display: true,
// 				text: 'Chart.js Line Chart - Logarithmic'
// 			},
// 			scales: {
// 				xAxes: [{
// 					display: true,
//           scaleLabel: {
//             display: true,
//             labelString: 'Date'
//           },
			
// 				}],
// 				yAxes: [{
// 					display: true,
// 					//type: 'logarithmic',
//           scaleLabel: {
// 							display: true,
// 							labelString: 'Index Returns'
// 						},
// 						ticks: {
// 							min: 0,
// 							max: 500,

// 							// forces step size to be 5 units
// 							stepSize: 100
// 						}
// 				}]
// 			}
// 		}
// 	};

// 	window.onload = function() {
// 		var ctx = document.getElementById('canvas').getContext('2d');
// 		window.myLine = new Chart(ctx, config);
// 	};

// 	document.getElementById('randomizeData').addEventListener('click', function() {
// 		config.data.datasets.forEach(function(dataset) {
// 			dataset.data = dataset.data.map(function() {
// 				return randomScalingFactor();
// 			});

// 		});

// 		window.myLine.update();
// 	});