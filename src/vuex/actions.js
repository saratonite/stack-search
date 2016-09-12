
import store from './store'
import Api from './../service/So'

export const  search = function(store,searchParams){
  console.info("Called Search Action!!");
  store.dispatch('PAGELOAD_ON');

  Api.search(searchParams).end(function(err,res){
    if(res.status == 200)
    {
      store.dispatch('FETCH_THREADS',res.body.items);
      store.dispatch('PAGELOAD_OFF');
    }
  });



}
