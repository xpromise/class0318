<template>
  <HelloWorld name="jack" :age="age" sex="男">
    <!-- <template v-slot:header> -->
    <template #header="{age}">
      <h1>header...</h1>
      <p>{{age}}</p>
    </template>
  </HelloWorld>
  <button @click="age++">按钮</button>
  <Composed/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Composed from './components/Composed'

export default {
  name: 'App',
  data() {
    return {
      age: 18
    }
  },
  components: {
    HelloWorld,
    Composed
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
