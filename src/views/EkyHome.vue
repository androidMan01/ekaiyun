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
    </div>


    <div style="max-width: 1200px; width: 100%; margin: 0 auto; padding-bottom: 150px">
      <div style="padding: 30px 0">
        <h1>标题一</h1>
        <p>一、公司概况
          XX物流有限公司成立于20XX年，是一家专注于综合物流服务的现代化企业，致力于为客户提供高效、安全、智能的供应链解决方案。公司总部位于[城市]，业务覆盖全国各省市，并在[海外地区]设有分支机构，形成了完善的国内+国际物流网络。
          凭借多年的行业深耕，公司已发展成为集运输、仓储、配送、供应链管理于一体的综合性物流服务商，服务客户超过[XX万]家，年货运量突破[XX万吨]，在行业内树立了良好的口碑。
        </p>
      </div>

      <div class="card-container">
        <div class="card" v-for="(card, index) in cards" :key="index">
          <img :src="card.image" alt="Card Image" class="card-image" />
          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-description">{{ card.description }}</p>
        </div>
      </div>

      <div style="padding: 30px 0">
        <h1>标题二</h1>
        <p>一、公司发展
          XX物流有限公司成立于20XX年，是一家专注于综合物流服务的现代化企业，致力于为客户提供高效、安全、智能的供应链解决方案。公司总部位于[城市]，业务覆盖全国各省市，并在[海外地区]设有分支机构，形成了完善的国内+国际物流网络。
          凭借多年的行业深耕，公司已发展成为集运输、仓储、配送、供应链管理于一体的综合性物流服务商，服务客户超过[XX万]家，年货运量突破[XX万吨]，在行业内树立了良好的口碑。
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
          <p>{{ item.content }}</p>
        </div>
        <!-- 图片部分 -->
        <div class="image-content">
          <img :src="item.image" :alt="item.title" />
        </div>
      </div>
    </div>

      <div style="padding: 30px 0">
        <h1>标题三</h1>
        <p>一、公司发展
          XX物流有限公司成立于20XX年，是一家专注于综合物流服务的现代化企业，致力于为客户提供高效、安全、智能的供应链解决方案。公司总部位于[城市]，业务覆盖全国各省市，并在[海外地区]设有分支机构，形成了完善的国内+国际物流网络。
          凭借多年的行业深耕，公司已发展成为集运输、仓储、配送、供应链管理于一体的综合性物流服务商，服务客户超过[XX万]家，年货运量突破[XX万吨]，在行业内树立了良好的口碑。
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
                <h3>{{ card.title }}</h3>
                <p>{{ card.description }}</p>
                <button class="detail-btn">查看详情</button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue';

const images = ref([
  'https://img1.baidu.com/it/u=1039988726,3061157592&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500'
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
    year: "2010年",
    title: "公司成立",
    content: "在XX市正式注册成立，专注于本地物流配送服务。",
    image: "https://img1.baidu.com/it/u=1039988726,3061157592&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500",
  },
  {
    year: "2015年",
    title: "全国网络布局",
    content: "建立覆盖全国的10个分拨中心，开通跨省干线运输。",
    image: "https://img1.baidu.com/it/u=1039988726,3061157592&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500",
  },
  {
    year: "2020年",
    title: "智能化升级",
    content: "引入AI物流调度系统，实现订单自动化处理。",
    image: "https://img1.baidu.com/it/u=1039988726,3061157592&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500",
  },
  {
    year: "2023年",
    title: "国际业务拓展",
    content: "开设东南亚海外仓，服务跨境电商客户。",
    image: "https://img1.baidu.com/it/u=1039988726,3061157592&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500",
  },
  ];

const activeIndex = ref(null);

const cardsMb = ref([
  {
    image: 'https://img1.baidu.com/it/u=1039988726,3061157592&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
    title: '项目案例一',
    description: '这是第一个项目的详细说明文本，介绍项目的主要特点和成果。'
  },
  {
    image: 'https://img1.baidu.com/it/u=1039988726,3061157592&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
    title: '项目案例二',
    description: '这是第二个项目的详细说明文本，可以描述项目背景和实施过程。'
  },
  {
    image: 'https://img1.baidu.com/it/u=1039988726,3061157592&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
    title: '项目案例三',
    description: '这是第三个项目的详细说明，重点突出项目的创新点和价值。'
  },
  {
    image: 'https://img1.baidu.com/it/u=1039988726,3061157592&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
    title: '项目案例四',
    description: '这是第四个项目的详细介绍，可以说明项目的规模和影响力。'
  }
]);
</script>

<style scoped>
.home {
  text-align: center;

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
  height: 400px;
  overflow: hidden;
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



/* 纵向排列容器 */
.history-container {
  max-width: 1200px;
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
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.card-mb {
  position: relative;
  aspect-ratio: 3/4; /* 保持卡片比例 */
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
  align-items: flex-end;
  padding: 20px;
}

.detail-content {
  transform: translateY(0);
  transition: transform 0.3s ease;
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