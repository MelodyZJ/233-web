<template>
  <div class="directCastRoll-container">
    <el-row>
      <el-col :span="showAnchor ? 18 : 23">
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
      <el-col :span="1"></el-col>
      <el-col :span="4" v-if="showAnchor">
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
import Computational from "./Computational/index.vue";
import SteelGrade from "./SteelGrade/index.vue";
import CastBlank from "./CastBlank/index.vue";
import CastInterval from "./CastInterval/index.vue";
import TemperatureImage from "./TemperatureImage/index.vue";
import Finish from "./Finish/index.vue";

const containerRef = ref(null);
// 视口宽度
const windowWidth = ref(
  window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
);

onMounted(() => {
  // 监听窗口大小变化事件
  window.addEventListener("resize", handleResize);
});

// 根据视口大小调整锚点栏显示与隐藏
const showAnchor = ref(true);
const handleResize = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value < 1500) {
    showAnchor.value = false;
  } else {
    showAnchor.value = true;
  }
};

const handleClick = (e) => {
  e.preventDefault();
};
</script>

<style lang="scss" scoped>
.directCastRoll-container {
  padding: 30px;
  background-color: #fff;
  border-radius: $base-border-radius;
  height: calc(100vh - $base-main-padding * 2 - $top-header-height - 10px);

  .form-container {
    height: calc(100vh - $base-main-padding * 2 - $top-header-height - 60px);
    overflow-y: auto;
  }

  :deep(.el-anchor__link) {
    font-size: 13px;
  }
}
</style>
