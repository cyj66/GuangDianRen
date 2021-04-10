<template>
  <div id="app">
    <main-nav-bar v-show="isShowNavBar" />
    <keep-alive exclude="NewsDetail,TopicDetail">
      <router-view></router-view>
    </keep-alive>
    <back-top></back-top>
  </div>
</template>

<script>
  import MainNavBar from 'components/content/mainNavbar/MainNavBar.vue'

  import BackTop from 'components/common/backTop/BackTop.vue'

  
  export default {
    name: 'app',
    components: {
      MainNavBar,BackTop
    },
    computed:{
      isShowNavBar(){
        let showPath=['/home','/news','/enterprise','/message','/user']
        if(showPath.indexOf(this.$route.path)!==-1)
        return true
        else return false
      }
    }
  }
</script>

<style scoped>
  /* @import两种引入方式 */
  @import '~assets/css/normalize.css';
  @import '~assets/css/base.css';
  @import url(~assets/font/iconfont.css);

  #app {}
</style>