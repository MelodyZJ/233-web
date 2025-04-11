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
        :span-method="objectSpanMethod"
      >
        <el-table-column
          label="序号"
          min-width="80"
          align="center"
          type="index"
        ></el-table-column>
        <el-table-column label="孔型形状" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.holeShape" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="孔型高度/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.holeHeight" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="扩张半径/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input
              v-model="scope.row.expansionRadius"
              placeholder="请输入"
            />
          </template>
        </el-table-column>

        <el-table-column label="外圆半径/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.outerRadius" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="槽底宽度/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.troughWidth" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="平椭内圆半径/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input
              v-model="scope.row.flatEllipticalRadius"
              placeholder="请输入"
            />
          </template>
        </el-table-column>

        <el-table-column label="扩张角/°" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.expansionAngle" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="菱形孔顶角/°" align="center" min-width="150">
          <template #default="scope">
            <el-input
              v-model="scope.row.diamondHoleAngle"
              placeholder="请输入"
            />
          </template>
        </el-table-column>

        <el-table-column label="辊缝/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.rollerGap" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="辊环直径/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.rollerDiameter" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="轧制速度/m/s" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.rollSpeed" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="基数/rpm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="basisSpeed" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="高速/rpm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="highSpeed" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="同轧线数" align="center" min-width="150">
          <template #default="scope">
            <el-input
              v-model="scope.row.sameMillLineNumber"
              placeholder="请输入"
            />
          </template>
        </el-table-column>

        <el-table-column label="额定功率/kw" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.ratedPower" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="轧机间距/m" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.millSpacing" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="减速比" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.reductionRatio" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="机组温降/°C" align="center" min-width="150">
          <template #default="scope">
            <el-input
              v-model="scope.row.setTemperatureDrop"
              placeholder="请输入"
            />
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
            <el-input
              v-model="scope.row.rollingForceModel"
              placeholder="请输入"
            />
          </template>
        </el-table-column>
        <el-table-column label="热膨胀系数" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.cte" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="铸坯高度/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.castHeight" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="铸坯宽度/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.castWidth" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="铸坯长度/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.castLength" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="铸坯倒角/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.castFarming" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="成品尺寸/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input
              v-model="scope.row.finishedDiameter"
              placeholder="请输入"
            />
          </template>
        </el-table-column>
        <el-table-column label="终轧速度/m/s" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.finalRollSpeed" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="开轧温度/°C" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.beginRollTemp" placeholder="请输入" />
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
            <el-input v-model="scope.row.C" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="Mn" align="center" min-width="120">
          <template #default="scope">
            <el-input v-model="scope.row.Mn" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="Cr" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.Cr" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="P" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.P" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="S" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.S" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="Si" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.Si" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="Al" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.Al" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="V" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.V" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="Nb" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.Nb" placeholder="请输入" />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
const basisSpeed = ref(""); // 基数
const highSpeed = ref(""); // 高速

const userTableRef1 = ref(null);
const userTableData1 = ref([
  {
    set: null,
    rackNumber: "坯料",
    holeShape: "方",
    holeHeight: null,
    holeWidth: null,
    expansionRadius: null,
    outerRadius: null,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: null,
    rollerDiameter: null,
    rollingSpeed: null,
    basisSpeed: null,
    highSpeed: null,
    sameMillLineNumber: null,
    ratedPower: null,
    millSpacing: null,
    reductionRatio: null,
    setTemperatureDrop: null,
  },
  {
    set: "粗轧",
    rackNumber: "1H",
    holeShape: "水平箱形",
    holeHeight: 117.12,
    holeWidth: 180.2826,
    expansionRadius: 18.7392,
    outerRadius: 10,
    troughWidth: 167.145,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: 60,
    rollerDiameter: 650,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1400,
    sameMillLineNumber: 1,
    ratedPower: 650,
    millSpacing: 3.5,
    reductionRatio: 61,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "2V",
    holeShape: "立式箱形",
    holeHeight: 122,
    holeWidth: 131.88,
    expansionRadius: 19.52,
    outerRadius: 10,
    troughWidth: 117.12,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: 40,
    rollerDiameter: 650,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1400,
    sameMillLineNumber: 1,
    ratedPower: 650,
    millSpacing: 3.5,
    reductionRatio: 45,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "3H",
    holeShape: "变椭",
    holeHeight: 86.5,
    holeWidth: 143.582,
    expansionRadius: 41.2,
    outerRadius: 8.7,
    troughWidth: 87.1,
    flatEllipticalRadius: 412,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: 25,
    rollerDiameter: 650,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1400,
    sameMillLineNumber: 1,
    ratedPower: 800,
    millSpacing: 3.5,
    reductionRatio: 38,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "4V",
    holeShape: "圆形",
    holeHeight: 103,
    holeWidth: 107.39,
    expansionRadius: 51.5,
    outerRadius: 10.3,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: 30,
    diamondHoleAngle: null,
    rollerGap: 20,
    rollerDiameter: 650,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1400,
    sameMillLineNumber: 1,
    ratedPower: 800,
    millSpacing: 3.5,
    reductionRatio: 28,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "5H",
    holeShape: "椭圆",
    holeHeight: 69,
    holeWidth: 119.5,
    expansionRadius: 85.10841836734694,
    outerRadius: 12,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: 20,
    rollerDiameter: 480,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1400,
    sameMillLineNumber: 1,
    ratedPower: 800,
    millSpacing: 3.5,
    reductionRatio: 19.2,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "6V",
    holeShape: "圆形",
    holeHeight: 78,
    holeWidth: 78.52,
    expansionRadius: 39,
    outerRadius: 7.800000000000001,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: 30,
    diamondHoleAngle: null,
    rollerGap: 20,
    rollerDiameter: 480,
    rollingSpeed: 1.79,
    basisSpeed: 700,
    highSpeed: 1400,
    sameMillLineNumber: 1,
    ratedPower: 800,
    millSpacing: 3.5,
    reductionRatio: 14.6,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: null,
    holeShape: null,
    holeHeight: null,
    holeWidth: null,
    expansionRadius: null,
    outerRadius: null,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: null,
    rollerDiameter: null,
    rollingSpeed: null,
    basisSpeed: null,
    highSpeed: null,
    sameMillLineNumber: null,
    ratedPower: null,
    millSpacing: null,
    reductionRatio: null,
    setTemperatureDrop: null,
  },
  {
    set: "中轧",
    rackNumber: "7H",
    holeShape: "椭圆",
    holeHeight: 51.5,
    holeWidth: 92.3,
    expansionRadius: 68.86999999999999,
    outerRadius: 8,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: 16,
    rollerDiameter: 480,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1250,
    sameMillLineNumber: 1,
    ratedPower: 650,
    millSpacing: 66,
    reductionRatio: 20,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "8V",
    holeShape: "圆形",
    holeHeight: 59,
    holeWidth: 58.89,
    expansionRadius: 29.5,
    outerRadius: 6.5,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: 30,
    diamondHoleAngle: null,
    rollerGap: 16,
    rollerDiameter: 480,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1250,
    sameMillLineNumber: 1,
    ratedPower: 650,
    millSpacing: 3.2,
    reductionRatio: 15,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "9H",
    holeShape: "椭圆",
    holeHeight: 38.5,
    holeWidth: 70.8,
    expansionRadius: 53.91405660377358,
    outerRadius: 7.5,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: 12,
    rollerDiameter: 480,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1250,
    sameMillLineNumber: 1,
    ratedPower: 650,
    millSpacing: 3.2,
    reductionRatio: 12,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "10V",
    holeShape: "圆形",
    holeHeight: 44.5,
    holeWidth: 44.46,
    expansionRadius: 22.25,
    outerRadius: 6.5,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: 30,
    diamondHoleAngle: null,
    rollerGap: 12,
    rollerDiameter: 480,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1250,
    sameMillLineNumber: 1,
    ratedPower: 650,
    millSpacing: 3.2,
    reductionRatio: 8.9,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "11H",
    holeShape: "椭圆",
    holeHeight: 31.2,
    holeWidth: 52.6,
    expansionRadius: 37.92688679245283,
    outerRadius: 5,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: 10,
    rollerDiameter: 380,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1250,
    sameMillLineNumber: 1,
    ratedPower: 650,
    millSpacing: 3.2,
    reductionRatio: 5.5,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "12V",
    holeShape: "圆形",
    holeHeight: 37,
    holeWidth: 36.95,
    expansionRadius: 18.5,
    outerRadius: 6.5,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: 30,
    diamondHoleAngle: null,
    rollerGap: 10,
    rollerDiameter: 380,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1250,
    sameMillLineNumber: 1,
    ratedPower: 650,
    millSpacing: 3.2,
    reductionRatio: 4.1,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: null,
    holeShape: null,
    holeHeight: null,
    holeWidth: null,
    expansionRadius: null,
    outerRadius: null,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: null,
    rollerDiameter: null,
    rollingSpeed: null,
    basisSpeed: null,
    highSpeed: null,
    sameMillLineNumber: null,
    ratedPower: null,
    millSpacing: null,
    reductionRatio: null,
    setTemperatureDrop: null,
  },
  {
    set: "预精轧",
    rackNumber: "13H",
    holeShape: "椭圆",
    holeHeight: 24,
    holeWidth: 43.6,
    expansionRadius: 35.43266666666667,
    outerRadius: 4,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: 9,
    rollerDiameter: 380,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1250,
    sameMillLineNumber: 1,
    ratedPower: 650,
    millSpacing: 25,
    reductionRatio: 3.35,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "14V",
    holeShape: "圆形",
    holeHeight: 28.5,
    holeWidth: 27.71,
    expansionRadius: 14.25,
    outerRadius: 2,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: 30,
    diamondHoleAngle: null,
    rollerGap: 9,
    rollerDiameter: 380,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1250,
    sameMillLineNumber: 1,
    ratedPower: 650,
    millSpacing: 4.2,
    reductionRatio: 2.6,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "15H",
    holeShape: "椭圆",
    holeHeight: 16.5,
    holeWidth: 35.87,
    expansionRadius: 23.323538846061023,
    outerRadius: 4,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: 3.5,
    rollerDiameter: 300,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1250,
    sameMillLineNumber: 1,
    ratedPower: 650,
    millSpacing: 6.8,
    reductionRatio: 1.5,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "16V",
    holeShape: "圆形",
    holeHeight: 21,
    holeWidth: 22.52,
    expansionRadius: 10.5,
    outerRadius: 4,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: 30,
    diamondHoleAngle: null,
    rollerGap: 3,
    rollerDiameter: 300,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1250,
    sameMillLineNumber: 1,
    ratedPower: 650,
    millSpacing: 3,
    reductionRatio: 1.24,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "17H",
    holeShape: "椭圆",
    holeHeight: 13.8,
    holeWidth: 30.93,
    expansionRadius: 22.389662366005183,
    outerRadius: 3,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: 3.6,
    rollerDiameter: 228.3,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1250,
    sameMillLineNumber: 1,
    ratedPower: 650,
    millSpacing: 3,
    reductionRatio: 0.856,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "18V",
    holeShape: "圆形",
    holeHeight: 17.1,
    holeWidth: 18.24,
    expansionRadius: 8.55,
    outerRadius: 4,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: 30,
    diamondHoleAngle: null,
    rollerGap: 2.7,
    rollerDiameter: 228.3,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1250,
    sameMillLineNumber: 1,
    ratedPower: 650,
    millSpacing: 3,
    reductionRatio: 0.71,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: null,
    holeShape: null,
    holeHeight: null,
    holeWidth: null,
    expansionRadius: null,
    outerRadius: null,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: null,
    rollerDiameter: null,
    rollingSpeed: null,
    basisSpeed: null,
    highSpeed: null,
    sameMillLineNumber: null,
    ratedPower: null,
    millSpacing: null,
    reductionRatio: null,
    setTemperatureDrop: null,
  },
  {
    set: "精轧",
    rackNumber: "19#",
    holeShape: "椭圆",
    holeHeight: 11.1,
    holeWidth: 23.65,
    expansionRadius: 14.144249810383533,
    outerRadius: 2.5,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: 1.9,
    rollerDiameter: 228.3,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1250,
    sameMillLineNumber: 1,
    ratedPower: 1500,
    millSpacing: 45,
    reductionRatio: 0.748,
    setTemperatureDrop: 50,
  },
  {
    set: null,
    rackNumber: "20#",
    holeShape: "圆形",
    holeHeight: 13.8,
    holeWidth: 15.13,
    expansionRadius: 6.9,
    outerRadius: 4,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: 20,
    diamondHoleAngle: null,
    rollerGap: 1.8,
    rollerDiameter: 228.3,
    rollingSpeed: null,
    basisSpeed: null,
    highSpeed: null,
    sameMillLineNumber: 1,
    ratedPower: null,
    millSpacing: 0.8,
    reductionRatio: 0.572,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "21#",
    holeShape: "椭圆",
    holeHeight: 8.8,
    holeWidth: 19.5,
    expansionRadius: 12.407392721719331,
    outerRadius: 2,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: 1.6,
    rollerDiameter: 228.3,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1250,
    sameMillLineNumber: 1,
    ratedPower: 1500,
    millSpacing: 0.8,
    reductionRatio: 0.4605117,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "22#",
    holeShape: "圆形",
    holeHeight: 11.15,
    holeWidth: 11.89,
    expansionRadius: 5.575,
    outerRadius: 2,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: 30,
    diamondHoleAngle: null,
    rollerGap: 1.75,
    rollerDiameter: 228.3,
    rollingSpeed: null,
    basisSpeed: null,
    highSpeed: null,
    sameMillLineNumber: 1,
    ratedPower: null,
    millSpacing: 0.8,
    reductionRatio: 0.3536,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "23#",
    holeShape: "椭圆",
    holeHeight: 6.6,
    holeWidth: 15.93,
    expansionRadius: 11.663477368347108,
    outerRadius: 1.5,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: 1.4,
    rollerDiameter: 228.3,
    rollingSpeed: null,
    basisSpeed: 700,
    highSpeed: 1250,
    sameMillLineNumber: 1,
    ratedPower: 1500,
    millSpacing: 0.8,
    reductionRatio: 0.31196,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "24#",
    holeShape: "圆形",
    holeHeight: 8.9,
    holeWidth: 9.3,
    expansionRadius: 4.45,
    outerRadius: 1.5,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: 30,
    diamondHoleAngle: null,
    rollerGap: 1.6,
    rollerDiameter: 228.3,
    rollingSpeed: null,
    basisSpeed: null,
    highSpeed: null,
    sameMillLineNumber: 1,
    ratedPower: null,
    millSpacing: 0.8,
    reductionRatio: 0.23725,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: null,
    holeShape: null,
    holeHeight: null,
    holeWidth: null,
    expansionRadius: null,
    outerRadius: null,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: null,
    rollerDiameter: null,
    rollingSpeed: null,
    basisSpeed: null,
    highSpeed: null,
    sameMillLineNumber: null,
    ratedPower: null,
    millSpacing: null,
    reductionRatio: null,
    setTemperatureDrop: null,
  },
  {
    set: "减径",
    rackNumber: "25#",
    holeShape: "椭圆",
    holeHeight: 5.2,
    holeWidth: 12.36,
    expansionRadius: 9.668534556672192,
    outerRadius: 1.5,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: 1.4,
    rollerDiameter: 228.3,
    rollingSpeed: null,
    basisSpeed: 850,
    highSpeed: 1700,
    sameMillLineNumber: 1,
    ratedPower: 1700,
    millSpacing: 60,
    reductionRatio: 0.25642,
    setTemperatureDrop: 100,
  },
  {
    set: null,
    rackNumber: "26#",
    holeShape: "圆形",
    holeHeight: 7.1,
    holeWidth: 7.39,
    expansionRadius: 3.55,
    outerRadius: 1.5,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: 30,
    diamondHoleAngle: null,
    rollerGap: 1.4,
    rollerDiameter: 228.3,
    rollingSpeed: null,
    basisSpeed: 850,
    highSpeed: 1700,
    sameMillLineNumber: 1,
    ratedPower: 1700,
    millSpacing: 0.8,
    reductionRatio: 0.20431,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: null,
    holeShape: null,
    holeHeight: null,
    holeWidth: null,
    expansionRadius: null,
    outerRadius: null,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: null,
    rollerDiameter: null,
    rollingSpeed: null,
    basisSpeed: null,
    highSpeed: null,
    sameMillLineNumber: null,
    ratedPower: null,
    millSpacing: null,
    reductionRatio: null,
    setTemperatureDrop: null,
  },
  {
    set: "定径",
    rackNumber: "27#",
    holeShape: "椭圆",
    holeHeight: 4.96,
    holeWidth: 10.54,
    expansionRadius: 6.570593032775728,
    outerRadius: 1,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: 1,
    rollerDiameter: 228.3,
    rollingSpeed: null,
    basisSpeed: 850,
    highSpeed: 1700,
    sameMillLineNumber: 1,
    ratedPower: 1700,
    millSpacing: 0.8,
    reductionRatio: 0.16414,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "28#",
    holeShape: "圆形",
    holeHeight: 6.28,
    holeWidth: 6.7,
    expansionRadius: 3.14,
    outerRadius: 1,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: 30,
    diamondHoleAngle: null,
    rollerGap: 1,
    rollerDiameter: 228.3,
    rollingSpeed: null,
    basisSpeed: 850,
    highSpeed: 1700,
    sameMillLineNumber: 1,
    ratedPower: 1700,
    millSpacing: 0.8,
    reductionRatio: 0.129457,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: null,
    holeShape: null,
    holeHeight: null,
    holeWidth: null,
    expansionRadius: null,
    outerRadius: null,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: null,
    rollerDiameter: null,
    rollingSpeed: null,
    basisSpeed: null,
    highSpeed: null,
    sameMillLineNumber: null,
    ratedPower: null,
    millSpacing: null,
    reductionRatio: null,
    setTemperatureDrop: null,
  },
]);

const userTableRef2 = ref(null);
const userTableData2 = ref([
  {
    steel: "建筑用钢",
    steelGrade: "“HRB400E”",
    rollingForceModel: "艾克隆德模型",
    layoutForm: "平-立交替",
    castHeight: 165,
    castWidth: 165,
    castLength: 10500,
    castFarming: 8,
    finishedDiameter: 6,
    finalRollSpeed: 105.8,
    beginRollTemp: 1000,
    cte: 1.013,
  },
]);

const userTableRef3 = ref(null);
const userTableData3 = ref([
  {
    C: 0.25,
    Mn: 1.5,
    Cr: 0,
    P: 0,
    S: 0,
    Si: 0.45,
    Al: 0,
    V: 0,
    Nb: 0,
  },
]);

const deleteRow = (index) => {
  userTableData1.value.splice(index, 1);
};

const onAddItem = () => {
  userTableData1.value.push({
    set: null,
    rackNumber: null,
    holeShape: null,
    holeHeight: null,
    holeWidth: null,
    expansionRadius: null,
    outerRadius: null,
    troughWidth: null,
    flatEllipticalRadius: null,
    expansionAngle: null,
    diamondHoleAngle: null,
    rollerGap: null,
    rollerDiameter: null,
    rollingSpeed: null,
    basisSpeed: null,
    highSpeed: null,
    sameMillLineNumber: null,
    ratedPower: null,
    millSpacing: null,
    reductionRatio: null,
    setTemperatureDrop: null,
  });
};

// 合并单元格逻辑
const objectSpanMethod = ({ row, column, rowIndex, columnIndex }) => {
  if (columnIndex === 12 || columnIndex === 13) {
    if (rowIndex === 0) {
      return {
        rowspan: userTableData1.value.length,
        colspan: 1,
      };
    } else {
      return {
        rowspan: 0,
        colspan: 0,
      };
    }
  }
};

const getTableData = () => {
  let parmas = {
    userTableData1: userTableData1.value,
    userTableData2: userTableData2.value,
    userTableData3: userTableData3.value,
  };

  return parmas;
};

defineExpose({
  getTableData,
});
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
