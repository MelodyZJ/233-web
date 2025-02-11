<template>
  <div class="part-box" style="height: 400px">
    <div class="part-title">风冷线</div>
    <div class="part-content">
      <el-form
        :inline="true"
        :model="AirCoolLineForm"
        style="margin-top: -20px"
      >
        <el-row>
          <el-col>
            <el-form-item>
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
                  label="辊道长度"
                  align="center"
                  max-width="150"
                >
                  <template #default="scope">
                    <el-input
                      v-model="scope.row.rollerLength"
                      placeholder="请输入"
                    />
                  </template>
                </el-table-column>
                <el-table-column
                  label="辊道速度"
                  align="center"
                  max-width="120"
                >
                  <template #default="scope">
                    <el-input
                      v-model="scope.row.rollerSpeed"
                      placeholder="请输入"
                    />
                  </template>
                </el-table-column>

                <el-table-column
                  label="风机开关"
                  align="center"
                  max-width="120"
                >
                  <template #default="scope">
                    <el-switch
                      v-model="scope.row.fanSwitch"
                      class="ml-2"
                      style="
                        --el-switch-on-color: #13ce66;
                        --el-switch-off-color: #ff4949;
                      "
                    />
                  </template>
                </el-table-column>

                <el-table-column
                  label="风机开度"
                  align="center"
                  max-width="150"
                >
                  <template #default="scope">
                    <el-input
                      v-model="scope.row.fanOpen"
                      placeholder="请输入"
                    />
                  </template>
                </el-table-column>

                <el-table-column
                  label="保温罩开关"
                  align="center"
                  max-width="120"
                >
                  <template #default="scope">
                    <el-switch
                      v-model="scope.row.heatShieldSwitch"
                      class="ml-2"
                      style="
                        --el-switch-on-color: #13ce66;
                        --el-switch-off-color: #ff4949;
                      "
                    />
                  </template>
                </el-table-column>

                <el-table-column
                  label="温降系数"
                  align="center"
                  max-width="150"
                >
                  <template #default="scope">
                    <el-input
                      v-model="scope.row.temperatureDropCoefficient"
                      placeholder="请输入"
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
                class="custom-btn mt-4"
                @click="onAddItem"
                >添加风冷线</v-btn
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";

const AirCoolLineForm = reactive({
  stepTime: "",
  coolBedSize: {
    length: "",
    width: "",
  },
});

const now = new Date();
const tableRef = ref(null);
const tableData = ref([
  {
    rollerLength: "",
    rollerSpeed: "",
    fanSwitch: false,
    fanOpen: "",
    heatShieldSwitch: false,
    temperatureDropCoefficient: "",
  },
  {
    rollerLength: "",
    rollerSpeed: "",
    fanSwitch: false,
    fanOpen: "",
    heatShieldSwitch: false,
    temperatureDropCoefficient: "",
  },
  {
    rollerLength: "",
    rollerSpeed: "",
    fanSwitch: false,
    fanOpen: "",
    heatShieldSwitch: false,
    temperatureDropCoefficient: "",
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
    rollerLength: "",
    rollerSpeed: "",
    fanSwitch: false,
    fanOpen: "",
    heatShieldSwitch: false,
    temperatureDropCoefficient: "",
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
    padding: 15px;

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
