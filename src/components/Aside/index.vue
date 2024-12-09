<template>
  <div class="aside-container">
    <div class="header">
      <img src="@/assets/icons/vue.svg" alt="" class="head-icon" />
      <div :class="isFold ? 'right-fold' : 'right-expand'">
        <div class="title">蓦然回首</div>
        <div class="content">那人却在灯火阑珊处</div>
      </div>
    </div>

    <!-- 导航栏 -->
    <div class="nav">
      <div :class="isFold ? 'title-fold' : 'title-expand'">菜单</div>
      <div
        class="nav-item"
        :class="{ active: currentIndex === index }"
        v-for="(item, index) in navItemList"
        :key="index"
        @click="handleNavItemClick(item, index)"
      >
        <v-icon
          :icon="item.icon"
          :color="currentIndex === index ? '#3b73f0' : ''"
        />
        <span :class="isFold ? 'text-fold' : 'text-expand'">{{
          item.name
        }}</span>
      </div>
    </div>

    <!-- 底部收缩按钮 -->
    <div class="shrink-btn" @click="handleFold">
      <el-icon :size="24" color="#9195a1">
        <Fold v-if="!isFold" />
        <Expand v-else />
      </el-icon>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

const currentIndex = ref(0);
const router = useRouter();
const navItemList = reactive([
  {
    path: "/",
    name: "首页",
    icon: "mdi-home",
  },
  {
    path: "/share",
    name: "个人分享",
    icon: "mdi-book-variant",
  },
  {
    path: "/product",
    name: "项目产品",
    icon: "mdi-cube",
  },
  {
    path: "/communication",
    name: "技术交流",
    icon: "mdi-comment-multiple",
  },
  {
    path: "/download",
    name: "资源下载",
    icon: "mdi-download-box",
  },
  {
    path: "/about",
    name: "关于",
    icon: "mdi-account",
  },
]);

// 点击导航项
const handleNavItemClick = (item, index) => {
  currentIndex.value = index;
  router.push(item.path);
};

const emit = defineEmits(["foldChange"]);
const isFold = ref(false);
// 点击折叠
const handleFold = () => {
  isFold.value = !isFold.value;
  emit("foldChange", isFold.value);
};
</script>

<style lang="scss" scoped>
.aside-container {
  position: relative;
  height: 100vh;

  .header {
    display: flex;
    height: 100px;
    overflow: hidden;

    .head-icon {
      width: 40px;
      height: 40px;
      margin: auto 30px;
    }

    .right-fold {
      opacity: 0;
    }

    .right-expand {
      display: flex;
      flex-direction: column;
      justify-content: center;
      opacity: 1;
      transition: opacity 1.8s ease;
      margin-left: -5px;

      .title {
        font-weight: bold;
        font-size: 20px;
        color: var(--fontColorBasic);
        transition: color 0.3s ease;
      }

      .content {
        font-size: 12px;
        color: var(--fontColorBottom);
      }
    }
  }

  .nav {
    padding: 0 40px;
    cursor: pointer;

    .title-fold {
      height: 0;
      opacity: 0;
      transition: height 0.3s ease;
    }
    .title-expand {
      margin-top: 10px;
      height: 50px;
      font-size: 14px;
      color: var(--fontColorBottom);
      transition: all 0.3s ease;
    }

    .nav-item {
      height: 56px;
      font-size: 14px;
      color: var(--fontColorBottom);
      font-weight: 700;

      &.active {
        color: var(--fontColorBasic);
      }

      .text-fold {
        opacity: 0;
      }

      .text-expand {
        margin-left: 15px;
        opacity: 1;
        transition: all 0.3s ease;
      }
    }
  }

  .shrink-btn {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid var(--theme-boder);
    transition: border-top 0.3s ease;
  }
}
</style>
