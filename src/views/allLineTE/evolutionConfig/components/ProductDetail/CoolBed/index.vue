<template>
  <div class="part-box" style="height: 150px">
    <div class="part-title">冷床</div>
    <div class="part-content">
      <el-form :inline="true" :model="coolBedForm" label-width="120px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="步进时间">
              <div class="input-unit">
                <el-input
                  v-model="coolBedForm.stepTime"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <span class="unit">s</span>
              </div>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="冷床尺寸(m)">
              <div class="mr-2">
                <el-input
                  v-model="coolBedForm.coolBedSize.length"
                  placeholder="长"
                  style="width: 100px"
                />
              </div>
              <div class="mr-2">
                <el-input
                  v-model="coolBedForm.coolBedSize.width"
                  placeholder="宽"
                  style="width: 100px"
                />
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const coolBedForm = reactive({
  stepTime: "",
  coolBedSize: {
    length: "",
    width: "",
  },
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
    width: 100%;

    .input-unit {
      position: relative;
    }

    .unit {
      width: fit-content;
      height: 22px;
      position: absolute;
      top: 8px;
      right: 10px;
      text-align: center;
      line-height: 22px;
      background-color: #fff;
      z-index: 1;
      color: #606266;
    }

    .custom-btn {
      background-color: #fff;
      color: #0c5fff;
    }
  }
}
</style>
