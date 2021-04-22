<template>
  <div class="bottom">
      <ul>
          <li>网站名：光电人——暨大光电学子的宝库</li>
          <li>作者：陈永佳 2017050879</li>
          <li>指导老师：罗云瀚教授</li>
          <li>单位：暨南大学理工学院光电工程系</li>
          <li>邮箱：chen_yong_jia@126.com</li>
      </ul>
      <img src="~assets/img/logo/jnu_logo.png" alt="">
  </div>
</template>

<script>
export default {
  components:{
  }
}
</script>
 
<style scoped>
.bottom{
  position:relative;
  width:100%;
  height:300px;
  background:url(~assets/img/logo/bg.png) no-repeat;
  color:white;
  font-weight:600
}
.bottom ul{
  position:absolute;
  top:80px;
  left:300px;
}
.bottom ul li{
  margin:10px;
  font-size:20px
}
.bottom img{
  position:absolute;
  top:100px;
  right:200px;
}
</style>