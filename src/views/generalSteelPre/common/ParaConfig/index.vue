<template>
  <div class="part-box">
    <div class="base-config">
      <div class="part-title">基本参数配置</div>
      <div class="part-content">
        <div class="top-botton">
          <v-btn variant="outlined" class="custom-btn">上传参数</v-btn>
          <v-btn variant="outlined" class="custom-btn">下载模板</v-btn>
        </div>

        <!-- 具体参数 -->
        <el-table
          ref="tableRef1"
          :data="tableData1"
          highlight-current-row
          height="100%"
          :header-cell-style="{ background: '#fafafa' }"
          border
        >
          <el-table-column
            label="序号"
            min-width="40"
            align="center"
            type="index"
          ></el-table-column>
          <el-table-column label="机组" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.set" placeholder="请输入" />
            </template>
          </el-table-column>
          <el-table-column label="机架号" align="center" max-width="120">
            <template #default="scope">
              <el-input v-model="scope.row.rackNum" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="延伸率" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.passShape" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="绝对位置/m" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.passHeight" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="辊环直径/mm" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.topAngle" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="水箱长度/m" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.ringDiameter" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="水压/MPa" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.rollSpeed" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="水里/m3/h" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.rollSpeed" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="轧制速度m/s" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.rollSpeed" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column
            fixed="right"
            label="操作"
            align="center"
            width="100"
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

        <v-btn variant="outlined" class="custom-btn mt-5" @click="onAddItem"
          >添加配置</v-btn
        >
      </div>
    </div>

    <div class="other-config">
      <div class="part-title">其他参数配置</div>
      <div class="part-content">
        <div class="top-botton">
          <v-btn variant="outlined" class="custom-btn">上传参数</v-btn>
          <v-btn variant="outlined" class="custom-btn">下载模板</v-btn>
        </div>
        <!-- 表格2 -->
        <el-table
          ref="tableRef2"
          :data="tableData2"
          highlight-current-row
          style="margin-top: 20px"
          :header-cell-style="{ background: '#fafafa' }"
          border
        >
          <el-table-column label="牌号" align="center" max-width="120">
            <template #default="scope">
              <el-input v-model="scope.row.brand" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="轧制规格/mm" align="center" max-width="150">
            <template #default="scope">
              <el-input
                v-model="scope.row.rollForceModel"
                placeholder="请输入"
              />
            </template>
          </el-table-column>

          <el-table-column label="铸坯高度/mm" align="center" max-width="150">
            <template #default="scope">
              <el-input
                v-model="scope.row.rollForceModel"
                placeholder="请输入"
              />
            </template>
          </el-table-column>

          <el-table-column label="铸坯宽度/mm" align="center" max-width="150">
            <template #default="scope">
              <el-input
                v-model="scope.row.rollForceModel"
                placeholder="请输入"
              />
            </template>
          </el-table-column>

          <el-table-column label="铸坯长度/mm" align="center" max-width="150">
            <template #default="scope">
              <el-input
                v-model="scope.row.rollForceModel"
                placeholder="请输入"
              />
            </template>
          </el-table-column>

          <el-table-column
            label="轧前平均速度/m/s"
            align="center"
            max-width="150"
          >
            <template #default="scope">
              <el-input
                v-model="scope.row.rollForceModel"
                placeholder="请输入"
              />
            </template>
          </el-table-column>

          <el-table-column label="终轧速度/m/s" align="center" max-width="150">
            <template #default="scope">
              <el-input
                v-model="scope.row.rollForceModel"
                placeholder="请输入"
              />
            </template>
          </el-table-column>

          <el-table-column label="环境温度/℃" align="center" max-width="150">
            <template #default="scope">
              <el-input
                v-model="scope.row.rollForceModel"
                placeholder="请输入"
              />
            </template>
          </el-table-column>

          <el-table-column label="浊环水温度/℃" align="center" max-width="150">
            <template #default="scope">
              <el-input
                v-model="scope.row.rollForceModel"
                placeholder="请输入"
              />
            </template>
          </el-table-column>
        </el-table>
        <!-- 表格3 -->
        <el-table
          ref="tableRef3"
          :data="tableData3"
          highlight-current-row
          style="margin-top: 20px"
          :header-cell-style="{ background: '#fafafa' }"
          border
        >
          <el-table-column label="轧辊温度/℃" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel1" placeholder="请输入" />
            </template>
          </el-table-column>
          <el-table-column label="切分机架" align="center" max-width="120">
            <template #default="scope">
              <el-input v-model="scope.row.valuel2" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="切分数" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel3" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column
            label="冷床冷却时间/s"
            align="center"
            max-width="150"
          >
            <template #default="scope">
              <el-input v-model="scope.row.valuel4" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="冷床长度/m" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel5" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="C" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel6" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="Mn" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel7" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="Cr" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel8" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="P" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel8" placeholder="请输入" />
            </template>
          </el-table-column>
        </el-table>
        <!-- 表格4 -->
        <el-table
          ref="tableRef4"
          :data="tableData3"
          highlight-current-row
          style="margin-top: 20px"
          :header-cell-style="{ background: '#fafafa' }"
          border
        >
          <el-table-column label="S" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel1" placeholder="请输入" />
            </template>
          </el-table-column>
          <el-table-column label="Si" align="center" max-width="120">
            <template #default="scope">
              <el-input v-model="scope.row.valuel2" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="Al" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel3" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="Nb" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel4" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="Ni" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel5" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="V" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel6" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="Mo" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel7" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="Ti" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel8" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="Cu" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel8" placeholder="请输入" />
            </template>
          </el-table-column>
        </el-table>
        <!-- 表格5 -->
        <el-table
          ref="tableRef5"
          :data="tableData3"
          highlight-current-row
          style="margin-top: 20px"
          :header-cell-style="{ background: '#fafafa' }"
          border
        >
          <el-table-column label="B" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel1" placeholder="请输入" />
            </template>
          </el-table-column>
          <el-table-column label="坯料类型" align="center" max-width="120">
            <template #default="scope">
              <el-input v-model="scope.row.valuel2" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="入炉温度/℃" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel3" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="三加温度/℃" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel4" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="三加时间/min" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel5" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="二加温度/℃" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel6" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="二加时间/min" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel7" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="一加温度/℃" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel8" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="一加时间/min" align="center" max-width="150">
            <template #default="scope">
              <el-input v-model="scope.row.valuel8" placeholder="请输入" />
            </template>
          </el-table-column>
        </el-table>
        <!-- 表格6 -->
        <el-table
          ref="tableRef6"
          :data="tableData3"
          highlight-current-row
          style="margin-top: 20px; width: 640px"
          :header-cell-style="{ background: '#fafafa' }"
          border
        >
          <el-table-column label="均热温度/℃" align="center" width="160">
            <template #default="scope">
              <el-input v-model="scope.row.valuel1" placeholder="请输入" />
            </template>
          </el-table-column>
          <el-table-column label="均热时间/min" align="center" width="160">
            <template #default="scope">
              <el-input v-model="scope.row.valuel2" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="出炉表面温度/℃" align="center" width="160">
            <template #default="scope">
              <el-input v-model="scope.row.valuel3" placeholder="请输入" />
            </template>
          </el-table-column>

          <el-table-column label="出炉心部温度/℃" align="center" width="160">
            <template #default="scope">
              <el-input v-model="scope.row.valuel4" placeholder="请输入" />
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <el-alert
      title="备注：加热坯出炉温度一般为均热温度-(30℃~50℃)；直轧工艺只需输入连铸坯运送至出炉处的温度。"
      type="warning"
      show-icon
      :closable="false"
    />

    <div class="btn">
      <v-btn variant="tonal" class="submit-btn" @click="startCalc"
        >开始计算</v-btn
      >
      <v-btn variant="outlined" class="reset-btn">重置</v-btn>
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const props = defineProps({
  tab: {
    type: String,
    default: "1",
  },
});

const paraConfigForm = reactive({});

const now = new Date();

const tableRef1 = ref(null);
const tableData1 = ref([
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  },
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  },
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  },
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  },
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  },
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  },
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  },
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  },
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  },
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  },
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  },
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  },
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  },
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  },
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  },
]);

const tableRef2 = ref(null);
const tableData2 = ref([
  {
    steelGrade: "",
    brand: "",
    rollForceModel: "",
    productLineLayout: "",
    heatExpansionCoe: "",
    billetHeight: "",
    billetWidth: "",
    billetLength: "",
  },
]);

const tableRef3 = ref(null);
const tableData3 = ref([
  {
    valuel1: "",
    valuel2: "",
    valuel3: "",
    valuel4: "",
    valuel5: "",
    valuel6: "",
    valuel7: "",
    valuel8: "",
  },
]);

const deleteRow = (index) => {
  tableData1.value.splice(index, 1);
};

const onAddItem = () => {
  now.setDate(now.getDate() + 1);
  tableData1.value.push({
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  });
};

// 跳转到计算结果
const startCalc = () => {
  if (route.path == "/highSpeedWire-g") {
    router.push("/highSpeedWire-g/calcResult");
  } else if (route.path == "/highSpeedBar") {
    router.push("/highSpeedBar/calcResult");
  }
};
</script>

<style lang="scss" scoped>
.part-box {
  .base-config,
  .other-config {
    margin-bottom: 20px;

    .part-title {
      height: 50px;
      display: flex;
      align-items: center;
      font-size: 15px;
      margin-bottom: 10px;

      &::before {
        content: "";
        display: block;
        width: 4px;
        height: 14px;
        border-radius: 10px;
        background-color: #f89623;
        margin-right: 10px;
      }
    }

    .part-content {
      .top-botton {
        display: flex;
        gap: 10px;
        margin-bottom: 25px;
      }
    }

    .custom-btn {
      background-color: #fff;
      color: #0c5fff;
    }
  }

  .btn {
    display: flex;
    padding: 20px 0 30px 0;

    .submit-btn {
      background-color: #0c5fff;
      color: #fff;
    }

    .reset-btn {
      border: 1px solid #dcdfe6;
      margin-left: 10px;
    }
  }
}
</style>
