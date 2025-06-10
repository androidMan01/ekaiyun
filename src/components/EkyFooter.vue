<template>
  <footer class="app-footer">
    <div class="footer-group">
      <div>
        <span>地 址：浙江省义乌市福田街道城北路699号宏基大厦7楼705-707室</span>
      </div>
      <div>
        <span>联系人：</span><span>吴可可销售经理 手机：13429028788 QQ:554438788 </span><br>
              <span>孙孟典副总经理 手机：15057822888</span>
      </div>
      <div>
        <span>邮  件 ：keith@ekaiyun.cc</span>
      </div>
      <div class="footer-line"></div>
      <div>Copyright © 2017-2025 浙江俄凯运供应链管理有限公司 (ZheJiang Ekaiyun Supply Chain Management Co.,Ltd.) All Rights Reserved 浙ICP备19019857号-2</div>
    </div>
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
  flex-flow: column nowrap;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgb(15, 31, 43);
  color: white;
}
.footer-line{
  margin: 20px;
  border-top: 1px solid #333;
}
</style>