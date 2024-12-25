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
        <el-button @click="openDialog">表格表头设置</el-button>
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
        :header-cell-style="{ background: '#42434B', color: '#f5f5f5' }"
        border
      >
        <el-table-column
          v-for="column in columns"
          :key="column.prop"
          :label="column.label"
          :align="column.align"
          :max-width="column.maxWidth"
          :prop="column.prop"
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

    <!-- 表格表头设置弹窗 -->
    <v-dialog v-model="showDialog" width="auto">
      <v-card width="400" class="px-1 py-2">
        <v-card-title class="text-lg px-3">表格表头设置</v-card-title>
        <v-card-text class="px-3"> </v-card-text>

        <template v-slot:actions>
          <div class="mr-1">
            <v-btn
              variant="outlined"
              class="border border-gray-300"
              @click="showDialog = false"
              >取消</v-btn
            >
            <v-btn
              variant="tonal"
              class="bg-indigo-primary text-white ml-3"
              @click="showDialog = false"
              >确定</v-btn
            >
          </div>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { VueDraggable } from "vue-draggable-plus";
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
  columns: [
    { label: "机架号", align: "center", maxWidth: "150", prop: "rackNum" },
    {
      label: "孔型形状",
      align: "center",
      maxWidth: "120",
      prop: "passShape",
    },
    {
      label: "型铁面积 (mm)",
      align: "center",
      maxWidth: "150",
      prop: "ironArea",
    },
    { label: "辊缝 (mm)", align: "center", maxWidth: "150", prop: "rollGap" },
    {
      label: "延伸率 (u)",
      align: "center",
      maxWidth: "150",
      prop: "elongationRate",
    },
    {
      label: "轧制速度 (m/s)",
      align: "center",
      maxWidth: "150",
      prop: "rollSpeed",
    },
    {
      label: "电机转速 (rpm)",
      align: "center",
      maxWidth: "150",
      prop: "motorSpeed",
    },
  ],
  tableData: [
    {
      rackNum: "机架1",
      passShape: "圆形",
      ironArea: "100",
      rollGap: "10",
      elongationRate: "500",
      rollSpeed: "600",
      motorSpeed: "3000",
    },
    {
      rackNum: "机架2",
      passShape: "圆形",
      ironArea: "100",
      rollGap: "10",
      elongationRate: "500",
      rollSpeed: "600",
      motorSpeed: "3000",
    },
    {
      rackNum: "机架3",
      passShape: "圆形",
      ironArea: "100",
      rollGap: "10",
      elongationRate: "500",
      rollSpeed: "600",
      motorSpeed: "3000",
    },
    {
      rackNum: "机架4",
      passShape: "圆形",
      ironArea: "100",
      rollGap: "10",
      elongationRate: "500",
      rollSpeed: "600",
      motorSpeed: "3000",
    },
    {
      rackNum: "机架5",
      passShape: "圆形",
      ironArea: "100",
      rollGap: "10",
      elongationRate: "500",
      rollSpeed: "600",
      motorSpeed: "3000",
    },
  ],
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    belongProject: "",
    tableType: "",
    calculateState: "",
  },
});
const { formData, columns, tableData, queryParams } = toRefs(data);
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

const showDialog = ref(false);
const openDialog = () => {
  showDialog.value = true;
};

const onEnd = () => {
  console.log("拖拽结束");
};
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
