<template>
  <div class="product-detail-container">
    <el-row>
      <el-col :span="18">
        <div ref="containerRef" class="form-container">
          <!-- 初始配置 -->
          <init-config id="part1"></init-config>
        </div>
      </el-col>
      <el-col :span="6">
        <el-anchor
          :container="containerRef"
          direction="vertical"
          type="default"
          @click="handleClick"
        >
          <el-anchor-link href="#part1" title="初始配置" />
        </el-anchor>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import InitConfig from "./InitConfig/index.vue";

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

  .form-container {
    height: 100%;
    overflow-y: auto;
  }

  :deep(.el-anchor__link) {
    font-size: 13px;
  }
}
</style>
