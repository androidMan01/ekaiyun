import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
import EkyHome from '../views/EkyHome.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: EkyHome,
        meta: { title: '首页' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router