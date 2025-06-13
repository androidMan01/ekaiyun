<script setup>
import EkyHeader from './components/EkyHeader.vue'
import EkyFooter from './components/EkyFooter.vue'
import EkyMain from './components/EkyMain.vue'
</script>

<template>
  <div class="app">
    <EkyHeader />
    <div class="container">
      <EkyMain />
      <EkyFooter />
    </div>
  </div>
</template>

<style scoped>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container{
  height: calc(100vh - 80px);
  overflow-y: auto;
}
</style>
