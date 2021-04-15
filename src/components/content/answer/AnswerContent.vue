<template>
<div class="answer-content">
  <answer-item
    v-for="(value, index) in answerList"
    :key="index"
    :answer-list-item="value"
  ></answer-item>
</div>

</template>

<script>
import AnswerItem from "./AnswerItem";
export default {
  components: {
    AnswerItem,
  },
  props: {
    answerList: Array,
  },
};
</script>
 
<style scoped>
</style>