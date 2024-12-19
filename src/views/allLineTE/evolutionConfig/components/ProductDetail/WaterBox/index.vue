<template>
  <div class="part-box" style="height: 200px">
    <div class="part-title">水箱</div>
    <div class="part-content">
      <el-form :inline="true" :model="waterBoxForm" label-width="120px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="水箱类型">
              <el-select
                v-model="waterBoxForm.waterBox"
                placeholder="请选择"
                clearable
                style="width: 200px"
              >
                <el-option
                  v-for="item in waterBoxList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="换热模型">
              <el-select
                v-model="waterBoxForm.heatModel"
                placeholder="请选择"
                clearable
                style="width: 200px"
              >
                <el-option
                  v-for="item in heatModelList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="水压">
              <div class="input-unit">
                <el-input
                  v-model="waterBoxForm.waterPressure"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <span class="unit">Mpa</span>
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

const waterBoxForm = reactive({
  waterBox: "",
  heatModel: "",
  waterPressure: "",
});

const waterBoxList = ref([
  {
    value: "1",
    label: "1#水箱",
  },
  {
    value: "2",
    label: "2#水箱",
  },
  {
    value: "3",
    label: "3#水箱",
  },
]);

const heatModelList = ref([
  {
    value: "1",
    label: "1#模型",
  },
  {
    value: "2",
    label: "2#模型",
  },
  {
    value: "3",
    label: "3#模型",
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
