<template>
  <div class="layout-container">
    <el-container>
      <el-container>
        <el-aside :width="asideWidth + 'px'">
          <Aside @foldChange="foldChangeFn" />
        </el-aside>
        <el-container>
          <el-header>
            <Header />
          </el-header>
          <el-main>
            <RouterView />
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Aside from "@/components/Aside/index.vue";
import Header from "@/components/Header/index.vue";
import { ref } from "vue";

// 侧边栏折叠设置
const asideWidth = ref(260);
const isFolded = ref(false);

// 手动折叠
const foldChangeFn = (value) => {
  isFolded.value = value; // 切换折叠状态
  asideWidth.value = isFolded.value ? 100 : 260; // 根据状态设置宽度
};
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  height: 100vh;
  overflow: hidden;

  .el-main {
    padding: 10px 40px;
    background-color: var(--theme-main);
    transition: all 0.3s ease;
  }

  .el-aside {
    background-color: var(--theme-aside);
    transition: all 0.3s ease;
  }

  .el-header {
    padding: 10px 40px;
    height: 110px;
    background-color: var(--theme-header);
    transition: all 0.3s ease;
  }

  .el-footer {
    background-color: var(--theme-footer);
    transition: all 0.3s ease;
  }
}
</style>
