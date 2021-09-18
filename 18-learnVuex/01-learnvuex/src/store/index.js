import vue from 'vue'
import vuex from 'vuex'

import actions from './actions'
import mutations from "./mutations";
import getters from "./getters";
import moduleB from "./modules/moduleB";

//1.安装插件
vue.use(vuex)

const B = {
  state: {
    name:'火锅'

  },
  mutations: {
    changeName(state,payload){
      state.name = state.name + payload.message
    }
  },
  actions: {

    centerSmell(context,payload){
      setTimeout(()=>{
        context.commit('changeName',payload)
        console.log("火锅口味-辣度值")
        console.log(context)
      },2000)
    }

  },
  getters: {
    updateName(state){
      return state.name + '小面'
    },
    updateName1(state,getters,rootState){
      return state.name + getters.updateName + rootState.globalCount
    }
  }
}

const state = {
  /**
   *  state 中初始化的数据是响应式的，如果初始化后添加数据，或者删除数据，是做不到响应式的
   *    比如：info对象中，初始化只有name，age，phone三个属性，更改这三个属性的值可以做到响应式，但是如果直接添加一个属性addr并赋值是做不到响应式的，同理，删除一个属性也做不到响应式。
   *
   *    但是：如果真的要添加一个属性，并且是响应式的该怎么办呢？
   *    不能使用这种方式：$store.info['addr'] = '礼嘉'
   *    但是可以使用： Vue.set($store.info,'dadr','礼嘉') ，，，这种方式本身是响应式的，会将这个数据加入响应式系统里面
   *
   *    同理： 删除可以使用： Vue.delete($store.infor,'age')
   */

  globalCount:100,
  students:[
    {"name":'张三',"age":18},
    {"name":'李四',"age":19},
    {"name":'王五',"age":24},
    {"name":'赵六',"age":12}
  ],
  info:{
    name:'小米',
    age:54,
    phone: '10086'
  }
}

//2.创建对象
const store = new vuex.Store({
  state:state,

  /**
   *  使用这个属性中的方法时，组件必须调用commit方法,,,,,,组件commit -> mutation
   */
  mutations:mutations,
  /**
   *  使用异常操作是，必须经过action后再经过mutation，，组件commit->action->mutation
   */
  actions:actions,

  /**
   * 调用getters 相当于调用动态属性,,,里面的方法的参数只能是 getters、actions、mutations、state
   */
  getters:getters,
  // 可以设置小的store
  modules:{
    B:moduleB
  }

})

//3.导出
export default store
