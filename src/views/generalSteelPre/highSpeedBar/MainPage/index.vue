<template>
  <div class="common-container">
    <v-card variant="flat">
      <v-tabs v-model="tab" color="#0C5FFF">
        <v-tab value="1" class="tab-text">轧制属性上传</v-tab>
      </v-tabs>

      <v-card-text class="pa-0">
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="1">
            <div class="table-box">
              <!-- 基本信息 -->
              <base-info></base-info>
              <!-- 参数配置 -->
              <para-config :tab="tab"></para-config>
            </div>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import BaseInfo from "../../common/BaseInfo/index.vue";
import ParaConfig from "../../common/ParaConfig/index.vue";

const tab = ref("1");
</script>

<style lang="scss" scoped>
.common-container {
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

  .table-box {
    margin-top: 15px;
    height: calc(100vh - $base-main-padding * 2 - $top-header-height - 95px);
    overflow-y: scroll;
  }
}
</style>
