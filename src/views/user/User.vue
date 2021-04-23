<template>
  <div class="me">
    <h1 class="username">{{ $store.state.username }}</h1>
    <h2 class="iconfont">一、我的收藏 &#xe66f;</h2>
    <div class="collect-topic">
      <h3>1、我收藏的话题</h3>
      <topic-content
        :user-topic-collect-list="userTopicCollectList"
        v-if="$store.state.topicCollectList.length"
      ></topic-content>
    </div>
    <div class="collect-new">
      <h3>2、我收藏的资讯</h3>
      <news-content
        :user-news-collect-list="userNewsCollectList"
        v-if="$store.state.newsCollectList.length"
      ></news-content>
    </div>
    <div class="collect-enterprise">
      <h3>3、我收藏的企业</h3>
      <enterprise-content
        :user-enterprise-collect-list="userEnterpriseCollectList"
        v-if="$store.state.enterpriseCollectList.length"
      ></enterprise-content>
    </div>

    <h2 class="iconfont">二、我的提问 &#xe67a;</h2>
    <topic-content
      :user-topic-list="userTopicList"
      v-if="$store.state.topicList.length"
    ></topic-content>
  </div>
</template>

<script>
import { getNewsCollectData, getNewsData } from "network/newsRequest.js";
import {
  getEnterpriseCollectData,
  getEnterpriseData,
} from "network/enterpriseRequest.js";
import { getTopicData, getTopicCollectData } from "network/topicRequest.js";

import EnterpriseContent from "components/content/enterprise/EnterpriseContent";
import NewsContent from "components/content/news/NewsContent";
import TopicContent from "components/content/topic/TopicContent";

import { bubbleTime } from "common/utils.js";

export default {
  name: "User",
  components: {
    EnterpriseContent,
    NewsContent,
    TopicContent,
  },
  data() {
    return {
      userNewsCollectList: [],
      userEnterpriseCollectList: [],
      userTopicCollectList: [],
      userTopicList: [],
    };
  },
  created() {
    this.getUserNewsCollectData();
    this.getUserEnterpriseCollectData();
    this.getUserTopicCollectData();
    this.getUserTopicData();
  },
  methods: {
    getUserNewsCollectData() {
      getNewsCollectData().then((res1) => {
        getNewsData().then((res2) => {
          let userNewsCollectList = [];
          for (let item1 of res1) {
            if (item1.username === this.$store.state.username) {
              for (let item2 of res2) {
                if (item2.newsId === item1.newsId) {
                  item2.user = true;
                  userNewsCollectList.push(item2);
                  break;
                }
              }
            }
          }
          this.userNewsCollectList = userNewsCollectList;
          this.$store.commit("changeNewsCollectList", this.userNewsCollectList);
        });
      });
    },
    getUserEnterpriseCollectData() {
      getEnterpriseCollectData().then((res1) => {
        getEnterpriseData().then((res2) => {
          let userEnterpriseCollectList = [];
          for (let item1 of res1) {
            if (item1.username === this.$store.state.username) {
              for (let item2 of res2) {
                if (item2.enterpriseId === item1.enterpriseId) {
                  item2.user = true;
                  userEnterpriseCollectList.push(item2);
                  break;
                }
              }
            }
          }
          this.userEnterpriseCollectList = userEnterpriseCollectList;
          this.$store.commit(
            "changeEnterpriseCollectList",
            this.userEnterpriseCollectList
          );
        });
      });
    },
    getUserTopicCollectData() {
      getTopicCollectData().then((res1) => {
        getTopicData().then((res2) => {
          let userTopicCollectList = [];
          for (let item1 of res1) {
            if (item1.username === this.$store.state.username) {
              for (let item2 of res2) {
                if (item2.topicId === item1.topicId) {
                  item2.user = true;
                  userTopicCollectList.push(item2);
                  break;
                }
              }
            }
          }
          bubbleTime(userTopicCollectList);
          this.userTopicCollectList = userTopicCollectList;
          this.$store.commit(
            "changeTopicCollectList",
            this.userTopicCollectList
          );
        });
      });
    },
    getUserTopicData() {
      getTopicData().then((res) => {
        let userTopicList = [];
        for (let item of res) {
          if (item.username === this.$store.state.username) {
            item.user = true;
            userTopicList.push(item);
          }
        }
        bubbleTime(userTopicList);
        this.userTopicList = userTopicList;
        this.$store.commit("changeTopicList", this.userTopicList);
      });
    },
  },
};
</script>

<style scoped>
.me h1 {
  position: sticky;
  top: 80px;
  z-index: 99;
  text-align: center;
  height: 80px;
  line-height: 80px;
  background-color: gold;
  color: var(--color-school);
}
.me h2 {
  margin: 50px 0;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  color: gold;
  background-color: var(--color-school);
}
.me h3 {
  margin: 30px 0;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 25px;
  color: gold;
  background-color: black;
}
</style>