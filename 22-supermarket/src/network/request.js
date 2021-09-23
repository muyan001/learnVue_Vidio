import axios from "axios";

export default function request(config){
  //1.创建axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  // 2.创建拦截器

  instance.interceptors.request.use(config=>{
    return config
  },error => {
    console.log(error)
  })

  instance.interceptors.response.use(response=>{
   return response.data
  },error => {
    console.log(error)
  })

  // 3.发送真正的网络请求
  return instance(config)


}
