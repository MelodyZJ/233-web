<template>
  <div class="part-box" style="height: 150px">
    <div class="part-title">感应加热炉</div>
    <div class="part-content">
      <el-form
        :inline="true"
        :model="inductionHeatFurnaceForm"
        label-width="120px"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="出口温度">
              <div class="input-unit">
                <el-input
                  v-model="inductionHeatFurnaceForm.outletTemperature"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <span class="unit">℃</span>
              </div>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="轧件运行速度">
              <div class="input-unit">
                <el-input
                  v-model="inductionHeatFurnaceForm.rollingSpeed"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <span class="unit">m/s</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script setup>
const inductionHeatFurnaceForm = reactive({
  outletTemperature: "",
  rollingSpeed: "",
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
