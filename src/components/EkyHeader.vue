<template>
  <header class="app-header">
    <img class="logo" src="@/assets/logotxt.png">
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
  height: 80px;
  //background-color: #ffffff;
  color: white;
  background: linear-gradient(to bottom, #ffffff, #f9f9f9);
}

.logo {
  height: 70px;
}
.logo-txt{
  font-size: 1.5rem;
  font-weight: bold;
  height: 100px;
}

.nav-menu {
  display: flex;
  gap: 1.5rem;
  margin-right: 35px;
}

.nav-link {
  color: #333333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(15, 31, 43, 0.1);
}

.nav-link.active {
  background-color: #42b983;
  color: #ffffff;
  font-weight: bold;
}
</style>