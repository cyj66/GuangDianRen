<template>
  <div>
    <home-swiper :banners="banners"></home-swiper>
    <home-topic></home-topic>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeTopic from './childComps/HomeTopic'
  
  export default {
    components: {
      HomeSwiper,HomeTopic

    },
    data() {
      return {
        banners: [{
            id: 1,
            link: 'https://www.chinamobileltd.com/sc/global/home.php',
            image: 'https://pic.baike.soso.com/ugc/baikepic2/0/20181213101558-307408948_png_1083_609_63062.jpg/300'
          },
          {
            id: 2,
            link: 'http://chinaunicom.com.cn/',
            image: 'https://pic.baike.soso.com/ugc/baikepic2/1175/cut-20200315171137-1676779330_jpg_478_381_15101.jpg/300'
          },
          {
            id: 3,
            link: 'http://www.chinatelecom.com.cn/',
            image: 'https://pic.baike.soso.com/ugc/baikepic2/0/20181212163558-1613773300_jpeg_650_459_60611.jpg/300'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>