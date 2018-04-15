import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'


Vue.use(Vuex)
const debug = true;
export const store = new Vuex.Store({
  state: {
    skills: [],
    projects: [],
  },
  getters,
  actions,
  mutations,
  strict: debug
});


