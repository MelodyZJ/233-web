<template>
  <div class="part-box" style="height: 150px">
    <div class="part-title">飞剪</div>
    <div class="part-content">
      <el-form :inline="true" :model="flyShearForm" label-width="120px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="限制速度">
              <div class="input-unit">
                <el-input
                  v-model="flyShearForm.limitSpeed"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <span class="unit">m/s</span>
              </div>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="限制等效直径">
              <div class="input-unit">
                <el-input
                  v-model="flyShearForm.limitDiameter"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <span class="unit">mm</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script setup>
const flyShearForm = reactive({
  limitSpeed: "",
  limitDiameter: "",
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
