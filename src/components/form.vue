<template lang="pug">
    div
        span {{restProp}}
        input(type="text" v-model="text")
        br
        div {{text}}
        br
        div
            input(type="checkbox" v-model='payment' value="visa") 
            span visa
            input(type="checkbox" v-model='payment' value="master") 
            span mastercard 
            input(type="checkbox" v-model='payment' value="mir") 
            span мир
        div {{payment}}

        input(type="radio" v-model="sex" value="male")
        span муж
        input(type="radio" v-model="sex" value="female")
        span жен
        div {{sex}}
        slot(name="one")
        hr
        slot(name="two")
        hr
        slot(name="default")
</template> 
<script>
export default {
    props: {
        restProp: true
    },
    data() {
        return {
            text: 'ddee',
            payment: [],
            sex: ""
        }
    },
    mounted(){
        this.text = "hello",
        this.sex = "male",
        this.payment = ['visa','mir']
    }
}
</script>