<template lang="pug">
    .todo-input
        .checkall(@click="checkAll")
            .arrow(:class="{active: checked}")
        input(type="text" placeholder="Input" v-model="todo.name" @keydown.enter="addTodo").input
</template>
<script>
let unicId = 0;
export default {
    data(){
        return{
            checked: false,
            todo: {
                id: 0,
                name: '',
                checked: false 
            }
        }
    },
    methods: {
        addTodo() {
            this.todo.id = unicId++;
            this.$emit('addTodo', {...this.todo})
            this.todo.name = ""
        },
        checkAll() {
            this.checked = !this.checked
            this.$emit('checkAll')
        }
    }
}
</script>
<style lang="scss" src="styles/todoinput.scss">

</style>