import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/csyprotfolio/', // 必须与仓库名一致
  build: {
    outDir: 'docs',
    emptyOutDir: true     // 构建前清空目录
  }
})
