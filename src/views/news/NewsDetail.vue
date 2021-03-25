<template>
  <div class="news-detail w2">
    <h1>{{newsListItem.title}}</h1>
    <h4>{{newsListItem.date}}</h4>
    <img :src="newsListItem.image">
    <p v-html="newsListItem.content"></p>
  </div>
</template>

<script>
  import {
    getNewsData
  } from 'network/newsRequest.js'

  import {
    keepScrollPosition
  } from 'common/mixin.js'


  export default {
    name: "NewsDetail",
    components: {},
    data() {
      return {
        newsListItem: {}
      }
    },
    created() {
      getNewsData().then(res => {
        for (let value of res) {
          if (value.id.toString() === this.$route.params.id) {
            this.newsListItem = value;
            return
            //console.log(typeof(value.id))   number
            //console.log(typeof(this.$route.params.id))   string
          }
        }
      })
    },
    mixins: [keepScrollPosition]

  }
</script>

<style scoped>
  .news-detail {
    padding-bottom: 100px
  }

  .news-detail h1 {
    text-align: center;
    margin: 30px auto;
  }

  .news-detail h4 {
    text-align: center;
    border-bottom: 2px solid var(--color-school);
    margin-bottom: 30px;
    padding-bottom: 20px;
    color: #333;
    font-weight: 400;
    font-family: "SimHei"
  }

  .news-detail img {
    float: left;
    margin-right: 30px;
    margin-bottom: 20px;
    width: 500px;
  }

  .news-detail p {
    font-size: 20px;
    font-family: "KaiTi";
  }
</style>