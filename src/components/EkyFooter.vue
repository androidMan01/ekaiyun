<template>
  <footer class="app-footer">
    <div class="footer-group">
      <div class="contact-cell">
        <div class="contact-title"><span>地</span><span>址</span></div>
        <div>：</div>
        浙江省义乌市福田街道城北路699号宏基大厦7楼705-707室
      </div>
      <div class="contact-cell">
        <div class="contact-title"><span>联</span><span>系</span><span>人</span></div>
        <div>：</div>
        <div>
          <div class="contact-cell">
            <div class="contact-name"><span>吴</span><span>可</span><span>可</span></div>
            <div class="contact-level"><span>（销</span><span>售</span><span>经</span><span>理）</span></div>
            &nbsp;&nbsp;&nbsp;&nbsp;手机：13429028788&nbsp;&nbsp;&nbsp;&nbsp;QQ:554438788
          </div>
          <div class="contact-cell">
            <div class="contact-name"><span>孙</span><span>孟</span><span>典</span></div>
            <div class="contact-level"><span>（总</span><span>经</span><span>理）</span></div>
            &nbsp;&nbsp;&nbsp;&nbsp;手机：15057822888
          </div>
          <div class="contact-cell">
            <div class="contact-name"><span>郭</span><span>政</span></div>
            <div class="contact-level"><span>（副</span><span>总</span><span>经</span><span>理）</span></div>
            &nbsp;&nbsp;&nbsp;&nbsp;手机：18554858948&nbsp;&nbsp;&nbsp;&nbsp;邮箱：zguo@f5strans.ru
          </div>
        </div>
      </div>
      <div class="contact-cell">
        <div class="contact-title"><span>邮</span><span>箱</span></div>
        <div>：</div>
        <div>keith@ekaiyun.cc</div>
      </div>
      <div class="footer-line"></div>
      <div>Copyright © 2021-2025 浙江俄凯运供应链管理有限公司 (ZheJiang Ekaiyun Supply Chain Management Co.,Ltd.)
<!--        All Rights Reserved 浙ICP备19019857号-2-->
      </div>
    </div>
  </footer>
</template>

<script>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

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

.footer-line {
  margin: 20px;
  border-top: 1px solid #333;
}

.contact-cell {
  display: flex;
  flex-flow: row nowrap;
}

.contact-title {
  width: 75px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.contact-name{
  width: 60px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.contact-level{
  width: 95px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
</style>