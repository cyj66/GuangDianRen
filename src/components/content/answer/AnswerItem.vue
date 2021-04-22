<template>
  <div class="answer-item">
    <span class="user-ID">{{ answerListItem.username }}</span>
    <span class="answer-content">{{ answerListItem.content }}</span>
    <i class="iconfont" :class="{ isLike: isLike }" @click="likeAnswer()"
      >&#xe675;{{ answerListItem.like }}</i
    >
    <span class="date">{{ answerListItem.date | formatDateFilter }}</span>
  </div>
</template>

<script>
import { saveAnswerLike, removeAnswerLike } from "network/answerRequest";

import { formatDate } from "common/utils.js";

export default {
  components: {},
  data() {
    return {
      isLike: false,
    };
  },
  props: {
    answerListItem: Object,
  },
  created() {
    this.isLike = this.$store.state.answerLikeList.some(
      (value) => value.answerId === this.answerListItem.answerId
    );
  },

  methods: {
    likeAnswer() {
      if (this.isLike === false) {
        let date=String(+new Date())
        saveAnswerLike(
          this.answerListItem.answerId,
          this.$store.state.username,
          date
        ).then(() => {
          this.isLike = true;
          this.answerListItem.like++;
          this.$toast.show("点赞成功!");
        });
      } else {
        removeAnswerLike(
          this.answerListItem.answerId,
          this.$store.state.username
        ).then(() => {
          this.isLike = false;
          this.answerListItem.like--;
          this.$toast.show("取消点赞成功!");
        });
      }
    },
  },
  filters: {
    formatDateFilter(value) {
      const time = new Date(Number(value));
      return formatDate(time);
    },
  },
};
</script>
 
<style scoped>
.answer-item {
  position: relative;
  margin: 50px 0;
  padding: 10px 40px 10px 20px;
  border: 1px solid var(--color-school);
  box-shadow:2px 2px 2px 2px var(--color-shadow);
  color: #333;
}
.answer-item .iconfont {
  position: absolute;
  top: -10px;
  right: -20px;
  width: 30px;
  height: 30px;
  padding: 5px;
  line-height: 30px;
  background-color: var(--color-school);
  border-radius: 50%;
  font-size: 18px;
  font-weight: 600;
  color: white;
  cursor: pointer;
}
.answer-item .date {
  position:absolute;
  top:-20px;
  left:0;
  color: #888;
}
.answer-item .isLike {
  background-color: gold;
}
.answer-item .answer-content{
  line-height:30px;
}
</style>