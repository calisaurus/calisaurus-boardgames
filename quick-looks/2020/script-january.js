new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://boardgames-api.calisaurus.net/api/boardgame/stats/byMonth/2020-01')
      .then(response => (this.info = response))
  }
})