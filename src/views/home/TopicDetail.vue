<template>
  <div>
    <h1><span class="user-ID">{{topicListItem.username}}</span>{{topicListItem.title}}</h1>
    <span>{{topicListItem.date}}</span>
    <ul class="topic-icon" @click="onChangeIconColor($event)" @selectstart="preventSelect($event)">
            <li class="iconfont">&#xe675; 赞 {{likeCount}}</li>
            <li class="iconfont">&#xe66f; 收 {{collectCount}}</li>
            <li class="iconfont">&#xe66c; 答 {{answerCount}}</li>
        </ul>
        {{answerList.content}}
  </div>
</template>

<script>
import { getTopicData } from "network/topicRequest.js";
export default {
  name: "TopicDetail",
  components: {},
  data() {
    return {
      topicListItem: {},
      likeCount: 0,
      collectCount: 0,
      answerCount: 0,
      answerList: [],
    };
  },
  created() {
    getTopicData().then((res) => {
      for (let item of res) {
        if (item.topicId.toString() === this.$route.query.id) {
          this.topicListItem = item;
        }
      }
      //下面三个循环必须放在then里面，否则异步执行获取不到topicListItem的数据
      for (let item of this.$store.state.topicLikeList) {
        if (item.topicId === this.topicListItem.topicId) {
          this.likeCount++;
        }
      }
      for (let item of this.$store.state.topicCollectList) {
        if (item.topicId === this.topicListItem.topicId) {
          this.collectCount++;
        }
      }
      for (let item of this.$store.state.answerList) {
        if (item.topicId === this.topicListItem.topicId) {
          this.answerList.push(item);
          this.answerCount++;
        }
      }
    });
  },
  methods: {
    onChangeIconColor(e) {
      let lis = document.querySelectorAll(".topic-icon li");
      console.log(e.target);
      for (let i in lis) {
        if (e.target === lis[i]) {
          if (e.target.style.color === "gold") {
            e.target.style.color = "";
          } else {
            e.target.style.color = "gold";
          }
        }
      }
    },
    preventSelect(e) {
      e.preventDefault();
    },
  },
};
</script>
 
<style scoped>
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
.topic-icon .iconfont {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-school);
  cursor: pointer;
}
</style>