<template>
  <Swiper>
    <swiper-item v-for="item in banner">
      <a :href="item.link">
        <img :src="item.image">
      </a>
    </swiper-item>
  </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/swiper/index"

export default {
  name: "HomeSwiper",
  props:{
    banner:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>

</style>
