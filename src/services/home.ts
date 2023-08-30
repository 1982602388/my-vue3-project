import type { PageParams, PageResult } from '@/types/global'
import type { BannerItem, CategoryItem, GuessItem, HotItem } from '@/types/home'
import { http } from '@/utils/http'

export const getHomeBanner = (distributionSite=1) => {
    return http<BannerItem[]>({
        method: 'GET',
        url: '/home/banner',
        data: {
           distributionSite
        }
    })
}

/**
 * 首页-前台分类-小程序
 */
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}