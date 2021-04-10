<template>
  <div class="news-content">
      <news-item class="news-item" v-for="(value,index) in newsList" 
      :key=index :news-list-item="value"></news-item>
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
  },
  methods:{

  }
}
</script>
 
<style scoped>

</style>