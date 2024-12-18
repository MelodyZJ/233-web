<template>
  <div class="product-detail-container">
    <el-row>
      <el-col :span="18">
        <div ref="containerRef" class="form-container">
          <!-- 初始配置 -->
          <init-config id="part1"></init-config>
          <!-- 除磷箱 -->
          <descale-box id="part2"></descale-box>
          <!-- 脱头 -->
          <take-off-head id="part3"></take-off-head>
          <!-- 模块轧机 -->
          <model-machine id="part4"></model-machine>
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

const containerRef = ref(null);

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
