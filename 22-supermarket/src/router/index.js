import Vue from 'vue'
import Router from 'vue-router'

//懒加载

const cart = ()=> import("view/cart/cart")  // 启用了别名，直接用就好了，在
const home = ()=> import("view/home/home")
const classify = ()=> import("view/classify/classify")
const profile = ()=> import("view/profile/profile")


Vue.use(Router)



export default new Router({
  routes: [
    {
      path:'/home',
      component:home
    },
    {
      path:'/cart',
      component:cart
    },
    {
      path:'/profile',
      component:profile
    },
    {
      path:'/classify',
      component:classify
    }
  ],
  mode:'history'
})
