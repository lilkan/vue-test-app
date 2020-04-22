<template lang="pug">
    .todo-list(v-if="todos.length")
        .content
            ul.list
                li.item(v-for="todo in filteredItems") 
                    todo-item(
                        :todo="todo"
                        @checkTodo="checkTodo"
                        @removeTodo="removeTodo"
                    )
        .footer
            .footer-content
                .counter
                | Кол-во заданий: {{filteredItems.length}}
                .filter
                    button(type="button" @click="applyFilter('all')" :class="{active: filter == 'all'}") all
                    button(type="button" @click="applyFilter('active')" :class="{active: filter == 'active'}") active
                    button(type="button" @click="applyFilter('done')" :class="{active: filter == 'done'}") done 
                    button(type="button" @click="removeAll") delet all
</template>
<script>
import todoItem from "./todoItem"
export default {
    data(){
        return {
            filter: "all",
        }
    },
    props: { 
        todos: Array
    },
    computed: {
        filteredItems() {
            switch(this.filter){
                case'all':
                    return this.todos
                case'active':
                    return this.todos.filter(item => !item.checked)
                case 'done':
                    return this.todos.filter(item => item.checked)
            }
        },
        checkedItems() {
            return this.todos.filter(item => item.checked)
        }
    },
    components: {
        todoItem
    },
    methods: {
        checkTodo(todo){
            this.$emit('checkTodo', todo)
        },
        removeTodo(todoId){
            this.$emit('removeTodo', todoId)
        },
        applyFilter(filterName){
            this.filter = filterName
        },
        removeAll(){
            this.$emit('removeTodo')
            console.log(checkedItems)
        }
    }
}
</script>
<style lang="scss" src="styles/todolist.scss">

</style>