import { createApp } from "vue";
import router from "@/router/index";
import "@/assets/styles/reset.scss";
import "@/assets/styles/theme.scss";
import { lazyPlugin } from "@/directives/index";
import App from "./App.vue";
import store from "./store";

// element-plus
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// vant
import { PullRefresh, List } from "vant";
// 2. 引入组件样式
import "vant/lib/index.css";

// tailwindcss
import "tailwindcss/tailwind.css";

// 分页组件
import Pagination from "@/components/Pagination/index.vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";

// 修改分页器默认文字
zhCn.el.pagination.total = "共" + `{total}` + "条";
zhCn.el.pagination.goto = "跳转至";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

const app = createApp(App);

// 引入elements-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 全局组件挂载
app.component("Pagination", Pagination);

app
  .use(router)
  .use(ElementPlus, { locale: zhCn })
  .use(vuetify)
  .use(PullRefresh)
  .use(List)
  .use(store)
  .use(lazyPlugin)
  .mount("#app");
