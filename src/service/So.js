var request = require('superagent');

const API_END = 'https://api.stackexchange.com/2.2/';

const API_KEY = 'U4DMV*8nvpm3EOpvf69Rxw((';



export default {


    search:function(searchParams){
      return request.get(API_END+'search/advanced').query({key:API_KEY})
      .query({q:searchParams.q})
      .query({ site: 'stackoverflow', order: 'desc',sort:'activity',filter:'default'});

    }



}
