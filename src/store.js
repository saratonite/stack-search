import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  threds:[],
  answers:[]
}


const mutations = {
  FETCH_THREADS (state,threds) {
    state.threds = threds
  }
}

export default new Vuex.Store({
  state,
  mutations
})
