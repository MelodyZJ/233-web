import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    // 自动导入element-plus组件
    AutoImport({
      imports: ["vue", "vue-router"],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    proxy: {
      "/wbds": {
        target: "http://10.66.2.10:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wbds/, ""),
      },
    },
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/common.scss";',
      },
    },
  },
});
