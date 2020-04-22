<template lang="pug">
#app
  h1 {{msg}}
  .square
  app-form(
    :restProp="someNumber"
  )
    div(slot="one")
      span llll
    h1(slot="two") sdsadads
    p ihuuihiuhiu
  div
    app-file
  div
    app-file2(
      @buttonWasClicked="buttonClicked"
    )
</template>

<script>
import form from './components/form'
import file from './components/file'
import file2 from './components/file2'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    someNumber() {
      return 2 + 3
    }
  },
  methods:{
    buttonClicked(msg){
      console.log("sss", msg)
    }
  },
  components: {
    appForm: form,
    appFile: file,
    appFile2: file2
  }
} 
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} 
.square{
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
</style>
