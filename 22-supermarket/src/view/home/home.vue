<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <home-swiper :banner="banner"></home-swiper>

    <home-recommend-view :recommend="recommend"></home-recommend-view>

    <home-feature-view></home-feature-view>

    <tab-control :titles="['流行','新款','精选']"></tab-control>

    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>

  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "./childrenCompontens/HomeSwiper"
import HomeRecommendView from "./childrenCompontens/HomeRecommendView"
import HomeFeatureView from "@/view/home/childrenCompontens/HomeFeatureView";

import TabControl from "@/components/content/tabcontrol/TabControl";

import {getHomeMultidata} from "@/network/home";



export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    TabControl

  },
  data(){
    return {
      banner:[],
      recommend:[]

      // banner:Object
      // recommend:Object
    }
  },
  created() {
    // 请求多个数据
    getHomeMultidata().then(res=>{

      this.banner = res.data.banner.list
      console.log(res.data.banner.list)
      this.recommend = res.data.recommend.list
      console.log(res.data.recommend.list)

    })
  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;

}

.home-nav{
  color: white;
  background-color: var(--color-tint);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;

}



</style>
