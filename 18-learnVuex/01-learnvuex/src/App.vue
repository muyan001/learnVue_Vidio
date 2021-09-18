<template>
  <div id="app">
    <h1>{{$store.getters.powerCounter}}</h1>

    <h1>{{$store.state.globalCount}}</h1>
    <button @click="addClick">+</button>
    <button @click="subClick">-</button>

    <button @click="addClickNum(5)">+5</button>
    <button @click="addClickNum(10)">+10</button>
    <br>




    <span>**************************getters 的使用 ，就相当于动态属性 *************************** </span>

    <span>年龄大于20岁的学生</span>
    <h3>{{$store.getters.moreAge20Stu}}</h3>

    <span>获取年龄大于20的学生的个数</span>
    <h3>{{$store.getters.moreAge20StuLen}}</h3>

    <span> // 获取年龄大于xx的</span>
    <h3>{{$store.getters.moreAgexxStu(13)}}</h3>


    <button @click="addStu">添加学生</button>


    <h1>***************************************** 关于state中响应式系统的理解 </h1>
    <h3>{{$store.state.info}}</h3>
    <button @click="updataData(123456)">更改原有的属性</button>
    <button @click="addData('礼嘉')">添加新的属性</button>
    <button @click="delData('age')">删除age属性</button>


    <h1>***************************************** 关于action的理解 </h1>
    <h3>{{$store.state.info}}</h3>
    <button @click="asyncUpdateData(456789)">异步（active）更新原有的属性</button>
    <button @click="asyncTransportData(123123123)">异步（active）更新原有的属性并传递信息</button>


    <h1>***************************************** 关于module的理解 </h1>
    <h3>{{$store.state.B.name}}</h3>
    <h3>{{$store.getters.updateName}}</h3>
    <h3>{{$store.getters.updateName1}}</h3>

    <button @click="newName">更改火锅口味</button>
    <button @click="fullName">更改火锅辣度</button>




  </div>
</template>

<script>
import {DELPRO} from "./store/mutation.type";

export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods:{
    addClick(){
      // 提交 state.mutations 中设置的方法，  提交后，后台才会执行这个方法
      this.$store.commit('add')

    },
    subClick(){
      this.$store.commit('sub')
    },

    addClickNum(num){
      //1.payload 负载
      // 1. 普通的提交封装
      // this.$store.commit('addNum',num)

    //  2.特殊的提交封装.
      this.$store.commit({
        type:'addNum',
        num:num
      })
    },

    addStu(){
      const stu = {name:'123',age:25}
      this.$store.commit('addS',stu)
    },

    updataData(num){
      // this.$store.state.info['phone'] = 123
      this.$store.commit({
        type:'changePro' ,// 这个是对应的mutation、getters中某个方法名
        payload:num       // 这个是对应要更改的数据
      })
    },

    addData(pro){
      this.$store.commit({
        type:'addPro',
        data:pro
      })
      console.log(this.$store.state.info)

    },
    delData(pro){
      this.$store.commit({

        // 这个是对应的mutation、getters中某个方法名 ,,,经常需要复制方法名，官方推荐了常量的用法，，，在某个单独的文件里面设置常量，在store/index.js 里面函数名使用常量，在引用那个常量函数的组件中，方法名也使用常量
        type:DELPRO,
        payload:pro
      })

    },

    // ***************************************** 关于action的理解
    asyncUpdateData(num){
      // 异步操作是 调用action的函数时，这里是$store.dispatch   而不是 $store.commit
      this.$store.dispatch({
        type:'aChangePro',
        payload:num
      })

    },
    /**
     *  组合需求：将组件中的数据传递给 异步操作（active）后，将运行结果的信息返回给外面组件
     */
    asyncTransportData(num){
      this.$store.dispatch({
        type:'aTransportChangePro',

        datas:{
          payload:num,
          message: '外面的数据：请问请求成功了吗',
          success : function (){
            console.log('里面回话：里面已经完成了')
          }
        }
      })
      //   .then(data=>{
      //   data()
      // })
    },

    // **************************** 关于module的理解

    newName(){
      this.$store.commit({
        type:'changeName',
        message:'番茄味'
      })
    },

    fullName(){
      this.$store.dispatch({
        type:'centerSmell',
        message:'中辣'
      })
    }




  }
}
</script>

<style>

</style>
