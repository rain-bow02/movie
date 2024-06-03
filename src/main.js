import "./assets/main.css";

import { createApp } from "vue";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { createFromIconfontCN } from "@ant-design/icons-vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { Toast } from "vant";
import Vant from "vant";
import "vant/lib/index.css";
import "./assets/global.css";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_4035907_faj5syiu98e.js",
});
const app = createApp(App);

app.use(axios);
app.use(router);
app.use(Antd);
app.use(createFromIconfontCN);
app.use(Vant);
app.use(Toast);
app.component("IconFont", IconFont);
app.mount("#app");
