<template>
  <div class="message">
    <h2 class="iconfont">一、收到的点赞 &#xe675;</h2>
    <h3>1、点赞我的提问</h3>
    <like-content
      :like-my-topic-list="likeMyTopicList"
      v-if="likeMyTopicList.length"
    ></like-content>
    <h3>2、点赞我的回答</h3>
    <like-content
      :like-my-answer-list="likeMyAnswerList"
      v-if="likeMyAnswerList.length"
    ></like-content>
    <h2 class="iconfont">二、收到的回答 &#xe675;</h2>
    <answer-content
      :answer-my-topic-list="answerMyTopicList"
      v-if="answerMyTopicList.length"
    ></answer-content>
  </div>
</template>

<script>
import LikeContent from "components/content/message/like/MessageLikeContent.vue";
import AnswerContent from "components/content/message/answer/MessageAnswerContent.vue";

import { getAnswerData, getAnswerLikeData } from "network/answerRequest.js";
import { getTopicData, getTopicLikeData } from "network/topicRequest.js";

import { bubbleTime } from "common/utils.js";

import {mapMutations} from "vuex"


export default {
  components: {
    LikeContent,
    AnswerContent,
  },
  data() {
    return {
      likeMyTopicList: [],
      likeMyAnswerList: [],
      answerMyTopicList: [],
    };
  },
  created() {
      this.getLikeMyTopicList();
      this.getLikeMyAnswerList();
      this.getAnswerMyTopicList();
  },
  destroyed() {
    this.changeMessageCount(0)
  },
  methods: {
    ...mapMutations(["changeMessageCount"]),
    getLikeMyTopicList() {
      getTopicData().then((res1) => {
        getTopicLikeData().then((res2) => {
          let likeMyTopicList = [];
          for (let i = 0; i < res1.length; i++) {
            if (res1[i].username === this.$store.state.username) {
              for (let j = 0; j < res2.length; j++) {
                if (res2[j].topicId === res1[i].topicId) {
                  let obj = {};
                  obj.topic = true;
                  obj.username = res2[j].username;
                  obj.title = res1[i].title;
                  obj.date = res2[j].date;
                  obj.topicId = res1[i].topicId;
                  likeMyTopicList.push(obj);
                  if (obj.date > Number(this.$store.state.signTime))
                    this.messageCount++;
                }
              }
            }
          }
          bubbleTime(likeMyTopicList);
          this.likeMyTopicList = likeMyTopicList;
        });
      });
    },
    getLikeMyAnswerList() {
      getAnswerData().then((res1) => {
        getAnswerLikeData().then((res2) => {
          let likeMyAnswerList = [];
          for (let i = 0; i < res1.length; i++) {
            if (res1[i].username === this.$store.state.username) {
              for (let j = 0; j < res2.length; j++) {
                if (res2[j].answerId === res1[i].answerId) {
                  let obj = {};
                  obj.username = res2[j].username;
                  obj.title = res1[i].content;
                  obj.date = res2[j].date;
                  obj.topicId = res1[i].topicId;
                  likeMyAnswerList.push(obj);
                  if (obj.date > Number(this.$store.state.signTime))
                    this.messageCount++;
                }
              }
            }
          }
          bubbleTime(likeMyAnswerList);
          this.likeMyAnswerList = likeMyAnswerList;
        });
      });
    },
    getAnswerMyTopicList() {
      getTopicData().then((res1) => {
        getAnswerData().then((res2) => {
          let answerMyTopicList = [];
          for (let item1 of res1) {
            if (item1.username === this.$store.state.username) {
              for (let item2 of res2) {
                if (item1.topicId === item2.topicId) {
                  let obj = {};
                  obj.username = item2.username;
                  obj.title = item1.title;
                  obj.content = item2.content;
                  obj.date = item2.date;
                  obj.topicId = item1.topicId;
                  answerMyTopicList.push(obj);
                  if (obj.date > Number(this.$store.state.signTime))
                    this.messageCount++;
                }
              }
            }
          }
          bubbleTime(answerMyTopicList);
          this.answerMyTopicList = answerMyTopicList;
        });
      });
    },
  },
};
</script>

<style scoped>
.message h2 {
  margin-bottom: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  color: gold;
  background-color: var(--color-school);
}
.message h2:nth-of-type(2) {
  margin-top: 50px;
}
.message h3 {
  margin: 30px 0;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 25px;
  color: gold;
  background-color: black;
}
</style>