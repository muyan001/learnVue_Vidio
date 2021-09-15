<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import tabBar from './components/tabbar/TabBar'
import tabBarItem from './components/tabbar/TabBarItem'
const mainTabBar = () => import('./components/MainTabBar')

export default {
  name: 'App',
  components:{

    mainTabBar
  }
}
</script>

<style>
/* 这个是引入样式的方式  */
  @import "./assets/css/base.css";

</style>
