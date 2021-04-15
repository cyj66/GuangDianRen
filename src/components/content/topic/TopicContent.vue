<template>
  <div class="topic-content">
    <topic-item
      v-for="(value, index) in topicList||userTopicCollectList||userTopicList"
      :key="index"
      :topic-list-item="value"
      :topic-like-list="topicLikeList"
      :topic-collect-list="topicCollectList"
      :answer-list="answerList"
      :answer-like-list="answerLikeList"
    ></topic-item>
  </div>
</template>

<script>
import TopicItem from "./TopicItem.vue";

export default {
  components: {
    TopicItem,
  },
  props: {
    topicList: Array,
    topicLikeList: Array,
    topicCollectList: Array,
    answerList: Array,
    answerLikeList: Array,

    userTopicCollectList:Array,
    userTopicList:Array
  },
  
};
</script>
 
<style scoped>
.topic-content {
  width: 800px;
  margin: 0 auto;
}
</style>