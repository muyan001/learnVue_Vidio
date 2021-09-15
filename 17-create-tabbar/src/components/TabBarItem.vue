<template>
  <div class="tab-bar-item">

      <slot name="item-icon"></slot>
      <slot name="item-txt"></slot>



  </div>

</template>

<script>
export default {
  name: "TabBarItem"
}
</script>

<style scoped>

.tab-bar-item{
  /*display: flex;*/
  flex: 1;
  text-align: center;
  height: 49px;
}

.tab-bar-item img{
  width: 24px;
  height: 24px;
}


</style>
