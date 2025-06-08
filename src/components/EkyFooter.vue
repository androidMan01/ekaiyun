<template>
  <footer class="app-footer">
      <div>版权所有： 出口贸易有限公司</div>
  </footer>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'AppHeader',
  setup() {
    const router = useRouter()

    const menuItems = ref([
      { path: '/', title: '首页' },
      { path: '/about', title: '关于我们' },
      { path: '/services', title: '服务项目' },
      { path: '/contact', title: '联系我们' }
    ])

    return { menuItems }
  }
}
</script>

<style scoped>
.app-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
}
</style>