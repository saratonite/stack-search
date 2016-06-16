<template>
<div class="tags">
  <div class="chip-sm"  v-for="tag in tags">
    <span class="chip-name">{{tag}}</span>
  </div>

</div>
</template>

<script>
export default {
  props:["tags"]
}
</script>
