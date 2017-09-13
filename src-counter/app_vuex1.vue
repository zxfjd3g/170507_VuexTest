<template>
  <div>
    <p>clicked: {{$store.state.count}} times, count is {{$store.getters.oddOrEven}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  export default {
    mounted () {
      console.log(this.$store)
    },

    methods: {
      increment () {
        // 触发 vuex的action调用(increment)
        this.$store.dispatch('increment')
      },
      decrement () {
        this.$store.dispatch('decrement')
      },
      incrementIfOdd () {
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync () {
        this.$store.dispatch('incrementAsync')
      }
    }
  }
</script>

<style>

</style>