<template>
  <h2>Composed</h2>
  <!-- <p>{{data.num}}</p>
  <p>{{data.name}}</p> -->
  <p>{{num}}</p>
  <p>{{name}}</p>
  <button @click="handleClick">++++</button>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

export default {
    name: 'Composed',
    setup() {
        // setup 相当于beforeCreate created 生命周期函数
        console.log('setup');
        // 设置mounted函数，并没有触发
        // setup结束后会自动触发
        onMounted(() => {
            console.log('onMounted');
        })

        onBeforeMount(() => {
            console.log('onBeforeMount');
        })

        onBeforeUpdate(() => {
            console.log('onBeforeUpdate');
        })

        onUpdated(() => {
            console.log('onUpdated');
        })
        
        onBeforeUnmount(() => {
            console.log('onBeforeUnmount');
        })

         onUnmounted(() => {
            console.log('onUnmounted');
        }) 

        // 定义响应式数据
        const data = reactive({
            num: 0,
            name: 'jack'
        }) 

        const handleClick = () => {
            data.num++;
        }

        // 返回值对象，上面的数据都会挂载到this上
        return {
            ...toRefs(data),
            handleClick
        }

    }
}
</script>

<style>

</style>