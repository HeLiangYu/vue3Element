<template>
  <div class="collapse">
    <slot />
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'
import { collapseProps, collapseProvidekey } from './props'
defineOptions({
  name: 'my-collapse'
})

const props = defineProps(collapseProps)

const emit = defineEmits(['update:modelValue', 'change'])
const updateValue = (arr) => emit('update:modelValue', arr)

const _valueName = ref(props.modelValue)
const toggle = (name) => {
  let _value = [..._valueName.value]
  const index = _value.findIndex((item) => item === name)

  if (index !== -1) {
    if (props.accordion) {
      _value = []
    } else {
      _value.splice(index, 1)
    }
  } else {
    if (props.accordion) {
      _value = [name]
    } else {
      _value.push(name)
    }
  }
  _valueName.value = _value
  updateValue(_value)
  emit('change', _value)
}

provide(collapseProvidekey, {
  value: _valueName,
  toggle
})
</script>
