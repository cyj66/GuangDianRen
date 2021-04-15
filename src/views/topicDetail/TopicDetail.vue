<template>
  <div class="topic-detail w2">
    <h1>
      <span class="user-ID">{{ topicListItem.username }}</span
      >{{ topicListItem.title }}
    </h1>
    <h4 class="date">{{ topicListItem.date | formatDateFilter }}</h4>
    <ul class="topic-icon" @selectstart="preventSelect($event)">
      <li class="iconfont" @click="likeTopic()" :class="{ isLike: isLike }">
        &#xe675; 赞 {{ likeCount }}
      </li>
      <li
        class="iconfont"
        @click="collectTopic()"
        :class="{ isCollect: isCollect }"
      >
        &#xe66f; 收 {{ collectCount }}
      </li>
      <li
        class="iconfont"
        @click="showAddAnswer()"
        :class="{ isAnswer: isAnswer }"
      >
        &#xe66c; 答 {{ answerCount }}
      </li>
    </ul>
    <div class="add-answer" v-show="isShowAddAnswer">
      <textarea placeholder="请在此回答。" />
      <button @click="addAnswer()">回答</button>
    </div>
    <answer-content :answer-list="answerList"></answer-content>
  </div>
</template>

<script>
import {
  getTopicData,
  getTopicLikeData,
  getTopicCollectData,
} from "network/topicRequest.js";
import {
  getAnswerData,
  getAnswerLikeData,
  saveAnswer,
} from "network/answerRequest.js";
import {
  saveTopicLike,
  removeTopicLike,
  saveTopicCollect,
  removeTopicCollect,
} from "network/topicRequest.js";

import AnswerContent from "components/content/answer/AnswerContent.vue";

import { formatDate, bubbleTime } from "common/utils.js";

export default {
  name: "TopicDetail",
  components: { AnswerContent },
  data() {
    return {
      isLike: false,
      isCollect: false,
      isAnswer: false,
      isShowAddAnswer: false,

      topicListItem: {},
      likeCount: 0,
      collectCount: 0,
      answerCount: 0,
      topicLikeList: [],
      topicCollectList: [],
      answerList: [],
      allAnswerList: [],
      answerListCopy: [],
    };
  },
  created() {
    getTopicData().then((res) => {
      for (let item of res) {
        if (item.topicId.toString() === this.$route.query.id) {
          this.topicListItem = item;
        }
      }
    });
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
    setTimeout(() => {
      this.delayDo();
    }, 500);

    getAnswerData().then((res) => {
      this.allAnswerList = res;
      let answerListCopy = [];
      for (let item of res) {
        if (item.topicId === this.topicListItem.topicId) {
          answerListCopy.push(item);
        }
      }
      this.answerListCopy = answerListCopy;
      getAnswerLikeData().then((res) => {
        let answerLikeList = [];
        for (let item of res) {
          if (item.username === this.$store.state.username) {
            answerLikeList.push(item);
          }
        }
        this.$store.commit("changeAnswerLikeList", answerLikeList);
        //获得每个回答的赞数
        for (let i = 0; i < this.answerListCopy.length; i++) {
          let like = 0;
          for (let j = 0; j < res.length; j++) {
            if (this.answerListCopy[i].answerId === res[j].answerId) {
              like++;
            }
          }
          this.answerListCopy[i]["like"] = like;
          this.answerList = this.answerListCopy;
        }
        bubbleTime(this.answerList);
        for (let item of this.answerList) {
          if (item.topicId === this.topicListItem.topicId) {
            this.answerCount++;
          }
        }
      });
    });
  },
  methods: {
    preventSelect(e) {
      e.preventDefault();
    },
    likeTopic() {
      if (this.isLike === false) {
        saveTopicLike(
          this.topicListItem.topicId,
          this.$store.state.username
        ).then(() => {
          this.isLike = true;
          this.likeCount++;
          this.$toast.show("点赞成功!");
        });
      } else {
        removeTopicLike(
          this.topicListItem.topicId,
          this.$store.state.username
        ).then(() => {
          this.isLike = false;
          this.likeCount--;
          this.$toast.show("取消点赞成功!");
        });
      }
    },
    collectTopic() {
      if (this.isCollect === false) {
        saveTopicCollect(
          this.topicListItem.topicId,
          this.$store.state.username
        ).then(() => {
          this.isCollect = true;
          this.collectCount++;
          this.$toast.show("收藏成功!");
        });
      } else {
        removeTopicCollect(
          this.topicListItem.topicId,
          this.$store.state.username
        ).then(() => {
          this.isCollect = false;
          this.collectCount--;
          this.$toast.show("取消收藏成功!");
        });
      }
    },
    delayDo() {
      //获取赞、收、答数量
      for (let item of this.topicLikeList) {
        if (item.topicId === this.topicListItem.topicId) {
          this.likeCount++;
        }
      }
      for (let item of this.topicCollectList) {
        if (item.topicId === this.topicListItem.topicId) {
          this.collectCount++;
        }
      }
      //获取每个问题对于具体用户的赞、收、答状态
      this.isLike = this.$store.state.topicLikeList.some(
        (value) => value.topicId === this.topicListItem.topicId
      );
      this.isCollect = this.$store.state.topicCollectList.some(
        (value) => value.topicId === this.topicListItem.topicId
      );
    },
    showAddAnswer() {
      this.isShowAddAnswer = !this.isShowAddAnswer;
      this.isAnswer = !this.isAnswer;
    },
    addAnswer() {
      this.textareaValue = document.querySelector("textarea").value;
      let date = String(+new Date());
      saveAnswer(
        this.allAnswerList.length + 1,
        this.textareaValue,
        this.$store.state.username,
        this.topicListItem.topicId,
        date
      ).then(() => {
        this.$toast.show("回答成功!");
        this.$router.go(0)
      });
    },
  },
  filters: {
    formatDateFilter(value) {
      const time = new Date(Number(value)); //以毫秒形式呈现
      return formatDate(time);
    },
  },
};
</script>
 
<style scoped>
.topic-detail h1 {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}
.topic-detail h4 {
  margin-bottom: 10px;
  text-align: center;
  font-weight: 400;
  color: #333;
}
.topic-icon {
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
  border-bottom: 3px solid var(--color-school);
}
.topic-icon li {
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.topic-icon .iconfont {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-school);
  cursor: pointer;
}
.topic-icon .isLike,
.topic-icon .isCollect,
.topic-icon .isAnswer {
  color: gold;
}
.add-answer {
  position: relative;
  width: 720px;
  margin: 10px auto;
}
.add-answer textarea {
  resize: none;
  outline: none;
  padding: 5px 10px;
  display: block;
  width: 600px;
  height: 60px;
  border: 1px solid var(--color-school);
  border-radius: 20px;
}
.add-answer button {
  position: absolute;
  top: 0;
  right: 15px;
  width: 80px;
  height: 34px;
  color: white;
  border-radius: 15px;
  background-color: var(--color-school);
}
.add-answer button:hover {
  font-size: 18px;
}
</style>