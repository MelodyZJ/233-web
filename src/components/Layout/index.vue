<template>
  <div class="layout-container">
    <el-container>
      <el-header class="top-header">
        <Header />
      </el-header>
      <el-container class="main-container">
        <!-- 减去头部高度 -->
        <el-aside :width="asideWidth + 'px'" class="fixed-aside">
          <Aside @foldChange="foldChangeFn" />
        </el-aside>

        <!-- 右侧内容 -->
        <el-main class="main-content">
          <el-breadcrumb separator="/" style="padding: 25px 0 20px 0">
            <el-breadcrumb-item
              v-for="(item, index) in breadcrumbItems"
              :key="index"
            >
              <router-link :to="item.to">{{ item.name }}</router-link>
            </el-breadcrumb-item>
          </el-breadcrumb>

          <router-view v-if="isRouterActive" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Aside from "@/components/Aside/index.vue";
import Header from "@/components/Header/index.vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
// 提供强制刷新函数
const isRouterActive = ref(true);
provide("reload", () => {
  isRouterActive.value = false;
  nextTick(() => {
    isRouterActive.value = true;
  });
});

const asideWidth = ref(200);
const isFolded = ref(false);

const foldChangeFn = (value) => {
  isFolded.value = value;
  asideWidth.value = isFolded.value ? 80 : 200;
};

const breadcrumbItems = computed(() => {
  let matched = route.matched;
  let items = [];
  for (let record of matched) {
    if (record.meta && record.meta.title) {
      items.push({
        name: record.meta.title,
        to: record.path,
      });
    }
  }
  // 如果需要添加首页，可以在这里手动添加
  if (items.length > 0 && items[0].name !== "首页") {
    items.unshift({
      name: "首页",
      to: "/",
    });
  }
  return items;
});
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  height: 100vh;
  overflow: hidden;

  .top-header {
    background-color: var(--theme-header);
  }

  .main-container {
    // height: calc(100vh - $top-header-height);
  }

  .fixed-aside {
    height: calc(100vh - $top-header-height);
    background-color: var(--theme-aside);
    transition: all 0.3s ease;
  }

  .main-content {
    padding: 0 40px 40px 40px;
    background-color: #ebeff7;
    transition: all 0.3s ease;
  }
}
</style>
