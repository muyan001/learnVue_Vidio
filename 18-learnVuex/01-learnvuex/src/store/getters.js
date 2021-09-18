export default {
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

}
