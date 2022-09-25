<template>
  <cover-view class="tab-bar">
    <cover-view class="tab-bar-border"></cover-view>
    <cover-view
      v-for="(item, index) in list"
      :key="index"
      class="tab-bar-item"
      @tap="switchTab(index, item.pagePath)"
    >
      <cover-image :src="tabbarIndex === index ? item.selectedIconPath : item.iconPath" />
      <cover-view :style="{ color: tabbarIndex === index ? selectedColor : color }">{{
        item.text
      }}</cover-view>
    </cover-view>
  </cover-view>
  <!-- <nut-tabbar @tab-switch="tabSwitch">
    <nut-tabbar-item
      v-for="(item, index) in list"
      :key="index"
      v-model:visible="tabbarIndex"
      :tab-title="item.text"
      icon="home"
    ></nut-tabbar-item>
  </nut-tabbar> -->
</template>

<script setup>
import Taro from '@tarojs/taro'
import { computed } from 'vue'
import { useStore } from '@/stores'

const appInfo = useStore('app')
const tabbarIndex = computed(() => appInfo.tabbarIndex)

const color = '#000000'
const selectedColor = '#DC143C'
const list = [
  {
    pagePath: '/pages/index/index',
    selectedIconPath: '../assets/images/tabbar_home_on.png',
    iconPath: '../assets/images/tabbar_home.png',
    text: '首页'
  },
  {
    pagePath: '/pages/shop/index',
    selectedIconPath: '../assets/images/tabbar_cate_on.png',
    iconPath: '../assets/images/tabbar_cate.png',
    text: '门店'
  },
  // {
  //   pagePath: '/pages/case/index',
  //   selectedIconPath: '../assets/images/tabbar_cart_on.png',
  //   iconPath: '../assets/images/tabbar_cart.png',
  //   text: '方案'
  // },
  // {
  //   pagePath: '/pages/cust/index',
  //   selectedIconPath: '../assets/images/tabbar_my_on.png',
  //   iconPath: '../assets/images/tabbar_my.png',
  //   text: '客户'
  // },
  {
    pagePath: '/pages/mine/index',
    selectedIconPath: '../assets/images/tabbar_my_on.png',
    iconPath: '../assets/images/tabbar_my.png',
    text: '我的'
  }
]

function switchTab(index, url) {
  appInfo.setTabbarIndex(index)
  Taro.switchTab({ url })
}
</script>

<style lang="scss">
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100rpx;
  background: white;
  display: flex;
  padding-bottom: env(safe-area-inset-bottom);
}

.tab-bar-border {
  background-color: rgba(0, 0, 0, 0.33);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  transform: scaleY(0.5);
}

.tab-bar-item {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.tab-bar-item cover-image {
  width: 54rpx;
  height: 54rpx;
}

.tab-bar-item cover-view {
  font-size: 20rpx;
}
</style>
