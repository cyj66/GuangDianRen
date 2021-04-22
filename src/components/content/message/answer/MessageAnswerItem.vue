<template>
  <div class="message-answer-list">
    <span class="user-ID">{{ answerMyTopicItem.username }}</span>
    回答了我的提问：<strong @click="toTopicDetail()">{{ answerMyTopicItem.title }}</strong>
    <p>{{answerMyTopicItem.content }}</p>
    <span class="date">{{ answerMyTopicItem.date | formatDateFilter }}</span>
  </div>
</template>

<script>
import { formatDate } from "common/utils.js";

export default {
  components: {},
  props: {
    answerMyTopicItem: Object,
  },
  filters: {
    formatDateFilter(value) {
      const time = new Date(Number(value));
      return formatDate(time);
    },
  },
  methods:{
    toTopicDetail(){
      this.$router.push({
        path:'/topicdetail',
        query:{
          id:this.answerMyTopicItem.topicId
        }
      })
    }
  }
};
</script>

<style scoped>
.message-answer-list {
  position:relative;
  width: 100%;
  height: 60px;
  padding: 10px;
  margin-bottom: 50px;
  border: 1px solid var(--color-shadow);
  box-shadow: 1px 1px 1px var(--color-shadow);
}
.message-answer-list p {
  margin-top:10px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color:#777;
}
.message-answer-list .date{
  position:absolute;
  top:-20px;
  left:0;
  color:#888
}
.message-answer-list strong:hover{
  text-decoration:underline;
  cursor:pointer;
}

</style>