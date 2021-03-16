<template>
  <div class="answer">
    <h2>收到的回答 <i class="iconfont">&#xe671;</i></h2>
    <li>
      <p><span class="user-ID">黄伟安</span>回答了我的提问：<strong>暨南大学的光电工程系究竟怎么样?</strong><br>
        暨南大学光电工程学科始于1984年设立的“光学”硕士学位点，2003年设立“光学工程”硕士学</p><i>2020-8-9</i>
    </li>
    <li>
      <p><span class="user-ID">黄伟安</span>回答了我的提问：暨南大学的光电工程系究竟怎么样？
        <br>牛的</p><span>2020-8-9</span>
    </li>
    <li>
      <p><span class="user-ID">黄伟安</span>回答了我的提问：暨南大学的光电工程系究竟怎么样？
        <br>妙啊</p><span>2020-8-9</span>
    </li>

  </div>
</template>

<script>
  export default {
    components: {}
  }
</script>

<style scoped>
  .answer {
    width: 500px
  }

  .answer i {
    font-size: 24px;
  }

  .answer p {
    height: 60px;
    line-height: 30px;
    padding: 2px 5px;
    margin-top: 10px;
    border: 1px solid var(--color-shadow);
    box-shadow: 1px 1px 1px var(--color-shadow);
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .answer i{
    font-size:14px;
    font-style:normal;
    color:#888
  }
</style>