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
        <v-btn
          variant="outlined"
          class="white-btn"
          v-for="(item, index) in dateRangeList"
          :key="index"
          @click="handleDateRange(item)"
        >
          {{ item.label }}
        </v-btn>
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
        <el-table-column
          label="序号"
          min-width="50"
          align="center"
          type="index"
        />
        <el-table-column
          label="任务名称"
          align="center"
          max-width="150"
          prop="taskName"
        />
        <el-table-column
          label="工艺概况"
          align="center"
          min-width="120"
          prop="processOverview"
        />
        <el-table-column
          label="扎线类型"
          align="center"
          max-width="150"
          prop="type"
        />
        <el-table-column
          label="扎线形式"
          align="center"
          max-width="150"
          prop="pattern"
        />
        <el-table-column
          label="状态"
          align="center"
          max-width="150"
          prop="status"
        />
        <el-table-column
          label="创建时间"
          align="center"
          max-width="150"
          prop="creatTime"
        />

        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          min-width="100"
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
              type="danger"
              @click.prevent="deleteItem(scope.$index)"
            >
              删除
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
import moment from "moment";
import router from "@/router";

const now = new Date();

const data = reactive({
  tableData: [
    {
      taskName: "我是任务",
      processOverview: "222",
      type: "类型1",
      pattern: "形式1",
      status: "已完成",
      creatTime: "2024-11-08",
    },
    {
      taskName: "我是任务",
      processOverview: "222",
      type: "类型1",
      pattern: "形式1",
      status: "已完成",
      creatTime: "2024-11-08",
    },
    {
      taskName: "我是任务",
      processOverview: "222",
      type: "类型1",
      pattern: "形式1",
      status: "已完成",
      creatTime: "2024-11-08",
    },
    {
      taskName: "我是任务",
      processOverview: "222",
      type: "类型1",
      pattern: "形式1",
      status: "已完成",
      creatTime: "2024-11-08",
    },
    {
      taskName: "我是任务",
      processOverview: "222",
      type: "类型1",
      pattern: "形式1",
      status: "已完成",
      creatTime: "2024-11-08",
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
  router.push({
    path: "/taskList-a/resultShow",
  });
};
// 删除操作
const deleteItem = (index) => {
  tableData.value.splice(index, 1);
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

const dateRangeList = reactive([
  {
    label: "近7天",
    amount: "7",
    unit: "days",
  },
  {
    label: "近1月",
    amount: "1",
    unit: "months",
  },
  {
    label: "近3月",
    amount: "3",
    unit: "months",
  },
]);

// 点击时间跨度
const handleDateRange = (val) => {
  const { amount, unit } = val;
  let currentDate = moment().format("YYYY-MM-DD");
  let pastDate = moment().subtract(amount, unit).format("YYYY-MM-DD");

  queryParams.value.startTime = pastDate;
  queryParams.value.endTime = currentDate;
};
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
