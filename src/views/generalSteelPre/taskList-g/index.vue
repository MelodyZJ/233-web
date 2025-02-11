<template>
  <div class="taskList-g-container">
    <!-- 演变任务列表 -->
    <v-card variant="flat" v-if="routePath == '/taskList-g'" class="main-page">
      <v-tabs v-model="tab" color="#0C5FFF">
        <v-tab value="1" class="tab-text">高速线材</v-tab>
        <v-tab value="2" class="tab-text">高速棒材</v-tab>
      </v-tabs>

      <v-card-text class="pa-0">
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="1">
            <high-speed-line></high-speed-line>
          </v-tabs-window-item>
          <v-tabs-window-item value="2">
            <high-speed-bar></high-speed-bar>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>

    <router-view v-else></router-view>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import HighSpeedLine from "./components/HighSpeedLine/index.vue";
import HighSpeedBar from "./components/HighSpeedBar/index.vue";

const route = useRoute();
const routePath = ref(route.path);

const tab = ref(null);

const unwatch = watch(
  () => route.path,
  (newPath, oldPath) => {
    routePath.value = newPath;
  },
  { immediate: true },
);

// 在组件卸载时取消监听
onUnmounted(() => {
  unwatch();
});
</script>

<style lang="scss" scoped>
.taskList-g-container {
  background-color: #fff;
  border-radius: $base-border-radius;
  box-shadow: $box-shadow;
  margin-bottom: 55px;

  // v-tab样式设置
  .tab-text {
    min-width: 0;
    font-size: 15px;
    margin-right: 25px;
  }

  .v-btn--size-default {
    padding: 0;
  }

  .main-page {
    padding: 12px 30px;
  }
}
</style>
