<template>
  <div class="specialSteelWire-container">
    <div class="calcProductLine">
      <div>计算生产线</div>
      <div class="line-box"></div>
      <v-btn variant="tonal" class="primary-btn2">开始计算</v-btn>
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
        highlight-current-row
        :header-cell-style="{ background: '#fafafa' }"
        border
      >
        <el-table-column label="水箱缩略图" align="center" width="220">
          <template #default="{ rowIndex }">
            <!-- <img src="" alt="" /> -->
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
        highlight-current-row
        :header-cell-style="{ background: '#fafafa' }"
        border
        style="margin-top: 20px"
      >
        <el-table-column label="风机缩略图" align="center" width="220">
          <template #default="{ rowIndex }">
            <!-- <img src="" alt="" /> -->
          </template>
        </el-table-column>
        <el-table-column
          label="风机"
          min-width="50"
          align="center"
          prop="titleType"
        />
        <el-table-column
          label="1#"
          align="center"
          max-width="150"
          prop="value1"
        />
        <el-table-column
          label="2#"
          align="center"
          max-width="120"
          prop="value2"
        />
        <el-table-column
          label="3#"
          align="center"
          max-width="150"
          prop="value3"
        />
        <el-table-column
          label="4#"
          align="center"
          max-width="150"
          prop="value4"
        />
        <el-table-column
          label="5#"
          align="center"
          max-width="150"
          prop="value5"
        />
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { Value } from "sass";

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
      titleType: "风量(10km3/h)",
      value1: "30.00",
      value2: "30.00",
      value3: "30.00",
      value4: "30.00",
      value5: "30.00",
    },
    {
      titleType: "功率(kw)",
      value1: "0.6",
      value2: "0.6",
      value3: "0.6",
      value4: "0.6",
      value5: "0.6",
    },
    {
      titleType: "开度(%)",
      value1: "5.8",
      value2: "5.8",
      value3: "5.8",
      value4: "5.8",
      value5: "5.8",
    },
    {
      titleType: "保湿置状态",
      value1: "关",
      value2: "关",
      value3: "关",
      value4: "关",
      value5: "关",
    },
    {
      titleType: "风机形式",
      value1: "直吹",
      value2: "直吹",
      value3: "直吹",
      value4: "直吹",
      value5: "直吹",
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
        rowspan: 5, // 合并的行数
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
</script>

<style lang="scss" scoped>
.specialSteelWire-container {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .calcProductLine {
    height: 280px;
    background-color: #fff;
    border-radius: $base-border-radius;
    box-shadow: $box-shadow;
    padding: 20px;

    .line-box {
      height: 150px;
      margin: 15px 0;
      border: 1px solid #ededef;
      border-radius: $base-border-radius;
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
