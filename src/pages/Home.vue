<template>
  <div class="jumbo">

    <h1 >StackOverFlow Search</h1>
    <div class="container ">
        <!-- SearchBox -->
        <Search-box ></Search-box>

        <Search-results  :loading="loading" :items="searchData"></Search-results>


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

	export default {
    created(){



    },
		ready(){
      this.doSearch();
		},
    data:function(){
      return {
        searchData:{},
        searchParams:{
          closed:"False",
          sortBy:'activity',
          q:'',
          site: 'stackoverflow'
        },
        loading:false
      }
    },
    events:{
      'do-search':function(data){
        this.doSearch(data);
      }
    },
    // Methods
    methods:{

      doSearch:function(data){
        var searchParams = data;
        this.loading = true;

        var self = this;
        //var searchParams = { q:self.q,site: 'stackoverflow', order: 'desc',sort:self.sortBy,filter:'default',closed:self.closed};

        if(typeof(searchParams) === "undefined"){
          searchParams = {q:self.searchParams.q,closed:self.searchParams.closed,sortBy:self.searchParams.sortBy,site: 'stackoverflow'};
        }

        Api.search(searchParams).end(function(err,res){
          self.loading =false;
          if(res.status == 200)
          {
            self.searchData = res.body.items;
          }
        });
        if(typeof(e) != "undefined"){
          e.preventDefault();
        }


      }

    },
    components:{
      SearchResults,
      SearchBox
    }
	}
</script>
