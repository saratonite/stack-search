
import store from './store'
import Api from './../service/So'

export const  search = function(store,searchParams){
  store.dispatch('PAGELOAD_ON');

  Api.search(searchParams).end(function(err,res){
    if(res.status == 200)
    {
      store.dispatch('FETCH_THREADS',res.body.items);
      store.dispatch('PAGELOAD_OFF');
    }
  });
}

export const ftechThread = function(store,threadId){

  var threadObj = {id:threadId,info:null,answers:[]};

  Api.readQuestion(threadId).end(function(err,resp){
    threadObj.info = resp.body.items[0];
    //store.threadData.push({id:threadId,info:resp.body.items[0],answers:[]});
  });

  Api.readsAnswers(threadId).end(
    function(err,resp){
      threadObj.answers = resp.body.items;
      store.dispatch('FETCH_THREAD',threadObj);
    }
  );

}
