<template>
  <div>
    <h1 class="row-title">普通展示</h1>
    <div class="row">
      <MyButtom>默认按钮</MyButtom>
      <MyButtom type="primary">主要按钮</MyButtom>
      <MyButtom type="info">信息按钮</MyButtom>
      <MyButtom type="success">成功按钮</MyButtom>
      <MyButtom type="warning">警告按钮</MyButtom>
      <MyButtom type="danger">危险按钮</MyButtom>
    </div>
    <h1 class="row-title">朴素按钮</h1>
    <div class="row">
      <MyButtom plain>默认按钮</MyButtom>
      <MyButtom type="primary" plain>主要按钮</MyButtom>
      <MyButtom type="info" plain>信息按钮</MyButtom>
      <MyButtom type="success" plain>成功按钮</MyButtom>
      <MyButtom type="warning" plain>警告按钮</MyButtom>
      <MyButtom type="danger" plain>危险按钮</MyButtom>
    </div>
    <h1 class="row-title">圆角按钮</h1>
    <div class="row">
      <MyButtom round>默认按钮</MyButtom>
      <MyButtom type="primary" round>主要按钮</MyButtom>
      <MyButtom type="info" round>信息按钮</MyButtom>
      <MyButtom type="success" plain round>成功按钮</MyButtom>
      <MyButtom type="warning" plain round>警告按钮</MyButtom>
      <MyButtom type="danger" plain round>危险按钮</MyButtom>
    </div>
    <h1 class="row-title">禁用状态</h1>
    <div class="row">
      <MyButtom disabled>默认按钮</MyButtom>
      <MyButtom type="primary" disabled>主要按钮</MyButtom>
      <MyButtom type="info" disabled>信息按钮</MyButtom>
      <MyButtom type="success" disabled>成功按钮</MyButtom>
      <MyButtom type="warning" disabled>警告按钮</MyButtom>
      <MyButtom type="danger" disabled>危险按钮</MyButtom>
    </div>
    <h1 class="row-title">等待状态</h1>
    <div class="row">
      <MyButtom loading>默认按钮</MyButtom>
      <MyButtom type="primary" loading>主要按钮</MyButtom>
      <MyButtom type="info" loading>信息按钮</MyButtom>
      <MyButtom type="success" loading round>成功按钮</MyButtom>
      <MyButtom type="warning" loading round>警告按钮</MyButtom>
      <MyButtom type="danger" loading round>危险按钮</MyButtom>
    </div>
    <h1 class="row-title">图标按钮</h1>
    <div class="row">
      <MyButtom icon="file">默认按钮</MyButtom>
      <MyButtom type="primary" icon="gear">主要按钮</MyButtom>
      <MyButtom type="info" icon="folder" plain>信息按钮</MyButtom>
      <MyButtom type="success" icon="bug" plain>成功按钮</MyButtom>
      <MyButtom type="warning" icon="code" round>警告按钮</MyButtom>
      <MyButtom type="danger" icon="cube" round>危险按钮</MyButtom>
    </div>
    <h1 class="row-title">不同尺寸的按钮</h1>
    <div class="row">
      <MyButtom icon="file" size="small">默认按钮</MyButtom>
      <MyButtom type="primary" icon="gear" size="small">主要按钮</MyButtom>
      <MyButtom type="info" icon="folder" plain>信息按钮</MyButtom>
      <MyButtom type="success" icon="bug" plain>成功按钮</MyButtom>
      <MyButtom type="warning" icon="code" plain size="large">警告按钮</MyButtom>
      <MyButtom type="danger" icon="cube" plain size="large">危险按钮</MyButtom>
    </div>
    <h1 class="row-title">圆形按钮</h1>
    <div class="row">
      <MyButtom type="danger" circle>验</MyButtom>
      <MyButtom type="primary" icon="gear" circle></MyButtom>
      <MyButtom type="info" icon="folder" circle plain></MyButtom>
      <MyButtom type="success" icon="bug" circle plain></MyButtom>
      <MyButtom type="warning" icon="code" circle disabled></MyButtom>
      <MyButtom type="danger" icon="cube" circle disabled></MyButtom>
    </div>
    <h1 class="row-title">按钮事件</h1>
    <div class="row">
      <MyButtom type="primary" @click="clickHandler" ref="btnRef">主要按钮</MyButtom>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MyButtom from '@/components/button/Button.vue'

const btnRef = ref(null)
function clickHandler(e) {
  // console.log(e)
  console.log(btnRef.value._ref)
}
</script>
