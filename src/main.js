import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

import toast from 'components/common/toast'


Vue.config.productionTip = false  //false显示生产模式的信息，减少开发环境下的警告语句
//事件总线
Vue.prototype.$bus=new Vue()
// 安装toast插件，会执行导入的obj的install函数
Vue.use(toast)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
