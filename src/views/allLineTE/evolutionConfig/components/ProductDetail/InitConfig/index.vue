<template>
  <div class="part-box" style="height: 250px">
    <div class="part-title">初始配置</div>
    <div class="part-content">
      <el-form :inline="true" :model="initConfigForm" label-width="120px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="钢种">
              <el-select
                v-model="initConfigForm.steelGrade"
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
          <el-col :span="12">
            <el-form-item label="轧前铸坯速度">
              <div class="input-unit">
                <el-input
                  v-model="initConfigForm.beforeSpeed"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <span class="unit">m/s</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="牌号">
              <el-select
                v-model="initConfigForm.brand"
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
          </el-col>

          <el-col :span="12">
            <el-form-item label="粗轧咬入速度">
              <div class="input-unit">
                <el-input
                  v-model="initConfigForm.biteSpeed"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <span class="unit">m/s</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="环境温度">
              <div class="input-unit">
                <el-input
                  v-model="initConfigForm.envTemperature"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <span class="unit">°C</span>
              </div>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="浊环水温度">
              <div class="input-unit">
                <el-input
                  v-model="initConfigForm.waterTemperature"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <span class="unit">°C</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script setup>
const initConfigForm = reactive({
  steelGrade: "",
  beforeSpeed: "",
  brand: "",
  biteSpeed: "",
  envTemperature: "",
  waterTemperature: "",
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
