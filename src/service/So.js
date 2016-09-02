var request = require('superagent');

const API_END = 'https://api.stackexchange.com/2.2/';

const API_KEY = 'U4DMV*8nvpm3EOpvf69Rxw((';



export default {


    search:function(searchParams){
      return request.get(API_END+'search/advanced').query({key:API_KEY})
      .query(searchParams)

    },
    readQuestion:function(qid){
      /* TODO: Implement View Question page with answers */
       // https://api.stackexchange.com/2.1/questions/39285602?order=desc&sort=activity&site=stackoverflow&filter=withbody
       console.log(qid);
       return request.get(API_END+'questions/'+qid+'/answers').query({filter:'withbody',site:'stackoverflow',sort:'activity',key:API_KEY,order:'desc'})
    }



}

/*
API :

Get Answers of a Question : http://api.stackexchange.com/2.2/questions/5877753/answers?order=desc&sort=activity&filter=withbody&site=stackoverflow

*/
