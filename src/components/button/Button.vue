<template>
  <button
    ref="buttonRef"
    class="my-button"
    :class="{
      [`my-button-${type}`]: type,
      [`my-button-${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-disabled': disabled,
      'is-circle': circle
    }"
    :disabled="disabled"
  >
    <Icon class="icon" icon="spinner" spin v-if="loading" />
    <Icon class="icon" :icon="icon" v-if="icon" />
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import propObj from './props'
import Icon from '../icon/index.vue'

defineOptions({
  name: 'my-button'
})

defineProps(propObj)

const buttonRef = ref(null)

defineExpose({
  _ref: buttonRef
})
</script>

<style lang="scss" scoped>
// 组合选择器 只有当.icon和span同时存在，给span添加样式
.icon + span {
  margin-left: 4px;
}
</style>
