import vue from 'vue'
import vuex from 'vuex'

import {DELPRO} from "./mutation.type";

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
  mutations:{
    // 参数：state  就是上面的state对象
    add(state){
       state.globalCount++
    },
    sub(state){
       state.globalCount--
    },
    addNum(state,payload){
      //1. 普通封装的计算
      // state.globalCount = state.globalCount + num

    //  2.特殊的提交封装
      state.globalCount = state.globalCount + payload.num
      console.log(payload)
    },

    addS(state,stu){
      state.students.push(stu)
    },
    changePro(state,data){
      state.info['phone']=data.payload
    },
    addPro(state,data){
      // state.info['addr'] = data.data    // 这种方式能添加数据，但是添加的数据不是响应式的
      //set(要修改的对象，索引值，修改后的值)，也可以向这样
      vue.set(this.state.info,'addr','礼嘉')    // 这种方式是相应式的

    },
    // 引用常量的方法名
    [DELPRO](state,obj){
      vue.delete(state.info,obj.payload)
    }



  },

  /**
   *  使用异常操作是，必须经过action后再经过mutation，，组件commit->action->mutation
   */
  actions:{
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



  },


  /**
   * 调用getters 相当于调用动态属性,,,里面的方法的参数只能是 getters、actions、mutations、state
   */
  getters:{
    // 参数：state  就是上面的state对象
    powerCounter(state){
      return state.globalCount * state.globalCount
    },
    // 获取年龄大于20的
    moreAge20Stu(state){
      return state.students.filter(s=> s.age>20)
    },
    // 获取年龄大于20的学生的个数
    moreAge20StuLen(state,getters){
      // 这里不能写getters.moreAge20Stu() ，否则会报错
      return getters.moreAge20Stu.length
    },

    // 获取年龄大于xx的
    moreAgexxStu(state){
      // 这个age才是页面传递过来的数据
      return function (age){
        return state.students.filter(s=>s.age>age)
      }
    }






  },
  // 可以设置小的store
  modules:{

    B

  }


})

//3.导出
export default store
