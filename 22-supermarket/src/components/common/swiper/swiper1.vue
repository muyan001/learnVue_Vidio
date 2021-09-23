<template>
  <div id="hy-swiper">
    <div class="swiper"
         @touchstart="touchStart"
         @touchmove="touchMove"
         @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>

    <div class="indicator">
      <slot name="indicator" v-if=""></slot>
    </div>

  </div>

</template>

<script>
export default {
  name: "swiper1",
  props:{
    interval:{  // 间隔
      type:Number,
      default:3000
    },
    animDuration: {  // 持续时间
      type:Number,
      default: 300
    },
    moveRatio: { // 滑动比率
      type:Number,
      default:0.25
    },
    showIndicator:{ // 是否显示
      type:Boolean,
      default:true
    }
  },
  data:function (){
    return {
      slideCount:0,  // 元素个数
      totalWidth:0  , // swiper的宽度
      swiperStyle:{},  // swiper样式
      currentIndex:1  ,//当前index
      scrolling:false,// 是否正在滚动
    }
  },
  mounted() {
    // 1.操作DOM,在前后添加slide
    setTimeout(()=>{
      this.handleDom();
      // 2.开启定时器
      this.startTimer();
    },100)
  },
  methods:{
    /**
     * 定时器操作
     */
    startTimer:function (){
      this.playTimer = window.setInterval(()=>{
        this.currentIndex++;
        this.getScrollContainer(-this.currentIndex * this.totalWidth)
      },this.interval)
    },
    stopTimer:function (){
      window.clearInterval(this.playTimer)
    },
    /**
     * 滚动到正确的位置
     */
    scrollContent(currentPosition){
      //0.设置正在滚动
      this.scrolling = true;
      //1.开始滚动动画
      this.swiperStyle.transition = 'transform' + this.animDuration + 'ms';
      this.setTransform(currentPosition);

    //  2.判断滚动到的位置
      this.checkPosition();

    //  3.滚动完成
      this.scrolling = false
    },

    /**
     *  校验正确的位置
     */
    checkPosition:function (){
      window.setTimeout(()=>{
        //1.校验正确的位置
        this.swiperStyle.transition = '0ms';
        if (this.currentIndex >= this.slideCount + 1){
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);

        }else if (this.currentIndex <= 0){
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
        //2.结束移动后的回调
        this.$emit("transitionEnd",this.currentIndex-1);

      },this.animDuration)
    },

    /***
     * 操作Dom,在Dom前后添加slide
     */
    handleDom(){
      //1.获取要操作的元素
      let swiperEl = document.querySelector('.swiper')
      let slidesEls = swiperEl.getElementsByClassName('slide')

      //2. 保存个数
      this.slideCount = slidesEls.length

      //3.如果大于1个，那么在前后分别添加一个slide
      if (this.slideCount>1){
        let cloneFirst = slidesEls[0].cloneNode(true);
        let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true)
        swiperEl.insertBefore(cloneLast,slidesEls[0]);
        swiperEl.appendChild(cloneFirst)
        this.totalWidth = swiperEl.offsetwidth;
        this.swiperStyle = swiperEl.style;
      }
      // 4. 让swiper元素，显示第一个（目前是显示前面添加的最后一个元素）
      this.setTransform(-this.totalWidth);
    },
    /**
     * 拖动事件的处理
     */
    touchMove(e) {
      //1.计算出用户拖动的距离
      this.currentIndex = e.touches[0].pagex;

    }

  },


}
</script>

<style scoped>

</style>
