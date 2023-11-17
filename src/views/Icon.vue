<template>
  <div class="content">
    <h1 class="row-title">普通引入</h1>
    <div class="row">
      <Icon icon="user-secret" />
      <Icon icon="bars" />
      <Icon icon="shield-halved" />
      <Icon icon="file" />
      <Icon icon="filter" />
      <Icon icon="gear" />
      <Icon icon="barcode" />
      <Icon icon="folder" />
      <Icon icon="folder-open" />
    </div>
    <h1 class="row-title">设置不同的大小</h1>
    <div class="row">
      <Icon icon="user-secret" size="2xs" />
      <Icon icon="bars" size="xs" />
      <Icon icon="shield-halved" size="sm" />
      <Icon icon="file" size="lg" />
      <Icon icon="filter" size="xl" />
      <Icon icon="gear" size="2xl" />
      <Icon icon="barcode" size="2x" />
      <Icon icon="folder" size="3x" />
      <Icon icon="folder-open" size="4x" />
    </div>
    <h1 class="row-title">旋转与翻转</h1>
    <div class="row">
      <Icon icon="user-secret" rotation="90" size="xl" />
      <Icon icon="bars" rotation="270" size="xl" />
      <Icon icon="shield-halved" rotation="180" size="xl" />
      <Icon icon="file" flip="horizontal" size="xl" />
      <Icon icon="filter" flip="vertical" size="xl" />
      <Icon icon="folder-open" flip="both" size="xl" />
    </div>
    <h1 class="row-title">动画效果</h1>
    <div class="row">
      <Icon icon="user-secret" size="xl" beat />
      <Icon icon="bars" size="xl" beat-fade />
      <Icon icon="shield-halved" size="xl" bounce />
      <Icon icon="file" size="xl" fade />
      <Icon icon="filter" size="xl" flip />
      <Icon icon="gear" size="xl" shake />
      <Icon icon="barcode" size="xl" spin />
      <Icon icon="folder" size="xl" spin spin-reverse />
      <Icon icon="folder-open" size="xl" spin-pulse />
    </div>
    <h1 class="row-title">添加自定义属性</h1>
    <div class="row">
      <Icon icon="user-secret" size="xl" type="primary" />
      <Icon icon="bars" size="xl" type="success" />
      <Icon icon="shield-halved" size="xl" type="info" />
      <Icon icon="file" size="xl" type="warning" />
      <Icon icon="filter" size="xl" type="danger" />
      <Icon icon="gear" size="xl" color="#e47412" />
      <Icon icon="barcode" size="xl" color="#7ec102" />
      <Icon icon="folder" size="xl" color="skyblue" />
      <Icon icon="folder-open" size="xl" color="rgba(122, 122, 122, .5)" />
    </div>
  </div>
</template>

<script setup>
import Icon from '@/components/icon/index.vue'
</script>
