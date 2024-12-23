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
          <!-- 飞剪 -->
          <fly-shear id="part10"></fly-shear>
          <!-- 短应力线轧机 -->
          <short-machine id="part11"></short-machine>
          <!-- 平立悬臂轧机 -->
          <flat-machine id="part12"></flat-machine>
          <!-- 水箱 -->
          <water-box id="part13"></water-box>
          <!-- 冷床 -->
          <cool-bed id="part14"></cool-bed>
          <!-- 风冷线 -->
          <air-cool-line id="part15"></air-cool-line>
          <!-- 集卷站 -->
          <gather-station id="part16"></gather-station>
          <!-- 打捆站 -->
          <bund-station id="part17"></bund-station>
          <!-- 卸卷站 -->
          <unload-station id="part18"></unload-station>
          <!-- 任务名 -->
          <task-name id="part19"></task-name>
        </div>
      </el-col>
      <el-col :span="1"></el-col>
      <el-col :span="5">
        <el-scrollbar :height="productDetailRefHeight + 'px'">
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
            <el-anchor-link href="#part10" title="飞剪" />
            <el-anchor-link href="#part11" title="短应力线轧机" />
            <el-anchor-link href="#part12" title="平立悬臂轧机" />
            <el-anchor-link href="#part13" title="水箱" />
            <el-anchor-link href="#part14" title="冷床" />
            <el-anchor-link href="#part15" title="风冷线" />
            <el-anchor-link href="#part16" title="集卷站" />
            <el-anchor-link href="#part17" title="打捆站" />
            <el-anchor-link href="#part18" title="卸卷站" />
            <el-anchor-link href="#part19" title="任务名" />
          </el-anchor>
        </el-scrollbar>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import InitConfig from "./InitConfig/index.vue";
import DescaleBox from "./DescaleBox/index.vue";
import TakeOffHead from "./TakeOffHead/index.vue";
import ModelMachine from "./ModelMachine/index.vue";
import HeatFurnace from "./HeatFurnace/index.vue";
import ContinueCast from "./ContinueCast/index.vue";
import CutPoint from "./CutPoint/index.vue";
import HeatCover from "./HeatCover/index.vue";
import InductionHeatFurnace from "./InductionHeatFurnace/index.vue";
import FlyShear from "./FlyShear/index.vue";
import ShortMachine from "./ShortMachine/index.vue";
import FlatMachine from "./FlatMachine/index.vue";
import WaterBox from "./WaterBox/index.vue";
import CoolBed from "./CoolBed/index.vue";
import AirCoolLine from "./AirCoolLine/index.vue";
import GatherStation from "./GatherStation/index.vue";
import BundStation from "./BundStation/index.vue";
import UnloadStation from "./UnloadStation/index.vue";
import TaskName from "./TaskName/index.vue";

const containerRef = ref(null);
const productDetailRef = ref(null);

const productDetailRefHeight = ref(0);

onMounted(() => {
  // 获取productDetailRef的盒子高度用于自适应
  if (productDetailRef.value) {
    productDetailRefHeight.value = productDetailRef.value.offsetHeight - 40;
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
