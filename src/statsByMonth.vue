<template>
    <div v-if="monthStats">
        <h2>Total games played:</h2>
        {{monthStats.totalGamesPlayed}}

        <h2>Average games played per day:</h2>
        {{formatAverage(monthStats.averageGamesPlayedPerDay)}}

        <h2>Percentage of co-operative games played:</h2>
        {{formatPercentage(monthStats.coOpGamesPlayedPercentage)}} ({{monthStats.coOpGamesPlayedCount}} games), {{monthStats.coOpGameWins}} wins and {{monthStats.coOpGameLoses}} loss

        <h2>Win rates between Hannah and John in versus games:</h2>
        {{formatPercentage(monthStats.winPercentageHannah)}} ({{monthStats.winCountHannah}} games) to Hannah and {{formatPercentage(monthStats.winPercentageJohn)}} ({{monthStats.winCountJohn}} games) to John

        <h2>Most games played in a day:</h2> 
        <div v-for="day in mostGamesPlayedInADay" :key="day.date">
            <h3>{{day.games.length}} games played on {{formatDate(day.date)}}</h3>
            <p v-for="game in day.games" :key="game">
                {{game}}
            </p>
        </div>

        <h2>Most played game:</h2>
        <div v-for="game in monthStats.mostPlayedGames" :key="game.name"> 
        {{game.name}} with {{game.plays}} plays
        </div>
        
        <h2>Complete list of unique games played in {{monthStats.title}}:</h2>    
        <ul>
        <li v-for="game in monthStats.uniqueGamesPlayed" :key="game">{{game}}</li>
        </ul>
    </div>
    <div v-else>
        Loading data from {{datecode}}
    </div>
</template>

<script>

import axios from 'axios'
import moment from 'moment'

export default {
  data () {
    return {
      info: {}
    }
  },
  props: ['datecode'],
  mounted () {
      if (!this.datecode) {
          return
      }
    axios
      .get(`https://boardgames-api.calisaurus.net/api/boardgame/stats/byMonth/${this.datecode}`)
      .then(response => (this.info = response))
  },
  computed: {
      monthStats: function() {
          return this.info.data
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
}
</script>

<style scoped>
p {
    font-size: 2em;
    text-align: center;
}

* {
    font-family: 'Lato', Helvetica, sans-serif;
}
</style>