import Vue from 'vue'
import App from './App.vue'
import todo from './components/todo.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#todo',
  render: h =>h(todo)
})
