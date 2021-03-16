<template>
  <div class="switch-control" @click="switchControl">
    <i :class="{'i-toggle':isIToggle}"></i>
    <span :class="{'span-toggle':isSpanToggle}">{{switchSpan[index]}}</span>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        switchSpan: ['校内', '全球'],
        index: 0,
        isIToggle:false,
        isSpanToggle:false,
      }
    },
    methods: {
      switchControl() {
        this.index = (this.index === 0) ? 1 : 0;
        
        // let i=document.querySelector('.switch-control i');
        // let span=document.querySelector('.switch-control span');
        // let switchControl=document.querySelector('.switch-control');
        // i.style.left=(i.style.left==="5px")?"50px":"5px"
        // span.style.left=(span.style.left==="30px")?"10px":"30px";
        // switchControl.style.backgroundColor=(switchControl.style.backgroundColor==="var(--color-school)")?"gray":"var(--color-school)"

        this.isDivToggle=!this.isDivToggle;
        this.isIToggle=!this.isIToggle;
        this.isSpanToggle=!this.isSpanToggle;
      }
    },
    mounted() {
      //this.switchControl()   //解决第一次点击失效问题
    },
  }
</script>

<style scoped>
  .switch-control {
    position: relative;
    width: 75px;
    height: 30px;
    margin: 10px;
    background-color: #aaa;
    border-radius: 15px;
    cursor: pointer;
  }

  .switch-control i {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 5px;
    left: 5px;
    border-radius: 50%;
    background-color: #fff;
    transition:all 0.1s 
  }

  .switch-control span {
    position: absolute;
    top: 4px;
    left: 30px;
    color: white;
    font-weight: 700;
    font-size: 18px;
    transition:all 0.1s 
  }
/* 前面必须加个父类提高权重 */
  .switch-control .i-toggle {
    left: 50px;
    background-color: var(--color-school);
    transition:all 0.1s 
  }

  .switch-control .span-toggle {
    left: 10px;
    color: var(--color-school);
    transition:all 0.1s 
  }

</style>