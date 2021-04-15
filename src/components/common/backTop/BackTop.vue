<template>
  <div class="back-top" v-show="isShow" @click="backTop">
    <i class="iconfont">&#xe66d;</i>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        isShow: false
      }
    },
    mounted() {
      window.onscroll = () => {
        //console.log(window.pageYOffset);
        if (window.pageYOffset > 1000) {
          this.isShow = true
        } else {
          this.isShow = false
        }
      }
    },
    activated(){
        window.onscroll = () => {
        //console.log(window.pageYOffset);
        if (window.pageYOffset > 1000) {
          this.isShow = true
        } else {
          this.isShow = false
        }
      }
    },
    methods: {
      backTop() {
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: 'smooth'
        })
      }
    }
  }
</script>

<style scoped>
  .back-top {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid var(--color-school);
    background-color:#fff;
    text-align: center;
    line-height: 50px;
    box-shadow: 2px 2px 5px 2px var(--color-shadow);
    cursor: pointer;
    /* 由于其位于窗口中的位置固定，则将位置信息放于组件中 */
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index:999
  }

  .back-top i {
    color: var(--color-school);
    font-size: 40px;
  }
</style>