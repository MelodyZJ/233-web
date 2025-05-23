import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const store = createPinia();
// pinia持久化
store.use(piniaPluginPersistedstate);

export default store;
