<template>
  <div class="recommend-wrap">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">

        <img :src="item.image" class="recommend-img">
        <div>{{item.title}}</div>

      </a>

    </div>

  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend-wrap {
  display: flex;
  background-color: #fff;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #ededed;
}
.recommend-item {
  flex: 1;
  text-align: center;
}
.recommend-img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}

</style>
