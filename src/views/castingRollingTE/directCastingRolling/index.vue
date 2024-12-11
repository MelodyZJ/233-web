<template>
  <div class="directCastingRolling-container">
    <el-row>
      <el-col :span="18">
        <div ref="containerRef" class="form-container">
          <!-- 计算属性 -->
          <computational id="part1"></computational>
          <!-- 钢种属性 -->
          <steel-grade id="part2"></steel-grade>
          <!-- 铸坯属性 -->
          <casting-blank id="part3"></casting-blank>
          <!-- 铸轧间距属性 -->
          <casting-interval id="part4"></casting-interval>
          <!-- 铸轧温度图像 -->
          <temperature-image id="part5"></temperature-image>
          <!-- 完成 -->
          <finish id="part6"></finish>
        </div>
      </el-col>
      <el-col :span="6">
        <el-anchor
          :container="containerRef"
          direction="vertical"
          type="default"
          @click="handleClick"
        >
          <el-anchor-link href="#part1" title="计算属性" />
          <el-anchor-link href="#part2" title="钢种属性" />
          <el-anchor-link href="#part3" title="铸坯属性" />
          <el-anchor-link href="#part4" title="铸轧间距属性" />
          <el-anchor-link href="#part5" title="铸轧温度图像" />
          <el-anchor-link href="#part6" title="完成" />
        </el-anchor>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import Computational from "./Computational/index.vue";
import SteelGrade from "./SteelGrade/index.vue";
import CastingBlank from "./CastingBlank/index.vue";
import CastingInterval from "./CastingInterval/index.vue";
import TemperatureImage from "./TemperatureImage/index.vue";
import Finish from "./Finish/index.vue";

const containerRef = ref(null);

const handleClick = (e) => {
  e.preventDefault();
};
</script>

<style lang="scss" scoped>
.directCastingRolling-container {
  padding: 30px;
  background-color: #fff;
  border-radius: $base-border-radius;
  height: calc(100vh - $base-main-padding * 2 - $top-header-height);

  .form-container {
    height: calc(100vh - $base-main-padding * 2 - $top-header-height - 50px);
    overflow-y: auto;
  }
}
</style>
