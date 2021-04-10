<template>
    <div class="topic-item">
        <h2><span class="user-ID">{{topicListItem.username}}</span>
          <span class="topic-title" @click="topicItemClick()">{{topicListItem.title}}</span>
        </h2>
        <ul class="topic-icon" @click="onChangeIconColor($event)" @selectstart="preventSelect($event)">
            <li class="iconfont">&#xe675; 赞 {{likeCount}}</li>
            <li class="iconfont">&#xe66f; 收 {{collectCount}}</li>
            <li class="iconfont">&#xe66c; 答 {{answerCount}}</li>
        </ul>
        <hr />
        <p class="iconfont topic-answer">
            <span class="user-ID">{{answerList[this.answerList.length-1].username}}</span>{{answerList[this.answerList.length-1].content}}
        </p>

    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      likeCount: 0,
      collectCount: 0,
      answerCount: 0,
      answerList: [],
    };
  },
  props: {
    topicListItem: Object,
  },
  created() {
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
  },
  methods: {
    onChangeIconColor(e) {
      let lis = document.querySelectorAll(".topic-icon li");
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
    topicItemClick(){
      this.$router.push({
        path:'/topicdetail',
        query:{
          id:this.topicListItem.topicId
        }
      })
    }
  },
};
</script>

<style scoped>
.topic-item {
  width: 100%;
  height: 150px;
  margin: 10px;
  padding: 10px;
  border: 2px solid var(--color-school);
  background-color: rgb(250, 250, 250);
  border-radius: 10px;
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
.topic-title:hover{
  text-decoration: underline;
  cursor:pointer;
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
</style>