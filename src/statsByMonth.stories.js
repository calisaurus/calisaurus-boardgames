import Vue from 'vue';
import stats from './statsByMonth.vue';

export default { title: 'Boardgame Stats By Month' };


export const defaultStats = () => ({
    components: { stats },
    template: '<stats></stats>'
  });

  export const januaryStats = () => ({
    components: { stats },
    template: '<stats datecode="2020-01"></stats>'
  });