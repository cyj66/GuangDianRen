<template>
  <div class="home w2">
    <div class="add-question">
      <input type="text" placeholder="请在此提出你的问题，它将会得到解答。" />
      <button @click="addQuestion()">提问题</button>
    </div>
    <topic-content
      v-if="initializeData()"
      :topic-list="topicList"
      :topic-like-list="topicLikeList"
      :topic-collect-list="topicCollectList"
      :answer-list="answerList"
      :answer-like-list="answerLikeList"
    ></topic-content>
  </div>
</template>

<script>
import TopicContent from "components/content/topic/TopicContent.vue";

import {
  getTopicData,
  getTopicLikeData,
  getTopicCollectData,
  saveTopic,
} from "network/topicRequest.js";
import { getAnswerData, getAnswerLikeData } from "network/answerRequest.js";

import { bubbleTime } from "common/utils.js";

import { mapMutations } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      topicList: [],
      topicLikeList: [],
      topicCollectList: [],
      answerList: [],
      answerLikeList: [],
      inputValue: "",
    };
  },
  components: {
    TopicContent,
  },
  created() {
    this.getTopicDataAndBubble();
    this.getMyTopicLikeData();
    this.getMyTopicCollectData();
    getAnswerData().then((res) => {
      this.answerList = res;
    });
    getAnswerLikeData().then((res) => {
      this.answerLikeList = res;
    });

  },
  methods: {
    getTopicDataAndBubble() {
      getTopicData().then((res) => {
        this.topicList = res;
        bubbleTime(this.topicList);
      });
    },
    getMyTopicLikeData() {
      getTopicLikeData().then((res) => {
        this.topicLikeList = res;
        let topicLikeList = [];
        for (let item of res) {
          if (item.username === this.$store.state.username) {
            topicLikeList.push(item);
          }
        }
        this.$store.commit("changeTopicLikeList", topicLikeList);
      });
    },
    getMyTopicCollectData() {
      getTopicCollectData().then((res) => {
        this.topicCollectList = res;
        let topicCollectList = [];
        for (let item of res) {
          if (item.username === this.$store.state.username) {
            topicCollectList.push(item);
          }
        }
        this.$store.commit("changeTopicCollectList", topicCollectList);
      });
    },
    

    initializeData() {
      if (
        this.topicList.length === 0 ||
        this.topicLikeList.length === 0 ||
        this.topicCollectList.length === 0 ||
        this.answerList.length === 0 ||
        this.answerLikeList.length === 0
      )
        return false;
      else return true;
    },
    addQuestion() {
      this.inputValue = document.querySelector(".add-question input").value;
      let date = String(+new Date());
      saveTopic(
        this.topicList.length + 1,
        this.inputValue,
        this.$store.state.username,
        date
      ).then(() => {
        this.$toast.show("提问成功!");
        //location.reload()  //直接刷新，会有较久的刷新过程
        this.$router.go(0); //跳转到白屏然后回来，刷新过程较快
      });
    },
  },
};
</script>

<style scoped>
.add-question {
  position: sticky;
  top: 100px;
  z-index: 999;
}
.add-question input {
  display: block;
  margin: 20px auto;
  padding: 0 10px 0 10px;
  width: 800px;
  height: 30px;
  border: 2px solid var(--color-school);
}
.add-question button {
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 34px;
  color: white;
  background-color: var(--color-school);
}
.add-question button:hover {
  font-size: 18px;
}
</style>