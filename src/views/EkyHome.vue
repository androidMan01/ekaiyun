<template>
  <div class="home">

    <div class="banner-container">
      <img
          v-if="images.length === 1"
          :src="images[0]"
          alt="Banner"
          class="banner-image"
      />

      <div v-else class="banner-slider">
        <transition name="fade" mode="out-in">
          <img
              :key="currentIndex"
              :src="images[currentIndex]"
              alt="Banner"
              class="banner-image"
          />
        </transition>
      </div>

      <div class="banner-content">
        <div class="banner-big"><span class="banner-red">快速安全</span>将货物送达</div>
        <div class="banner-big">做用户放心的货运物流服务商</div>
        <div class="banner-small">浙江俄凯运供应链管理有限公司是具有国内国际航空客货运输销售代理资格的一家物</div>
        <div class="banner-small">流企业，提供快递、急快件、普件、特殊货运、公路、铁路运输等航空运输代理业务</div>
      </div>
    </div>

    <div class="data-container">
      <div class="data-item" v-for="(item, index) in dataList" :key="index">
        <img class="data-item-icon" :src="item.icon" />
        <div class="data-item-txt">
          <div>{{item.title}}</div>
          <div class="data-item-value">{{item.value}}</div>
        </div>
      </div>
    </div>




    <div style="max-width: 1200px; width: 100%; margin: 0 auto; padding-bottom: 150px">

      <div class="group-title">
        <h1 class="paragraph-title"><span>主营业务</span></h1>
        <p class="content-txt">浙江俄凯运以义乌为枢纽，依托中俄-中亚铁路干线，构建"物流+跨境贸易"双轮驱动模式，通过轻资产运营（如集装箱租赁）和多元化商品销售布局，为大中小客户提供柔性供应链解决方案。其企业的灵活性与区域化子公司协同，形成差异化竞争力。
        </p>
      </div>

      <div class="card-container-mb">
        <div
            v-for="(card, index) in cardsMb"
            :key="index"
            class="card-mb"
            @mouseenter="activeIndex = index"
            @mouseleave="activeIndex = null"
        >
          <!-- 背景图片 -->
          <div
              class="card-bg"
              :style="{ backgroundImage: `url(${card.image})` }"
          ></div>

          <!-- 底部标题蒙版 -->
          <div class="card-title-mb">
            {{ card.title }}
          </div>

          <!-- 悬停时显示的详情层 -->
          <transition name="fade">
            <div
                v-show="activeIndex === index"
                class="card-detail"
            >
              <div class="detail-content">
                <h3 style="text-align: center">{{ card.title }}</h3>
                <div v-html="card.description"></div>
<!--                <button class="detail-btn">查看详情</button>-->
              </div>
            </div>
          </transition>
        </div>
      </div>

<!--      <div  class="group-title">-->
<!--        <h1 class="paragraph-title"><span>公司概况</span></h1>-->
<!--        <p class="content-txt">浙江俄凯运供应链管理有限公司成立于2021年，公司注册资金一千万元，总部位于浙江省义乌市，有着得天独厚的 地理优势，公司管理层10年专注俄罗斯铁路运输，具有强大的项目工程物流运力资源整合能力，可以提供快捷安全的运 输服务和具有竞争力的价格体系。-->
<!--          公司在吉林省长春市、黑龙江省绥芬河市、江苏省南京市、山东省青岛市设有分公司。主营徐州、济南、成都、郑州、高邑、义乌、金华、长春、大连、苏州、西安进出口中俄中亚班列全程跨境运输代理服务，整列进口板材，粮食，有色金属，纸浆，塑料颗粒等原材料；出口医疗设备，机械设备，日用百货，石墨 电极，商品车等常用物资。-->
<!--          团队拥有大批从事铁路运输丰富经验的专业人员，具有专业的国际业务能力，主攻“一带一路”沿线国家相关市 场，目前业务涵盖俄罗斯、白俄罗斯、哈萨克斯坦、乌兹别克斯坦等国及国内重点城市。-->
<!--        </p>-->
<!--      </div>-->

<!--      <div class="card-container">-->
<!--        <div class="card" v-for="(card, index) in cards" :key="index">-->
<!--          <img :src="card.image" alt="Card Image" class="card-image" />-->
<!--          <h3 class="card-title">{{ card.title }}</h3>-->
<!--          <p class="card-description">{{ card.description }}</p>-->
<!--        </div>-->
<!--      </div>-->

      <div  class="group-title">
        <h1 class="paragraph-title"><span>公司概况</span></h1>
        <p class="content-txt">浙江俄凯运供应链管理有限公司成立于2021年，公司注册资金一千万元，总部位于浙江省义乌市，有着得天独厚的 地理优势，公司管理层10年专注俄罗斯铁路运输，具有强大的项目工程物流运力资源整合能力，可以提供快捷安全的运 输服务和具有竞争力的价格体系。
          公司在吉林省长春市、黑龙江省绥芬河市、江苏省南京市、山东省青岛市设有分公司。主营徐州、济南、成都、郑州、高邑、义乌、金华、长春、大连、苏州、西安进出口中俄中亚班列全程跨境运输代理服务，整列进口板材，粮食，有色金属，纸浆，塑料颗粒等原材料；出口医疗设备，机械设备，日用百货，石墨 电极，商品车等常用物资。
          团队拥有大批从事铁路运输丰富经验的专业人员，具有专业的国际业务能力，主攻“一带一路”沿线国家相关市 场，目前业务涵盖俄罗斯、白俄罗斯、哈萨克斯坦、乌兹别克斯坦等国及国内重点城市。
        </p>
      </div>

      <div class="history-container">
        <!-- 每条历程通过 index 判断奇偶行 -->
        <div
            v-for="(item, index) in historyList"
            :key="index"
            class="history-item"
            :class="{ 'reverse': index % 2 !== 0 }" >
          <!-- 偶数行添加 reverse 类 -->
        <!-- 文字部分 -->
        <div class="text-content">
          <h3>{{ item.year }}</h3>
          <h4>{{ item.title }}</h4>
          <p v-html="item.content"></p>
        </div>
        <!-- 图片部分 -->
        <div class="image-content">
          <img :src="item.image" :alt="item.title" />
        </div>
      </div>
    </div>


    </div>
  </div>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue';
import logo from '@/assets/-496.png'
import jingyan from '@/assets/jingyan.png'
import renshu from '@/assets/renshu.png'
import jizhuangxiang from '@/assets/jizhuangxiang.png'
import huoche from '@/assets/huoche.png'
import xianlu from '@/assets/xianlu.png'
import bgImg from '@/assets/-62759.png'
import history01 from '@/assets/history01.png'
import history02 from '@/assets/history02.png'
import history03 from '@/assets/history03.png'
import history04 from '@/assets/history04.png'
const images = ref([
  logo
]);

const dataList = ref([
  {icon:jingyan, title: '服务年限', value: '10年'},
  {icon:renshu, title: '服务过的客户', value: '1000+'},
  {icon:jizhuangxiang, title: '每月平均发运集装箱', value: '1800+'},
  {icon:huoche, title: '每月平均发车次数', value: '35+'},
  {icon:xianlu, title: '可发运线路', value: '500+'}
]);

const currentIndex = ref(0);
let timer = null;

// 自动轮播逻辑
const startAutoPlay = () => {
  if (images.value.length <= 1) return; // 只有一张图片时不轮播

  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  }, 3000);
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  if (timer) clearInterval(timer); // 组件卸载时清除定时器
});

const cards = [
  {
    image: "https://img1.baidu.com/it/u=3633915892,3744681847&fm=253&fmt=auto&app=138&f=JPEG?w=674&h=500",
    title: "卡片 1",
    description: "这是第一张卡片的描述内容。",
  },
  {
    image: "https://img1.baidu.com/it/u=3633915892,3744681847&fm=253&fmt=auto&app=138&f=JPEG?w=674&h=500",
    title: "卡片 2",
    description: "这是第二张卡片的描述内容。",
  },
  {
    image: "https://img1.baidu.com/it/u=3633915892,3744681847&fm=253&fmt=auto&app=138&f=JPEG?w=674&h=500",
    title: "卡片 3",
    description: "这是第三张卡片的描述内容。",
  },
  {
    image: "https://img1.baidu.com/it/u=3633915892,3744681847&fm=253&fmt=auto&app=138&f=JPEG?w=674&h=500",
    title: "卡片 4",
    description: "这是第四张卡片的描述内容。",
  },
];


  const historyList = [
  {
    year: "2021年",
    title: "扬帆起航:公司成立",
    content: "浙江俄凯运供应链管理有限公司成立于2021年，公司注册资金一千万元，总部位于浙江省义乌市。",
    image: history01,
  },
  {
    year: "2022年-2023年",
    title: "稳步成长:成长之路",
    content: "首发哈尔滨-莫斯科特货汽车专列<br>" +
        "首发鄂木斯克-满洲里-义乌炭黑专列<br>" +
        "截止2023年6月进出口累积发运标箱10000*40HQ",
    image: history02,
  },
  {
    year: "2024年",
    title: "砥砺前行：壮大之路",
    content: "成立绥芬河公司，开拓俄罗斯粮食贸易<br>" +
        "对标管理提升，创新服务体系，<br>" +
        "用卓越的智慧积累卓越的高度，<br>" +
        "塑造企业新形象！",
    image: history03,
  },
  {
    year: "2025年",
    title: "展望未来",
    content: "",
    image: history04,
  },
  ];

const activeIndex = ref(0);

const cardsMb = ref([
  {
    image: bgImg,
    title: '俄罗斯、中亚五国进出口铁路运输',
    description: '<div>一.运输路线</div>' +
        '<div>（1）徐州、济南、成都、郑州、高邑、义乌、金华、长春、大连、苏州、西安—满洲里/二连/阿拉山口/霍尔果斯一俄罗斯全境/白俄罗斯明斯克。</div>' +
        '<div>（2）金华、义乌、西安、郑州、高邑-阿拉山口/霍尔果斯-中亚五国</div>' +
        '<div>(3)国内—沃尔西诺/别雷/明斯克，点对点包列直达班列。</div>' +
        '<div>（4）莫斯科/基洛夫/叶卡捷琳堡/新西伯利亚/克市/伊尔库茨克-二连/满洲里/山口/果斯-中国 粮食/板材类产品全程/中国段半程铁路集装箱运输。</div>' +
        '<div>（5）哈萨克斯坦/乌兹别克斯坦-山口/果斯-中国粮食类产品全程/中国段半程铁路集装箱运输。</div><br>'+
        '<div>二.班列优势</div>' +
        "<div>全国门点辐射价格优惠大班列时效快可通过仓储/装卸/拖车等多种延伸服务。</div>"
  },
  {
    image: 'https://img1.baidu.com/it/u=1039988726,3061157592&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
    title: '欧洲进出口铁路运输',
    description: '<div>一.运输路线</div>' +
        '<div>金华、义乌、苏州、徐州、西安一马拉/汉堡/杜伊斯堡</div>' +
        '<div>二.班列优势</div>' +
        "<div>全国门点辐射价格优惠大班列时效快可通过仓储/装卸/拖车等多种延伸服务。</div>"
  }
]);
</script>

<style scoped>
.home {
  text-align: center;

}

.group-title{
  padding: 30px 0;
  line-height: 1.8;
}

.content-txt{
  text-align: left;
  font-size: 16px;
}

.card-container {
  display: flex;
  gap: 20px; /* 卡片间距 */
  padding: 20px;
  flex-wrap: wrap; /* 允许换行 */
}

.card {
  width: calc(25% - 20px); /* 4 列，减去 gap */
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.card-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-title {
  margin: 10px 0;
  font-size: 18px;
}

.card-description {
  padding: 0 10px 10px;
  color: #666;
}




.banner-container {
  width: 100%;
  height: 600px;
  overflow: hidden;
  position: relative;
}

.banner-content{
  position: absolute;
  width: 100%;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.banner-big{
  font-size: 48px;
  font-weight: bolder;
}

.banner-small{
  font-size: 18px
}

.banner-red{
  color: rgb(242, 38, 69);
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.data-container{
  background: #f5f5f5;
  display: flex;
  flex-flow: row nowrap;
}

.data-item{
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.data-item-txt{
  display: flex;
  flex-flow: column nowrap;
  font-size: 12px;
  color: #707070;
  margin: 0 8px;
}

.data-item-value{
  font-weight: bolder;
  font-size: 16px;
}

.data-item-icon{
  width: 30px;
  height: 30px;
}


.paragraph-title {
  margin: 0;
  font-size: 32px;
  text-align: center;
}

.paragraph-title:after, .paragraph-title:before {
  content: "";
  display: inline-block;
  width: 37px;
  height: 4px;
  vertical-align: middle;
}

.paragraph-title:before
{
  background: linear-gradient(90deg, #fff, #bcbcbc);
}

.paragraph-title:after {
  background: linear-gradient(90deg, #bcbcbc, #fff);
}

.paragraph-title span {
  vertical-align: middle;
  margin: 0 20px;
}


/* 纵向排列容器 */
.history-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
}

/* 每条历程项 - 默认横向排列（文字左，图片右） */
.history-item {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
}

/* 偶数行反转布局（图片左，文字右） */
.history-item.reverse {
  flex-direction: row-reverse;
}

/* 文字区域样式 */
.text-content {
  flex: 1;
}
.text-content h3 {
  color: #333;
  font-size: 24px;
  margin-bottom: 8px;
}
.text-content h4 {
  color: #e74c3c; /* 标题强调色 */
  font-size: 20px;
  margin-bottom: 12px;
}
.text-content p {
  color: #666;
  line-height: 1.6;
}

/* 图片区域样式 */
.image-content {
  flex: 1;
}
.image-content img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 响应式：移动端改为上下排列 */
@media (max-width: 768px) {
  .history-item,
  .history-item.reverse {
    flex-direction: column;
    gap: 20px;
  }
}



.card-container-mb {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.card-mb {
  position: relative;
  aspect-ratio: 3/3; /* 保持卡片比例 */
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.card-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
}

.card:hover .card-bg {
  transform: scale(1.05);
}

.card-title-mb {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  font-size: 18px;
  font-weight: bold;
}

.card-detail {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  align-items: center;
  padding: 20px;
}

.detail-content {
  transform: translateY(0);
  transition: transform 0.3s ease;
  text-align: left;
  line-height: 1.7;
}

.card:hover .detail-content {
  transform: translateY(-10px);
}

.detail-content h3 {
  margin-bottom: 10px;
  font-size: 20px;
}

.detail-content p {
  margin-bottom: 15px;
  line-height: 1.5;
}

.detail-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid white;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.detail-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .card-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .card-container {
    grid-template-columns: 1fr;
  }
}
</style>