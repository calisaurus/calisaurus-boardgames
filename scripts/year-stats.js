new Vue({
  el: '#app',
  data () {
    return {
      info: {}
    }
  },
  props: ['datecode'],
  mounted () {
    const dateCode = document.getElementById('dateCode').getAttribute('data-dateCode')
    axios
      .get(`https://boardgames-api.calisaurus.net/api/boardgame/stats/byYear/${dateCode}`)
      .then(response => (this.info = response))
  },
  computed: {
      yearStats: function() {
          return this.info.data
      },
      mostGamesPlayedInADay: function() {
          return this.sortByDate(this.yearStats.mostGamesPlayedInADay)
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