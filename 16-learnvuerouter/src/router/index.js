import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import home from '../components/home'
// import about from "../components/about";
// import user from "../components/user";

// 设置路由懒加载,,,
const home = () => import('../components/home')
const homeNews = () => import('../components/homeNews')
const homeMessages = () => import('../components/homeMessages')

const about = () => import('../components/about')
const user = () => import('../components/user')
const profile = () => import('../components/profile')


// 1.通过Vue.use(Router) 安装插件
Vue.use(Router)


// 2.创建vueRouter对象
const router = new Router({


  // 配置路由和组件之间的应用关系
  routes: [
    // 设置手册进入的默认路径
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      component: home,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          component: homeNews
        },
        {
          path: 'message',
          component: homeMessages
        }

      ]
    },
    {
      path: '/about',
      component: about,
      meta: {
        title: "关于"
      }
    },
    {
      path: '/user/:userId123',   // 这个写法涉及到动态绑定
      component: user,
      meta: {
        title: '用户'
      }
    },
    {
      path: '/profile',
      component: profile,
      // meta:元数据
      meta: {
        title: '档案'
      }
    }
  ],
  mode: 'history',  // 设置html的history模式
  linkActiveClass: 'active'   // 统一修改router-link元素中，添加active-class属性
})


// 导航守卫 写法
router.beforeEach((to, from, next)=>{
  // console.log(to)
  document.title = to.matched[0].meta.title


  next()     // 必须掉这个函数，不掉的话，整个程序就不进行下一步了
})


export default router
