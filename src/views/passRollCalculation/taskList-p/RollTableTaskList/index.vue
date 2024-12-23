<template>
  <div class="rollTableTaskList-container">
    <div class="top-search">
      <el-select
        v-model="queryParams.belongProject"
        placeholder="所属项目"
        clearable
        style="width: 180px"
      >
        <el-option
          v-for="item in belongProjectList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <el-select
        v-model="queryParams.tableType"
        placeholder="轧制表类型"
        clearable
        style="width: 180px"
      >
        <el-option
          v-for="item in tableTypeList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <el-select
        v-model="queryParams.calculateState"
        placeholder="计算状态"
        clearable
        style="width: 180px"
      >
        <el-option
          v-for="item in calculateStateList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <div class="btn">
        <v-btn variant="outlined" class="primary-btn">查询</v-btn>
        <v-btn variant="outlined" class="white-btn">重置</v-btn>
      </div>
    </div>

    <div class="table" style="width: 100%">
      <el-table
        ref="tableRef"
        :data="tableData"
        highlight-current-row
        style="width: 99%"
        :header-cell-style="{ background: '#fafafa' }"
        border
      >
        <el-table-column
          label="任务编号"
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
          label="项目名称"
          align="center"
          max-width="120"
          prop="projectName"
        />
        <el-table-column
          label="类型"
          align="center"
          max-width="150"
          prop="type"
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
          min-width="130"
        >
          <template #default="scope">
            <el-button
              link
              type="primary"
              @click.prevent="toSystem(scope.$index)"
            >
              孔型系统
            </el-button>

            <el-button
              link
              type="primary"
              @click.prevent="toTable(scope.$index)"
            >
              轧制表
            </el-button>

            <el-button
              link
              type="primary"
              @click.prevent="deleteItem(scope.$index)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <pagination
        :total="total"
        v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize"
        @pagination="getList"
      />
    </div>
  </div>
</template>

<script setup>
const now = new Date();

const data = reactive({
  tableData: [
    {
      taskName: "我是任务",
      projectName: "222",
      type: "类型1",
      status: "已完成",
      creatTime: "2024-11-08",
    },
    {
      taskName: "我是任务",
      projectName: "222",
      type: "类型1",
      status: "已完成",
      creatTime: "2024-11-08",
    },
    {
      taskName: "我才是任务",
      projectName: "222",
      type: "类型1",
      status: "已完成",
      creatTime: "2024-11-08",
    },
    {
      taskName: "今夜星光闪闪",
      projectName: "222",
      type: "类型1",
      status: "已完成",
      creatTime: "2024-11-08",
    },
    {
      taskName: "我爱你的心暖暖",
      projectName: "222",
      type: "类型1",
      status: "已完成",
      creatTime: "2024-11-08",
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
const total = ref(10);
const tableRef = ref(null);

const getList = () => {};

const toSystem = (index) => {};
const toTable = (index) => {};

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
</script>

<style lang="scss" scoped>
.rollTableTaskList-container {
  margin-top: 20px;

  .top-search {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .table {
    margin-top: 30px;
  }
}
</style>
