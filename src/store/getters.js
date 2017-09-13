
export default {
  todos (state) {
    return state.todos
  },
  completeSize (state) {
    return state.todos.reduce((preTotal, todo) => {
      return preTotal + (todo.complete ? 1 : 0)
    }, 0)
  },
  totalSize (state) {
    return state.todos.length
  },
  isAllComplete (state, getters) {
    return getters.completeSize == getters.totalSize && getters.totalSize>0
  }
}