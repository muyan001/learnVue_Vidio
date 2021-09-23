import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import * as url from "url";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


// 两种方式发送请求
//1.第一种
axios({
  url:'http://123.207.32.32:8000/home/multidata',
  method:'get'
}).then(res=>{
  console.log(res)
})

// 第二种
// axios.get(url='http://123.207.32.32:8000/home/multidata',config={})


// post 请求

axios({
  url:'http://123.207.32.32:8000/home/data',
  parms:{
    type:'pop',
    page:2
  }
}).then(res=>{
  console.log(res)
})


// 同时请求两个请求，并合并结果
// axios.all([axios(),axios]).then()
axios.all([axios({
  url:'http://123.207.32.32:8000/home/multidata',
  type: 'get'
}),axios({
  url:'http://123.207.32.32:8000/home/data',
  type: 'post',
  parms:{
    type:'pop',
    page: 3
  }
})]).then(res=>{
  console.log(res[0])
  console.log(res[1])
})

/**这里还可以有另外的写法
 *
 *  then(res=>{
      console.log(res[0])
      console.log(res[1])
    })
 */
axios.all([axios({
  url:'http://123.207.32.32:8000/home/multidata',
  type: 'get'
}),axios({
  url:'http://123.207.32.32:8000/home/data',
  type: 'post',
  parms:{
    type:'pop',
    page: 3
  }
})]).then(axios.spread((data1,data2)=>{
  console.log(data1)
  console.log(data2)
  })
)


/***
 * **************************** axios全局配置**************************
 */

axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000


axios.all([axios({
  // baseURL:'',  这里面也可以写
  url:'/home/multidata',
  type: 'get'
}),axios({
  url:'/home/data',
  type: 'post',
  parms:{
    type:'pop',
    page: 3
  }
})]).then(axios.spread((data1,data2)=>{
    console.log(data1)
    console.log(data2)
  })
)


/**
 * ***************************************************************
 *  创建对应的axios的实例
 */

// 创建实例----应对跨域的问题
const instance1 = axios.create({
  baseURL:'http://123.207.32.32:8000',
  timeout:3000
})

instance1({
  url:'/home/multidata',
  type:'get'
}).then(res=>{
  console.log(res)
})

instance1({
  url:'/home/data',
  type:'get',
  params:{
    type:'pop',
    page: 3
  }
}).then(res=>{
  console.log(res)
})



/**
 * ***************************************************************
 *  封装axios 为自己使用
 */

import {request} from "./network/request";


// 封装axios 为自己使用 :  方案三：终极方案

request({
  url:'/home/multidata',
  type:'get'
}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})





// 封装axios 为自己使用 :  方案三：继续优化方案
// request({
//   url:'/home/multidata',
//   type:'get'
// }).then(res=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(err)
// })





// 封装axios 为自己使用 :  方案二：优化方案
// request({
//   baseConfig:{
//     url:'/home/multidata',
//     type:'get'
//   },
//   success(res){
//     console.log(res)
//   },
//   failure(err){
//     console.log(err)
//   }
// })




//封装axios 为自己使用 :  方案一：初始方案
// request({
//   url:'/home/multidata',
//   type:'get'
// },res=>{
//   console.log(res)
// },err=>{
//   console.log(err)
// })



