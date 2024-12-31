<template>
  <div class="calculateConfig-container">
    <el-scrollbar height="100%">
      <!-- 任务列表 -->
      <taskList v-if="routePath == '/taskList-p'"></taskList>
      <!-- 结果展示 -->
      <result-show v-if="routePath == '/taskList-p/resultShow'"></result-show>
    </el-scrollbar>
  </div>
</template>

<script setup>
import taskList from "./taskList/index.vue";
import resultShow from "./resultShow/index.vue";
import { useRoute } from "vue-router";

const tab = ref(null);

const route = useRoute();
const routePath = ref(route.path);

const unwatch = watch(
  () => route.path,
  (newPath, oldPath) => {
    routePath.value = newPath;
    // console.log(`路由从 ${oldPath} 变化到 ${newPath}`);
  },
  { immediate: true }
);

// 在组件卸载时取消监听
onUnmounted(() => {
  unwatch();
});
</script>

<style lang="scss" scoped>
.calculateConfig-container {
  background-color: #fff;
  border-radius: $base-border-radius;
  height: calc(100vh - $base-main-padding * 2 - $top-header-height - 10px);
  box-shadow: $box-shadow;
}
</style>
