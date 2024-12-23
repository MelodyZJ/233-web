<template>
  <div class="highSpeedTable-container">
    <div class="top-search">
      <el-select
        v-model="queryParams.belongProject"
        placeholder="表头格式"
        clearable
        style="width: 120px"
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
        placeholder="表头样式"
        clearable
        style="width: 120px"
      >
        <el-option
          v-for="item in tableTypeList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <div class="btn">
        <el-button>表格表头设置</el-button>
        <el-button>导出Excel</el-button>
      </div>
    </div>

    <div class="form-content">
      <el-form :inline="true" :model="formData" label-width="110px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="表号">
              <el-input
                v-model="formData.tableNum"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="胚料(mm)">
              <el-input
                v-model="formData.preform"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="轧制速度(m/s)">
              <el-input
                v-model="formData.rollSpeed"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="产品规格(mm)">
              <el-input
                v-model="formData.productStandard"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="钢种">
              <el-input
                v-model="formData.steelGrade"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="胚重(kg)">
              <el-input
                v-model="formData.weight"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="间隔时间(s)">
              <el-input
                v-model="formData.intervalTtime"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="table-data">
      <el-table
        ref="tableRef"
        :data="tableData"
        highlight-current-row
        style="width: 99%"
        :header-cell-style="{ background: '#42434B', color: '#f5f5f5' }"
        border
      >
        <el-table-column
          label="机架号"
          align="center"
          max-width="150"
          prop="taskName"
        />
        <el-table-column
          label="孔型形状"
          align="center"
          max-width="120"
          prop="projectName"
        />
        <el-table-column
          label="型铁面积 (mm)"
          align="center"
          max-width="150"
          prop="type"
        />
        <el-table-column
          label="辊缝 (mm)"
          align="center"
          max-width="150"
          prop="status"
        />
        <el-table-column
          label="延伸率 (u)"
          align="center"
          max-width="150"
          prop="creatTime"
        />
        <el-table-column
          label="轧制速度 (m/s)"
          align="center"
          max-width="150"
          prop="creatTime"
        />
        <el-table-column
          label="电机转速 (rpm)"
          align="center"
          max-width="150"
          prop="creatTime"
        />
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
  formData: {
    tableNum: "",
    preform: "",
    rollSpeed: "",
    productStandard: "",
    steelGrade: "",
    weight: "",
    intervalTtime: "",
  },
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
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    belongProject: undefined,
    tableType: undefined,
    calculateState: undefined,
  },
});
const { formData, tableData, queryParams, rules } = toRefs(data);
const total = ref(20);
const tableRef = ref(null);

// 获取列表
const getList = () => {};
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
    value: "CISDI-1",
    label: "CISDI-1",
  },
  {
    value: "CISDI-2",
    label: "CISDI-2",
  },
  {
    value: "CISDI-3",
    label: "CISDI-3",
  },
]);

const tableTypeList = ref([
  {
    value: "全边框",
    label: "全边框",
  },
  {
    value: "三线格",
    label: "三线格",
  },
  {
    value: "标题三线格",
    label: "标题三线格",
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
.highSpeedTable-container {
  margin-top: 20px;
  flex-grow: 1;

  .top-search {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .form-content {
    padding: 35px 0 15px 0;
  }

  .table-data {
    width: 100%;
  }
}
</style>
