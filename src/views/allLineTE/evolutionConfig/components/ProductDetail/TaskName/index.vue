<template>
  <div class="part-box" style="height: 150px">
    <div class="part-title">任务名</div>
    <div class="part-content">
      <el-form :inline="true" :model="taskNameForm" label-width="120px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="生产线总长度">
              <div class="input-unit">
                <el-input
                  v-model="taskNameForm.totalLength"
                  placeholder="10000"
                  style="width: 200px"
                  disabled
                />
                <span class="unit">m</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="任务名">
              <div class="input-unit">
                <el-input
                  v-model="taskNameForm.taskName"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <!-- <span class="unit">s</span> -->
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <div class="btn">
        <v-btn variant="tonal" class="primary-btn">提交</v-btn>
        <v-btn variant="outlined" class="white-btn">重置</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
const taskNameForm = reactive({
  totalLength: "",
  taskName: "",
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
      background-color: transparent;
      z-index: 1;
      color: #606266;
    }

    .custom-btn {
      background-color: #fff;
      color: #0c5fff;
    }

    .btn {
      display: flex;
      justify-content: flex-end;
      padding: 20px 0 30px 0;
    }
  }
}
</style>
