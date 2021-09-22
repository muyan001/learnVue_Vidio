<template>
  <div class="tab-bar-item" @click="isClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
<!--&lt;!&ndash;    写死字体颜色 &ndash;&gt;-->
<!--    <div :class="{active:isActive}">-->
<!--      <slot name="item-txt"></slot>-->
<!--    </div>-->


<!--    动态绑定样式: 写法1-->
    <div :style="activeStyle">
      <slot name="item-txt"></slot>
    </div>

    <!--    动态绑定样式: 写法2-->
<!--    <div :style="{color:myActiveColor}">-->
<!--      <slot name="item-txt"></slot>-->
<!--    </div>-->


  </div>

</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: "red"
    }
  },
  // data(){
  //   return{
  //     isActive:true
  //   }
  // },
  methods: {
    isClick() {
      // console.log(this.path)
      this.$router.push(this.path)
    }

  },
  computed: {
    // 判断当前的路径 和 自定义的属性的值是否一致
    isActive() {
      // home --item1(/home) = true
      // home --item2(/cart) = false
      // home --item3(/profile) = false
      // home --item4(/home) = true
      return this.$route.path.indexOf(this.path) !== -1
    },

    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    },

    myActiveColor(){
      return this.isActive ? this.activeColor : ''
    }

  }


}
</script>

<style scoped>

.tab-bar-item {
  /*display: flex;*/
  flex: 1;
  text-align: center;
  height: 49px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
}

.active {
  color: red;
}


</style>
