<template>
  <div class="aside-container">
    <el-menu
      active-text-color="#004ea6"
      default-active="0"
      class="el-menu-vertical"
      @select="handleNavItemClick"
    >
      <template v-for="(item, index) in navItemList" :key="item.path">
        <el-sub-menu
          v-if="item.children && item.children.length"
          :index="index.toString()"
        >
          <template #title>
            <component :is="item.icon" class="menu-icon"></component>
            <span class="menu-item-name">{{ item.name }}</span>
          </template>
          <template v-for="(child, index) in item.children" :key="child.path">
            <el-menu-item
              :index="`${index.toString()}-${child.index}`"
              @click.native.prevent="
                handleSubMenuItemClick(
                  child,
                  `${index.toString()}-${child.index}`
                )
              "
            >
              <span class="menu-item-name">{{ child.name }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
        <el-menu-item
          v-else
          :index="index.toString()"
          @click.native.prevent="handleNavItemClick(item, index.toString())"
        >
          <!-- 对于没有子菜单的项，直接使用图标和名称 -->
          <component :is="item.icon" class="menu-icon"></component>
          <span class="menu-item-name">{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const navItemList = reactive([
  {
    path: "/",
    name: "首页",
    icon: "House",
  },
  {
    path: "/change",
    name: "铸轧温度演变",
    icon: "Notification",
    children: [
      { path: "/sub1", name: "直接铸轧", icon: "some-icon" },
      { path: "/sub2", name: "连铸连轧", icon: "some-icon" },
    ],
  },
  {
    path: "/share",
    name: "全线温度演变",
    icon: "Connection",
  },
  {
    path: "/product",
    name: "孔型轧制计算",
    icon: "EditPen",
  },
  {
    path: "/communication",
    name: "优特钢轧制计算",
    icon: "Operation",
  },
  {
    path: "/download",
    name: "减定径计算",
    icon: "ZoomOut",
  },
  {
    path: "/about",
    name: "特钢性能预报",
    icon: "PieChart",
  },
  {
    path: "/about",
    name: "普钢性能预报",
    icon: "ChatLineSquare",
  },
  {
    path: "/about",
    name: "材料参数",
    icon: "Odometer",
  },
  {
    path: "/about",
    name: "更多产品",
    icon: "More",
  },
]);

const handleNavItemClick = (item, index) => {
  router.push(item.path);
};

// 如果你有子菜单，你可能还需要一个处理子菜单项点击的方法
const handleSubMenuItemClick = (childItem, index) => {
  router.push(childItem.path);
};
</script>

<style lang="scss">
.aside-container {
  position: relative;
  height: calc(100vh - 60px);

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

    .menu-icon{
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
