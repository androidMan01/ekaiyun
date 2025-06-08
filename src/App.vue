<script setup>
import EkyHeader from './components/EkyHeader.vue'
import EkyFooter from './components/EkyFooter.vue'
import EkyMain from './components/EkyMain.vue'
</script>

<template>
  <div class="app">
    <EkyHeader />
    <EkyMain />
    <EkyFooter />
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
</style>
