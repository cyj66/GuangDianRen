import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'


Vue.config.productionTip = true  //false显示生产模式的信息，减少开发环境下的警告语句
Vue.prototype.$bus=new Vue()


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
