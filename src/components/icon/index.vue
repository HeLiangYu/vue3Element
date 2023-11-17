<template>
  <font-awesome-icon
    :icon="icon"
    v-bind="filterProp"
    :class="{ 'icon-color': true, [`icon-${type}-color`]: type }"
    :style="{ color: color }"
  />
</template>

<script setup>
import propObj from './props'
import { omit } from 'lodash-es'

defineOptions({
  name: 'Icon'
})

const prop = defineProps(propObj)
const icon = 'fa-solid fa-' + prop.icon
const filterProp = omit(prop, ['icon', 'type'])
</script>

<style lang="scss" scoped></style>
