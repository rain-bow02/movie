// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  transpileDependencies: true,
  devServer: {
    //配置前端服务器的相关内容
    // host:"localhost",
    port: 8024, //不能与后端端口重复
    open: true,
    proxy: {
      //反向代理，解决跨域
      shop: {
        target: "http://localhost:8081",
        changeOrigin: true, //使用跨域
        // pathRewrite: { //路径更新
        //     '/shop': ''
        // }
      },
    },
  },
});
