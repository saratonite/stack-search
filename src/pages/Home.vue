<template>
  <div class="jumbo">

    <h1 >StackOverFlow Search</h1>

    <div class="container ">
        <!-- SearchBox -->
        <Search-box ></Search-box>

        <Search-results  :loading="loading" :items="threads"></Search-results>


    </div>

    <!-- Search Results -->

    <!-- End Search Results  -->


  </div>
</template>

<style media="screen">

</style>

<script>

import Api from './../service/So';
import SearchBox from './../components/SearchBox';
import SearchResults from  './../components/SearchResults';

import {search} from './../vuex/actions';

	export default {
    created(){

    },
		ready(){
      var self = this;
      this.search({q:self.searchParams.q,closed:self.searchParams.closed,sortBy:self.searchParams.sortBy,site: 'stackoverflow'});
		},
    data:function(){
      return {
        searchData:{},
        searchParams:{
          closed:"False",
          sortBy:'activity',
          q:'',
          site: 'stackoverflow'
        }
      }
    },
    events:{
      'do-search':function(data){
        this.search(data);
      }
    },
    vuex:{

      getters:{

        threads:function(state){
          return state.threads;
        },
        loading:function(state){
          return state.pageLoad;
        }

      },
      actions:{
        search
      }

    },
    // Methods
    methods:{

    },
    components:{
      SearchResults,
      SearchBox
    }
	}
</script>
