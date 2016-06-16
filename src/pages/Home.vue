<template>
  <div class="jumbo">

    <h1 >StackOverFlow Search</h1>
    <div class="container ">
      <form v-on:submit="doSearch">
        <div class="search-launch centered">

          <div class="columns col-gapless ">
              <div class="column col-5 ">
                <input type="text" class="form-input" name="q" v-model="q">
                <label class="form-switch">
                  <input type="checkbox" v-model="closed" />
                  <i class="form-icon"></i> Show only closed threds
              </label>
              <select class="form-select" v-model="sortBy">
                <option value="activity" disabled selected>Sort by</option>
                <option value="activity">Activity</option>
                <option value="votes">Votes</option>
                <option value="creation">Creation</option>
                <option value="relevance">Relevance</option>
            </select>
              </div>
              <div class="column col-2">
                &nbsp;
                <button class="btn btn-primary" @click.enter="doSearch">Search</button>


              </div>

          </div>

        </div>

      </form>



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
import SearchResults from  './../components/SearchResults';

	export default {
    created(){
      this.doSearch();
    },
		ready(){
		},
    data:function(){
      return {
        searchData:{},
        closed:"False",
        sortBy:'activity',
        q:'',
        loading:false
      }
    },
    // Methods
    methods:{

      doSearch:function(e){
        this.loading = true;

        var self = this;
        var searchParams = { q:self.q,site: 'stackoverflow', order: 'desc',sort:self.sortBy,filter:'default',closed:self.closed};
        Api.search(searchParams).end(function(err,res){
          self.loading =false;
          console.log(err);
          console.log(res);
          if(res.status == 200)
          {
            self.searchData = res.body.items;
            console.log(self.searchData);
          }
        });
        if(typeof(e) != "undefined"){
          e.preventDefault();
        }


      }

    },
    components:{
      SearchResults
    }
	}
</script>
