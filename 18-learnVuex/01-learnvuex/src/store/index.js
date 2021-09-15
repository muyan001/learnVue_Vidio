import vue from 'vue'
import vuex from 'vuex'

//1.安装插件
vue.use(vuex)


//2.创建对象
const store = new vuex.Store({
  state:{
    globalCount:100
  },
  mutations:{
    // 参数：state  就是上面的state对象
    add(state){
       state.globalCount++
    },
    sub(state){
       state.globalCount--
    }
  },
  actions:{

  },
  getters:{},
  modules:{}


})

//3.导出
export default store
