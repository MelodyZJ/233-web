<template>
  <div class="part-box" style="height: 190px">
    <div class="part-title">计算属性</div>
    <div class="part-content">
      <el-form :inline="true" :model="computationalForm" label-width="220px">
        <el-row>
          <el-col :span="11">
            <el-form-item label="截距网格数量(半个边长)">
              <el-input
                v-model="computationalForm.interceptGridNum"
                placeholder="请输入"
                style="width: 200px"
              />
              <span class="unit">个</span>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="轴向网格数量">
              <el-input
                v-model="computationalForm.axialGridNum"
                placeholder="请输入"
                style="width: 200px"
              />
              <span class="unit">个</span>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="空冷计算步长">
          <el-input
            v-model="computationalForm.stepSize"
            placeholder="请输入"
            style="width: 200px"
          />
          <span class="unit">步</span>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const computationalForm = reactive({
  interceptGridNum: "",
  axialGridNum: "",
  stepSize: "",
});
</script>

<style lang="scss" scoped>
.part-box {
  background: #fff;

  .part-title {
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #f7f9fa;
    font-size: 15px;
    padding: 20px;
    border-radius: 4px;
    margin-bottom: 30px;

    &::before {
      content: "";
      display: block;
      width: 2px;
      height: 20px;
      background-color: #0c5fff;
      margin-right: 10px;
    }
  }

  .part-content {
    .unit {
      width: 20px;
      height: 22px;
      text-align: center;
      line-height: 22px;
      background-color: #fff;
      margin-left: -28px;
      z-index: 1;
      color: #606266;
    }
  }
}
</style>
