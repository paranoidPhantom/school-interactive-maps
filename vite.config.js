import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript from 'vite-plugin-typescript'

export default defineConfig({
  plugins: [
    vue(),
    typescript()
  ]
})