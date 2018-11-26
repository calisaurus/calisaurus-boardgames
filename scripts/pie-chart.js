var feedSource = 'https://boardgames-api.calisaurus.net/api/boardgame/feed';

$.get(feedSource, function(data, status) {
  console.log("Data: " , data , "\nStatus: " , status);
  var result = calculateWinRate(data.feed)
  var coop = calculateCoop(data.feed)
  console.log(result);
  console.log(coop);
  renderChart(result.hannah, result.john, result.draw, result.other);
  renderCoopChart(coop.coop, coop.versus);
})

function renderChart(hannah, john, draw, other) {
  var ctx = document.getElementById("pieChart");
  var pieChart = new Chart(ctx, {
    type: 'doughnut',
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

function renderCoopChart(coop, versus) {
  var total = coop + versus;
  var coopPct = coop / total;
  var versusPct = versus / total;
  var ctx = document.getElementById("coopChart");
  var coopChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [`Coop ${formatPct(coopPct)}`, `Versus ${formatPct(versusPct)}`],
      datasets: [{
        label: '# of Games',
        backgroundColor: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 3, 1)'],
        lineTension: 0,
        data: [coop, versus],
        borderColor: 'rgba(51, 57, 255, 1)',
        borderWidth: 3,
        borderJoinStyle: 'round',
      }]
    }
  });
}

function formatPct(value) {
  return (value * 100).toFixed(1) + '%';
}

function calculateCoop(feedData) {
  var coop = {}
  coop.coop = feedData.filter(item => item.coOp === 'Yes').length
  coop.versus = feedData.filter(item => item.coOp === 'No').length
  console.log('[Pie Chart] Coop', feedData.filter(item => item.coOp !== 'Yes' && item.coOp !== 'No'))
  return coop;
}
