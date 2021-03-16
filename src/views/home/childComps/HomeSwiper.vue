<template>
  <swiper>
      <swiper-item v-for="(value,index) in banners" :key="index">
          <a :href="value.link">
              <img :src="value.image">
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
</style>