<template>
  <div class="part-box" style="height: 190px">
    <div class="part-title">钢种属性</div>
    <div class="part-content">
      <el-form :inline="true" :model="steelGradeForm" label-width="220px">
        <el-row>
          <el-col :span="11">
            <el-form-item label="钢种">
              <el-select
                v-model="steelGradeForm.steelGrade"
                placeholder="请选择"
                clearable
                style="width: 200px"
              >
                <el-option
                  v-for="item in steelGradeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="环境温度">
              <el-input
                v-model="steelGradeForm.temperature"
                placeholder="请输入"
                clearable
                style="width: 200px"
              />
              <span class="unit">°C</span>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="牌号">
          <el-select
            v-model="steelGradeForm.brand"
            placeholder="请选择"
            clearable
            style="width: 200px"
          >
            <el-option
              v-for="item in brandList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
const steelGradeForm = reactive({
  steelGrade: "",
  temperature: "",
  brand: "",
});

const steelGrade = ref("");
const steelGradeList = ref([
  {
    label: "钢种1",
    value: "钢种1",
  },
  {
    label: "钢种2",
    value: "钢种2",
  },
]);

const brandList = ref([
  {
    label: "牌号1",
    value: "牌号1",
  },
  {
    label: "牌号2",
    value: "牌号2",
  },
]);
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
      position: relative;
      top: 2px;
      right: 28px;
      text-align: center;
      line-height: 22px;
      background-color: #fff;
      z-index: 1;
      color: #606266;
    }
  }
}
</style>
