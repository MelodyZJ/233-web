<template>
  <div class="calculateConfig-container">
    <el-scrollbar height="100%">
      <!-- 任务列表 -->
      <task-list v-if="routePath == '/taskList-p'"></task-list>
      <!-- 结果展示 -->
      <router-view v-else></router-view>
    </el-scrollbar>
  </div>
</template>

<script setup>
import taskList from "./taskList/index.vue";
import { useRoute } from "vue-router";

const tab = ref(null);

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
.calculateConfig-container {
  background-color: #fff;
  border-radius: $base-border-radius;
  height: calc(100vh - $base-main-padding * 2 - $top-header-height - 10px);
  box-shadow: $box-shadow;
}
</style>
