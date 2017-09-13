import {RECEIVE_TODOS, ADD_TODO, DELETE_TODO,SELECT_ALL, CLEAR_ALL_COMPLETED} from './types'

export default {
  [RECEIVE_TODOS] (state, {todos}) {
    state.todos = todos
  },
  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo)
  },
  [DELETE_TODO] (state, {index}) {
    state.todos.splice(index, 1)
  },
  [SELECT_ALL] (state, {checkAll}) {
    state.todos.forEach(todo => {
      todo.complete = checkAll
    })
  },
  [CLEAR_ALL_COMPLETED] (state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  }
}