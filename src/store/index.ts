import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()

// 使用持久化存储插件
pinia.use(persist)

// 默认导出，给main.ts使用
export default pinia

// 模块统一导出
export * from './modules/member'