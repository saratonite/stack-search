<template>
  <div class="jumbo">

    <h1 >StackOverFlow Search</h1>
    <div class="container ">
        <div class="search-launch">

          <div class="columns col-gapless ">
              <div class="column col-5 ">
                <input type="text" class="form-input" name="q" v-model="q">
              </div>
              <div class="column col-2">
                &nbsp;
                <button class="btn btn-primary" @click="doSearch">Search</button>
              </div>

          </div>

        </div>

        <Search-results :items="searchData"></Search-results>


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
    },
		ready(){
		},
    data:function(){
      return {
        searchData:{}
      }
    },
    // Methods
    methods:{

      doSearch:function(){
        var self = this;
        var searchParams = {q:self.q};
        Api.search(searchParams).end(function(err,res){
          console.log(err);
          console.log(res);
          if(res.status == 200)
          {
            self.searchData = res.body.items;
            console.log(self.searchData);
          }
        });

      }

    },
    components:{
      SearchResults
    }
	}
</script>
