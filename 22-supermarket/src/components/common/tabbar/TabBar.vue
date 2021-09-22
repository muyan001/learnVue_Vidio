<template>
  <div id="tab-bar">

    <slot></slot>
  </div>

</template>

<script>
// import tabBarItem from './TabBarItem'

export default {
  name: "TabBar",
  // components:{
  //   tabBarItem
  // }
}
</script>

<style scoped>

  #tab-bar{
    display: flex;
    background-color: lightgray;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    text-shadow: 0 -1px 1px rgba(100,100,100,.1);
  }


</style>
