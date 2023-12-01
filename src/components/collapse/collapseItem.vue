<template>
  <div class="collapse-item">
    <div
      class="collapse-item__header"
      :class="{
        'is-active': isOpen
      }"
      @click="handleCilck"
    >
      <span>
        {{ title }}
      </span>
      <Icon icon="angle-right" class="header-angle" />
    </div>
    <Transition name="slide" v-on="events">
      <div v-show="isOpen" class="collapse-item__content"><slot /></div>
    </Transition>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'
import { collapseItemProps, collapseProvidekey } from './props'
import Icon from '../icon/index.vue'

const props = defineProps(collapseItemProps)

const collapseContext = inject(collapseProvidekey)

const isOpen = computed(() => {
  return collapseContext.value.value.includes(props.name)
})

const handleCilck = () => {
  collapseContext.toggle(props.name)
}

const reset = (el) => {
  el.style.maxHeight = ''
  el.style.overflow = el.dataset.oldOverflow
  el.style.paddingTop = el.dataset.oldPaddingTop
  el.style.paddingBottom = el.dataset.oldPaddingBottom
}

const events = {
  beforeEnter(el) {
    if (!el.dataset) el.dataset = {}

    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom

    el.style.maxHeight = 0
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
  },

  enter(el) {
    el.dataset.oldOverflow = el.style.overflow
    if (el.scrollHeight !== 0) {
      el.style.maxHeight = `${el.scrollHeight}px`
    } else {
      el.style.maxHeight = 0
    }
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
    el.style.overflow = 'hidden'
  },

  afterEnter(el) {
    el.style.maxHeight = ''
    el.style.overflow = el.dataset.oldOverflow
  },

  enterCancelled(el) {
    reset(el)
  },

  beforeLeave(el) {
    if (!el.dataset) el.dataset = {}
    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldOverflow = el.style.overflow

    el.style.maxHeight = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },

  leave(el) {
    if (el.scrollHeight !== 0) {
      el.style.maxHeight = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    }
  },

  afterLeave(el) {
    reset(el)
  },

  leaveCancelled(el) {
    reset(el)
  }
}
</script>
