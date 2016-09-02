<template>
  <div class="jumbo">

    <h1 >StackOverFlow Search</h1>
    <h3>{{qData.title}}</h3>
    <p>
      {{{qData.body | json}}}
    </p>

    <h4 v-if="answers.length">Answers ({{answers.length}})</h4>

    <div class="" v-for="thread in answers">


      <div class="card">
        <div class="card-image">
            <!-- <img src="{{img/osx-el-capitan.jpg}}" class="img-responsive" />  -->
        </div>
        <div class="card-header">
                <div class="chip hand">
                                <div class="chip-icon">
                                            <img src="{{thread.owner.profile_image}}" class="avatar">
                                        </div>
                                        <div class="chip-content">
                                            {{thread.owner.display_name}}
                                        </div>
                                    </div>
            <!-- <h4 class="card-title">{{thread.owner.display_name}}</h4>
            <h6 class="card-meta">Software and hardware</h6> -->
        </div>
        <div class="card-body">
            {{{thread.body}}}
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
  export default {

    data:function(){
      return {qid:null,qData:null,answers:null};
    },
    ready:function(){
      var self = this;
      var params = this.$route.params;
      this.qid = params.qid;

      Api.readQuestion(params.qid).end(function(err,resp){
        console.info("Read Questions");


        self.qData = resp.body.items[0];

      });

      Api.readsAnswers(params.qid).end(
        function(err,resp){
          //console.log(resp.body);
          self.answers = resp.body.items;
        //  console.log(self.qData);
        }

      )
    },
    methods:{

    }

  }
</script>
