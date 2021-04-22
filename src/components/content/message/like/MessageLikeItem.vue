<template>
  <div class="message-like-list">
    <p>
      <span class="user-ID">{{ likeMyItem.username }}</span>
      点赞了我的{{ likeMyItem.topic ? "提问" : "回答" }}：
      <strong @click="toTopicDetail()">{{ likeMyItem.title }}</strong>
      <span class="date">{{ likeMyItem.date | formatDateFilter }}</span>
    </p>
  </div>
</template>

<script>
import { formatDate } from "common/utils.js";
export default {
  components: {},
  props: {
    likeMyItem: Object,
  },
  methods: {
    toTopicDetail() {
      this.$router.push({
        path: "/topicdetail",
        query: {
          id: this.likeMyItem.topicId,
        },
      });
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
.message-like-list {
  position: relative;
  margin: 40px 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding: 10px;
  border: 1px solid var(--color-shadow);
  box-shadow: 1px 1px 1px var(--color-shadow);
}
.message-like-list p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.message-like-list strong:hover {
  text-decoration: underline;
  cursor: pointer;
}
.message-like-list .date {
  position: absolute;
  top: -25px;
  left: 0;
  color: #888;
}
</style>