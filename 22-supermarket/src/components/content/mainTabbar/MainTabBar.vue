<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="green">

<!--      用别名的路径，，，必须要~这个符号    -->
      <img slot="item-icon"  src="~assets/img/主页.png" alt="">
      <img slot="item-icon-active"  src="~assets/img/主页01.png" alt="">
      <div slot="item-txt">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" active-color="green">
      <img slot="item-icon"  src="~assets/img/购物车.jpg" alt="">
      <img slot="item-icon-active"  src="~assets/img/购物车01.png" alt="">
      <div slot="item-txt">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/classify" active-color="green">
      <img slot="item-icon"  src="~assets/img/分类.png" alt="">
      <img slot="item-icon-active"  src="~assets/img/分类01.png" alt="">
      <div slot="item-txt">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" active-color="green">
      <img slot="item-icon"  src="~assets/img/我的.png" alt="">
      <img slot="item-icon-active"  src="~assets/img/我的01.png" alt="">
      <div slot="item-txt">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>

const tabBar = () => import('../../../components/common/tabbar/TabBar')
const tabBarItem = () => import('../../../components/common/tabbar/TabBarItem')
export default {
  name: "mainTabbar",
  components:{
    tabBar,
    tabBarItem
  }
}
</script>

<style scoped>

</style>
