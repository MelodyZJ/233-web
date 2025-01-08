<template>
  <div class="taskList-container">
    <el-scrollbar height="100%">
      <!-- 演变任务列表 -->
      <v-card variant="flat" v-if="routePath == '/taskList-a'">
        <v-tabs v-model="tab" color="#0C5FFF">
          <v-tab value="1" class="tab-text">演变任务列表</v-tab>
        </v-tabs>

        <v-card-text class="pa-0">
          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="1">
              <task-list></task-list>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card-text>
      </v-card>

      <!-- 结果展示 -->
      <result-show v-if="routePath == '/taskList-a/resultShow'"></result-show>
    </el-scrollbar>
  </div>
</template>

<script setup>
import TaskList from "./components/TaskList/index.vue";
import ResultShow from "./components/ResultShow/index.vue";
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
.taskList-container {
  padding: 12px 30px;
  background-color: #fff;
  border-radius: $base-border-radius;
  height: calc(100vh - $base-main-padding * 2 - $top-header-height - 10px);
  box-shadow: $box-shadow;

  // v-tab样式设置
  .tab-text {
    font-size: 15px;
    margin-right: 15px;
  }

  .v-btn--size-default {
    padding: 0;
  }
}
</style>
