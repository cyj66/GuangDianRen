<template>
  <div class="my-swiper" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="swiper">
      <slot></slot>
    </div>
    <div class="indicator">
      <div v-for="(value,index) in slideCount" 
           :key="index" class="indicator-item" 
           :class="{active: index === currentIndex-1}"
           @click="scrollContentByIndi(index)">
      </div>
    </div>
    <i class="leftArrow iconfont" v-show=isShow @click="toLeft">&#xe673;</i>
    <i class="rightArrow iconfont" v-show=isShow @click="toRight">&#xe672;</i>
  </div>
</template>

<script>
  export default {
    //可以不从父组件传入，因为都有默认值，默认值可以通过this.变量名直接用
    props: {
      //每一次滚动的间隔
      interval: {
        type: Number,
        default: 3000
      },
      //一次滚动的时长
      animDuration: {
        type: Number,
        default: 300
      },
      //是否展示下面的圆点
      showIndicator: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        slideCount: 0,
        currentIndex: 1,
        totalWidth: 0,
        swiperEl: {},
        slidesEls: {},
        isShow: false //是否显示左右箭头
      }
    },
    mounted() {
      //1.操作Dom，在前后添加SwiperItem，其实没必要封装会降低可读性
      this.handleDom();
      //2.开启定时器
      this.startTimer();
    },
    methods: {
      //一、DOM元素初始操作
      handleDom() {
        //1.获取要操作的元素
        this.swiperEl = document.querySelector('.swiper');
        this.slidesEls = this.swiperEl.getElementsByClassName('slide');
        //2.保存轮播图的个数
        this.slideCount = this.slidesEls.length;
        //3.克隆第一个放在最后面
        let cloneFirst = this.slidesEls[0].cloneNode(true);
        let cloneLast = this.slidesEls[this.slideCount - 1].cloneNode(true);
        this.swiperEl.appendChild(cloneFirst);
        this.swiperEl.insertBefore(cloneLast, this.slidesEls[0]);
        this.totalWidth = this.swiperEl.offsetWidth;
        //为了防止DOM操作完成后停留在克隆在前面的那张
        this.swiperEl.style.transform = `translateX(${-this.totalWidth}px)`
        //console.log(this.totalWidth) 500
      },
      //二、定时器操作
      startTimer() {
        //直接用this.对定时器进行添加
        this.timer = setInterval(() => {
          this.currentIndex++;
          this.scrollContent(-this.currentIndex * this.totalWidth)
        }, this.interval)
      },
      stopTimer() {
        clearInterval(this.timer)
      },
      //三、设置要滚动到的位置
      setTransform(position) {
        this.swiperEl.style.transform = `translateX(${position}px)`;
      },
      //四、滚动到对应位置,并且要和指示器匹配
      scrollContent(currentPosition) {
        //通过transfrom属性进行过渡，因为调用了该函数所以不用动作触发即可过渡
        this.setTransform(currentPosition)
        this.swiperEl.style.transition = 'transform ' + this.animDuration + 'ms';
        //在滚动期间校验正确的位置
        // 最难理解的部分！！！！！！！
        setTimeout(() => {
          if (this.currentIndex > this.slideCount) {
            this.currentIndex = 1;
            this.setTransform(-this.currentIndex * this.totalWidth);
          } else if (this.currentIndex < 1) {
            this.currentIndex = this.slideCount;
            this.setTransform(-this.currentIndex * this.totalWidth);
          }
          this.swiperEl.style.transition = 'transform 0ms';
        }, this.animDuration)
      },
      //五、监听事件
      mouseEnter() {
        this.isShow = true;
        this.stopTimer();
      },
      mouseLeave() {
        this.isShow = false;
        this.startTimer();
      },
      toLeft() {
        this.currentIndex--;
        this.scrollContent(-this.currentIndex * this.totalWidth)
      },
      toRight() {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth)
      },
      scrollContentByIndi(index){
        this.currentIndex=index+1;
        this.scrollContent(-(this.currentIndex)*this.totalWidth);
      }
    }
  }
</script>

<style scoped>
  .my-swiper {
    width: 500px;
    height: 300px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }

  .swiper {
    display: flex;
  }

  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 10px;
  }

  .indicator-item {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0 5px;
  }

  .active {
    background-color: var(--color-school);
  }

  .leftArrow,
  .rightArrow {
    position: absolute;
    top: 50%;
    right: 0px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: var(--color-school);
    background-color: rgba(200,200,200,0.6);
    cursor: pointer;
  }

  .leftArrow {
    left: 0;
  }

  .rightArrow {
    right: 0
  }
</style>