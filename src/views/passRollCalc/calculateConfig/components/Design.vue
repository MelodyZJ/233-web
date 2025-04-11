<template>
  <div class="part-box">
    <div class="part-title">参数配置</div>
    <div class="part-content">
      <div class="top-botton">
        <el-upload
          :file-list="fileList"
          class="upload-demo"
          multiple
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :limit="1"
          :on-exceed="handleExceed"
        >
          <v-btn variant="outlined" class="custom-btn">上传参数</v-btn>
        </el-upload>
        <v-btn variant="outlined" class="custom-btn">下载模板</v-btn>
      </div>

      <!-- 具体参数 -->
      <el-table
        ref="designTableRef1"
        :data="designTableData1"
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
        <el-table-column label="机组" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.set" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="机架号" align="center" min-width="120">
          <template #default="scope">
            <el-input v-model="scope.row.rackNumber" placeholder="请输入" />
          </template>
        </el-table-column>

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

        <el-table-column label="菱形孔顶角/°" align="center" min-width="150">
          <template #default="scope">
            <el-input
              v-model="scope.row.diamondHoleAngle"
              placeholder="请输入"
            />
          </template>
        </el-table-column>

        <el-table-column label="辊环直径/mm" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.rollerDiameter" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="轧制速度/m/s" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.rollingSpeed" placeholder="请输入" />
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
        ref="designTableRef2"
        :data="designTableData2"
        highlight-current-row
        style="margin-top: 20px"
        :header-cell-style="{ background: '#fafafa' }"
        border
      >
        <el-table-column label="钢种" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.steel" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="牌号" align="center" min-width="120">
          <template #default="scope">
            <el-input v-model="scope.row.steelGrade" placeholder="请输入" />
          </template>
        </el-table-column>

        <el-table-column label="轧制力模型" align="center" min-width="150">
          <template #default="scope">
            <el-input
              v-model="scope.row.rollingForceModel"
              placeholder="请输入"
            />
          </template>
        </el-table-column>

        <el-table-column label="产线布置形式" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.layoutForm" placeholder="请输入" />
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
        <el-table-column label="开轧温度/°C" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.beginRollTemp" placeholder="请输入" />
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
      </el-table>

      <!-- 化学成分 -->
      <el-table
        ref="designTableRef3"
        :data="designTableData3"
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
        <el-table-column label="Cu" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.Cu" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="Ni" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.Ni" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="Mo" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.Mo" placeholder="请输入" />
          </template>
        </el-table-column>
        <el-table-column label="Ti" align="center" min-width="150">
          <template #default="scope">
            <el-input v-model="scope.row.Ti" placeholder="请输入" />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
const basisSpeed = ref(""); // 基数
const highSpeed = ref(""); // 高速

const designTableRef1 = ref(null);
const designTableData1 = ref([
  {
    set: null,
    rackNumber: "坯料",
    holeShape: "方",
    holeHeight: null,
    diamondHoleAngle: null,
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
    holeHeight: null,
    diamondHoleAngle: null,
    rollerDiameter: 900,
    rollingSpeed: null,
    basisSpeed: 800,
    highSpeed: 1600,
    sameMillLineNumber: 1,
    ratedPower: 900,
    millSpacing: 0.5,
    reductionRatio: 110,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "2V",
    holeShape: "立式箱形",
    holeHeight: null,
    diamondHoleAngle: null,
    rollerDiameter: 900,
    rollingSpeed: null,
    basisSpeed: 800,
    highSpeed: 1600,
    sameMillLineNumber: 1,
    ratedPower: 900,
    millSpacing: 3.5,
    reductionRatio: 95,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "3H",
    holeShape: "变椭",
    holeHeight: null,
    diamondHoleAngle: null,
    rollerDiameter: 900,
    rollingSpeed: null,
    basisSpeed: 800,
    highSpeed: 1600,
    sameMillLineNumber: 1,
    ratedPower: 900,
    millSpacing: 3.5,
    reductionRatio: 84,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "4V",
    holeShape: "圆形",
    holeHeight: null,
    diamondHoleAngle: null,
    rollerDiameter: 850,
    rollingSpeed: null,
    basisSpeed: 800,
    highSpeed: null,
    sameMillLineNumber: 1,
    ratedPower: 900,
    millSpacing: 3.2,
    reductionRatio: 84,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "5H",
    holeShape: "椭圆",
    holeHeight: null,
    diamondHoleAngle: null,
    rollerDiameter: 850,
    rollingSpeed: null,
    basisSpeed: 800,
    highSpeed: 1600,
    sameMillLineNumber: 1,
    ratedPower: 900,
    millSpacing: 3.2,
    reductionRatio: 58,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "6V",
    holeShape: "圆形",
    holeHeight: 150,
    diamondHoleAngle: null,
    rollerDiameter: 850,
    rollingSpeed: 0.75,
    basisSpeed: 800,
    highSpeed: 1600,
    sameMillLineNumber: 1,
    ratedPower: 900,
    millSpacing: 3.2,
    reductionRatio: 45,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: null,
    holeShape: null,
    holeHeight: null,
    diamondHoleAngle: null,
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
    holeHeight: null,
    diamondHoleAngle: null,
    rollerDiameter: 850,
    rollingSpeed: null,
    basisSpeed: 800,
    highSpeed: 1600,
    sameMillLineNumber: 1,
    ratedPower: 900,
    millSpacing: 54,
    reductionRatio: 56,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "8V",
    holeShape: "圆形",
    holeHeight: null,
    diamondHoleAngle: null,
    rollerDiameter: 620,
    rollingSpeed: null,
    basisSpeed: 800,
    highSpeed: 1600,
    sameMillLineNumber: 1,
    ratedPower: 900,
    millSpacing: 3,
    reductionRatio: 42,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "9H",
    holeShape: "椭圆",
    holeHeight: null,
    diamondHoleAngle: null,
    rollerDiameter: 620,
    rollingSpeed: null,
    basisSpeed: 800,
    highSpeed: 1600,
    sameMillLineNumber: 1,
    ratedPower: 900,
    millSpacing: 3,
    reductionRatio: 32.5,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "10V",
    holeShape: "圆形",
    holeHeight: null,
    diamondHoleAngle: null,
    rollerDiameter: 620,
    rollingSpeed: null,
    basisSpeed: 800,
    highSpeed: 1600,
    sameMillLineNumber: 1,
    ratedPower: 900,
    millSpacing: 3,
    reductionRatio: 25.2,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "11H",
    holeShape: "椭圆",
    holeHeight: null,
    diamondHoleAngle: null,
    rollerDiameter: 620,
    rollingSpeed: null,
    basisSpeed: 800,
    highSpeed: 1600,
    sameMillLineNumber: 1,
    ratedPower: 900,
    millSpacing: 3,
    reductionRatio: 19.5,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "12V",
    holeShape: "圆形",
    holeHeight: 69.8,
    diamondHoleAngle: null,
    rollerDiameter: 620,
    rollingSpeed: null,
    basisSpeed: null,
    highSpeed: null,
    sameMillLineNumber: 1,
    ratedPower: null,
    millSpacing: 3,
    reductionRatio: 15.8,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: null,
    holeShape: null,
    holeHeight: null,
    diamondHoleAngle: null,
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
    holeHeight: null,
    diamondHoleAngle: null,
    rollerDiameter: 500,
    rollingSpeed: null,
    basisSpeed: 800,
    highSpeed: 1600,
    sameMillLineNumber: 1,
    ratedPower: 1150,
    millSpacing: 9,
    reductionRatio: 11.7,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "14V",
    holeShape: "圆形",
    holeHeight: null,
    diamondHoleAngle: null,
    rollerDiameter: 500,
    rollingSpeed: null,
    basisSpeed: 800,
    highSpeed: 1600,
    sameMillLineNumber: 1,
    ratedPower: 1150,
    millSpacing: 2.8,
    reductionRatio: 9.3,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "15H",
    holeShape: "椭圆",
    holeHeight: null,
    diamondHoleAngle: null,
    rollerDiameter: 500,
    rollingSpeed: null,
    basisSpeed: 800,
    highSpeed: 1600,
    sameMillLineNumber: 1,
    ratedPower: 1150,
    millSpacing: 2.8,
    reductionRatio: 7.6,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "16V",
    holeShape: "圆形",
    holeHeight: 46.3,
    diamondHoleAngle: null,
    rollerDiameter: 500,
    rollingSpeed: null,
    basisSpeed: 800,
    highSpeed: 1600,
    sameMillLineNumber: 1,
    ratedPower: 1150,
    millSpacing: 2.8,
    reductionRatio: 6.2,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: null,
    holeShape: null,
    holeHeight: null,
    diamondHoleAngle: null,
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
    rackNumber: "17H",
    holeShape: "椭圆",
    holeHeight: null,
    diamondHoleAngle: null,
    rollerDiameter: 425,
    rollingSpeed: null,
    basisSpeed: 800,
    highSpeed: 1600,
    sameMillLineNumber: 1,
    ratedPower: 3000,
    millSpacing: 30,
    reductionRatio: 4.6,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "18V",
    holeShape: "圆形",
    holeHeight: null,
    diamondHoleAngle: null,
    rollerDiameter: 425,
    rollingSpeed: null,
    basisSpeed: null,
    highSpeed: null,
    sameMillLineNumber: 1,
    ratedPower: null,
    millSpacing: 4.5,
    reductionRatio: 3.9,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "19H",
    holeShape: "椭圆",
    holeHeight: null,
    diamondHoleAngle: null,
    rollerDiameter: 425,
    rollingSpeed: null,
    basisSpeed: null,
    highSpeed: null,
    sameMillLineNumber: 1,
    ratedPower: null,
    millSpacing: 4.5,
    reductionRatio: 3.1,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: "20V",
    holeShape: "圆形",
    holeHeight: 28.8,
    diamondHoleAngle: null,
    rollerDiameter: 425,
    rollingSpeed: null,
    basisSpeed: null,
    highSpeed: null,
    sameMillLineNumber: 1,
    ratedPower: null,
    millSpacing: 4.5,
    reductionRatio: 2.5,
    setTemperatureDrop: null,
  },
  {
    set: null,
    rackNumber: null,
    holeShape: null,
    holeHeight: null,
    diamondHoleAngle: null,
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
    set: "减定径",
    rackNumber: null,
    holeShape: null,
    holeHeight: null,
    diamondHoleAngle: null,
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
    set: null,
    rackNumber: null,
    holeShape: null,
    holeHeight: null,
    diamondHoleAngle: null,
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
    set: null,
    rackNumber: null,
    holeShape: null,
    holeHeight: null,
    diamondHoleAngle: null,
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
    set: null,
    rackNumber: null,
    holeShape: null,
    holeHeight: null,
    diamondHoleAngle: null,
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
    set: null,
    rackNumber: null,
    holeShape: null,
    holeHeight: null,
    diamondHoleAngle: null,
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

const designTableRef2 = ref(null);
const designTableData2 = ref([
  {
    steel: "轴承钢",
    steelGrade: "“GCr15”",
    rollingForceModel: "艾克隆德模型",
    layoutForm: "平-立交替",
    cte: 1.013,
    castHeight: 250,
    castWidth: 250,
    castLength: 9000,
    castFarming: 25,
    beginRollTemp: 1200,
    finishedDiameter: 28.8,
    finalRollSpeed: 8.9,
  },
]);

const designTableRef3 = ref(null);
const designTableData3 = ref([
  {
    C: 1,
    Mn: 0.3,
    Cr: 1.5,
    P: 0.0157,
    S: 0.0173,
    Si: 0.25,
    Al: 0,
    V: 0,
    Cu: 0.019,
    Ni: null,
    Mo: 0.02,
    Ti: 0,
  },
]);

const deleteRow = (index) => {
  designTableData1.value.splice(index, 1);
};

const onAddItem = () => {
  designTableData1.value.push({
    set: null,
    rackNumber: null,
    holeShape: null,
    holeHeight: null,
    diamondHoleAngle: null,
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
  if (columnIndex === 8 || columnIndex === 9) {
    if (rowIndex === 0) {
      return {
        rowspan: designTableData1.value.length,
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

// 文件上传
const fileList = ref([]);

const getTableData = () => {
  let parmas = {
    designTableData1: designTableData1.value,
    designTableData2: designTableData2.value,
    designTableData3: designTableData3.value,
  };

  return parmas;
};

const resetForm = () => {
  designTableData1.value = [
    {
      set: null,
      rackNumber: null,
      holeShape: null,
      holeHeight: null,
      diamondHoleAngle: null,
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
  ];
  designTableData2.value = [
    {
      steel: "",
      steelGrade: "",
      rollingForceModel: "",
      layoutForm: "",
      cte: null,
      castHeight: null,
      castWidth: null,
      castLength: null,
      castFarming: null,
      beginRollTemp: null,
      finishedDiameter: null,
      finalRollSpeed: null,
    },
  ];
  designTableData3.value = [
    {
      C: null,
      Mn: null,
      Cr: null,
      P: null,
      S: null,
      Si: null,
      Al: null,
      V: null,
      Cu: null,
      Ni: null,
      Mo: null,
      Ti: null,
    },
  ];
};

defineExpose({
  getTableData,
  resetForm,
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
}
</style>
