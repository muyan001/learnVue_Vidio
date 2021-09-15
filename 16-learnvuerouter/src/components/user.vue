<template>
  <div>
    <p>用户页面</p>
    <span>用户界面中出现第一个名称：小米</span>
    <br>
    <span>{{userName}}</span>
  </div>
</template>

<script>
export default {
  name: "user",
  computed:{
    userName:function (){

      // $route 当前的路由对象
      return this.$route.params.userId123
    }
  },
  created() {
    console.log("user组件创建之前调用")
  },
  destroyed() {
    console.log("user组件销毁之后调用")
  }
}
</script>

<style scoped>

</style>
