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
        <v-btn variant="outlined" class="white-btn">重置</v-btn>
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
        v-show="total > 0"
        :total="total"
        v-model:page="searchInfo.index"
        v-model:limit="searchInfo.size"
        @pagination="getList"
      />
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { getTaskList } from "@/api/rollingTable.js";

onMounted(() => {
  getList();
});

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
    {
      taskName: "我爱你的心暖暖",
      projectName: "222",
      type: "类型1",
      status: "已完成",
      creatTime: "2024-11-08",
    },
  ],
  searchInfo: {
    index: 1,
    size: 10,
    group_id: [],
    type: [],
    status: [],
  },
});
const { searchInfo, tableData, rules } = toRefs(data);
const total = ref(20);
const tableRef = ref(null);

// 获取任务列表
const getList = async () => {
  const res = await getTaskList(searchInfo.value);
  console.log(res, "-----");
};

const groupList = ref([]);

// 跳转到孔型系统
const toSystem = (index) => {};
// 跳转到轧制表
const toTable = (index) => {
  router.push({
    path: "/taskList-p/resultShow",
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

const typeList = ref([
  {
    label: "表1",
    value: "0",
  },
  {
    label: "表2",
    value: "1",
  },
]);

const statusList = ref([
  {
    label: "暂存",
    value: "0",
  },
  {
    label: "已完成",
    value: "1",
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
