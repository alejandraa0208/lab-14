'use strict';

document.addEventListener('DOMContentLoaded', function() {
  let canvasElem = document.getElementById('chart')

  /* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
class AppState {
  constructor() {
    this.allProducts = [];
  }

  loadVoteData() {
    const savedVoteData = localStorage.getItem('voteData');
    if (savedVoteData) {
      this.allProducts = JSON.parse(savedVoteData);
    }
  }
}

function renderChart() {
  const canvasElem = document.getElementById('chart');
  const appState = new AppState();
  appState.loadVoteData();

  const chartData = {
    labels: appState.allProducts.map(product => product.name),
    datasets: [
      {
        label: 'Votes',
        data: appState.allProducts.map(product => product.voteCount),
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // You can customize the chart colors here
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartConfig = {
    type: 'bar', 
    data: chartData,
    options: {
    },
  };

  const chartContext = canvasElem.getContext('2d');
  new Chart(chartContext, chartConfig);
}

renderChart();
});
