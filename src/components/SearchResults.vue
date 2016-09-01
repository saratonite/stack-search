<template>
  <h3>Search Results</h3>
  <div v-show="loading" class="loading"></div>
  <div v-show="!loading" v-for="item in items">
      <p>
          <div class="container">
            <div class="columns">
                <div class="column col-1">

                  <figure class="avatar avatar-xl">
                  <img :src="item.owner.profile_image" />
                  <p style="font-size:1.5rem">{{item.owner.display_name}}</p>
                  </figure>

                </div>
                <div class="column col-8">
                  <h4><a v-link="{path:'/question/'+item.question_id}">{{item.title}}</a></h4>
                  <span class="badge" data-badge="{{item.answer_count}}">
                    Answers
                  </span>
                  <span class="badge" data-badge="{{item.view_count}}">
                    Views
                  </span>
                  <tags :tags="item.tags"></tags>
                </div>
            </div>

          </div>

  </div>
</template>

<script>
import Tags from './Tags';

export default {

  props:['items','loading'],
  components:{
    Tags
  }

}

</script>
