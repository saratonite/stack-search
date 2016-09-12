import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  appname:"Stack-Search",
  threads:[],
  answers:[]
}


const mutations = {
  FETCH_THREADS (state,threads) {
    state.threads = threads
  },
  RENAMEAPP (state,data){

    alert('Hello '+data);
    state.appname = data;
  }
}

export default new Vuex.Store({
  state,
  mutations
})
