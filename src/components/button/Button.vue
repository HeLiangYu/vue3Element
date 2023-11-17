<template>
  <button
    class="my-button"
    :class="{
      [`my-button-${type}`]: type,
      [`my-button-${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-disabled': disabled
    }"
    :disabled="disabled"
  >
    <Icon class="icon" icon="spinner" spin v-if="loading" />
    <Icon class="icon" :icon="icon" v-if="icon" />
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script setup>
import propObj from './props'
import Icon from '../icon/index.vue'

defineOptions({
  name: 'my-button'
})

defineProps(propObj)
</script>

<style lang="scss" scoped>
.icon {
  margin-right: 4px;
}
</style>
