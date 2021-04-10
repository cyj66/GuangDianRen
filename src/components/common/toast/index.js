import Toast from './Toast.vue'

const obj = {}

//Vue一use就执行该install函数
obj.install = function (Vue) {
  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  //2.根据组件构造器创建一个组件对象
  const toast = new toastConstructor()
  //3.将组件对象，手动挂载到某个元素上
  toast.$mount(document.createElement('div'))
  //4.不能直接获取元素，因为还没挂载，需要以上几个步骤
  document.body.appendChild(toast.$el)
  //5.全局可用
  Vue.prototype.$toast = toast
}
export default obj