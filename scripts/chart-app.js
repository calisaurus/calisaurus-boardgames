const barChartData = {
    labels: ['Hannah', 'John'],
    datasets: [{
        label: '# of Votes',
        data: [61, 59],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
    }]
}

const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [40, 39, 10, 40, 39, 80, 40]
      }
    ]
  }

  const lineChartOptions =  {responsive: true, maintainAspectRatio: false}



  Vue.component('test-chart', {
    extends: VueChartJs.Bar,
    mounted () {
      this.renderChart(barChartData, lineChartOptions)
    }
  })
  
  new Vue({
    el: '#chart-app',
    data () {
      return {
        title: "this is a string"
      }
    }
  })