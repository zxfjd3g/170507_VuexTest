<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todos-header/>
      <list/>
      <todos-footer/>
    </div>
  </div>
</template>

<script>
  import header from './header.vue'
  import list from './list.vue'
  import footer from './footer.vue'

  import storageUtil from '../util/storageUtil'

  export default {
    mounted () {
      //this.todos = storageUtil.readTodos()
      this.$store.dispatch('readTodos')
    },

    components: {
      'todos-header': header,
      list,
      'todos-footer': footer
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>