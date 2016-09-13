import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  appname:"Stack-Search",
  threads:[],
  answers:[],
  threadData:[],
  pageLoad:false
}


const mutations = {
  FETCH_THREADS (state,threads) {
    state.threads = threads
  },
  PAGELOAD_ON (state){
    state.pageLoad = true;
  },
  PAGELOAD_OFF (state){
    state.pageLoad = false;
  },
  RENAMEAPP (state,data){

    alert('Hello '+data);
    state.appname = data;
  },
  FETCH_THREAD (state,data){
    state.threadData = data;
  },
  CLEAN_THREAD (state){
    state.threadData = null;
  }
}

export default new Vuex.Store({
  state,
  mutations
})
