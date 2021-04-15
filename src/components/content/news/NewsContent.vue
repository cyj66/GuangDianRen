<template>
  <div class="news-content">
    <news-item
      class="news-item"
      v-for="(value, index) in newsList || userNewsCollectList"
      :key="index"
      :news-list-item="value"
    ></news-item>
  </div>
</template>

<script>
import NewsItem from "./NewsItem.vue";
export default {
  components: {
    NewsItem,
  },
  props: {
    newsList: Array,
    userNewsCollectList: Array,
  },
  methods: {},
};
</script>
 
<style scoped>
.news-content {
  width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>