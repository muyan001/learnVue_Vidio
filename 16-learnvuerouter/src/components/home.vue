<template>
  <div>
    <p>我是首页</p>
    <span>在很久很久以前</span>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  data(){
    return{
    }
  },
  created(){
    console.log("生命周期函数--创建home组件之前调用")
  },
  destroyed(){
    console.log("生命周期函数---组件home销毁之后调用")
  },
  //  activated deactivated 只有该组件在保持了状态使用了keep-alive时，才是有效的
  activated() {
    console.log("该组件活跃")
  },
  deactivated() {
    console.log("该组件不活跃")
  }
}
</script>


<style scoped>

</style>
