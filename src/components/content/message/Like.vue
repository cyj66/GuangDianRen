<template>
    <div class="like">
        <h2>收到的点赞 <i class="iconfont">&#xe675;</i></h2>
        <ul>
            <li>
                <p><span class="user-ID">黄伟安</span>点赞了我的提问：暨南大学的光电工程系究竟怎么样？</p><span>2020-8-9</span>
            </li>
            <li>
                <p><span class="user-ID">张开鹏</span>点赞了我的提问：暨南大学的光电工程系究竟怎么样？</p><span>2020-8-9</span>
            </li>
            <li>
                <p><span class="user-ID">许焕淇</span>点赞了我的回答：暨南大学光电工程学科始于1984年设立的“光学”硕士学位点，2003年设立“光学工程”硕士学</p><span>2020-8-9</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {

        components: {}
    }
</script>

<style scoped>
    .like{
        width:500px;
    }
  .like  i{
    font-size:24px;
    }
    .like p{
      height:30px;
      line-height:30px;
      padding:2px 5px;
      margin:5px;
      border:1px solid var(--color-shadow);
      box-shadow:1px 1px 1px var(--color-shadow);
      white-space: nowrap;
      overflow: hidden;
      text-overflow:ellipsis;
    }
</style>