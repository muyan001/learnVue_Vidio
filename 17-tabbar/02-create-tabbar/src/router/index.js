import Vue from 'vue'
import Router from 'vue-router'

//懒加载

const cart = ()=> import("../views/cart/cart")
const home = ()=> import("../views/home/home")
const classify = ()=> import("../views/classify/classify")
const profile = ()=> import("../views/profile/profile")


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
