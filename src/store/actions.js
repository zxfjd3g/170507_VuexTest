import storageUtil from '../util/storageUtil'
import {RECEIVE_TODOS, ADD_TODO, DELETE_TODO, SELECT_ALL, CLEAR_ALL_COMPLETED} from './types'
export default {
  readTodos ({commit}) {
    setTimeout(() => {
      // 读取todos
      const todos = storageUtil.readTodos()
      // commit
      commit(RECEIVE_TODOS, {todos}) // 交给mutation的数据必须包含在一个对象中
    }, 1000)
  },

  addTodo ({commit}, todo) {
    commit(ADD_TODO, {todo})
  },

  deleteTodo ({commit}, index) {
    commit(DELETE_TODO, {index})
  },

  selectAll ({commit}, checkAll) {
    commit(SELECT_ALL, {checkAll})
  },

  clearAllCompleted ({commit}) {
    commit(CLEAR_ALL_COMPLETED)
  }
}