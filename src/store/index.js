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
    topicList: [],
    topicLikeList: [],
    topicCollectList: [],
    answerList: [],
    answerLikeList: []
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
    }
  }
})

export default store