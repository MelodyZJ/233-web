<template>
  <div class="calculateConfig-container">
    <v-card variant="flat">
      <v-tabs v-model="tab" color="#0C5FFF">
        <v-tab value="1" class="tab-text">轧制表任务列表</v-tab>
      </v-tabs>

      <v-card-text class="pa-0">
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="1">
            <roll-table-task-list></roll-table-task-list>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import RollTableTaskList from "./RollTableTaskList/index.vue";

const tab = ref(null);
</script>

<style lang="scss" scoped>
.calculateConfig-container {
  padding: 15px 30px;
  background-color: #fff;
  border-radius: $base-border-radius;
  height: calc(100vh - $base-main-padding * 2 - $top-header-height - 10px);

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
