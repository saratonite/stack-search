
import store from './store'
import Api from './../service/So'

export const  search = function(store,searchParams){
  console.info("Called Search Action!!");
  console.log(searchParams);

  Api.search(searchParams).end(function(err,res){
    if(res.status == 200)
    {
      store.dispatch('FETCH_THREADS',res.body.items);
    }
  });



}
