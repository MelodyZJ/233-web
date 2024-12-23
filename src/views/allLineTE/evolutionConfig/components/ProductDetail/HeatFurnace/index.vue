<template>
  <div class="part-box" style="height: 300px">
    <div class="part-title">加热炉</div>
    <div class="part-content">
      <el-form :inline="true" :model="HeatFurnaceForm" label-width="120px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="入炉温度">
              <div class="input-unit">
                <el-input
                  v-model="HeatFurnaceForm.chargeTemperature"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <span class="unit">℃</span>
              </div>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="铸坯形状">
              <el-select
                v-model="HeatFurnaceForm.billetShape"
                placeholder="请选择"
                clearable
                style="width: 200px"
              >
                <el-option
                  v-for="item in billetShapeList"
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
            <el-form-item label="保温时间">
              <div class="input-unit">
                <el-input
                  v-model="HeatFurnaceForm.holdTime"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <span class="unit">min</span>
              </div>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="铸坯尺寸(mm)">
              <div class="mr-2">
                <el-input
                  v-model="HeatFurnaceForm.billetSize.length"
                  placeholder="长"
                  style="width: 80px"
                />
              </div>
              <div class="mr-2">
                <el-input
                  v-model="HeatFurnaceForm.billetSize.width"
                  placeholder="宽"
                  style="width: 80px"
                />
              </div>
              <div class="mr-2 mt-2">
                <el-input
                  v-model="HeatFurnaceForm.billetSize.height"
                  placeholder="高"
                  style="width: 80px"
                />
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="出炉温度">
              <div class="input-unit">
                <el-input
                  v-model="HeatFurnaceForm.ovenTemperature"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <span class="unit">℃</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script setup>
const HeatFurnaceForm = reactive({
  chargeTemperature: "",
  billetShape: "",
  holdTime: "",
  billetSize: {
    length: "",
    width: "",
    height: "",
  },
  ovenTemperature: "",
});

const value = ref(false);

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

const billetShapeList = ref([
  {
    value: "1",
    label: "圆坯",
  },
  {
    value: "2",
    label: "方坯",
  },
  {
    value: "3",
    label: "矩型坯",
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
