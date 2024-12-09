import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import router from "@/router/index";
import "@/assets/styles/common.scss";
import "@/assets/styles/theme.scss";
import { lazyPlugin } from "@/directives/index";
import App from "./App.vue";

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

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

const pinia = createPinia();
const app = createApp(App);

// 引入elements-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// pinia持久化
pinia.use(piniaPluginPersistedstate);

app
  .use(router)
  .use(ElementPlus)
  .use(vuetify)
  .use(pinia)
  .use(lazyPlugin)
  .mount("#app");
