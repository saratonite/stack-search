<template>
	     <form v-on:submit="doSearch">
        <div class="search-launch centered">

          <div class="columns col-gapless ">
              <div class="column col-5 ">
                <input type="text" class="form-input" name="q" v-model="searchData.q">
                <label class="form-switch">
                  <input type="checkbox" v-model="searchData.closed" />
                  <i class="form-icon"></i> Show only closed threds
              </label>
              <select class="form-select" v-model="searchData.sortBy">
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
</template>

<script>

export default {
	data:function(){
		return {
			searchData:{
			closed:"False",
        	sortBy:'activity',
        	q:'',
        	loading:false,
        	site: 'stackoverflow'
			}
		}
	},
	methods:{

		doSearch:function(e){
			var self = this;
			this.$dispatch('do-search',{q:self.searchData.q,closed:self.searchData.closed,sortBy:self.searchData.sortBy,site: 'stackoverflow'});
			e.preventDefault();
			
		}

	}

}
</script>