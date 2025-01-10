<template>
  <div class="CalcResult-container">
    <p>温度演变及组织性能预报</p>
    <p class="num">当前编号：ZTCDRP20220805151550</p>

    <v-btn
      variant="tonal"
      class="position-absolute top-8 right-8 primary-btn2"
      @click="router.go(-1)"
    >
      <img
        src="@/assets/icons/back.png"
        alt="返回"
        style="margin: 1px 5px 0 0"
      />
      <span>返回参数输入</span>
    </v-btn>

    <el-tabs type="border-card" style="margin-top: 30px">
      <el-tab-pane label="轧线全程温度演变" :lazy="true">
        <all-temper></all-temper>
      </el-tab-pane>
      <el-tab-pane label="力学性能预测" :lazy="true">
        <power-predict></power-predict>
      </el-tab-pane>
      <el-tab-pane label="各道次各参量变化" :lazy="true">
        <para-change></para-change>
      </el-tab-pane>
      <el-tab-pane label="屈服强度及组织比例预测" :lazy="true">
        <yield-strength></yield-strength>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import AllTemper from "../AllTemper/index.vue";
import PowerPredict from "../PowerPredict/index.vue";
import ParaChange from "../ParaChange/index.vue";
import YieldStrength from "../YieldStrength/index.vue";

const router = useRouter();
</script>

<style lang="scss" scoped>
.CalcResult-container {
  padding: 23px 30px;
  background-color: #fff;
  border-radius: $base-border-radius;
  box-shadow: $box-shadow;
  margin-bottom: 55px;
  position: relative;

  .num {
    font-size: 13px;
    margin-top: 8px;
  }
}
</style>
