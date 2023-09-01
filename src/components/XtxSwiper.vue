<template>
 <view class='carousel'>
     <swiper
        autoplay
        circular
        :interval="3000"
        @change="onChange"
     >
        <swiper-item v-for="item in list" :key="item.id">
            <navigator
                url="/pages/index/index"
                open-type="navigate"
                class="navigator"
                hover-class="navigator-hover"
            >
              <image
                class="image"
                :src="item.imgUrl"
                mode="aspectFill"
              />  
            </navigator>
        </swiper-item>
     </swiper>
     <view class="indicator">
        <text 
            class="dot" 
            v-for="(item,index) in list"
            :key="index"
            :class="{active:index===activeIndex}"
        >

        </text>
     </view>
 </view>
</template>

<script lang="ts" setup>
import type { BannerItem } from "@/types/home";
import { ref } from "vue" 
defineProps<{
    list:BannerItem[]
}>()

const activeIndex = ref(0)
const onChange: UniHelper.SwiperOnChange = (ev) => {
    activeIndex.value = ev.detail!.current
}
</script>

<style scoped lang="scss">
@import './style/XtxSwiper.scss';
</style>