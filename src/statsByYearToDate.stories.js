import Vue from 'vue';
import stats from './statsByYearToDate.vue';

export default { title: 'Boardgame Stats By Year To Date' };


export const defaultStats = () => ({
    components: { stats },
    template: '<stats></stats>'
  });

  export const yearStats = () => ({
    components: { stats },
    template: '<stats datecode="2020"></stats>'
  });