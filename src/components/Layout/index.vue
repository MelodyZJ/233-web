<template>
  <div class="layout-container">
    <el-container>
      <el-header class="top-header">
        <Header></Header>
      </el-header>
      <el-container style="height: calc(100vh - 60px)">
        <!-- 减去头部高度 -->
        <el-aside :width="asideWidth + 'px'" class="fixed-aside">
          <Aside @foldChange="foldChangeFn" />
        </el-aside>
        <!-- 右侧内容 -->
        <el-main class="main-content">
          <el-scrollbar>
            <!-- 面包屑 -->
            <!-- <Breadcrumb /> -->
            <RouterView />
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Aside from "@/components/Aside/index.vue";
import Header from "@/components/Header/index.vue";
// import Breadcrumb from "@/components/Breadcrumb/index.vue";
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
