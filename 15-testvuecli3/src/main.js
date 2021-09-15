import Vue from 'vue'
import App from './App.vue'

// 构建的提示信息
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// el:'#app' 与 $mount('#app') 是等价的
