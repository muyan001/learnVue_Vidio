import axios from "axios";


// 方案四：终极方案
export function request(config){
    // 1.创建axios实例
    const instance1 = axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:3000
    })
   // 2. 拦截器：请求拦截和相应拦截
   // 2.1 请求拦截:在正式请求之前拦截
  instance1.interceptors.request.use(conf=>{
    // 请求成功的参数拦截

    /**
     *  哪些情况下需要请求拦截
     *  比如：1.config中包含一些不符合服务器的要求
     *      2.每次发送网络请求的时候，都希望在界面中显示一个请求的图标（界面转圈的图标：表示还在请求中）
     *      3.某些网络请求（比如登录（token）），必须携带一些特殊的信息
     */

    console.log(conf);
    return config  // 一定要将参数返回去，否则真正的请求拿不到参数
  },err=>{
    // 请求失败的参数拦截
    console.log(err)

  })
  // 2.2 响应拦截:在响应返回之前拦截
  instance1.interceptors.response.use(res=>{
    console.log(res)
    // return res  // 一定要将结果返回去，后面程序拿不到响应结果
  },err=>{
    // console.log(err)
  })

    // 3.发送网络请求，并将结果传递出去

  return instance1(config)
}




// 方案三：继续优化方案
// export function request(config){
//   return new Promise((resolve, reject) => {
//     // 1.创建axios实例
//     const instance1 = axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:3000
//     })
//     // 2.发送网络请求，并将结果传递出去
//
//     instance1(config).then(res=>{
//       resolve(res)
//     }).catch(err=>{
//       reject(err)
//     })
//
//   })
// }







// 方案二：优化方案
// export function request(config) {
//   // 1.创建axios实例
//   const instance1 = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 3000
//   })
//   // 2.发送网络请求，并将结果传递出去
//   instance1(config.baseConfig)
//     .then(res => {
//       config.success(res)
//     }).catch(err => {
//     config.failure(err)
//   })
// }


// 方案一：初始方案
// export function request(config,success ,failure){
//
//   // 1.创建axios实例
//   const instance1 = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:3000
//   })
//
//   // 2.发送网络请求，并将结果传递出去
//   // 方式-：初始方案。
//   instance1(config)
//     .then(res=>{
//     // console.log(res)
//     success(res)
//   }).catch(res=>{
//     // console.log(res)
//     failure(res)
//   })
//
// }
