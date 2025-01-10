<template>
  <div class="PowerPredict-container">
    <el-table
      ref="tableRef"
      :data="tableData"
      highlight-current-row
      :header-cell-style="{ background: '#fafafa' }"
      border
    >
      <el-table-column label="任务名" align="center" width="250" prop="num" />
      <el-table-column label="力学性能计算结果" align="center">
        <el-table-column
          label="σs(MPa)"
          align="center"
          width="120"
          prop="surface"
        />
        <el-table-column
          label="σb(MPa)"
          align="center"
          width="120"
          prop="center"
        />
        <el-table-column
          label="A(%)"
          align="center"
          width="120"
          prop="average"
        />
        <el-table-column
          label="延伸率(%)"
          align="center"
          width="120"
          prop="average"
        />
      </el-table-column>
      <el-table-column label="相关计算结果" align="center">
        <el-table-column label="F(%)" align="center" width="120" prop="yield" />
        <el-table-column
          label="B(%)"
          align="center"
          width="120"
          prop="tensile"
        />
        <el-table-column
          label="M(%)"
          align="center"
          width="120"
          prop="elongationRate"
        />
        <el-table-column
          label="P(%)"
          align="center"
          width="120"
          prop="grainSize"
        />
        <el-table-column
          label="Ps(μm)"
          align="center"
          width="120"
          prop="ferriteRatio"
        />
        <el-table-column
          label="轧后y(um)"
          align="center"
          width="120"
          prop="ferriteRatio"
        />
      </el-table-column>

      <el-table-column label="各相变温度计算结果" align="center">
        <el-table-column label="Ae3(%)" align="center" width="200" prop="yield" />
      </el-table-column>
    </el-table>

    <pagination
      v-show="total > 0"
      :total="total"
      v-model:page="queryParams.pageNum"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    />
  </div>
</template>

<script setup>
const data = reactive({
  tableData: [
    {
      num: "ZTCDZZP20241014172127",
      size: "22.0",
      productLineType: "高速线材",
      surface: "22.0",
      center: "22.0",
      average: "22.0",
      yield: "22.0",
      tensile: "22.0",
      elongationRate: "17",
      grainSize: "17",
      ferriteRatio: "17",
    },
    {
      num: "ZTCDZZP20241014172127",
      size: "22.0",
      productLineType: "高速线材",
      surface: "22.0",
      center: "22.0",
      average: "22.0",
      yield: "22.0",
      tensile: "22.0",
      elongationRate: "17",
      grainSize: "17",
      ferriteRatio: "17",
    },
    {
      num: "ZTCDZZP20241014172127",
      size: "22.0",
      productLineType: "高速线材",
      surface: "22.0",
      center: "22.0",
      average: "22.0",
      yield: "22.0",
      tensile: "22.0",
      elongationRate: "17",
      grainSize: "17",
      ferriteRatio: "17",
    },
    {
      num: "ZTCDZZP20241014172127",
      size: "22.0",
      productLineType: "高速线材",
      surface: "22.0",
      center: "22.0",
      average: "22.0",
      yield: "22.0",
      tensile: "22.0",
      elongationRate: "17",
      grainSize: "17",
      ferriteRatio: "17",
    },
    {
      num: "ZTCDZZP20241014172127",
      size: "22.0",
      productLineType: "高速线材",
      surface: "22.0",
      center: "22.0",
      average: "22.0",
      yield: "22.0",
      tensile: "22.0",
      elongationRate: "17",
      grainSize: "17",
      ferriteRatio: "17",
    },
  ],
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    belongProject: undefined,
    tableType: undefined,
    calculateState: undefined,
  },
});
const { queryParams, tableData, rules } = toRefs(data);
const total = ref(20);
const tableRef = ref(null);

// 获取列表
const getList = () => {};
</script>

<style lang="scss" scoped></style>
