<template>
  <div class="MainPage-container">
    <div class="calcProductLine">
      <div>计算生产线</div>
      <el-scrollbar style="height: 180px">
        <div class="line-box" :style="{ width: computeDragWidth(list.length) }">
          <div
            v-for="(item, index) in list"
            :key="item.id"
            class="product-item"
          >
            <div class="left">
              <img src="@/assets/imgs/component.png" alt="组件" />
              <span>{{ item.name }}</span>
            </div>
            <div class="right">
              <template v-if="index != list.length - 1">
                <img src="@/assets/imgs/line-arrow.png" alt="箭头" />
              </template>
            </div>
          </div>
        </div>
      </el-scrollbar>

      <v-btn
        variant="tonal"
        class="primary-btn2"
        style="margin-top: 13px"
        @click="toCalcResult"
        >开始计算</v-btn
      >
    </div>
    <div class="paraConfig">
      <div>参数配置</div>
      <div class="top-botton">
        <v-btn variant="outlined" class="simple-btn">上传参数</v-btn>
        <v-btn variant="outlined" class="simple-btn">下载模板</v-btn>
      </div>
      <div class="part-title">部分参数预览</div>
      <el-table
        ref="tableRef1"
        :data="tableData1"
        :span-method="arraySpanMethod1"
        :header-cell-style="{ background: '#fafafa' }"
        border
      >
        <el-table-column label="水箱缩略图" align="center" width="220">
          <template #default="{ rowIndex }">
            <img
              src="@/assets/imgs/water-box.png"
              alt="水箱缩略图"
              class="pa-7"
            />
          </template>
        </el-table-column>
        <el-table-column
          label="水箱参数"
          min-width="50"
          align="center"
          prop="titleType"
        />
        <el-table-column
          label="中轧后"
          align="center"
          max-width="150"
          prop="afterMidRoll"
        />
        <el-table-column
          label="预静轧后"
          align="center"
          max-width="120"
          prop="afterStaticRoll"
        />
        <el-table-column
          label="精轧后"
          align="center"
          max-width="150"
          prop="afterCarefulRoll"
        />
        <el-table-column
          label="减定径后"
          align="center"
          max-width="150"
          prop="afterReduce"
        />
      </el-table>

      <el-table
        ref="tableRef2"
        :data="tableData2"
        :span-method="arraySpanMethod2"
        :header-cell-style="{ background: '#fafafa' }"
        border
        style="margin-top: 20px; width: 620px"
      >
        <el-table-column label="冷床缩略图" align="center" width="220">
          <template #default="{ rowIndex }">
            <img
              src="@/assets/imgs/cool-bed.png"
              alt="冷床缩略图"
              class="ma-auto"
            />
          </template>
        </el-table-column>
        <el-table-column
          label="冷床参数"
          width="200"
          align="center"
          prop="titleType"
        />
        <el-table-column label="值" width="200" align="center" prop="value1" />
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const data = reactive({
  tableData1: [
    {
      titleType: "孔型形状",
      afterMidRoll: "1#",
      afterStaticRoll: "2#",
      afterCarefulRoll: "3#",
      afterReduce: "4#",
    },
    {
      titleType: "水量（m3/h)",
      afterMidRoll: "30.00",
      afterStaticRoll: "30.00",
      afterCarefulRoll: "30.00",
      afterReduce: "30.00",
    },
    {
      titleType: "水压（MPa)",
      afterMidRoll: "0.6",
      afterStaticRoll: "0.6",
      afterCarefulRoll: "0.6",
      afterReduce: "0.6",
    },
    {
      titleType: "长度（m)",
      afterMidRoll: "5.8",
      afterStaticRoll: "5.8",
      afterCarefulRoll: "5.8",
      afterReduce: "5.8",
    },
  ],
  tableData2: [
    {
      titleType: "长度(m)",
      value1: "30.00",
    },
    {
      titleType: "齿数(个)",
      value1: "0.6",
    },
    {
      titleType: "步进节奏(个/s)",
      value1: "5.8",
    },
  ],
});
const { tableData1, tableData2 } = toRefs(data);
const tableRef1 = ref(null);
const tableRef2 = ref(null);

// 合并函数
const arraySpanMethod1 = ({ row, column, rowIndex, columnIndex }) => {
  if (columnIndex === 0) {
    if (rowIndex === 0) {
      return {
        rowspan: 4, // 合并的行数
        colspan: 1,
      };
    } else {
      return {
        rowspan: 0,
        colspan: 0,
      };
    }
  }
};

// 合并函数
const arraySpanMethod2 = ({ row, column, rowIndex, columnIndex }) => {
  if (columnIndex === 0) {
    if (rowIndex === 0) {
      return {
        rowspan: 5,
        colspan: 1,
      };
    } else {
      return {
        rowspan: 0,
        colspan: 0,
      };
    }
  }
};

const list = ref([
  {
    name: "连铸机",
    id: "1",
    distance: "",
    length: "",
  },
  {
    name: "除鳞箱",
    id: "2",
    distance: "",
    length: "",
  },
  {
    name: "保温罩",
    id: "3",
    distance: "",
    length: "",
  },
  {
    name: "感应加热炉",
    id: "4",
    distance: "",
    length: "",
  },
  {
    name: "脱头",
    id: "5",
    distance: "",
    length: "",
  },
  {
    name: "水箱",
    id: "6",
    distance: "",
    length: "",
  },
  {
    name: "冷床",
    id: "7",
    distance: "",
    length: "",
  },
  {
    name: "风冷线",
    id: "8",
    distance: "",
    length: "",
  },
  {
    name: "集卷站",
    id: "9",
    distance: "",
    length: "",
  },
  {
    name: "打捆站",
    id: "10",
    distance: "",
    length: "",
  },
]);

// 计算生产线长度
const computeDragWidth = (length) => {
  return `${length * 150}px`;
};

// 跳转到计算结果页面
const toCalcResult = () => {
  router.push({
    path: "/specialSteelBar/calcResult",
  });
};
</script>

<style lang="scss" scoped>
.MainPage-container {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .calcProductLine {
    height: 290px;
    background-color: #fff;
    border-radius: $base-border-radius;
    box-shadow: $box-shadow;
    padding: 20px;

    .line-box {
      display: flex;
      height: 160px;
      border: 1px solid #ededef;
      border-radius: $base-border-radius;
      margin-top: 15px;

      .product-item {
        cursor: move;
        width: 150px;
        height: 100%;
        display: flex;
        padding: 20px 0;

        &:first-child {
          margin-left: 30px;
        }

        .left {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 10px;

          img {
            width: 66px;
            height: 80px;
          }

          span {
            font-size: 14px;
          }

          .length {
            width: 80px;
          }
        }

        .right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;

          img {
            width: 20px;
            height: 20px;
          }

          .distance {
            position: absolute;
            bottom: 0px;
            width: 80px;
          }
        }
      }
    }
  }

  .paraConfig {
    border-radius: $base-border-radius;
    box-shadow: $box-shadow;
    background-color: #fff;
    padding: 20px;
    margin-bottom: 50px;

    .part-title {
      height: 50px;
      display: flex;
      align-items: center;
      font-size: 15px;
      margin: 10px 0;

      &::before {
        content: "";
        display: block;
        width: 4px;
        height: 14px;
        border-radius: 10px;
        background-color: #f89623;
        margin-right: 10px;
      }
    }

    .top-botton {
      display: flex;
      gap: 10px;
      margin-top: 25px;
    }
  }
}
</style>
