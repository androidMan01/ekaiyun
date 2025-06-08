

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 在挂载前设置 body 样式
document.body.style.margin = '0';

const app = createApp(App)
app.use(router)
app.mount('#app')
