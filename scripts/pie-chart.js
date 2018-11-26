var feedSource = 'https://boardgames-api.calisaurus.net/api/boardgame/feed';

$.get(feedSource, function(data, status) {
  console.log("Data: " , data , "\nStatus: " , status);
  var result = calculateWinRate(data.feed)
  console.log(result);
  renderChart(result.hannah, result.john, result.draw, result.other);
})

function renderChart(hannah, john, draw, other) {
  var ctx = document.getElementById("pieChart");
  var pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Hannah", "John", "Draw", "Other"],
      datasets: [{
        label: '# of Games',
        backgroundColor: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 3, 1)', 'rgba(255, 0, 0, 1)', 'rgba(0, 255, 0, 1)'],
        lineTension: 0,
        data: [hannah, john, draw, other],
        borderColor: 'rgba(51, 57, 255, 1)',
        borderWidth: 3,
        borderJoinStyle: 'round'
      }]
    }
  });
}

function calculateWinRate(feedData) {
  var result = {}
  result.hannah = feedData.filter(item => item.winner === 'Hannah').length
  result.john = feedData.filter(item => item.winner === 'John').length
  result.draw = feedData.filter(item => item.winner === 'Draw').length
  result.other = feedData.filter(item => item.winner === 'Other' || item.winner === 'X').length
  return result;
}
