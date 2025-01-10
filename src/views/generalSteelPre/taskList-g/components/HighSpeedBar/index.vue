<template>
  <div class="HighSpeedBar-container">
    <el-table
      ref="tableRef"
      :data="tableData"
      highlight-current-row
      :header-cell-style="{ background: '#fafafa' }"
      border
    >
      <el-table-column label="编号" align="center" width="250" prop="num" />
      <el-table-column
        label="规格(o,mm)"
        align="center"
        width="150"
        prop="size"
      />
      <el-table-column
        label="产线类型"
        align="center"
        width="150"
        prop="productLineType"
      />
      <el-table-column label="上冷床温度(℃)" align="center">
        <el-table-column
          label="表面"
          align="center"
          width="120"
          prop="surface"
        />
        <el-table-column
          label="中心"
          align="center"
          width="120"
          prop="center"
        />
        <el-table-column
          label="平均"
          align="center"
          width="120"
          prop="average"
        />
      </el-table-column>
      <el-table-column label="强度(MPa)" align="center">
        <el-table-column label="屈服" align="center" width="120" prop="yield" />
        <el-table-column
          label="抗拉"
          align="center"
          width="120"
          prop="tensile"
        />
      </el-table-column>
      <el-table-column
        label="延伸率(%)"
        align="center"
        width="120"
        prop="elongationRate"
      />
      <el-table-column
        label="晶粒度"
        align="center"
        width="120"
        prop="grainSize"
      />
      <el-table-column
        label="铁素体比例(%)"
        align="center"
        width="120"
        prop="ferriteRatio"
      />
      <el-table-column fixed="right" label="操作" align="center" width="150">
        <template #default="scope">
          <el-button link type="primary" @click="toCalcResult(scope.row)"
            >计算结果</el-button
          >
        </template>
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
import { useRouter } from "vue-router";

const router = useRouter();

const data = reactive({
  tableData: [
    {
      num: "ZTCDZZP20241014172127",
      size: "22.0",
      productLineType: "高速棒材",
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
      productLineType: "高速棒材",
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
      productLineType: "高速棒材",
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
      productLineType: "高速棒材",
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
      productLineType: "高速棒材",
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

// 去往计算结果
const toCalcResult = (row) => {
  router.push("/taskList-g/calcResult");
};
</script>

<style lang="scss" scoped>
.HighSpeedBar-container{
  margin-top: 20px;
}
</style>
