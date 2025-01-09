<template>
  <div class="taskList-g-container">
    <p>温度演变及组织性能预报</p>
    <p class="num">当前编号：ZTCDRP20220805151550</p>

    <el-tabs type="border-card" style="margin-top: 30px">
      <el-tab-pane label="汇总页面" :lazy="true">
        <summary-page></summary-page>
      </el-tab-pane>
      <el-tab-pane label="轧线全程温度演变" :lazy="true">
        <all-temper></all-temper>
      </el-tab-pane>
      <el-tab-pane label="力学性能预测" :lazy="true">
        <power-predict></power-predict>
      </el-tab-pane>
      <el-tab-pane label="各道次各参量变化">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import SummaryPage from "./components/SummaryPage/index.vue";
import AllTemper from "./components/AllTemper/index.vue";
import PowerPredict from "./components/PowerPredict/index.vue";
</script>

<style lang="scss" scoped>
.taskList-g-container {
  padding: 23px 30px;
  background-color: #fff;
  border-radius: $base-border-radius;
  box-shadow: $box-shadow;
  margin-bottom: 55px;

  .num {
    font-size: 13px;
    margin-top: 8px;
  }
}
</style>
