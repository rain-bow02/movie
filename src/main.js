import "./assets/main.css";

import { createApp } from "vue";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { Toast } from "vant";
import Vant from "vant";
import "vant/lib/index.css";

const app = createApp(App);

app.use(axios);
app.use(router);
app.use(Antd);
app.use(Vant);
app.use(Toast);
app.mount("#app");
