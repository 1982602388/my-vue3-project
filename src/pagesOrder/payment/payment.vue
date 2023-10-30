<template>
<scroll-view scroll-y enable-back-to-top class="viewport" @scrolltolower="onScrolltolower">
  <view class="overview">
    <view class="status icon-checked">支付成功</view>
    <view class="buttons">
      <navigator
        url="/pages/index/index"
        open-type="switchTab"
        class="button navigator"
        hover-class="none"
      >
        返回首页
      </navigator>
      <navigator
        :url="`/pagesOrder/detail/detail?id=${query.id}`"
        open-type="redirect"
        hover-class="node"
        class="button navigator"
      >
         查看订单
      </navigator>
    </view>
  </view>
  <XtxGuess ref="guessRef"/>
</scroll-view>
</template>

<script lang="ts" setup>

import { useGuessList } from '@/composables'

const query = defineProps<{
  id: string
}>()
const {guessRef,onScrolltolower}=useGuessList()
</script>

<style scoped lang='scss'>
page {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.viewport {
  background-color: #f7f7f8;
}

.overview {
  line-height: 1;
  padding: 50rpx 0;
  color: #fff;
  background-color: #27ba9b;

  .status {
    font-size: 36rpx;
    font-weight: 500;
    text-align: center;
  }

  .status::before {
    display: block;
    font-size: 110rpx;
    margin-bottom: 20rpx;
  }

  .buttons {
    height: 60rpx;
    line-height: 60rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60rpx;
  }

  .button {
    text-align: center;
    margin: 0 10rpx;
    font-size: 28rpx;
    color: #fff;

    &:first-child {
      width: 200rpx;
      border-radius: 64rpx;
      border: 1rpx solid #fff;
    }
  }
}
</style>