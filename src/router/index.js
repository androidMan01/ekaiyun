import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
import EkyHome from '../views/EkyHome.vue'
import EkyAbout from '../views/EkyAbout.vue'
import EkyServices from '../views/EkyServices.vue'
import EkyContact from '../views/EkyContact.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: EkyHome,
        meta: { title: '浙江俄凯运供应链管理有限公司' }
    },
    {
        path: '/about',
        name: 'About',
        component: EkyAbout,
    },
    {
        path: '/services',
        name: 'Services',
        component: EkyServices,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: EkyContact,
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router