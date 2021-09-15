<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img slot="item-icon"  src="./assets/img/主页.png" alt="">
        <div slot="item-txt">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon"  src="./assets/img/购物车.jpg" alt="">
        <div slot="item-txt">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon"  src="./assets/img/分类.png" alt="">
        <div slot="item-txt">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon"  src="./assets/img/我的.png" alt="">
        <div slot="item-txt">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import tabBar from './components/TabBar'
import tabBarItem from './components/TabBarItem'

export default {
  name: 'App',
  components:{
    tabBar,
    tabBarItem
  }
}
</script>

<style>
  @import "./assets/css/base.css";

</style>
