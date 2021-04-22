<template>
  <div class="message-answer-content">
    <answer-item
      v-for="(value, index) in answerMyTopicList"
      :key="index"
      :answer-my-topic-item="value"
    ></answer-item>
  </div>
</template>

<script>
import AnswerItem from './MessageAnswerItem.vue'

export default {
  components: {
    AnswerItem
  },
  props: {
      answerMyTopicList:Array
  },
};
</script>
 
<style scoped>
.message-answer-content{
  width:900px;
  margin:0 auto
}
</style>