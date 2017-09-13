<template>
  <div>
    <p>clicked: {{count}} times, count is {{oddOrEven}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    mounted () {
      console.log(this.$store)
    },

    /*
     {
       count () {
        return this.$store.getters.count
       },
       oddOrEven () {
        return this.$store.getters.oddOrEven
       }
     }
     */
    computed: mapGetters({
      count: 'count',
      oddOrEven: 'oddOrEven2'
    }),

    methods: mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
  }
</script>

<style>

</style>