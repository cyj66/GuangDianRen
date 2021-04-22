<template>
  <div class="message-like-content">
    <like-item v-for="(value,index) in likeMyTopicList||likeMyAnswerList" :key="index"
    :like-my-item="value"></like-item>
  </div>
</template>

<script>
import LikeItem from "./MessageLikeItem.vue"
export default {
  components: {LikeItem},
  props: {
    likeMyTopicList:Array,
    likeMyAnswerList:Array
  },
};
</script>
 
<style scoped>
.message-like-content{
  width:900px;
  margin:0 auto
}
</style>