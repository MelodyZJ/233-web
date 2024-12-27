<template>
  <div class="highSpeedWire-container">
    <v-stepper v-model="step">
      <v-stepper-header>
        <v-stepper-item
          title="计算参数配置"
          value="1"
          :complete="step > 0"
        ></v-stepper-item>
        <el-divider />
        <v-stepper-item title="结果参数配置" value="2"></v-stepper-item>
      </v-stepper-header>

      <v-stepper-window>
        <v-stepper-window-item value="1">
          <el-form :inline="true" :model="formData" label-width="120px">
            <el-row>
              <el-col :span="8">
                <el-form-item label="成品尺寸">
                  <el-select
                    v-model="formData.finishedSize"
                    placeholder="请选择"
                    clearable
                    style="width: 200px"
                  >
                    <el-option
                      v-for="item in finishedSizeList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="钢种牌号">
                  <el-select
                    v-model="formData.steelGrade"
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
              <el-col :span="8">
                <el-form-item label="牌号系数">
                  <el-input
                    v-model="formData.gradeCoe"
                    placeholder="请输入"
                    style="width: 200px"
                  />
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="辊环规格">
                  <el-select
                    v-model="formData.ringSpec"
                    placeholder="请选择"
                    clearable
                    style="width: 200px"
                  >
                    <el-option
                      v-for="item in ringSpecList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="钢种密度">
                  <el-input
                    v-model="formData.steelDensity"
                    placeholder="请输入"
                    style="width: 200px"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="轧机间距">
                  <el-input
                    v-for="(item, index) in 4"
                    :key="index"
                    v-model="formData.millSpace['value' + (index + 1)]"
                    style="width: 60px; margin-right: 10px; margin-bottom: 10px"
                  />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </v-stepper-window-item>
        <v-stepper-window-item value="2">
          <div class="flex items-center gap-3">
            <v-card
              v-for="(item, index) in rackList"
              :key="index"
              class="w-1/4 m-1 pl-2 pr-4 pt-6 pb-3"
            >
              <el-form :model="item" label-width="80px">
                <el-form-item label="机架号">
                  <el-input v-model="item.rackNum" disabled />
                </el-form-item>
                <el-form-item label="轧制温度">
                  <el-input v-model="item.temperature" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="辊缝">
                  <el-input v-model="item.rollGap" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="轧制速度">
                  <el-input v-model="item.rollSpeed" placeholder="请输入" />
                </el-form-item>
              </el-form>
            </v-card>
          </div>
        </v-stepper-window-item>
      </v-stepper-window>
    </v-stepper>

    <div class="flex justify-center gap-5">
      <v-btn
        variant="outlined"
        class="white-btn"
        @click="prevStep"
        :disabled="step === 0"
        >上一步</v-btn
      >
      <v-btn variant="outlined" class="primary-btn" @click="nextStep"
        >{{ step === 1 ? "开始计算" : "确认参数" }}
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const step = ref(0);
const items = ref(["计算参数配置", "结果参数配置"]);

const data = reactive({
  formData: {
    finishedSize: "",
    steelGrade: "",
    gradeCoe: "",
    ringSpec: "",
    steelGrade: "",
    steelDensity: "",
    millSpace: {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
    },
  },
});
const { formData } = toRefs(data);

const finishedSizeList = ref([
  {
    name: "成品尺寸1",
    value: "成品尺寸1",
  },
  {
    name: "成品尺寸2",
    value: "成品尺寸2",
  },
]);

const steelGradeList = ref([
  {
    name: "钢种牌号1",
    value: "钢种牌号1",
  },
  {
    name: "钢种牌号2",
    value: "钢种牌号2",
  },
]);

const ringSpecList = ref([
  {
    name: "辊环规格1",
    value: "辊环规格1",
  },
  {
    name: "辊环规格2",
    value: "辊环规格2",
  },
]);

const rackList = ref([
  {
    rackNum: "27#",
    temperature: "228.65",
    rollGap: "1",
    rollSpeed: "100",
  },
  {
    rackNum: "28#",
    temperature: "228.65",
    rollGap: "2",
    rollSpeed: "100",
  },
  {
    rackNum: "29#",
    temperature: "228.65",
    rollGap: "1",
    rollSpeed: "100",
  },
  {
    rackNum: "30#",
    temperature: "228.65",
    rollGap: "3",
    rollSpeed: "100",
  },
]);

const prevStep = () => {
  if (step.value == 0) return;
  step.value = step.value - 1;
};

const nextStep = () => {
  if (step.value == 1) return;
  step.value = step.value + 1;
};
</script>

<style lang="scss" scoped>
.highSpeedWire-container {
  padding: 10px 30px 30px 30px;
  background-color: #fff;
  border-radius: $base-border-radius;

  .v-stepper,
  .v-stepper-header {
    box-shadow: none;
  }

  .v-stepper-header {
    width: 500px;
    margin: auto;
  }

  :deep(.v-stepper-item--selected .v-stepper-item__avatar) {
    background-color: #007aff;
  }
}
</style>
