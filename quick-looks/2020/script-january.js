new Vue({
  el: '#app',
  data () {
    return {
      info: {}
    }
  },
  mounted () {
    axios
      .get('https://boardgames-api.calisaurus.net/api/boardgame/stats/byMonth/2020-01')
      .then(response => (this.info = response))
  },
  computed: {
      monthStats: function() {
          return this.info.data || {}
      },
      mostGamesPlayedInADay: function() {
          return this.sortByDate(this.monthStats.mostGamesPlayedInADay)
      }
  },
  methods: {
      formatPercentage: function(number) {
          return Number(number * 100).toPrecision(2) + '%'
      },
      formatDate: function(date) {
          return moment(date).format('Do MMMM')
      },
      formatAverage: function(number) {
        return Number(number).toPrecision(2)
      },
      sortByDate: function(list) {
        return list.sort(function (a, b) {
            const dateA = new Date(a.date)
            const dateB = new Date(b.date)
            return dateA - dateB
        })
      }
  }
})