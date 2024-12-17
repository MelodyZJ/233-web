<template>
  <div class="part-box" style="height: 850px">
    <div class="part-title">铸轧间距属性</div>
    <div class="part-content">
      <el-form :inline="true" :model="castingIntervalForm" label-width="220px">
        <!-- 铸轧间距 -->
        <el-row>
          <el-col :span="11">
            <el-form-item label="铸轧间距(总长度)">
              <div class="input-unit">
                <el-input
                  v-model="castingIntervalForm.spacingTotalLength"
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
            <el-form-item label="传输段列表">
              <el-table
                ref="tableRef"
                :data="tableData"
                highlight-current-row
                style="width: 100%"
                max-height="250"
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
                  prop="date"
                  label="输送距离(m)"
                  align="center"
                  max-width="150"
                >
                  <template #default="scope">
                    <el-input
                      v-model="scope.row.transportDistance"
                      placeholder="请输入"
                    />
                  </template>
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="输送速度(m/min)"
                  align="center"
                  max-width="120"
                >
                  <template #default="scope">
                    <el-input
                      v-model="scope.row.transportSpeed"
                      placeholder="请输入"
                    />
                  </template>
                </el-table-column>
                <el-table-column
                  prop="state"
                  label="系数"
                  align="center"
                  max-width="120"
                >
                  <template #default="scope">
                    <el-input
                      v-model="scope.row.coefficient"
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
                      v-model="value"
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
                class="custom-btn mt-3"
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
                v-model="value"
                class="ml-2"
                style="
                  --el-switch-on-color: #13ce66;
                  --el-switch-off-color: #ff4949;
                "
              />
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 是否除磷 -->
        <el-row>
          <el-col>
            <el-form-item label="是否除磷">
              <el-switch
                v-model="value"
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
        <el-row>
          <el-col>
            <el-form-item label="是否待温">
              <el-switch
                v-model="value"
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
        <el-row>
          <el-col>
            <el-form-item label="补热段属性">
              <div class="input-unit">
                <el-input
                  v-model="castingIntervalForm.heatProperties.absolutePosition"
                  placeholder="绝对位置"
                  style="width: 150px"
                />
                <span class="unit">m</span>
              </div>
              <div class="input-unit">
                <el-input
                  v-model="castingIntervalForm.heatProperties.heatLength"
                  placeholder="补热长度"
                  style="width: 150px"
                />
                <span class="unit">m</span>
              </div>
              <div class="input-unit">
                <el-input
                  v-model="
                    castingIntervalForm.heatProperties.rollerAverageSpeed
                  "
                  placeholder="辊道均速"
                  style="width: 150px"
                />
                <span class="unit" style="right: 36px">m/min</span>
              </div>
              <div class="input-unit">
                <el-input
                  v-model="
                    castingIntervalForm.spacingTotalLength.heatOutletTemperature
                  "
                  placeholder="补热出口温度"
                  style="width: 150px"
                />
                <span class="unit">°C</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 除磷段属性 -->
        <el-row>
          <el-col>
            <el-form-item label="除磷段属性">
              <el-select
                v-model="castingIntervalForm.dephosphorizationPropertie.type1"
                placeholder="请选择"
                clearable
                style="width: 150px; margin-right: 10px"
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
                  v-model="
                    castingIntervalForm.dephosphorizationPropertie.type1Value
                  "
                  placeholder="水量"
                  style="width: 150px"
                />
                <span class="unit" style="right: 24px">m³/h</span>
              </div>
              <el-select
                v-model="castingIntervalForm.dephosphorizationPropertie.type2"
                placeholder="请选择"
                clearable
                style="width: 150px; margin-right: 10px"
              >
                <el-option
                  v-for="item in typeList2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <div class="input-unit">
                <el-input
                  v-model="
                    castingIntervalForm.dephosphorizationPropertie.type2Value
                  "
                  placeholder="换热系数"
                  style="width: 150px"
                />
                <span class="unit" style="right: 45px">W/(m³K)</span>
              </div>
              <div class="input-unit next-row">
                <el-input
                  v-model="
                    castingIntervalForm.dephosphorizationPropertie
                      .absolutePosition
                  "
                  placeholder="绝对位置"
                  style="width: 150px"
                />
                <span class="unit">m</span>
              </div>
              <div class="input-unit next-row">
                <el-input
                  v-model="
                    castingIntervalForm.dephosphorizationPropertie
                      .absolutePosition
                  "
                  placeholder="请输入"
                  style="width: 150px"
                />
                <span class="unit" style="right: 18px">mm</span>
              </div>
              <div class="input-unit next-row">
                <el-input
                  v-model="
                    castingIntervalForm.dephosphorizationPropertie
                      .rollerAverageSpeed
                  "
                  placeholder="辊道均速"
                  style="width: 150px"
                />
                <span class="unit" style="right: 35px">m/min</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 待热段属性 -->
        <el-row>
          <el-col>
            <el-form-item label="待热段属性">
              <div class="input-unit">
                <el-input
                  v-model="
                    castingIntervalForm.waitHeatPropertie.absolutePosition
                  "
                  placeholder="绝对位置"
                  style="width: 150px"
                />
                <span class="unit">m</span>
              </div>
              <div class="input-unit">
                <el-input
                  v-model="castingIntervalForm.waitHeatPropertie.waitTime"
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
import { ref, reactive } from "vue";
import dayjs from "dayjs";

const castingIntervalForm = reactive({
  spacingTotalLength: "",
  enteredLength: "",
  transportList: "",
  heatProperties: {
    absolutePosition: "",
    heatLength: "",
    rollerAverageSpeed: "",
    heatOutletTemperature: "",
  },
  dephosphorizationPropertie: {
    type1: "",
    type1Value: "",
    type2: "",
    type2Value: "",
    absolutePosition: "",
    rollerAverageSpeed: "",
  },
  waitHeatPropertie: {
    absolutePosition: "",
    waitTime: "",
  },
});

const now = new Date();
const tableRef = ref(null);
const tableData = ref([
  {
    date: "11",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
  },
  {
    date: "22",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
  },
  {
    date: "333",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
  },
]);

const value = ref(true);

const typeList1 = ref([
  {
    label: "类型1",
    value: "1",
  },
  {
    label: "类型2",
    value: "2",
  },
]);

const typeList2 = ref([
  {
    label: "类型1",
    value: "1",
  },
  {
    label: "类型2",
    value: "2",
  },
]);

const deleteRow = (index) => {
  tableData.value.splice(index, 1);
};

const onAddItem = () => {
  now.setDate(now.getDate() + 1);
  tableData.value.push({
    date: "111",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
  });
};
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
      margin-right: 10px;
    }

    .unit {
      width: 20px;
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

    .next-row {
      margin-top: 10px;
    }

    .custom-btn {
      background-color: #fff;
      color: #0c5fff;
    }
  }
}
</style>
