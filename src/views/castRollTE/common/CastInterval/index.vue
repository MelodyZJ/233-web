<template>
  <div
    class="part-box"
    :style="route.path == '/directCastRoll' ? 'height: 870px' : 'height: 630px'"
  >
    <div class="part-title">铸轧间距属性</div>
    <div class="part-content">
      <el-form
        ref="formRef"
        :inline="true"
        :model="castingIntervalForm"
        :rules="rules"
        label-width="220px"
      >
        <!-- 铸轧间距 -->
        <el-row>
          <el-col :span="11">
            <el-form-item label="铸轧间距(总长度)">
              <div class="input-unit">
                <el-input
                  v-model="space"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <span class="unit">m</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 已输入长度 -->
        <el-row>
          <el-col :span="11">
            <el-form-item label="已输入长度">
              <div class="input-unit">
                <el-input
                  v-model="castingIntervalForm.enteredLength"
                  placeholder="0"
                  style="width: 200px"
                  disabled
                />
                <span class="unit" style="background-color: #f5f7fa">m</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 传输段列表 -->
        <el-row>
          <el-col>
            <el-form-item
              label="传输段列表"
              prop="castListValidate"
              class="is-required"
            >
              <el-table
                ref="tableRef"
                :data="castRollingSpace"
                highlight-current-row
                style="width: 100%"
                max-height="260"
                :header-cell-style="{ background: '#fafafa' }"
                border
              >
                <el-table-column
                  label="序号"
                  min-width="40"
                  align="center"
                  type="index"
                ></el-table-column>
                <el-table-column
                  label="输送距离(m)"
                  align="center"
                  max-width="150"
                >
                  <template #default="scope">
                    <el-input
                      v-model="scope.row.distance"
                      placeholder="请输入"
                    />
                  </template>
                </el-table-column>
                <el-table-column
                  label="输送速度(m/min)"
                  align="center"
                  max-width="120"
                >
                  <template #default="scope">
                    <el-input
                      v-model="scope.row.averageConveyingSpeed"
                      placeholder="请输入"
                    />
                  </template>
                </el-table-column>
                <el-table-column label="系数" align="center" max-width="120">
                  <template #default="scope">
                    <el-input
                      v-model="scope.row.correctionFactor"
                      placeholder="请输入"
                    />
                  </template>
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="是否保温"
                  align="center"
                  max-width="120"
                >
                  <template #default="scope">
                    <el-switch
                      v-model="scope.row.switch"
                      class="ml-2"
                      style="
                        --el-switch-on-color: #13ce66;
                        --el-switch-off-color: #ff4949;
                      "
                    />
                  </template>
                </el-table-column>

                <el-table-column
                  fixed="right"
                  label="操作"
                  align="center"
                  max-width="120"
                >
                  <template #default="scope">
                    <el-button
                      link
                      type="primary"
                      @click.prevent="deleteRow(scope.$index)"
                    >
                      删除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>

              <v-btn
                variant="outlined"
                class="custom-btn my-2"
                @click="onAddItem"
                >添加传输段</v-btn
              >
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 是否补热 -->
        <el-row>
          <el-col>
            <el-form-item label="是否补热">
              <el-switch
                v-model="castingIntervalForm.electromagneticFlag"
                class="ml-2"
                style="
                  --el-switch-on-color: #13ce66;
                  --el-switch-off-color: #ff4949;
                "
              />
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 是否除鳞 -->
        <el-row v-if="route.path == '/directCastRoll'">
          <el-col>
            <el-form-item label="是否除鳞">
              <el-switch
                v-model="castingIntervalForm.phosphorusFlag"
                class="ml-2"
                style="
                  --el-switch-on-color: #13ce66;
                  --el-switch-off-color: #ff4949;
                "
              />
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 是否待温 -->
        <el-row v-if="route.path == '/directCastRoll'">
          <el-col>
            <el-form-item label="是否待温">
              <el-switch
                v-model="castingIntervalForm.waitingSteelFlag"
                class="ml-2"
                style="
                  --el-switch-on-color: #13ce66;
                  --el-switch-off-color: #ff4949;
                "
              />
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 补热段属性 -->
        <el-row v-if="castingIntervalForm.electromagneticFlag">
          <el-col>
            <el-form-item
              label="补热段属性"
              prop="heatSupplyValidate"
              class="is-required"
            >
              <div class="input-unit">
                <el-input
                  v-model="
                    castingIntervalForm.heatSupply.electromagneticAbsolute
                  "
                  placeholder="绝对位置"
                  style="width: 150px"
                />
                <span class="unit">m</span>
              </div>
              <div class="input-unit">
                <el-input
                  v-model="castingIntervalForm.heatSupply.heatSupplyLength"
                  placeholder="补热长度"
                  style="width: 150px"
                />
                <span class="unit">m</span>
              </div>
              <div class="input-unit">
                <el-input
                  v-model="
                    castingIntervalForm.heatSupply.heatAverageConveyingSpeed
                  "
                  placeholder="辊道均速"
                  style="width: 150px"
                />
                <span class="unit">m/min</span>
              </div>
              <div class="input-unit">
                <el-input
                  v-model="
                    castingIntervalForm.heatSupply
                      .heatSupplementOutletTemperature
                  "
                  placeholder="补热出口温度"
                  style="width: 150px"
                />
                <span class="unit">°C</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 除鳞段属性 -->
        <el-row
          v-if="
            route.path == '/directCastRoll' &&
            castingIntervalForm.phosphorusFlag
          "
        >
          <el-col>
            <el-form-item
              label="除鳞段属性"
              prop="phosphorusValidate"
              class="is-required"
            >
              <el-select
                v-model="castingIntervalForm.phosphorus.waterType"
                placeholder="请选择"
                style="width: 150px"
              >
                <el-option
                  v-for="item in typeList1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <div class="input-unit">
                <el-input
                  v-model="castingIntervalForm.phosphorus.waterValue"
                  :placeholder="isWaterYield ? '水量' : '水压'"
                  style="width: 150px"
                />
                <span class="unit">
                  {{ isWaterYield ? "m³/h" : "MPa" }}
                </span>
              </div>
              <el-select
                v-model="castingIntervalForm.phosphorus.heatTransferType"
                placeholder="请选择"
                style="width: 150px"
              >
                <el-option
                  v-for="item in typeList2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <div class="input-unit">
                <template v-if="isHeatModel">
                  <el-select
                    v-model="castingIntervalForm.phosphorus.heatTransferValue"
                    placeholder="请选择模型"
                    style="width: 150px"
                  >
                    <el-option
                      v-for="item in modelList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </template>

                <template v-else>
                  <el-input
                    v-model="castingIntervalForm.phosphorus.heatTransferValue"
                    placeholder="换热系数"
                    style="width: 150px"
                  />
                  <span class="unit">W/(m³·K)</span>
                </template>
              </div>
              <div class="input-unit">
                <el-input
                  v-model="castingIntervalForm.phosphorus.phosphorusAbsolute"
                  placeholder="绝对位置"
                  style="width: 150px"
                />
                <span class="unit">m</span>
              </div>
              <div class="input-unit">
                <el-input
                  v-model="castingIntervalForm.phosphorus.boxLength"
                  placeholder="除鳞长度"
                  style="width: 150px"
                />
                <span class="unit">mm</span>
              </div>
              <div class="input-unit">
                <el-input
                  v-model="
                    castingIntervalForm.phosphorus
                      .phosphorusAverageConveyingSpeed
                  "
                  placeholder="辊道均速"
                  style="width: 150px"
                />
                <span class="unit">m/min</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 待热段属性 -->
        <el-row
          v-if="
            route.path == '/directCastRoll' &&
            castingIntervalForm.waitingSteelFlag
          "
        >
          <el-col>
            <el-form-item
              label="待热段属性"
              prop="waitingValidate"
              class="is-required"
            >
              <div class="input-unit">
                <el-input
                  v-model="castingIntervalForm.waiting.waitingSteelAbsolute"
                  placeholder="绝对位置"
                  style="width: 150px"
                />
                <span class="unit">m</span>
              </div>
              <div class="input-unit">
                <el-input
                  v-model="castingIntervalForm.waiting.waitingSteelTime"
                  placeholder="等待时间"
                  style="width: 150px"
                />
                <span class="unit">s</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const castingIntervalForm = reactive({
  enteredLength: "",
  electromagneticFlag: true,
  phosphorusFlag: true,
  waitingSteelFlag: true,
  // 补热段属性
  heatSupply: {
    electromagneticAbsolute: "",
    heatSupplyLength: "",
    heatAverageConveyingSpeed: "",
    heatSupplementOutletTemperature: "",
  },
  // 除磷段属性
  phosphorus: {
    waterType: "0", // 水量水压选择，0代表水量，1代表水压
    waterValue: "",
    heatTransferType: "0", // 换热方式，0为换热模型，1为换热系数
    heatTransferValue: "",
    phosphorusAbsolute: "",
    boxLength: "",
    phosphorusAverageConveyingSpeed: "",
  },
  // 待热段属性
  waiting: {
    waitingSteelAbsolute: "",
    waitingSteelTime: "",
  },
});

// 自定义校验规则
const validateCustom = (rule, value, callback, formObject, requiredFields) => {
  const missingFields = requiredFields.filter((field) => !formObject[field]);

  if (missingFields.length > 0) {
    callback(new Error(`请完善所有参数`));
  } else {
    callback();
  }
};

// 校验补热段属性
const validateHeatSupply = (rule, value, callback) => {
  let arr = [
    "electromagneticAbsolute",
    "heatSupplyLength",
    "heatAverageConveyingSpeed",
    "heatSupplementOutletTemperature",
  ];

  validateCustom(rule, value, callback, castingIntervalForm.heatSupply, arr);
};

// 校验除鳞段属性
const validatePhosphorus = (rule, value, callback) => {
  let arr = [
    "waterType",
    "waterValue",
    "heatTransferType",
    "heatTransferValue",
    "phosphorusAbsolute",
    "boxLength",
    "phosphorusAverageConveyingSpeed",
  ];

  validateCustom(rule, value, callback, castingIntervalForm.phosphorus, arr);
};

// 校验待热段属性
const validateWaiting = (rule, value, callback) => {
  let arr = ["waitingSteelAbsolute", "waitingSteelTime"];

  validateCustom(rule, value, callback, castingIntervalForm.waiting, arr);
};

// 校验列表是否有字段为空
const validateCastList = (rule, value, callback) => {
  
  if (castRollingSpace.length === 0) {
    callback(new Error(`列表不能为空`));
  }

  for (let item of castRollingSpace) {
    if (
      !item.distance.trim() ||
      !item.averageConveyingSpeed.trim() ||
      !item.correctionFactor.trim()
    ) {
      callback(new Error(`请完善列表所有参数`));
    }
  }
  callback();
};

// 校验规则
const rules = reactive({
  heatSupplyValidate: [{ validator: validateHeatSupply, trigger: "change" }],
  phosphorusValidate: [{ validator: validatePhosphorus, trigger: "change" }],
  waitingValidate: [{ validator: validateWaiting, trigger: "change" }],
  castListValidate: [{ validator: validateCastList, trigger: "change" }],
});

const tableRef = ref(null);
// 传输段列表
const castRollingSpace = reactive([
  {
    distance: "",
    averageConveyingSpeed: "",
    correctionFactor: "",
    switch: true,
  },
  {
    distance: "",
    averageConveyingSpeed: "",
    correctionFactor: "",
    switch: true,
  },
  {
    distance: "",
    averageConveyingSpeed: "",
    correctionFactor: "",
    switch: true,
  },
]);

// 铸轧间距(总长度)
const space = computed(() => {
  return castRollingSpace.reduce((sum, item) => {
    const distance = parseFloat(item.distance) || 0;
    return sum + distance;
  }, 0);
});

const typeList1 = ref([
  {
    label: "水量",
    value: "0",
  },
  {
    label: "水压",
    value: "1",
  },
]);

const typeList2 = ref([
  {
    label: "换热模型",
    value: "0",
  },
  {
    label: "换热系数",
    value: "1",
  },
]);

const modelList = ref([
  {
    label: "ZTCD模型",
    value: "0",
  },
  {
    label: "经典模型",
    value: "1",
  },
]);

// type1是否选择的是水量
const isWaterYield = ref(true);
// type2否选择的是换热模型
const isHeatModel = ref(true);

watch(
  () => castingIntervalForm.waterType,
  (newValue, oldValue) => {
    isWaterYield.value = newValue == "0" ? true : false;
    castingIntervalForm.waterValue = "";
  }
);

watch(
  () => castingIntervalForm.heatTransferType,
  (newValue, oldValue) => {
    isHeatModel.value = newValue == "0" ? true : false;
    castingIntervalForm.heatTransferValue = "";
  }
);

// 添加输送段
const onAddItem = () => {
  castRollingSpace.push({
    distance: "",
    averageConveyingSpeed: "",
    correctionFactor: "",
    switch: true,
  });
};

const deleteRow = (index) => {
  castRollingSpace.splice(index, 1);
};

const formRef = ref(null);
// 校验表单
const validateForm = () => {
  return new Promise((resolve, reject) => {
    formRef.value.validate((valid) => {
      if (valid) {
        resolve(true);
      } else {
        ElMessage.error("请完善铸轧间距属性表单！");
        reject(false);
      }
    });
  });
};

// 返回给父组件的数据
const getElectromagnetic = async () => {
  const isValid = await validateForm();
  if (isValid) {
    const {
      electromagneticFlag,
      phosphorusFlag,
      waitingSteelFlag,
      heatSupply,
      phosphorus,
      waiting,
    } = castingIntervalForm;

    let data = {
      space: space.value,
      electromagneticFlag,
      phosphorusFlag,
      waitingSteelFlag,
      ...heatSupply,
      ...phosphorus,
      ...waiting,
    };
    return data;
  } else {
    return false;
  }
};

const getCastRollingSpace = () => {
  return castRollingSpace;
};

defineExpose({
  getElectromagnetic,
  getCastRollingSpace,
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
      background-color: #fff;
      z-index: 1;
      color: #606266;
    }

    .custom-btn {
      background-color: #fff;
      color: #0c5fff;
    }
  }

  :deep(.el-form-item__content) {
    gap: 10px;
  }
}
</style>
