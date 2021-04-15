<template>
  <div class="topic-item" @mouseleave="closeAddAnswer()" v-if="showTopicItem()">
    <h2>
      <span class="user-ID">{{ topicListItem.username }}</span>
      <span class="topic-title" @click="topicItemClick()">{{
        topicListItem.title
      }}</span>
    </h2>
    <span class="date">{{ topicListItem.date | formatDateFilter }}</span>
    <div v-if="!topicListItem.user">
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
      <div class="add-answer" v-if="isShowAddAnswer">
        <textarea placeholder="请在此回答。"></textarea>
        <button @click="addAnswer()">回答</button>
      </div>
      <hr v-if="answerCount" />
      <p class="iconfont topic-answer" v-if="answerCount !== 0">
        <span class="user-ID">{{ answerNew.username }}</span
        >{{ answerNew.content }}
      </p>
    </div>
  </div>
</template>

<script>
import {
  saveTopicLike,
  removeTopicLike,
  saveTopicCollect,
  removeTopicCollect,
} from "network/topicRequest.js";
import { saveAnswer } from "network/answerRequest.js";

import { formatDate } from "common/utils.js";

export default {
  components: {},
  data() {
    return {
      isLike: false,
      isCollect: false,
      isAnswer: false,
      isShowAddAnswer: false,

      likeCount: 0,
      collectCount: 0,
      answerCount: 0,

      topicAnswerList: [],
      answerNew: {},
      textareaValue: "",
    };
  },
  props: {
    topicListItem: Object,
    topicLikeList: Array,
    topicCollectList: Array,
    answerList: Array,
    answerLikeList: Array,
  },
  inject: ["reload"],
  created() {
    if (!this.topicListItem.user) {
      this.getLikeCollectAnswerCount();
      this.getNewAnswer();
      //获取每个问题对于具体用户的赞、收状态
      this.isLike = this.$store.state.topicLikeList.some(
        (value) => value.topicId === this.topicListItem.topicId
      );
      this.isCollect = this.$store.state.topicCollectList.some(
        (value) => value.topicId === this.topicListItem.topicId
      );
    }
  },
  methods: {
    //获取赞、收、答数量
    getLikeCollectAnswerCount() {
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
      for (let item of this.answerList) {
        if (item.topicId === this.topicListItem.topicId) {
          this.topicAnswerList.push(item);
          this.answerCount++;
        }
      }
    },

    //获取最新的回答
    getNewAnswer() {
      if (this.topicAnswerList.length === 1)
        this.answerNew = this.topicAnswerList[0];
      else {
        for (let i = 0; i < this.topicAnswerList.length - 1; i++) {
          this.answerNew = this.topicAnswerList[i];
          if (
            Number(this.topicAnswerList[i].date) <
            Number(this.topicAnswerList[i + 1].date)
          ) {
            this.answerNew = this.topicAnswerList[i + 1];
          }
        }
      }
    },

    preventSelect(e) {
      e.preventDefault();
    },
    topicItemClick() {
      this.$router.push({
        path: "/topicdetail",
        query: {
          id: this.topicListItem.topicId,
        },
      });
    },
    likeTopic() {
      if (this.isLike === false) {
        let date = String(+new Date());
        saveTopicLike(
          this.topicListItem.topicId,
          this.$store.state.username,
          date
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
    showAddAnswer() {
      this.isShowAddAnswer = !this.isShowAddAnswer;
      this.isAnswer = !this.isAnswer;
    },
    addAnswer() {
      this.textareaValue = document.querySelector("textarea").value;
      sessionStorage.setItem("scrollY", window.pageYOffset);
      let date = String(+new Date());
      saveAnswer(
        this.answerList.length + 1,
        this.textareaValue,
        this.$store.state.username,
        this.topicListItem.topicId,
        date
      ).then(() => {
        let scrollY = Number(sessionStorage.getItem("scrollY"));
        this.$toast.show("回答成功!");
        this.reload();
        setTimeout(() => window.scroll(0, scrollY), 500); //回到原来的位置
      });
    },
    closeAddAnswer() {
      this.isShowAddAnswer = false;
      this.isAnswer = false;
    },
    showTopicItem() {
      let value=this.$store.state.searchTopicValue.trim()
      if ( value==='') return true;
      else {
        let reg =new RegExp(value)
        if (reg.test(this.topicListItem.title)) return true;
        else return false;
      }
    },
  },
  filters: {
    formatDateFilter(value) {
      const time = new Date(Number(value));
      return formatDate(time);
    },
  },
};
</script>

<style scoped>
.topic-item {
  position: relative;
  width: 100%;
  margin: 50px auto;
  padding: 10px 10px 40px;
  box-shadow: 5px 5px 5px 5px var(--color-shadow);
}

.topic-icon {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}

.topic-icon li {
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}

.topic-item h2 {
  width: 700px;
  padding-bottom: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.topic-item .topic-icon .iconfont {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-school);
  cursor: pointer;
}

.topic-title:hover {
  text-decoration: underline;
  cursor: pointer;
}
.topic-item .topic-answer {
  margin-top: 10px;
  text-indent: 2em;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: #666;
}
.topic-item .date {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #666;
}
.topic-item .topic-icon .isLike,
.topic-item .topic-icon .isCollect,
.topic-item .topic-icon .isAnswer {
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