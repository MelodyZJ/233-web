<template>
  <div class="header-container">
    <div class="left">
      <div class="search-box">
        <input
          type="text"
          v-model="searchWord"
          class="search-iput"
          maxlength="40"
        />
        <v-icon icon="mdi-magnify" class="search-icon" />
      </div>
    </div>

    <div class="right">
      <div class="theme">
        <span>深夜模式 &nbsp;&nbsp;</span>
        <v-switch v-model="switchValue" inset color="#3b73f0"></v-switch>
      </div>
      <img src="@/assets/imgs/avatar.png" class="avatar" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useThemeStore } from "@/store/themeStore.js";

const userStore = useThemeStore();
const searchWord = ref("");

// 初始化时根据当前主题设置switch的值
const switchValue = ref(false);
if (userStore.theme === "dark") {
  switchValue.value = true;
} else {
  switchValue.value = false;
}

// 监听switch的值变化，更新主题
watch(
  () => switchValue.value,
  (newValue) => {
    if (newValue) {
      userStore.setTheme("dark");
    } else {
      userStore.setTheme("light");
    }
  }
);

// 监听主题变化，更新switch的值
watch(
  () => userStore.theme,
  (newValue) => {
    if (newValue === "dark") {
      switchValue.value = true;
    } else {
      switchValue.value = false;
    }
  }
);
</script>

<style lang="scss" scoped>
.header-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;

  .left {
    display: flex;
    align-items: center;

    .search-box {
      width: 450px;

      .search-iput {
        width: 100%;
        height: 50px;
        border-radius: 12px;
        background-color: var(--theme-search);
        padding: 10px 20px;
        font-size: 13px;
        color: var(--fontColorBasic);
        transition: all 0.3s ease;
      }

      .search-icon {
        width: 50px;
        height: 50px;
        margin-left: -50px;
        z-index: 2;
        color: #9195a1;
        transition: color 0.2s ease;

        &:hover {
          color: #000;
          transition: color 0.2s ease;
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;

    .theme {
      display: flex;
      align-items: center;
      color: var(--fontColorBottom);
      margin-right: 30px;

      :deep(.v-input__details) {
        display: none;
      }

      :deep(.v-switch__track) {
        background-color: #a5a8b4;
      }
    }

    .avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
    }
  }
}
</style>
