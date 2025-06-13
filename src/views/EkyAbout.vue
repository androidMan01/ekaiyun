<template>
  <div class="about">
    <div class="about-container fl1">
      <div class="about-title">关于我们</div>
      <div class="about-txt">浙江俄凯运以义乌为枢纽，依托中俄-中亚铁路干线，构建"物流+跨境贸易"双轮驱动模式，通过轻资产运营（如集装箱租赁）和多元化商品销售布局，为大中小客户提供柔性供应链解决方案。公司专注于国际集装箱多事联运业务，具有强大的跨境运力资源整合能力及完善的国际化运营和优质的客户服务体系，随着中国与“一带一路”沿线国家俄罗斯-哈萨克斯坦-乌兹别克斯坦等国的贸易与合作关系不断的密切而得到高速发展。公司一直坚守为客户解决痛点，创造价值，以优质服务和数智化技术为驱动，对传统的货代运营模式进行了优化升级，致力于为所有国际贸易提供极具竞争力的供应链及物流解决方案为企业使命。</div>
    </div>
    <div class="fl1">
      <img :src="team">
    </div>
  </div>
</template>

<script setup>
import team from '@/assets/team.png'


</script>

<style scoped>
.about {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 2rem;
}
.about-container{
  display: flex;
  flex-flow: column wrap;
  margin-right: 20px;
}
.fl1{
  flex: 1;
}
.about-title{
  color: rgb(15, 31, 43);
  font-weight: bold;
  font-size: 24px;
}
.about-txt{
  margin-top: 12px;
  line-height: 1.8;
  font-size: 16px;
  text-indent: 2em;
}
</style>