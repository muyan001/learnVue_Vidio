

<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->

<!--
    路由方式1：router配置使用
-->

<!--    <router-view/>-->
<!--
router-link
    默认渲染成a标签，也可以渲染成其他标签 使用tag属性
    replace属性：相当于使用history.replaceState()方法,那么浏览器的访问按钮就不能生效
    active-class属性：表示在网页中，点击这个元素，会在这个元素中添加这个类(两种方式设置:1.直接在router-link中添加active-class属性,2.在路由中添加)
 -->
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->

<!--    <router-link to="/about" tag="button" replace active-class="active">内容页</router-link>-->


<!--    <router-link to="/about" tag="button" replace >内容页</router-link>-->
    <!--    router-view 这个相当于插槽 -->

<!--  exclude="profile,user" exclude的属性值不要加空格-->
    <keep-alive exclude="profile,user">
<!--      keep-alive 可以让组件一直不被销毁-->
      <router-view></router-view>
    </keep-alive>



<!--
  路由方式2：js中跳转


-->


<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">内容页</button>-->

<!--
  路由动态绑定



-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">内容页面</router-link>


<!--    动态绑定的写法： 将to 加到vue中取管理-->
    <router-link :to="'/user/'+userId">用户页面</router-link>

<!--    传递参数的第二种方式  -->
<!--    <router-link :to="{path:'/profile',query:{name:'华夏',age:5000}}">档案</router-link>-->
    <button @click="profileClick">档案</button>


  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'小花'
    }
  },
  methods:{
    homeClick(){

      // 代码中设置路由,,,$router 是new Router中默认设置的全局属性
      this.$router.replace('/home')

      console.log("首页")
    },
    aboutClick(){
      this.$router.replace('/about')
      console.log("内容页")
    },
    // 通过方法传递参数
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'中华',
          age: 6000
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active{
  color: red;
}
</style>
