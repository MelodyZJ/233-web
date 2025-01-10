<template>
  <div class="taskList-g-container">
    <div v-if="routePath == '/taskList-g'" class="main-page">
      <p>温度演变及组织性能预报</p>

      <el-tabs type="border-card" style="margin-top: 30px">
        <el-tab-pane label="高速线材" :lazy="true">
          <high-speed-line></high-speed-line>
        </el-tab-pane>

        <el-tab-pane label="高速棒材" :lazy="true">
          <high-speed-bar></high-speed-bar>
        </el-tab-pane>
      </el-tabs>
    </div>

    <calc-result v-if="routePath == '/taskList-g/calcResult'"></calc-result>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import HighSpeedLine from "./components/HighSpeedLine/index.vue";
import HighSpeedBar from "./components/HighSpeedBar/index.vue";
import CalcResult from "../common/CalcResult/index.vue";

const route = useRoute();
const routePath = ref(route.path);

const unwatch = watch(
  () => route.path,
  (newPath, oldPath) => {
    routePath.value = newPath;
  },
  { immediate: true }
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

  .main-page {
    padding: 23px 30px;
  }
}
</style>
