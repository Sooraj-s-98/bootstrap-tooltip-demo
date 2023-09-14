import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [      vue({
    template: {
      compilerOptions: {
        compatConfig: {
          MODE: 2,
        },
      },
    },
  })],
  resolve: {
    dedupe: ["vue", "@vue/compat"],
    alias: {
      vue: "@vue/compat",
    },
  },
})
