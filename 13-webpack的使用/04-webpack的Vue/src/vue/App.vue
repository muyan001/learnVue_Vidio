<template>
  <div>
    <h2 class="msg">{{message}}</h2>
    <button @click="btnclick">按钮</button>
  </div>
</template>

<script>

export default {
  name: "App",
  data(){
    return{
      message:'你好，重庆'
    }
  },
  methods:{
    btnclick() {
      console.log(1233333)
    }
  }
}
</script>

<style scoped>
.msg{
  color: blue;
}
</style>