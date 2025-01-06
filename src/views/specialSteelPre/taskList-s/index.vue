<template>
  <div class="taskList-s-container">
    <v-card variant="flat">
      <v-tabs v-model="tab" color="#0C5FFF">
        <v-tab value="1" class="tab-text">结果汇总</v-tab>
        <v-tab value="2" class="tab-text">温度场变化</v-tab>
        <v-tab value="3" class="tab-text">道次参量变化</v-tab>
        <v-tab value="4" class="tab-text">组织与力学性能</v-tab>
      </v-tabs>

      <v-card-text class="pa-0">
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="1">
            <div class="content-box">
              <result-table></result-table>
            </div>
          </v-tabs-window-item>
          <v-tabs-window-item value="2">
            <div class="content-box">222</div>
          </v-tabs-window-item>
          <v-tabs-window-item value="3">
            <div class="content-box">333</div>
          </v-tabs-window-item>
          <v-tabs-window-item value="4">
            <div class="content-box">444</div>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import ResultTable from "./components/ResultTable/index.vue";

const tab = ref("1");
</script>

<style lang="scss" scoped>
.taskList-s-container {
  padding: 15px 30px;
  background-color: #fff;
  border-radius: $base-border-radius;
  height: calc(100vh - $base-main-padding * 2 - $top-header-height - 10px);
  box-shadow: $box-shadow;

  // v-tab样式设置
  .tab-text {
    min-width: 0;
    font-size: 15px;
    margin-right: 30px;
  }

  .v-btn--size-default {
    padding: 0;
  }

  .content-box {
    margin-top: 15px;
    height: calc(100vh - $base-main-padding * 2 - $top-header-height - 95px);
    overflow-y: scroll;
  }
}
</style>
