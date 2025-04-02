<template>
  <div class="part-box">
    <div class="part-title">参数配置</div>
    <div class="part-content">
      <div class="top-botton">
        <v-btn variant="outlined" class="custom-btn">上传参数</v-btn>
        <v-btn variant="outlined" class="custom-btn">下载模板</v-btn>
      </div>

      <!-- 具体参数 -->
      <el-table
        ref="userTableRef1"
        :data="userTableData1"
        highlight-current-row
        height="100%"
        :header-cell-style="{ background: '#fafafa' }"
        border
      >
        <el-table-column
          label="序号"
          min-width="80"
          align="center"
          type="index"
        ></el-table-column>
        <el-table-column label="孔型形状" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.passShape" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="孔型高度/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.passHeight" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="扩张半径/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.spreadRadius" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="外圈半径/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.outerRadius" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="横底宽度/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.bottomWidth" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="平椭内圈半径/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.InnerWidth" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="扩张角/°" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.spreadAngle" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="菱形孔顶角/°" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.topAngle" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="辊缝/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.rollGap" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="辊环直径/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.ringDiameter" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="轧制速度/m/s" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.rollSpeed" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="基数/rpm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.cardinalNum" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="高速/rpm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.highSpeed" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="同轧线数" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.rollLineNum" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="额定功率/kw" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.ratedPower" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="轧机间距/m" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.spacingMill" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="减速比" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.reductionRatio" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="机组温降/°C" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.unitTemperDrop" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          min-width="150"
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

      <!-- 钢种信息 -->
      <el-table
        ref="userTableRef2"
        :data="userTableData2"
        highlight-current-row
        style="margin-top: 20px"
        :header-cell-style="{ background: '#fafafa' }"
        border
      >
        <el-table-column label="轧制力模型" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.rollForceModel" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="热膨胀系数" align="center" min-width="150">
          <template #default="scope">
            <el-input
              v-model="scope.row.thermalExpansion"
              placeholder="请输入"
            />
          </template>
        </el-table-column>
        <el-table-column label="铸坯高度/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.billetHeight" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="铸坯宽度/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.billetWidth" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="铸坯长度/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.billetLength" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="铸坯倒角/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.billetChamfer" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="成品尺寸/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.finishedSize" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="终轧速度/m/s" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.finishingSpeed" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="开轧温度/°C" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.rollTemper" placeholder="请输入" />
          </template>
        </el-table-column>
      </el-table>

      <!-- 化学成分 -->
      <el-table
        ref="userTableRef3"
        :data="userTableData3"
        highlight-current-row
        style="margin-top: 20px"
        :header-cell-style="{ background: '#fafafa' }"
        border
      >
        <el-table-column label="C" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.valuel1" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="Mn" align="center" min-width="120">
          <template #default="scope">
            <el-input v-model="scope.row.valuel2" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="Cr" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.valuel3" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="P" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.valuel4" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="S" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.valuel5" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="Si" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.valuel6" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="Al" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.valuel7" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="V" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.valuel8" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="Nb" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.valuel9" placeholder="请输入" />
          </template>
        </el-table-column>
      </el-table>

      <div class="btn">
        <v-btn variant="tonal" class="submit-btn">提交</v-btn>
        <v-btn variant="outlined" class="reset-btn">重置</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";

const paraConfigForm = reactive({});

const now = new Date();

const userTableRef1 = ref(null);
const userTableData1 = ref([
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    spreadRadius: "",
    outerRadius: "",
    bottomWidth: "",
    InnerWidth: "",
    spreadAngle: "",
    topAngle: "",
    rollGap: "",
    ringDiameter: "",
    rollSpeed: "",
    cardinalNum: "",
    highSpeed: "",
    rollLineNum: "",
    ratedPower: "",
    spacingMill: "",
    reductionRatio: "",
    unitTemperDrop: "",
  },
]);

const userTableRef2 = ref(null);
const userTableData2 = ref([
  {
    rollForceModel: "",
    thermalExpansion: "",
    billetHeight: "",
    billetWidth: "",
    billetLength: "",
    billetChamfer: "",
    finishedSize: "",
    finishingSpeed: "",
    rollTemper: "",
  },
]);

const userTableRef3 = ref(null);
const userTableData3 = ref([
  {
    valuel1: "",
    valuel2: "",
    valuel3: "",
    valuel4: "",
    valuel5: "",
    valuel6: "",
    valuel7: "",
    valuel8: "",
    valuel9: "",
  },
]);

const deleteRow = (index) => {
  userTableData1.value.splice(index, 1);
};

const onAddItem = () => {
  now.setDate(now.getDate() + 1);
  userTableData1.value.push({
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  });
};
</script>

<style lang="scss" scoped>
.part-box {
  .part-title {
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 15px;
    margin-bottom: 20px;

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
      margin-bottom: 15px;
    }
  }

  .custom-btn {
    background-color: #fff;
    color: #0c5fff;
  }

  .btn {
    display: flex;
    justify-content: flex-end;
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
