<template>
  <div class="resultShow-container">
    <v-card variant="flat">
      <v-tabs v-model="tab" color="#0C5FFF">
        <v-tab value="1" class="tab-text">高速线材轧制表</v-tab>
        <v-tab value="2" class="tab-text">轧制结果可视化</v-tab>
      </v-tabs>

      <v-card-text class="pa-0">
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="1">
            <high-speed-table />
          </v-tabs-window-item>
          <v-tabs-window-item value="2">
            <result-visible />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import HighSpeedTable from "./components/HighSpeedTable/index.vue";
import ResultVisible from "./components/ResultVisible/index.vue";

const tab = ref(null);
</script>

<style lang="scss" scoped>
.resultShow-container {
  padding: 15px 30px;

  // v-tab样式设置
  .tab-text {
    font-size: 15px;
    margin-right: 20px;
  }

  .v-btn--size-default {
    padding: 0;
  }
}
</style>
