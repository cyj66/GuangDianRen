<template>
  <div class="topic">
    <topic-item v-for="value in 10"></topic-item>
  </div>
</template>

<script>
  import TopicItem from './TopicItem.vue' 

export default {
  components:{
      TopicItem
  }
}
</script>
 
<style scoped>
.topic{
    width:1000px;
    margin:0 auto;
}
</style>