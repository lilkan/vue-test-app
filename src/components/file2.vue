<template lang="pug">
    div
        h1 kek
        button(@click="randomClick") {{click}}
</template>
<script>
export default { 
    data() {
        return{
            click: "Click!!!"
        }
    },
    methods:{
        randomClick(){
            this.$emit('buttonWasClicked', 'yo!')
        }
    }
}
</script>
<style lang="scss" scoped>

</style>