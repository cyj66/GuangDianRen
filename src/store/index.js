import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isSchool: true,
    //vuex拿到本地存储的token
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    username: localStorage.getItem('username') ? localStorage.getItem('username') : '',
    signTime: localStorage.getItem('signTime') ? localStorage.getItem('signTime') : '',

    newsCollectList: [],
    enterpriseCollectList: [],   
    topicList:[],
    topicLikeList: [],
    topicCollectList: [],
    answerLikeList: [],

    searchTopicValue:''
  },
  mutations: {
    oppositeIsSchool(state) {
      state.isSchool = !state.isSchool
    },
    // 修改token，并将token存入localStorage
    changeLogin(state, user) {
      state.username = user.username;
      state.token = user.token;
      state.signTime = user.signTime;
      localStorage.setItem('username', state.username);
      localStorage.setItem('token', state.token);
      localStorage.setItem('signTime', state.signTime);
    },
    changeNewsCollectList(state,payload) {
      state.newsCollectList=payload
    },
    changeEnterpriseCollectList(state, payload) {
      state.enterpriseCollectList=payload
    },
    changeTopicList(state, payload) {
      state.topicList=payload
     },
    changeTopicLikeList(state, payload) {
      state.topicLikeList=payload
    },
    changeTopicCollectList(state,payload) {
      state.topicCollectList=payload
    },
    changeAnswerLikeList(state, payload) {
      state.answerLikeList=payload
    },
    changeSearchTopicValue(state, payload) {
      state.searchTopicValue=payload
    }
  }
})

export default store