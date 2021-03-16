import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = true  //false显示生产模式的信息，减少开发环境下的警告语句


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
