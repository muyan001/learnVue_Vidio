// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


const mytest = {
  template:'<h1>{{message}}</h1>',
  data(){
    return {
      message:'你好'
    }
  }

}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render:function (createElement){
    // 1.createElement普通用法：createElement('原始名称',{属性名称：属性值},['填充的内容'])
    // return createElement('h1',{'class':'123'},['测试createElement函数'])


  //  2.createElement 高级用法：createElement（组件名）
    return createElement(mytest)


  }
//  vue解析template 使用vue-template-compiler  直接将模板解析成render了
})
