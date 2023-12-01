<template>
  <h1 class="row-title">对话框示例</h1>
  <div class="row">
    <MyButton type="primary" @click="visible = true">对话框一</MyButton>
    <MyButton type="primary" @click="visible2 = true">对话框二</MyButton>
    <MyButton type="primary" @click="visible3 = true">对话框三</MyButton>
  </div>
  <MyDialog v-model:visible="visible" @close="visible = false"> 这是一个基本的对话框 </MyDialog>
  <MyDialog
    v-model:visible="visible2"
    @close="visible2 = false"
    title="这是一个自定义标题"
    width="30vw"
    top="40vh"
  >
    这是一个基本的对话框
  </MyDialog>
  <MyDialog v-model:visible="visible3" @close="visible3 = false">
    这是一个基本的对话框
    <template #footer>
      <MyButton @click="visible3 = false">取消</MyButton>
      <MyButton type="primary" @click="visible3 = false">确定</MyButton>
    </template>
  </MyDialog>
</template>

<script setup>
import { ref } from 'vue'
import MyDialog from '@/components/dialog/dialog.vue'
import MyButton from '@/components/button/button.vue'

const visible = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
</script>
