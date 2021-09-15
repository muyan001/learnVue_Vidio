import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,   // 这里挂载了相当于  Vue.prototype.$store = store  // 设置全局属性
  render: h => h(App)
})
