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
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script setup>
const baseInfoForm = reactive({
  riskName: "",
});
</script>

<style lang="scss" scoped>
.part-box {
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

  .part-content {
  }
}
</style>
