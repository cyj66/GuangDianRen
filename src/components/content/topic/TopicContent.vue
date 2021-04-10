<template>
  <div class="topic">
    <topic-item v-for="(value,index) in $store.state.topicList" :key="index"
    :topic-list-item="value" ></topic-item>
  </div>
</template>

<script>
  import TopicItem from './TopicItem.vue' 

export default {
  components:{
      TopicItem
  },
  props:{
    topicList:Array
  }
}
</script>
 
<style scoped>
.topic{
    width:800px;
    margin:0 auto;
}
</style>