<template>
  <div class="aside-container">
    <el-menu
      active-text-color="#004ea6"
      :default-active="route.path"
      class="el-menu-vertical"
      @select="handleNavItemClick"
    >
      <template v-for="item in navItemList" :key="item.path">
        <el-sub-menu
          v-if="item.children && item.children.length"
          :index="item.path"
        >
          <template #title>
            <component :is="item.icon" class="menu-icon"></component>
            <span class="menu-item-name">{{ item.name }}</span>
          </template>
          <template v-for="child in item.children" :key="child.path">
            <el-menu-item
              :index="child.path"
              :class="{ 'is-active': isActive(item.path) }"
            >
              <span class="menu-item-name">{{ child.name }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
        <!-- 对于没有子菜单的项，直接使用图标和名称 -->
        <el-menu-item
          v-else
          :index="item.path"
          :class="{ 'is-active': isActive(item.path) }"
        >
          <component :is="item.icon" class="menu-icon"></component>
          <span class="menu-item-name">{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

onMounted(() => {});

const router = useRouter();
const route = useRoute();
const navItemList = reactive([
  {
    path: "/home",
    name: "首页",
    icon: "House",
  },
  {
    path: "/castRollTE",
    name: "铸轧温度演变",
    icon: "Notification",
    children: [
      { path: "/directCastingRoll", name: "直接铸轧", icon: "" },
      { path: "/continuousCastRoll", name: "连铸连轧", icon: "" },
    ],
  },
  {
    path: "/allLineTE",
    name: "全线温度演变",
    icon: "Connection",
    children: [
      { path: "/evolutionConfig", name: "演变配置", icon: "" },
      { path: "/taskList", name: "任务列表", icon: "" },
    ],
  },
  {
    path: "/passRollCalculation",
    name: "孔型轧制计算",
    icon: "EditPen",
  },
  {
    path: "/greatSteelRollCalculation",
    name: "优特钢轧制计算",
    icon: "Operation",
  },
  {
    path: "/reduceDiameterCalculation",
    name: "减定径计算",
    icon: "ZoomOut",
  },
  {
    path: "/specialSteelPrediction",
    name: "特钢性能预报",
    icon: "PieChart",
  },
  {
    path: "/generalSteelPrediction",
    name: "普钢性能预报",
    icon: "ChatLineSquare",
  },
  {
    path: "/materialParameter",
    name: "材料参数",
    icon: "Odometer",
  },
  {
    path: "/moreProducts",
    name: "更多产品",
    icon: "More",
  },
]);

const activePath = computed(() => route.path);

const isActive = (path) => activePath.value.startsWith(path);

const handleNavItemClick = (path) => {
  router.push(path);
};
</script>

<style lang="scss">
.aside-container {
  position: relative;
  height: calc(100vh - $top-header-height);

  .el-menu-vertical {
    padding-top: 10px;

    .el-sub-menu,
    .el-menu-item {
      width: 90%;
      margin: 0 auto;
    }

    .el-menu-item:hover,
    .el-sub-menu__title:hover {
      background: transparent !important;
    }

    .menu-icon {
      width: 18px;
      height: 18px;
      margin-right: 10px;
    }

    .menu-item-name {
      color: #56596e;
      font-size: 15px;
    }

    .el-menu-item.is-active {
      background-color: #004ea61a !important;
      border-radius: 8px;

      .menu-item-name {
        color: #004ea6;
      }
    }
  }
}
</style>
