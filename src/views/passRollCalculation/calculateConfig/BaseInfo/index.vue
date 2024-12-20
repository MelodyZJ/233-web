<template>
  <div class="part-box">
    <div class="part-title">基本信息</div>
    <div class="part-content">
      <el-form :inline="true" :model="baseInfoForm" label-width="100px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="任务名称">
              <el-input
                v-model="baseInfoForm.riskName"
                placeholder="请输入"
                style="width: 300px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="所属项目">
              <el-select
                v-model="baseInfoForm.belongProject"
                placeholder="请选择"
                filterable
                clearable
                style="width: 300px"
              >
                <el-option
                  v-for="item in belongProjectList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const baseInfoForm = reactive({
  riskName: "",
  belongProject: "",
});

const belongProjectList = [
  {
    label: "项目1",
    value: 1,
  },
  {
    label: "项目2",
    value: 2,
  },
  {
    label: "项目3",
    value: 3,
  },
];
</script>

<style lang="scss" scoped>
.part-box {
  margin-top: 15px;

  .part-title {
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 15px;
    margin-bottom: 20px;

    &::before {
      content: "";
      display: block;
      width: 4px;
      height: 14px;
      border-radius: 10px;
      background-color: #f89623;
      margin-right: 10px;
    }
  }
}
</style>
