export default {
  // 这里的content 可以简单的认为是store对象
  aChangePro(content,datasObj){
    setTimeout(()=>{

      // 这里需要调用commit函数
      content.commit('changePro',datasObj)
    },1000)
  },

  /**
   *  组合需求：将组件中的数据传递给 异步操作（active）后，将运行结果的信息返回给组件
   */

  aTransportChangePro(content,data){
    // 1.方法1：视频想到的方法
    setTimeout(()=>{
      content.commit('changePro',data.datas)
      console.log(data.datas.message) // 打印外面传递到数据
      data.datas.success() // 调用方法打印里面的数据
    },2000)

    // 2.方法2：使用promise方法
    // return new Promise((resolve, reject)=>{
    //   setTimeout(()=>{
    //     content.commit('changePro',data.datas)
    //     console.log(data.datas.message)
    //     resolve(data.datas.success)
    //   },2000)
    // })
  },



}
