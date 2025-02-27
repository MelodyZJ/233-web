<template>
  <div class="part-box" style="height: 190px">
    <div class="part-title">计算属性</div>
    <div class="part-content">
      <el-form
        ref="formRef"
        :inline="true"
        :model="calculation"
        :rules="rules"
        label-width="220px"
      >
        <el-row>
          <el-col :span="11">
            <el-form-item label="铸坯高度网格数量" prop="gridNumberY">
              <el-input
                v-model="calculation.gridNumberY"
                placeholder="请输入"
                type="number"
                style="width: 200px"
              />
              <span class="unit">个</span>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="铸坯宽度网格数量" prop="gridNumberX">
              <el-input
                v-model="calculation.gridNumberX"
                placeholder="请输入"
                type="number"
                style="width: 200px"
              />
              <span class="unit">个</span>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="空冷计算步长" prop="calculateStep">
          <el-input
            v-model="calculation.calculateStep"
            placeholder="请输入"
            type="number"
            style="width: 200px"
          />
          <span class="unit">步</span>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
const calculation = reactive({
  gridNumberY: "20",
  gridNumberX: "20",
  calculateStep: "50",
});

// 校验规则
const rules = reactive({
  gridNumberX: [
    { required: true, message: "请输入铸坯宽度网格数量", trigger: "change" },
  ],
  gridNumberY: [
    { required: true, message: "请输入铸坯高度网格数量", trigger: "change" },
  ],
  calculateStep: [
    { required: true, message: "请输入空冷计算步长", trigger: "change" },
  ],
});

const formRef = ref(null);
// 校验表单
const validateForm = () => {
  return new Promise((resolve, reject) => {
    formRef.value.validate((valid) => {
      if (valid) {
        resolve(true);
      } else {
        ElMessage.error("请完善计算属性表单！");
        reject(false);
      }
    });
  });
};

// 返回给父组件的数据
const getCalculation = async () => {
  const isValid = await validateForm();
  if (isValid) {
    return calculation;
  } else {
    return false;
  }
};

defineExpose({
  getCalculation,
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
      width: fit-content;
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
