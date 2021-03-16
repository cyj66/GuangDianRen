<template>
  <a :href="enterpriseValue.link" :title="enterpriseValue.info">
    <div class="item-img">
      <img :src="enterpriseValue.image" :alt="enterpriseValue.name">
    </div>
    <h4>{{enterpriseValue.name}}</h4>
    <i class="iconfont" @click.prevent="iClick" :class="{iOrange:isOrange}">&#xe66f;</i>
  </a>
</template>

<script>
  import {
    collectMixin
  } from 'common/mixin.js'

  export default {
    mixins: [collectMixin],
    props:{
      enterpriseValue:Object
    }
  }
</script>

<style scoped>
  a {
    position: relative;
    display: block;
    width: 180px;
    height: 230px;
    margin: 18px;
    padding:10px;
    text-align: center;
    border: 2px solid var(--color-school);
    overflow: hidden;

  }

  .item-img {
    width: 180px;
    height: 180px;
  }

  .item-img img {
    margin-top: 50%;
    transform: translateY(-50%);
    /* 让图片按比例缩放 */
    width: 95%;
  }

  h4 {
    font-weight: 400;
  }

  a:hover {
    border-radius: 20px;
  }

  i {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 40px;
    cursor: default;
  }

  .iOrange {
    color: orange
  }
</style>