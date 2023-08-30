<template>
  <CustomNavbar/>
  <scroll-view 
      class="scroll-view" 
      refresher-enabled
      @refresherrefresh="HandleRefresherrefresh" 
      @scrolltolower="handleScrollToLower" 
      :refresher-triggered="isTriggered"
      scroll-y 
      >
    <XtxSwiper :list="bannerData"/>

    <CategoryPanel :list="categoryList"/>

    <HotPanel  :list="hotList"/>

    <XtxGuess ref="guessRef"/>
  </scroll-view>

</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

import { getHomeBanner,getHomeCategoryAPI ,getHomeHotAPI} from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import type {XtxGuessInstance} from '@/types/components'

import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
const bannerData = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])

const guessRef = ref<XtxGuessInstance>()
const isTriggered = ref(false)

const handleScrollToLower = () => { 
  guessRef.value?.getMore()
  
}

const HandleRefresherrefresh = async() => {
  isTriggered.value = true
  guessRef.value?.resetData()
  Promise.all([
    getBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore()
  ]).then(() => {
    isTriggered.value = false
  })
}

 
const getBannerData = async () => { 
  const res = await getHomeBanner()
   bannerData.value=res.result
}


// 获取前台分类数据
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 获取热门推荐数据
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

onLoad(async () => {
  await Promise.all([getBannerData(),getHomeCategoryData(),getHomeHotData()])
})
</script>

<style>
page{
  height: 100%;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;

}
.scroll-view{
  flex: 1;
  height: 0rpx;
}


</style>
