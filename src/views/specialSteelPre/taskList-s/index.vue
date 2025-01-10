<template>
  <div class="taskList-s-container">
    <el-scrollbar height="100%">
      <v-card variant="flat" class="main-page" v-if="routePath == '/taskList-s'">
        <v-tabs v-model="tab" color="#0C5FFF">
          <v-tab value="1" class="tab-text">特钢任务列表</v-tab>
        </v-tabs>

        <v-card-text class="pa-0">
          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="1">
              <task-list></task-list>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card-text>
      </v-card>

      <router-view v-else></router-view>
    </el-scrollbar>
  </div>
</template>

<script setup>
import TaskList from "./components/TaskList/index.vue";
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
.taskList-s-container {
  background-color: #fff;
  border-radius: $base-border-radius;
  height: calc(100vh - $base-main-padding * 2 - $top-header-height - 10px);
  box-shadow: $box-shadow;

  .main-page{
    padding: 12px 30px;
  }

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
