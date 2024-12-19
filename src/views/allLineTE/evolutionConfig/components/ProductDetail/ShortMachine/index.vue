<template>
  <div class="part-box" style="height: 250px">
    <div class="part-title">短应力线轧机</div>
    <div class="part-content">
      <el-form :inline="true" :model="shortMachineForm" label-width="120px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="机组名称">
              <el-select
                v-model="shortMachineForm.unitName"
                placeholder="请选择"
                clearable
                style="width: 200px"
              >
                <el-option
                  v-for="item in unitNameList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="轧辊直径">
              <div class="input-unit">
                <el-input
                  v-model="shortMachineForm.rollDiameter"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <span class="unit">mm</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="延伸系数">
              <div class="input-unit">
                <el-input
                  v-model="shortMachineForm.elongationCoefficient"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <span class="unit">mm</span>
              </div>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="轧辊冷却水换热系数" label-width="140px">
              <div class="input-unit">
                <el-input
                  v-model="shortMachineForm.waterCoefficient"
                  placeholder="请输入"
                  style="width: 180px"
                />
                <span class="unit">W/(m2·℃)</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="是否投用">
              <el-switch
                v-model="shortMachineForm.isUse"
                class="ml-2"
                style="
                  --el-switch-on-color: #13ce66;
                  --el-switch-off-color: #ff4949;
                "
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="切分数">
              <div class="input-unit">
                <el-input
                  v-model="shortMachineForm.cutPonint"
                  placeholder="请输入"
                  style="width: 200px"
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

const shortMachineForm = reactive({
  unitNameList: "",
  rollDiameter: "",
  elongationCoefficient: "",
  waterCoefficient: "",
  isUse: false,
  cutPonint: "",
});

const unitNameList = ref([
  {
    value: "1",
    label: "1#机组",
  },
  {
    value: "2",
    label: "2#机组",
  },
  {
    value: "3",
    label: "3#机组",
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
