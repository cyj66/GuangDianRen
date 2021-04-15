<template>
  <div class="news">
    <home-swiper :banners="banners"></home-swiper>
    <news-content
      :news-list="newsList"
      v-if="this.$store.state.newsCollectList.length"
    ></news-content>
    <switch-control
      @click.native="newsSwitch"
      :switch-span="switchSpan"
    ></switch-control>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";

import SwitchControl from "components/content/switchControl/SwitchControl.vue";
import NewsContent from "components/content/news/NewsContent.vue";

import { getNewsData, getNewsCollectData } from "network/newsRequest.js";

import {bubbleTime} from "common/utils.js"
export default {
  name:"News",
  components: {
    HomeSwiper,
    NewsContent,
    SwitchControl,
  },
  data() {
    return {
      bgColor: "#ccc",
      body: null,
      newsList: [],
      switchSpan: ["校内", "全球"],
      banners: [
        {
          info: "暨南大学官网",
          image:
            "https://news.jnu.edu.cn/UploadFiles/jnyw/2021/3/202103281703244993.jpg",
          link: "https://www.jnu.edu.cn/",
        },
        {
          info: "理工学院官网",
          image:
            "https://lgxy.jnu.edu.cn/_upload/article/images/5d/72/5266b69c4188beca0615addaca79/1e480e55-022a-4d5c-9375-4c7ccadd39cd.png",
          link: "https://lgxy.jnu.edu.cn/",
        },
        {
          info: "光电工程系官网",
          image:
            "https://gdgcx.jnu.edu.cn/_upload/article/images/85/ba/b5703308424d88552016343983bf/b4456d0e-384a-4651-a7a2-aee41d34569a.jpg",
          link: "https://gdgcx.jnu.edu.cn/main.htm",
        },
      ],
    };
  },
  created() {
    getNewsData().then((res) => {
      this.newsList = res;
      bubbleTime(this.newsList)
    });
    getNewsCollectData().then((res) => {
      let newsCollectList = [];
      for (let item of res) {
        if (item.username === this.$store.state.username) {
          newsCollectList.push(item);
        }
      }
      this.$store.commit("changeNewsCollectList", newsCollectList);
    });
  },
  mounted() {
    this.news = document.querySelector(".news");
    this.news.setAttribute("style", "background-color:" + this.bgColor);
  },
  methods: {
    newsSwitch() {
      //console.log('666');  //必须有修饰符.native才能监听到
      //不明原因，需要判断是否等于var(--color-school)，不能判断是否等于#ccc，
      //否则会出现灰色背景退出路由再回来按钮第一次无法改变背景的情况
      this.bgColor =
        this.bgColor == "var(--color-school)" ? "#ccc" : "var(--color-school)";
      this.news.setAttribute("style", "background-color:" + this.bgColor);
    },
  },
};
</script>

<style scoped>
.news{
  margin-top:-10px;
  padding-bottom:100px;
}
.switch-control {
  position: fixed;
  left: 80px;
  top: 90px;
}
</style>