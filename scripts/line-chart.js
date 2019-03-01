var ctx = document.getElementById("testChart");
var testChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"],
    datasets: [{
      label: '# of Games',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      lineTension: 0,
      data: [42, 45, 48, 44, 46, 48, 34, 46, 39, 38, 31],
      borderColor: 'rgba(51, 57, 255, 1)',
      borderWidth: 3,
      borderJoinStyle: 'round'
    },
  {
    label: 'Month Days',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    lineTension: 0.4,
    data: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30],
    borderColor: 'rgba(51, 57, 255, 0.5)',
    borderDash: [5, 15],
    borderWidth: 3,
    borderJoinStyle: 'round',
  }]
  },
  options: {
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        scaleLabel: {
          display: true,
          labelString: 'Number of Games'
        }
      }]
    }
  }
});
