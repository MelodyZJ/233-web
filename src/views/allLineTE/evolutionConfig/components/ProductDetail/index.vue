<template>
  <div ref="productDetailRef" class="product-detail-container">
    <el-row>
      <el-col :span="18">
        <div
          ref="containerRef"
          class="form-container"
          :style="{ height: productDetailRefHeight + 'px' }"
        >
          <!-- 初始配置 -->
          <init-config id="part1"></init-config>
          <!-- 除磷箱 -->
          <descale-box id="part2"></descale-box>
          <!-- 脱头 -->
          <take-off-head id="part3"></take-off-head>
          <!-- 模块轧机 -->
          <model-machine id="part4"></model-machine>
          <!-- 加热炉 -->
          <heat-furnace id="part5"></heat-furnace>
          <!-- 连铸机 -->
          <continue-cast id="part6"></continue-cast>
          <!-- 切割点 -->
          <cut-point id="part7"></cut-point>
          <!-- 保温罩 -->
          <heat-cover id="part8"></heat-cover>
          <!-- 感应加热炉 -->
          <induction-heat-furnace id="part9"></induction-heat-furnace>
        </div>
      </el-col>
      <el-col :span="1"></el-col>
      <el-col :span="5">
        <el-anchor
          :container="containerRef"
          direction="vertical"
          type="default"
          @click="handleClick"
        >
          <el-anchor-link href="#part1" title="初始配置" />
          <el-anchor-link href="#part2" title="除磷箱" />
          <el-anchor-link href="#part3" title="脱头" />
          <el-anchor-link href="#part4" title="模块轧机" />
          <el-anchor-link href="#part5" title="加热炉" />
          <el-anchor-link href="#part6" title="连铸机" />
          <el-anchor-link href="#part7" title="切割点" />
          <el-anchor-link href="#part8" title="保温罩" />
          <el-anchor-link href="#part9" title="感应加热炉" />
        </el-anchor>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import InitConfig from "./InitConfig/index.vue";
import DescaleBox from "./DescaleBox/index.vue";
import TakeOffHead from "./TakeOffHead/index.vue";
import ModelMachine from "./ModelMachine/index.vue";
import HeatFurnace from "./HeatFurnace/index.vue";
import ContinueCast from "./ContinueCast/index.vue";
import CutPoint from "./CutPoint/index.vue";
import HeatCover from "./HeatCover/index.vue";
import InductionHeatFurnace from "./InductionHeatFurnace/index.vue";

const containerRef = ref(null);
const productDetailRef = ref(null);

const productDetailRefHeight = ref(0);

onMounted(() => {
  // 获取productDetailRef的盒子高度用于自适应
  if (productDetailRef.value) {
    productDetailRefHeight.value = productDetailRef.value.offsetHeight - 30;
  }
});

const handleClick = (e) => {
  e.preventDefault();
};
</script>

<style lang="scss" scoped>
.product-detail-container {
  flex-grow: 1;
  background-color: #fff;
  border-radius: $base-border-radius;
  padding: 20px;
  overflow: scroll;

  .form-container {
    height: 100%;
    overflow-y: auto;
  }

  :deep(.el-anchor__link) {
    font-size: 13px;
  }
}
</style>
