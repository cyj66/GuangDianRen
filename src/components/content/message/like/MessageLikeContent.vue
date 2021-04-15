<template>
  <div class="message-like-content">
    <like-list v-for="(value,index) in likeMyTopicList||likeMyAnswerList" :key="index"
    :like-my-item="value"></like-list>
  </div>
</template>

<script>
import LikeList from "./MessageLikeList.vue"
export default {
  components: {LikeList},
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