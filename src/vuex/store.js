import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  appname:"Stack-Search",
  threds:[],
  answers:[]
}


const mutations = {
  FETCH_THREADS (state,threds) {
    state.threds = threds
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
