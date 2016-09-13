<template>
  <div class="jumbo">

    <h1 >StackOverFlow Search</h1>
    <h3>{{thread.info.title}}</h3>
    <p>
      {{{qData.body | json}}}
    </p>

    <h4 v-if="thread.answers.length">Answers ({{thread.answers.length}})</h4>

    <div class="" v-for="lThread in thread.answers">


      <div class="card">
        <div class="card-image">
            <!-- <img src="{{img/osx-el-capitan.jpg}}" class="img-responsive" />  -->
        </div>
        <div class="card-header">
                <div class="chip hand">
                                <div class="chip-icon">
                                            <img src="{{lThread.owner.profile_image}}" class="avatar">
                                        </div>
                                        <div class="chip-content">
                                            {{lThread.owner.display_name}}
                                        </div>
                                    </div>
            <!-- <h4 class="card-title">{{lThread.owner.display_name}}</h4>
            <h6 class="card-meta">Software and hardware</h6> -->
        </div>
        <div class="card-body">
            {{{lThread.body}}}
        </div>
        <div class="card-footer">
            <!-- <button class="btn btn-primary">Do</button> -->
        </div>
    </div>


    </div>






    </div>

    <!-- Search Results -->

    <!-- End Search Results  -->

  </div>
</template>
<script>
import Api from './../service/So';
import {ftechThread} from '../vuex/actions';
  export default {

    data:function(){
      return {qid:null,qData:null,answers:null};
    },
    ready:function(){
      var self = this;
      var params = this.$route.params;
      this.qid = params.qid;
      this.ftechThread(this.qid);
    },
    methods:{

    },
    vuex:{
      getters:{

        thread : function(state){

          return state.threadData;

        },
        loading:function(state){
          return state.pageLoad;
        }

      },
      actions:{
        ftechThread
      }
    }

  }
</script>
