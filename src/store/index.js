import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    /* Income Statement */
    income_statement:{
      /* sales */
      sales:0,
      materials:0,
      labor:0,
      overhead:0,

      /* expenses */
      selling:0,
      admin:0,
      depreciation:0,
      operation:0,

      /*other*/
      revenue:0,
      expense:0,
      extra:0,
    },

    ic_tax:0.3,


  },
  mutations: {},
  actions: {},
  modules: {}
});
