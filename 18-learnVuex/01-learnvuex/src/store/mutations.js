import vue from "../../../../vue";
import {DELPRO} from "./mutation.type";

export default {
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



}
