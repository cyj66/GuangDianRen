<template>
  <div class="w2">
    <topic-content v-if="initializeStoreData()"></topic-content>
  </div>
</template>

<script>
import TopicContent from "components/content/topic/TopicContent.vue";

import {
  getTopicData,
  getTopicLikeData,
  getTopicCollectData,
} from "network/topicRequest.js";
import { getAnswerData, getAnswerLikeData } from "network/answerRequest.js";

import { keepScrollPosition } from "common/mixin.js";

export default {
  components: {
    TopicContent,
  },
  data() {
    return {};
  },
  mixins: [keepScrollPosition],
  created() {
    getTopicData().then((res) => {
      this.$store.state.topicList = res;
      console.log(this.$store.state.topicList);
    });
    getTopicLikeData().then((res) => {
      this.$store.state.topicLikeList = res;
      console.log(this.$store.state.topicLikeList);
    });
    getTopicCollectData().then((res) => {
      this.$store.state.topicCollectList = res;
      console.log(this.$store.state.topicCollectList);
    });
    getAnswerData().then((res) => {
      this.$store.state.answerList = res;
      console.log(this.$store.state.answerList);
    });
    getAnswerLikeData().then((res) => {
      this.$store.state.answerLikeList = res;
      console.log(this.$store.state.answerLikeList);
    });
  },
  methods: {
    initializeStoreData() {
      if (
        this.$store.state.topicList.length === 0 ||
        this.$store.state.topicLikeList.length === 0 ||
        this.$store.state.topicCollectList.length === 0 ||
        this.$store.state.answerList.length === 0 ||
        this.$store.state.answerLikeList.length === 0
      )return false
      else return true
    },
  },
};
</script>

<style scoped>
</style>