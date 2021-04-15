<template>
  <div id="app">
    <main-nav-bar v-if="isShowNavBarAndBottom" />
    <router-view v-if="isRouterAlive"></router-view>
    <back-top></back-top>
    <bottom v-if="isShowNavBarAndBottom"></bottom>  
  </div>
</template>

<script>
import MainNavBar from "components/content/mainNavbar/MainNavBar.vue";

import BackTop from "components/common/backTop/BackTop.vue";
import Bottom from "components/common/bottom/Bottom.vue"

export default {
  name: "app",
  data() {
    return {
      isRouterAlive: true,
    };
  },
  components: {
    MainNavBar,
    BackTop,
    Bottom
  },
  provide() {
    //提供
    return {
      reload: this.reload,
    };
  },
  computed: {
    isShowNavBarAndBottom() {
      let showPath = [
        "/home",
        "/news",
        "/enterprise",
        "/message",
        "/user",
        "/newsdetail",
      ];
      if (
        showPath.indexOf(this.$route.path) !== -1 ||
        /detail/.test(this.$route.path)
      )
        return true;
      else return false;
    },
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<style scoped>
/* @import两种引入方式 */
@import "~assets/css/normalize.css";
@import "~assets/css/base.css";
@import url(~assets/font/iconfont.css);

#app {
}
</style>