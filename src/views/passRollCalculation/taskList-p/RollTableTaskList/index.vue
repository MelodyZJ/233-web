<template>
  <div class="rollTableTaskList-container">
    <div class="top-search">
      <el-select
        v-model="rollTableTaskListForm.belongProject"
        placeholder="所属项目"
        clearable
        style="width: 180px; height: 36px"
      >
        <el-option
          v-for="item in belongProjectList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <el-select
        v-model="rollTableTaskListForm.tableType"
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
        v-model="rollTableTaskListForm.calculateState"
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
  </div>
</template>

<script setup>
import { ref } from "vue";

const rollTableTaskListForm = ref({
  belongProject: "",
  tableType: "",
  calculateState: "",
});

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
}
</style>
