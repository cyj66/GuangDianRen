<template>
  <swiper class="home-swiper">
      <swiper-item v-for="(value,index) in banners" :key="index">
          <a :href="value.link">
              <img :src="value.image">
              <h2>{{value.info}}</h2>
          </a>
      </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
export default {
  components:{
      Swiper,SwiperItem
  },
  props:{
      banners:Array
  }
}
</script>
 
<style scoped>
.home-swiper{
    position:relative;
    width:800px;
    height:400px;
    margin:10px auto
}
.home-swiper h2{
    position:absolute;
    top:0;
    padding:10px;
    background-color:#fff; 
    color:var(--color-school)
}
</style>