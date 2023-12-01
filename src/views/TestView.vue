<template>
  <div>
    <!-- <div>
      <p>x:{{ x }}</p>
      <p>y:{{ y }}</p>
    </div> -->
    <div v-permission="show">333</div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
// import { useMouse } from '../hooks/useMouse'
// const { x, y } = useMouse()

const show = ref(false)

// const timer = setInterval(() => {
//   show.value = !show.value
// }, 3000)

// onUnmounted(() => {
//   clearInterval(timer)
// })
</script>
