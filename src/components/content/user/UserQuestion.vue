<template>
  <div class="user-question">
  <h2>我的提问</h2>
    <topic-item v-for="value in 5"></topic-item>

  </div>
</template>

<script>
import TopicItem from 'components/content/topic/TopicItem'

export default {
  components:{
      TopicItem 
  }
}
</script>
 
<style scoped>
</style>