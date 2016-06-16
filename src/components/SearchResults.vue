<template>
  <h3>Search Results</h3>
  <div v-for="item in items">
      <p>
          <div class="">
          <h4>{{item.title}}</h4>
          </div>
        {{item|json}}</p>
  </div>
</template>

<script>
export default {

  props:['items']






}

</script>
