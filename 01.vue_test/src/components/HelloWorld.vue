<template>
  <div class="hello">
    <slot name="header" age="18" />  
    <h1 v-pre>{{ name }}</h1>
    <h1 v-once>{{ $attrs.age }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    name: String
  },
  // 让$attr上的属性不显示在元素上
  inheritAttrs: false,
  mounted() {
    console.log(this);
  },
  // updated() {
  //   console.log(this.$attrs.age);
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
