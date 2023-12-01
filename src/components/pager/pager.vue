<template>
  <div
    class="pager"
    :class="{
      [`pager--${type}`]: type,
      [`pager--${size}`]: size
    }"
  >
    <a
      :class="{
        disabled: isFirst
      }"
      @click="goToFirstCount"
    >
      首条
    </a>
    <a
      :class="{
        disabled: isFirst
      }"
      @click="preCount"
    >
      <MyIcon icon="angles-left" />
    </a>
    <a
      v-if="total > pagerCount && currentPage > halfCount"
      :class="{
        active: isFirst
      }"
      @click="goToFirstCount"
    >
      1
    </a>
    <a v-if="total > pagerCount && currentPage > halfCount">
      <MyIcon icon="ellipsis" size="sm" />
    </a>
    <a
      :class="{
        active: currentPage === item
      }"
      v-for="item in currentList"
      :key="item"
      @click="currentPageEmit(item)"
    >
      {{ item }}
    </a>
    <a
      v-if="total > pagerCount && currentPage < total - halfCount"
      @mouseenter="handleMouseEnter('next')"
      @mouseleave="handleMouseLeave('next')"
      title="向后5条"
    >
      <MyIcon v-if="showNextMore" icon="angle-right" />
      <MyIcon v-else icon="ellipsis" size="sm" />
    </a>
    <a
      v-if="total > pagerCount && currentPage < total - halfCount"
      :class="{
        avtive: isLast
      }"
      @click="goToLastCount"
    >
      {{ total }}
    </a>
    <a :class="{ disabled: isLast }" @click="nextCount">
      <MyIcon icon="angles-right" />
    </a>
    <a :class="{ disabled: isLast }" @click="goToLastCount">尾条</a>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import propObj from './props'
import MyIcon from '../icon/index.vue'

defineOptions({
  name: 'MyPager'
})

const props = defineProps(propObj)

const showNextMore = ref(false)
const showPrevMore = ref(false)

const emit = defineEmits(['current-change'])
const currentPageEmit = (page) => emit('current-change', page)

const goToFirstCount = () => {
  if (props.currentPage === 1) return
  currentPageEmit(1)
}

const goToLastCount = () => {
  if (props.currentPage === props.total) return

  currentPageEmit(props.total)
}

const preCount = () => {
  if (props.currentPage === 1) return

  currentPageEmit(props.currentPage - 1)
}

const nextCount = () => {
  if (props.currentPage === props.total) return

  currentPageEmit(props.currentPage + 1)
}

// 是否是首位
const isFirst = computed(() => {
  return props.currentPage === 1
})

// 是否是末位
const isLast = computed(() => {
  return props.currentPage === props.total
})

const halfCount = computed(() => {
  return Math.ceil(props.pagerCount / 2)
})

const currentList = computed(() => {
  const list = []
  // 总页码数量小于显示数
  if (props.total <= props.pagerCount) {
    for (let i = 1; i <= props.total; i++) {
      list.push(i)
    }
  } else {
    // 当页码比较靠前
    if (props.currentPage <= halfCount.value) {
      for (let i = 1; i <= halfCount.value + 1; i++) {
        list.push(i)
      }
    } else if (props.currentPage >= props.total - halfCount.value) {
      // 页码比较靠后
      for (let i = props.total - halfCount.value - 1; i <= props.total; i++) {
        list.push(i)
      }
    } else {
      // 页码靠中
      for (let i = props.currentPage - 2; i <= props.currentPage + 2; i++) {
        list.push(i)
      }
    }
  }
  return list
})

const handleMouseEnter = (type) => {
  if (type === 'next') {
    showNextMore.value = true
  }
}

const handleMouseLeave = (type) => {
  if (type === 'next') {
    showNextMore.value = false
  }
}
</script>
