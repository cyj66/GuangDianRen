<template>
  <div class="message-answer-content">
    <answer-list
      v-for="(value, index) in answerMyTopicList"
      :key="index"
      :answer-my-topic-item="value"
    ></answer-list>
  </div>
</template>

<script>
import AnswerList from './MessageAnswerList.vue'

export default {
  components: {
    AnswerList
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