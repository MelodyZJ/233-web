<template>
  <div class="layout-container">
    <el-container>
      <el-header class="top-header">
        <img src="@/assets/icons/logo.png" alt="线棒材轧制数字化系统">
        <span class="ml-2">线棒材轧制数字化系统</span>
      </el-header>
      <el-container style="height: calc(100vh - 60px)">
        <!-- 减去头部高度 -->
        <el-aside :width="asideWidth + 'px'" class="fixed-aside">
          <Aside @foldChange="foldChangeFn" />
        </el-aside>

        <el-main class="main-content">
          <el-scrollbar>
            <RouterView />
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Aside from "@/components/Aside/index.vue";
import { ref } from "vue";

const asideWidth = ref(200);
const isFolded = ref(false);

const foldChangeFn = (value) => {
  isFolded.value = value;
  asideWidth.value = isFolded.value ? 80 : 200;
};
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  height: 100vh;
  overflow: hidden;

  .top-header {
    background-color: var(--theme-header);
    height: 60px;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    position: sticky; /* 确保头部固定 */
    top: 0;
    z-index: 1000;
  }

  .fixed-aside {
    height: calc(100vh - 60px);
    background-color: var(--theme-aside);
    transition: all 0.3s ease;
  }

  .main-content {
    padding: 0;
    background-color: #ebeff7;
    transition: all 0.3s ease;
  }
}
</style>
