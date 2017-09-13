import Vue from 'vue'
import app from './components/app.vue'
import './base.css'
import store from './store'

// 创建vm对象
new Vue({
  el: '#app',
  render: h => h(app),
  store
})