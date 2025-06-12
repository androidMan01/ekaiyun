<template>
  <footer class="app-footer">
    <div class="footer-group">
      <div>
        地&nbsp;&nbsp;&nbsp;&nbsp;址：浙江省义乌市福田街道城北路699号宏基大厦7楼705-707室
      </div>
      <div>
        联系人：吴可可（销售经理） 手机：13429028788 QQ:554438788 <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;孙孟典（总经理） 手机：15057822888<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;郭政副（总经理） 手机：18554858948  邮箱：zguo@f5strans.ru
      </div>
      <div>
        <span>邮&nbsp;&nbsp;&nbsp;&nbsp;箱：keith@ekaiyun.cc</span>
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
  line-height: 1.7;
}
.footer-line{
  margin: 20px;
  border-top: 1px solid #333;
}
</style>