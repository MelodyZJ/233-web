<template>
  <div class="highSpeedWire-container">
    <div class="step-container">
      <v-stepper v-model="step">
        <v-stepper-header>
          <v-stepper-item title="计算参数配置" value="1" :complete="step > 0" />
          <el-divider />
          <v-stepper-item title="结果参数配置" value="2" />
        </v-stepper-header>

        <v-stepper-window>
          <v-stepper-window-item value="1">
            <!-- 计算参数配置 -->
            <calc-config></calc-config>
          </v-stepper-window-item>
          <v-stepper-window-item value="2">
            <!-- 结果参数配置 -->
            <result-config></result-config>
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
        <v-btn variant="outlined" class="primary-btn2" @click="nextStep"
          >{{ step === 1 ? "开始计算" : "确认参数" }}
        </v-btn>
      </div>
    </div>

    <!-- 计算结果 -->
    <calc-result></calc-result>
  </div>
</template>

<script setup>
import CalcConfig from "../components/CalcConfig/index.vue";
import ResultConfig from "../components/ResultConfig/index.vue";
import CalcResult from "../components/CalcResult/index.vue";

const step = ref(0);
const items = ref(["计算参数配置", "结果参数配置"]);

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
  display: flex;
  flex-direction: column;

  .step-container {
    padding: 10px 30px 30px 30px;
    background-color: #fff;
    border-radius: $base-border-radius;
    box-shadow: $box-shadow;

    .v-stepper,
    .v-stepper-header {
      box-shadow: none;
    }

    .v-stepper-header {
      width: 500px;
      margin: auto;
    }

    :deep(.v-stepper-item--selected .v-stepper-item__avatar) {
      background-color: #0c5fff;
    }
  }
}
</style>
