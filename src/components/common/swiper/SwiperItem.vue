<template>
<div class="slide">
  <slot></slot>
</div>
</template>

<script>
  export default {
    components: {

    }
  }
</script>

<style scoped>
  .slide {
    width: 100%;
    /* 防止被压缩 */
    flex-shrink: 0;  
  }

  .slide img {
    width: 100%;
    height:80%;
  }
</style>