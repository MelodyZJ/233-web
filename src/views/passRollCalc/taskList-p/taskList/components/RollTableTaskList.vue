<template>
  <div class="rollTableTaskList-container">
    <div class="top-search">
      <el-select
        v-model="searchInfo.group_id[0]"
        placeholder="所属项目"
        clearable
        class="select"
      >
        <el-option
          v-for="item in groupList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <el-select
        v-model="searchInfo.type[0]"
        placeholder="轧制表类型"
        clearable
        class="select"
      >
        <el-option
          v-for="item in typeList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <el-select
        v-model="searchInfo.status[0]"
        placeholder="计算状态"
        clearable
        class="select"
      >
        <el-option
          v-for="item in statusList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <div class="btn">
        <v-btn variant="outlined" class="primary-btn" @click="getList"
          >查询</v-btn
        >
        <v-btn variant="outlined" class="white-btn" @click="resetSearch"
          >重置</v-btn
        >
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
          prop="groupName"
        />
        <el-table-column
          label="类型"
          align="center"
          max-width="150"
          prop="type"
        >
          <template #default="scope">
            <span v-if="scope.row.type == 0">设计轧制表</span>
            <span v-if="scope.row.type == 1">用户轧制表</span>
          </template></el-table-column
        >
        <el-table-column
          label="产线类型"
          align="center"
          max-width="150"
          prop="roll_line_type"
        />
        <el-table-column
          label="状态"
          align="center"
          max-width="150"
          prop="status"
        >
          <template #default="scope">
            <span v-if="scope.row.status == 0">未完成</span>
            <span v-if="scope.row.status == 1">已完成</span>
          </template>
        </el-table-column>
        <el-table-column
          label="创建时间"
          align="center"
          max-width="150"
          prop="createTime"
          :formatter="formatDate"
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
              type="danger"
              @click.prevent="deleteItem(scope.$index)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <pagination
        :total="total"
        v-model:page="searchInfo.index"
        v-model:limit="searchInfo.size"
        @pagination="getList"
      />
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import router from "@/router";
import { getTaskList, deleteTask } from "@/api/rollingTable.js";

onMounted(() => {
  getList();
});

const formatDate = (row, column, cellValue) => {
  if (!cellValue) return "";
  return dayjs(cellValue).format("YYYY-MM-DD"); // 使用 dayjs 格式化日期
};

const data = reactive({
  tableData: [],
  searchInfo: {
    index: 1,
    size: 10,
    group_id: [],
    type: [],
    status: [],
  },
});
const { searchInfo, tableData, rules } = toRefs(data);
const total = ref(0);
const tableRef = ref(null);

const resetSearch = () => {
  searchInfo.value = {
    index: 1,
    size: 10,
    group_id: [],
    type: [],
    status: [],
  };
  getList();
};

// 获取任务列表
const getList = async () => {
  const res = await getTaskList(searchInfo.value);
  tableData.value = res.data.data.list;
  total.value = res.data.data.total;
};

const groupList = ref([
  {
    value: 1,
    label: "项目1",
  },
  {
    value: 2,
    label: "项目2",
  },
]);

// 跳转到孔型系统
const toSystem = (index) => {};
// 跳转到轧制表
const toTable = (index) => {
  router.push({
    path: "/taskList-p/resultShow",
  });
};
// 删除操作
const deleteItem = async (index) => {
  const res = await deleteTask({ uuid: tableData.value[index].uuid });
};

const typeList = ref([
  {
    label: "设计轧制表",
    value: 0,
  },
  {
    label: "用户轧制表",
    value: 1,
  },
]);

const statusList = ref([
  {
    label: "暂存",
    value: 0,
  },
  {
    label: "已完成",
    value: 1,
  },
]);
</script>

<style lang="scss" scoped>
.rollTableTaskList-container {
  margin-top: 20px;
  flex-grow: 1;

  .top-search {
    display: flex;
    align-items: center;
    gap: 10px;

    .select {
      width: 180px;
      height: 36px;
    }

    :deep(.el-select__wrapper) {
      height: 36px;
    }
  }

  .table-data {
    width: 100%;
    margin-top: 30px;
  }
}
</style>
