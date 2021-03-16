<template>
  <div class="w2">
    <news :news-list="newsList"></news>
    <switch-control @click.native="newsSwitch"></switch-control>
  </div>
</template>

<script>
  import SwitchControl from 'components/content/switchControl/SwitchControl.vue'
  import News from 'components/content/news/News.vue'
  import {getNewsData}  from 'network/newsRequest.js'
  export default {
    components: {
      News,SwitchControl
    },
    data(){
      return {
        bgColor:'#ccc',
        body:null,
        newsList:[],
      }
    },
    created(){
      getNewsData().then(res=>{
        this.newsList=res;
      })
    },
    mounted(){
      this.body=document.querySelector('body');
    },
    activated() {
      //console.log(this.bgColor);
      this.body.setAttribute('style', 'background-color:'+this.bgColor)
    },
    deactivated() {
      this.bgColor=this.body.style.backgroundColor;
      //console.log(this.bgColor);
      this.body.removeAttribute('style');
    },
    methods: {
      newsSwitch() {
        //console.log('666');  //必须有修饰符.native才能监听到
        //不明原因，需要判断是否等于var(--color-school)，不能判断是否等于#ccc，
        //否则会出现灰色背景退出路由再回来按钮第一次无法改变背景的情况
        this.bgColor=(this.bgColor=='var(--color-school)')?'#ccc':'var(--color-school)';
        this.body.setAttribute('style', 'background-color:'+this.bgColor)
      }
    }
  }
</script>

<style scoped>
.switch-control{
  position:fixed;
  left:80px;
  top:90px
}
</style>