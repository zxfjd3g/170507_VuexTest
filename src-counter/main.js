import Vue from 'vue'
import app from './app.vue'
import store from './store'

new Vue({
  el: '#app',
  render: h => h(app),
  store  // 配置vuex的store -->所有的组件对象都多了个属性: $store
})