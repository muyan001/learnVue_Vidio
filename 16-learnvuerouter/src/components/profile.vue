<template>
  <div>
    <p>我是profile组件</p>
    <h1>{{$route.query.name}}</h1>
    <h1>{{$route.query.age}}</h1>
  </div>
</template>

<script>
export default {
  name: "profile",
  created() {
    console.log("档案界面的生命周期函数created")
  },
  destroyed() {
    console.log("档案界面的生命周期函数destroy")
  }

}
</script>

<style scoped>

</style>
