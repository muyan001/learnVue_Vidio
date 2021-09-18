export default {
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
