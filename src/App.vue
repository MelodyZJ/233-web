<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script setup>
import { useThemeStore } from "@/store/themeStore.js";
import { useRouter } from "vue-router";

const userStore = useThemeStore();
const router = useRouter();

// 刷新后默认导航至home
// if (router.path !== "/home") {
//   router.push("/home");
// }

// 当前浏览器深色与浅色模式切换听器
const listeners = {
  dark: function (mediaQueryList) {
    if (mediaQueryList.matches) {
      userStore.setTheme("dark");
    }
  },
  light: function (mediaQueryList) {
    if (mediaQueryList.matches) {
      userStore.setTheme("light");
    }
  },
};

window.matchMedia("(prefers-color-scheme: dark)").addListener(listeners.dark);
window.matchMedia("(prefers-color-scheme: light)").addListener(listeners.light);

// 监听主题变化，修改页面样式
watch(
  () => userStore.theme,
  (newValue) => {
    switch (newValue) {
      case "light":
        document.body.classList.remove("dark");
        break;
      case "dark":
        document.body.classList.add("dark");
        break;
    }
  },
  { immediate: true }
);
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-container {
  min-height: 100vh;
}

::-webkit-scrollbar {
  display: none;
}

// 按钮颜色设置
.primary-btn {
  background-color: #5084ff !important;
  color: #fff !important;
}

.primary-btn2 {
  background-color: #0c5fff !important;
  color: #fff !important;
}

.white-btn {
  border: 1px solid #dcdfe6 !important;
  margin-left: 10px !important;
}

.simple-btn {
  background-color: #fff !important;
  color: #0c5fff !important;
}

.search-input {
  width: 180px !important;
}

// vuetify样式修改
.has--label {
  padding-bottom: 8px;

  .v-input__details {
    text-align: end;
  }
}

// 取消input的上下箭头
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}

input::-webkit-outer-spin-button {
  -webkit-appearance: none !important;
}

input[type="number"] {
  appearance: textfield;
}
</style>
