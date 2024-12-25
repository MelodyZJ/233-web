<template>
  <div class="directCastRoll-container">
    <div class="container-left">
      <!-- 组件库 -->
      <div class="component-lib-container">
        <div class="top-header">
          <span>组件库</span>
          <paging
            @prev="prev"
            @next="next"
            :total="componentItemList.total"
            :currentPage="componentItemList.pageNum"
            class="mr-1"
          ></paging>
        </div>
        <div class="content">
          <VueDraggable
            v-model="list1"
            :animation="150"
            :group="{ name: 'component', pull: 'clone', put: false }"
            :sort="false"
            :clone="clone"
            class="component-list"
          >
            <div
              class="component-item"
              v-for="(item, index) in list1"
              :key="item.id"
            >
              <div class="item-image">
                <img src="@/assets/imgs/component.png" alt="组件" />
              </div>
              <div class="item-name">{{ item.name }}</div>
            </div>
          </VueDraggable>
        </div>
      </div>
    </div>
    <div class="container-right">
      <!-- 建立生产线 -->
      <div class="product-line-container">
        <div class="title">建立生产线</div>
        <div class="tip">请将组件拖入下框中建立生产线</div>
        <div class="content">
          <el-scrollbar>
            <VueDraggable
              v-model="list2"
              :animation="150"
              group="component"
              ghostClass="ghost"
              class="product-drag"
              :style="{ width: computeDragWidth(list2.length) }"
            >
              <div v-for="item in list2" :key="item.id" class="product-item">
                <div class="left">
                  <img src="@/assets/imgs/component.png" alt="组件" />
                  <span>{{ item.name }}</span>
                </div>
                <div class="right">
                  <img src="@/assets/imgs/line-arrow.png" alt="箭头" />
                </div>
              </div>
            </VueDraggable>
          </el-scrollbar>
        </div>
      </div>
      <!-- 产品详情 -->
      <product-detail></product-detail>
    </div>
  </div>
</template>

<script setup>
import ProductDetail from "./components/ProductDetail/index.vue";
import { VueDraggable } from "vue-draggable-plus";
import Paging from "@/components/Paging/index.vue";

// 组件库
const componentItemList = ref({
  total: 100,
  pageNum: 1,
});

// 组件库分页
const prev = () => {
  componentItemList.value.pageNum--;
};
const next = () => {
  componentItemList.value.pageNum++;
};

// 建立生产线
const list1 = ref([
  {
    name: "连铸机",
    id: "1",
  },
  {
    name: "除鳞箱",
    id: "2",
  },
  {
    name: "保温罩",
    id: "3",
  },
  {
    name: "感应加热炉",
    id: "4",
  },
  {
    name: "脱头",
    id: "5",
  },
  {
    name: "水箱",
    id: "6",
  },
  {
    name: "冷床",
    id: "7",
  },
  {
    name: "风冷线",
    id: "8",
  },
  {
    name: "集卷站",
    id: "9",
  },
  {
    name: "打捆站",
    id: "10",
  },
]);
const list2 = ref(
  list1.value.map((item) => ({
    name: `${item.name}`,
    id: `${item.id}`,
  }))
);

function clone(element) {
  const len = list2.value.length;
  return {
    name: `${element.name}`,
    id: `${element.id}`,
  };
}

// 计算生产线长度
const computeDragWidth = (length) => {
  return `${length * 200 + 20}px`;
};
</script>

<style lang="scss" scoped>
.directCastRoll-container {
  height: calc(100vh - $base-main-padding * 2 - $top-header-height - 10px);
  display: flex;
  gap: 20px;

  .container-left {
    width: 320px;
    background-color: #fff;
    border-radius: $base-border-radius;

    .component-lib-container {
      width: 320px;
      height: 100%;
      display: flex;
      flex-direction: column;

      .top-header {
        padding: 15px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .content {
        flex-grow: 1;
        overflow-y: auto;
        margin-bottom: 20px;

        .component-list {
          display: flex;
          flex-wrap: wrap;
          padding: 0 20px;
          gap: 20px;

          .component-item {
            width: 128px;
            height: 144px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #f6f7f9;
            border: 1px solid #ededef;
            border-radius: 4px;
            overflow: hidden;

            .item-image {
              flex: 4;
              display: flex;
              align-items: center;
              justify-content: center;

              img {
                width: 78px;
                height: 94px;
              }
            }

            .item-name {
              flex: 1;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 14px;
              color: #979a9b;
              background-color: #dbe1e4;
            }
          }
        }
      }
    }
  }

  .container-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: hidden;

    .product-line-container {
      width: 100%;
      height: 255px;
      background-color: #fff;
      border-radius: $base-border-radius;
      display: flex;
      flex-direction: column;

      .title {
        padding: 15px 20px 5px 20px;
      }

      .tip {
        padding: 0 20px;
        font-size: 14px;
        color: #999999;
      }

      .content {
        width: 100%;
        padding: 20px;

        .product-drag {
          height: 150px;
          display: flex;
          background-color: #f6f7f9;
          border: 1px solid #ededef;
          border-radius: 4px;

          .product-item {
            cursor: move;
            width: 200px;
            height: 100%;
            display: flex;
            padding: 20px 0;

            &:first-child {
              margin-left: 20px;
            }

            .left {
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 10px;

              img {
                width: 66px;
                height: 80px;
              }

              span {
                font-size: 14px;
              }
            }

            .right {
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: center;

              img {
                width: 20px;
                height: 20px;
              }
            }
          }
        }
      }
    }
  }

  .ghost {
    width: 80px;
    height: 80px;
  }
}
</style>
