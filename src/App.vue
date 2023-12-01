<template>
  <div>
    <nav>
      <RouterLink v-for="item in linkList" :key="item.name" :to="item.path">{{
        item.name
      }}</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { reactive } from 'vue'
import { autoImport } from './router/index'

const arr = autoImport()

const linkList = reactive(arr)
console.log(linkList)
</script>

<style lang="scss">
nav {
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
}

.active {
  border-bottom: 3px solid hsla(160, 100%, 37%, 1);
}

h1.row-title {
  text-align: center;
  // margin-top: 5em;
  font-weight: 200;
  margin: 20px 0;
}

.row {
  display: flex;
  justify-content: space-evenly;
}
.content {
  width: 800px;
  margin: 50px auto;
}
</style>
