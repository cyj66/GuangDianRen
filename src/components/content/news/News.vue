<template>
  <div class="news">
      <news-item class="news-item" v-for="(value,index) in newsList" 
      :key=index :news-list-item="value" ></news-item>
  </div>
</template>

<script>
import NewsItem from "./NewsItem.vue"
export default {
  components:{
      NewsItem
  },
  props:{
    newsList:Array
  }
}
</script>
 
<style scoped>
.news{
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
}
.news-item{
  flex:1;
}
</style>