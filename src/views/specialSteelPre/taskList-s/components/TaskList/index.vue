<template>
  <div class="TaskList-container">
    <div class="top-search">
      <div class="left">
        <el-date-picker
          v-model="queryParams.startTime"
          type="date"
          placeholder="开始时间"
          style="height: 36px"
        />

        <el-date-picker
          v-model="queryParams.endTime"
          type="date"
          placeholder="结束时间"
          style="height: 36px"
        />

        <div class="btn">
          <v-btn variant="outlined" class="primary-btn">查询</v-btn>
          <v-btn variant="outlined" class="white-btn">重置</v-btn>
        </div>
      </div>
      <div class="right">
        <v-btn variant="outlined" class="white-btn">近7天</v-btn>
        <v-btn variant="outlined" class="white-btn">近1个月</v-btn>
        <v-btn variant="outlined" class="white-btn">近3个月</v-btn>
      </div>
    </div>

    <div class="table-data">
      <el-table
        ref="tableRef"
        :data="tableData"
        highlight-current-row
        :header-cell-style="{ background: '#fafafa' }"
        border
      >
        <el-table-column label="序号" width="100" align="center" type="index" />
        <el-table-column
          label="任务名称"
          align="center"
          width="200"
          prop="taskName"
        />
        <el-table-column
          label="钢种"
          align="center"
          min-width="120"
          prop="steelGrade"
        />
        <el-table-column
          label="产品类型"
          align="center"
          min-width="150"
          prop="productType"
        />
        <el-table-column
          label="钢坯类型"
          align="center"
          min-width="120"
          prop="billetType"
        />
        <el-table-column
          label="规格(mm)"
          align="center"
          min-width="120"
          prop="size"
        />
        <el-table-column
          label="开轧温度(℃)"
          align="center"
          min-width="120"
          prop="rollTemper"
        />
        <el-table-column
          label="铁素体(%)"
          align="center"
          min-width="120"
          prop="ferrite"
        />
        <el-table-column
          label="珠光体(%)"
          align="center"
          min-width="120"
          prop="pearlite"
        />
        <el-table-column
          label="贝氏体(%)"
          align="center"
          min-width="120"
          prop="bainite"
        />
        <el-table-column
          label="马氏体(%)"
          align="center"
          min-width="120"
          prop="martensite"
        />
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          min-width="180"
        >
          <template #default="scope">
            <el-button
              link
              type="primary"
              @click.prevent="toResult(scope.$index)"
            >
              查看
            </el-button>

            <el-button
              link
              type="primary"
            >
              数据导出
            </el-button>
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
  </div>
</template>

<script setup>
import router from "@/router";

const now = new Date();

const data = reactive({
  tableData: [
    {
      taskName: "我是任务",
      steelGrade: "ZTCDZZP",
      productType: "高速线材",
      billetType: "直轧坯",
      size: "17",
      rollTemper: "17",
      ferrite: "17",
      pearlite: "17",
      bainite: "17",
      martensite: "17",
    },
    {
      taskName: "我是任务",
      steelGrade: "ZTCDZZP",
      productType: "高速线材",
      billetType: "直轧坯",
      size: "17",
      rollTemper: "17",
      ferrite: "17",
      pearlite: "17",
      bainite: "17",
      martensite: "17",
    },
    {
      taskName: "我是任务",
      steelGrade: "ZTCDZZP",
      productType: "高速线材",
      billetType: "直轧坯",
      size: "17",
      rollTemper: "17",
      ferrite: "17",
      pearlite: "17",
      bainite: "17",
      martensite: "17",
    },
    {
      taskName: "我是任务",
      steelGrade: "ZTCDZZP",
      productType: "高速线材",
      billetType: "直轧坯",
      size: "17",
      rollTemper: "17",
      ferrite: "17",
      pearlite: "17",
      bainite: "17",
      martensite: "17",
    },
    {
      taskName: "我是任务",
      steelGrade: "ZTCDZZP",
      productType: "高速线材",
      billetType: "直轧坯",
      size: "17",
      rollTemper: "17",
      ferrite: "17",
      pearlite: "17",
      bainite: "17",
      martensite: "17",
    },
    {
      taskName: "我是任务",
      steelGrade: "ZTCDZZP",
      productType: "高速线材",
      billetType: "直轧坯",
      size: "17",
      rollTemper: "17",
      ferrite: "17",
      pearlite: "17",
      bainite: "17",
      martensite: "17",
    },
  ],
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    startTime: "",
    endTime: "",
  },
});
const { queryParams, tableData, rules } = toRefs(data);
const total = ref(20);
const tableRef = ref(null);

// 获取列表
const getList = () => {};
// 跳转查看结果
const toResult = (index) => {
  // router.push({
  //   path: "/taskList-a/resultShow",
  // });
};

const belongProjectList = ref([
  {
    value: "选项1",
    label: "项目1",
  },
  {
    value: "选项2",
    label: "项目2",
  },
  {
    value: "选项3",
    label: "项目3",
  },
]);

const tableTypeList = ref([
  {
    value: "选项1",
    label: "表1",
  },
  {
    value: "选项2",
    label: "表2",
  },
]);

const calculateStateList = ref([
  {
    value: "选项1",
    label: "状态1",
  },
  {
    value: "选项2",
    label: "状态2",
  },
]);
</script>

<style lang="scss" scoped>
.TaskList-container {
  margin-top: 20px;
  flex-grow: 1;

  .top-search {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      gap: 10px;
    }

    .right {
    }
  }

  .table-data {
    width: 100%;
    margin-top: 30px;
  }
}
</style>
