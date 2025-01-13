<template>
  <div class="highSpeedTable-container">
    <!-- 顶部按钮 -->
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
      <!-- 表头格式1 -->
      <el-form
        :inline="true"
        :model="formData1"
        label-width="120px"
        class="ml-[-20px]"
        v-if="queryParams.belongProject === 'CISDI-1'"
      >
        <el-row>
          <el-col :span="6">
            <el-form-item label="表号">
              <el-input
                v-model="formData1.tableNum"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="胚料(mm)">
              <el-input
                v-model="formData1.preform"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="轧制速度(m/s)">
              <el-input
                v-model="formData1.rollSpeed"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="产品规格(mm)">
              <el-input
                v-model="formData1.productStandard"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="钢种">
              <el-input
                v-model="formData1.steelGrade"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="胚重(kg)">
              <el-input
                v-model="formData1.weight"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="间隔时间(s)">
              <el-input
                v-model="formData1.intervalTtime"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <!-- 表头格式2 -->
      <el-form
        :inline="true"
        :model="formData2"
        label-width="120px"
        class="ml-[-10px]"
        v-if="queryParams.belongProject === 'CISDI-2'"
      >
        <el-row>
          <el-col :span="6">
            <el-form-item label="小时产量(t/h)">
              <el-input
                v-model="formData2.tableNum"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="胚料形状">
              <el-input
                v-model="formData2.preform"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="还料长度">
              <el-input
                v-model="formData2.rollSpeed"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="还料面积(mm²)">
              <el-input
                v-model="formData2.productStandard"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="胚料温度(℃)">
              <el-input
                v-model="formData2.steelGrade"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="间隔时间(s)">
              <el-input
                v-model="formData2.weight"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="成品形状">
              <el-input
                v-model="formData2.intervalTtime"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="成品尺寸(mm)">
              <el-input
                v-model="formData2.intervalTtime"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="成品速度(m/s)">
              <el-input
                v-model="formData2.intervalTtime"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="轧烤温度(℃)">
              <el-input
                v-model="formData2.intervalTtime"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <!-- 表头格式3 -->
      <el-form
        :inline="true"
        :model="formData3"
        label-width="120px"
        class="ml-[-20px]"
        v-if="queryParams.belongProject === 'CISDI-3'"
      >
        <el-row>
          <el-col :span="6">
            <el-form-item label="工作序号">
              <el-input
                v-model="formData3.tableNum"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="轧制形状">
              <el-input
                v-model="formData3.preform"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="钢种">
              <el-input
                v-model="formData3.rollSpeed"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="轧制速度(m/s)">
              <el-input
                v-model="formData3.productStandard"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="AXV(mm²/s)">
              <el-input
                v-model="formData3.steelGrade"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="胚料尺寸(mm)">
              <el-input
                v-model="formData3.weight"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="胚料重量(kg)">
              <el-input
                v-model="formData3.intervalTtime"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="最大轧制产量(t/h)" label-width="140px">
              <el-input
                v-model="formData3.intervalTtime"
                placeholder="请输入"
                style="width: 180px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="轧制时间(s)">
              <el-input
                v-model="formData3.intervalTtime"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="间隔时间(s)">
              <el-input
                v-model="formData3.intervalTtime"
                placeholder="请输入"
                style="width: 200px"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!-- 表格 -->
    <div class="table-data">
      <el-scrollbar>
        <VueDraggable v-model="headers" target=".sort-target">
          <table
            class="table-content"
            :style="{ width: computeDragWidth(headers.length) }"
          >
            <thead>
              <tr class="sort-target">
                <th
                  v-for="header in headers"
                  :key="header.value"
                  class="table-header"
                >
                  {{ header.text }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tablelist" :key="item.name" class="table-row">
                <td v-for="header in headers" :key="header.value">
                  {{ item[header.value] }}
                </td>
              </tr>
            </tbody>
          </table>
        </VueDraggable>
      </el-scrollbar>

      <pagination
        v-show="total > 0"
        :total="total"
        v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize"
        @pagination="getList"
      />
    </div>

    <!-- 表格表头设置弹窗 -->
    <dialog-custom ref="dialogRef">
      <el-scrollbar style="height: 400px">
        <div style="width: 800px; height: 400px">
          <div
            class="ml-3 mb-1"
            v-for="(item, index) in headTypeList"
            :key="index"
          >
            <div>{{ item.type }}</div>
            <div class="flex flex-wrap">
              <v-checkbox
                v-model="selected"
                v-for="item1 in item.children"
                :key="item1.value"
                :label="item1.name"
                :value="item1.value"
                color="#0C5FFF"
                class="mr-5"
                hide-details
              ></v-checkbox>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </dialog-custom>
  </div>
</template>

<script setup>
import { VueDraggable } from "vue-draggable-plus";
import DialogCustom from "@/components/DialogCustom/index.vue";
import router from "@/router";

const now = new Date();

const data = reactive({
  formData1: {
    tableNum: "",
    preform: "",
    rollSpeed: "",
    productStandard: "",
    steelGrade: "",
    weight: "",
    intervalTtime: "",
  },
  formData2: {
    tableNum: "",
    preform: "",
    rollSpeed: "",
    productStandard: "",
    steelGrade: "",
    weight: "",
    intervalTtime: "",
  },
  formData3: {
    tableNum: "",
    preform: "",
    rollSpeed: "",
    productStandard: "",
    steelGrade: "",
    weight: "",
    intervalTtime: "",
  },
  // 表头
  headers: [
    {
      text: "机架号",
      value: "rackNum",
    },
    {
      text: "孔型形状",
      value: "passShape",
    },
    {
      text: "型铁面积 (mm)",
      value: "ironArea",
    },
    {
      text: "辊缝 (mm)",
      value: "rollGap",
    },
    {
      text: "延伸率 (u)",
      value: "elongationRate",
    },
    {
      text: "轧制速度 (m/s)",
      value: "rollSpeed",
    },
    {
      text: "电机转速 (rpm)",
      value: "motorSpeed",
    },
    {
      text: "电机转速 (rpm)",
      value: "motorSpeed",
    },
    {
      text: "电机转速 (rpm)",
      value: "motorSpeed",
    },
    {
      text: "电机转速 (rpm)",
      value: "motorSpeed",
    },
  ],
  // 表格数据
  tablelist: [
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
    {
      rackNum: "机架6",
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
const { formData1, formData2, formData3, headers, tablelist, queryParams } =
  toRefs(data);
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

const dialogRef = ref(null);
const openDialog = () => {
  dialogRef.value.open("表格表头设置");
};

// 表头分类列表
const headTypeList = ref([
  {
    type: "机架参数",
    children: [
      {
        name: "机组",
        value: "机组",
      },
      {
        name: "机架号",
        value: "机架号",
      },
    ],
  },
  {
    type: "料型参数",
    children: [
      {
        name: "型铁高度",
        value: "型铁高度",
      },
      {
        name: "型铁宽度",
        value: "型铁宽度",
      },
      {
        name: "型铁面积",
        value: "型铁面积",
      },
    ],
  },
  {
    type: "轧机参数",
    children: [
      {
        name: "辊环直径",
        value: "辊环直径",
      },
      {
        name: "工作辊径",
        value: "工作辊径",
      },
      {
        name: "轧辊转速",
        value: "轧辊转速",
      },
      {
        name: "减速比",
        value: "减速比",
      },
    ],
  },
  {
    type: "孔型参数",
    children: [
      {
        name: "孔型形状",
        value: "孔型形状",
      },
      {
        name: "孔型高度",
        value: "孔型高度",
      },
      {
        name: "孔型宽度",
        value: "孔型宽度",
      },
      {
        name: "辊缝",
        value: "辊缝",
      },
      {
        name: "扩张半径",
        value: "扩张半径",
      },
      {
        name: "外圆半径",
        value: "外圆半径",
      },
      {
        name: "半孔高度",
        value: "半孔高度",
      },
      {
        name: "槽底宽度",
        value: "槽底宽度",
      },
      {
        name: "平椭内圆半径",
        value: "平椭内圆半径",
      },
      {
        name: "菱形孔顶角",
        value: "菱形孔顶角",
      },
      {
        name: "孔型合理性",
        value: "孔型合理性",
      },
      {
        name: "孔型充满度",
        value: "孔型充满度",
      },
      {
        name: "孔型顶高",
        value: "孔型顶高",
      },
      {
        name: "孔型顶宽",
        value: "孔型顶宽",
      },
      {
        name: "孔型边长",
        value: "孔型边长",
      },
      {
        name: "扩张角",
        value: "扩张角",
      },
    ],
  },
  {
    type: "工艺参数",
    children: [
      {
        name: "轧机间距",
        value: "轧机间距",
      },
      {
        name: "轧件长度",
        value: "轧件长度",
      },
      {
        name: "宽展系数",
        value: "宽展系数",
      },
      {
        name: "延伸率",
        value: "延伸率",
      },
    ],
  },
]);

// 选中的表头
const selected = ref([]);

// 计算生产线长度
const computeDragWidth = (length) => {
  return `${length * 150}px`;
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

    .table-content {
      width: 2000px;

      .table-header {
        width: 150px;
        background-color: #42434b;
        color: #ffffff;
        font-weight: bold;
        padding: 10px;
        cursor: move;
        border-right: 1px solid #ddd;

        &:last-child {
          border: none;
        }
      }

      .table-row td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
      }
    }
  }
}
</style>
