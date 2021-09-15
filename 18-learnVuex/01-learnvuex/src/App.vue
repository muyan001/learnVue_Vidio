<template>
  <div id="app">

    <h1>{{this.$store.state.globalCount}}</h1>
    <button @click="addClick">+</button>
    <button @click="subClick">-</button>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods:{
    addClick(){
      // 提交 state.mutations 中设置的方法，  提交后，后台才会执行这个方法
      this.$store.commit('add')

    },
    subClick(){
      this.$store.commit('sub')
    }
  }
}
</script>

<style>

</style>
