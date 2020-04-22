<template lang="pug">
    div.container
        .todo
            todo-input(
                @addTodo="addNewTodo"
                @checkAll="checkAll"
            )
            todo-list(
                :todos="todos"
                @checkTodo="checkTodo"
                @removeTodo = "removeTodo"
            )
</template>
<script>
import todoInput from './todoinput'
import todoList from './todoList'
export default {
    data(){
        return{
            todos: []
        }
    },
    components: {
         todoInput,
         todoList
    },
    methods: {
        addNewTodo(todo) {
            this.todos.push(todo) 
        },
        checkTodo(todo){
            this.todos = this.todos.map(item => item.id == todo.id ? todo : item)
        },
        removeTodo(todoId){
            this.todos = this.todos.filter(item => item.id !== todoId)
        },
        checkAll(){
            this.todos = this.todos.map(item => item.checked == false ? item.checked = true : '')
        }
        // removeAll(todoItems){
        //     this.todos = this.todos.filter(item => item.id !== todoItems.id)
        // }
    }
}
</script>
<style lang="scss" scoped>
    .todo {
  margin-top: 100px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
</style>