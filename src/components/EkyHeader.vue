<template>
  <header class="app-header">
    <div class="logo-txt">俄凯运</div>
    <nav class="nav-menu">
      <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          active-class="active"
      >
        {{ item.title }}
      </router-link>
    </nav>
  </header>
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
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgb(15, 31, 43);
  color: white;
}

.logo {
  width: 50px;
  height: 50px;
}
.logo-txt{
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-menu {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  background-color: #42b983;
  font-weight: bold;
}
</style>