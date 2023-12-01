<template>
  <Teleport to="body">
    <Transition name="dialog-fade">
      <div
        class="dialog_wrapper"
        v-show="visible"
        @click="handleModelClick"
        @mousedown="onMouseDown"
        @mouseup="onMouseUp"
      >
        <div class="dialog" :style="{ marginTop: top || '', width: width || '' }">
          <div class="dialog_header">
            <slot name="title">
              <span class="dialog_title">{{ title }}</span>
            </slot>

            <!-- 关闭按钮 -->
            <button class="dialog_headerbtn" @click="handleClose">
              <MyIcon class="icon-close" icon="xmark" />
            </button>
          </div>
          <div class="dialog_body"><slot /></div>
          <div class="dialig_footer" v-if="$slots.footer"><slot name="footer" /></div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import propObj from './props'
import MyIcon from '@/components/icon/index.vue'
defineOptions({
  name: 'MyDialog'
})

const { title } = defineProps(propObj)
const emit = defineEmits(['update:visible', 'close'])

const emitVisible = (val) => emit('update:visible', val)
const emitClose = () => emit('close')

const handleClose = () => {
  emitVisible(false)
  emitClose()
}

// 点击mask关闭弹窗
let mouseDownTarget = null
let mouseUpTarget = null

function onMouseDown(e) {
  mouseDownTarget = e.target === e.currentTarget
}
function onMouseUp(e) {
  mouseUpTarget = e.target === e.currentTarget
}

function handleModelClick() {
  if (mouseDownTarget && mouseUpTarget) {
    emitClose()
  }
  mouseDownTarget = mouseUpTarget = false
}
</script>
