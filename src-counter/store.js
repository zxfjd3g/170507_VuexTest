/**
 * store对象模块
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*
相当于data的对象
 */
const state = { // 指定属性并初始化数据
  count: 0
}

/*
 mutations是一个对象
 包含多个用于更新state的方法(mutation)
 如何调用: 通过在action中调用commit(mutationName)来触发
 */
const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

/*
actions是一个对象,
包含多个触发mutation执行的方法(action)
在action中可以执行异步代码/逻辑代码
如何调用?: 在组件中通过$store.dispatch(actionName)
 */
const actions = {
  increment ({commit}) {
    commit('INCREMENT')
  },

  decrement ({commit}) {
    commit('DECREMENT')
  },

  incrementIfOdd ({commit, state}) {
    if(state.count%2===1) {
      commit('INCREMENT')
    }
  },

  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}

/*
 getters是一个对象
 包含了是多个计算属性(getter)方法
 */
const getters = {
  oddOrEven2 (state) {
    return state.count%2==0 ? '偶数' : '奇数'
  },
  count (state) {
    return state.count
  }
}

// 向外暴露store实例对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
