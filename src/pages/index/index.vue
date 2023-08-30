<template>
  <view class="content">
 <CustomNavbar/>
 <XtxSwiper :list="bannerData"/>

 <CategoryPanel :list="categoryList"/>
  </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

import { getHomeBanner,getHomeCategoryAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'

import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'



 
const bannerData = ref<BannerItem[]>([])
const getBannerData = async () => { 
  const res = await getHomeBanner()
   bannerData.value=res.result
}


// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

onLoad(async () => {
  await Promise.all([getBannerData(),getHomeCategoryData()])
})
</script>

<style>
page{
  background-color: #f7f7f7;
}


</style>
