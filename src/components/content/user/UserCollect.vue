<template>
  <div class="user-collect">
    <h2 class="iconfont">我的收藏&#xe66f;</h2>
    <h3>我收藏的问题</h3>
    <topic-item v-for="value in 5"></topic-item>
    <h3>我收藏的资讯</h3>
    <news-item v-for="value in 5"></news-item>
    <h3>我收藏的企业</h3>
    <enterprise-item v-for="value in 5"></enterprise-item>
    <hr>
  </div>
</template>

<script>
import EnterpriseItem from 'components/content/enterprise/EnterpriseItem'
import NewsItem from 'components/content/news/NewsItem'
import TopicItem from 'components/content/topic/TopicItem'

export default {
  components:{
      EnterpriseItem,NewsItem,TopicItem
  }
}
</script>
 
<style scoped>
.user-collect h2{
    font-size:24px
}
</style>