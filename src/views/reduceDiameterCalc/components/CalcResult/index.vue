<template>
  <div class="calcResult-container">
    <div class="title">计算结果</div>
    <!-- 计算表格 -->
    <div class="mt-6 mb-7">
      <el-table
        ref="tableRef"
        :data="tableData"
        highlight-current-row
        :header-cell-style="{ background: '#fafafa' }"
        border
      >
        <el-table-column
          label="序号"
          min-width="50"
          align="center"
          type="index"
        />
        <el-table-column
          label="机架号"
          align="center"
          max-width="150"
          prop="rackNum"
        />
        <el-table-column
          label="孔型形状"
          align="center"
          max-width="150"
          prop="passShape"
        />
        <el-table-column
          label="孔型编号"
          align="center"
          max-width="150"
          prop="passNum"
        />
        <el-table-column
          label="辊缝"
          align="center"
          max-width="150"
          prop="rollGap"
        />
        <el-table-column
          label="型铁面积"
          align="center"
          max-width="150"
          prop="ironArea"
        />
        <el-table-column
          label="延伸率"
          align="center"
          max-width="150"
          prop="elongationRate"
        />
      </el-table>
    </div>

    <div class="title">计算结果可视化</div>
    <!-- 可视化图表 -->
    <div class="echarts-content">
      <div class="echarts-item">
        <div class="part-title">轧制温度曲线</div>
        <div id="rollTemperatureGraph" class="echarts"></div>
      </div>
      <div class="echarts-item">
        <div class="part-title">轧制力矩柱状图</div>
        <div id="rollForceGraph" class="echarts"></div>
      </div>
      <div class="echarts-item">
        <div class="part-title">轧制功率柱状图</div>
        <div id="rollPowerGraph" class="echarts"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  nextTick(() => {
    initChart();
  });
});

const data = reactive({
  tableData: [
    {
      rackNum: "机架1",
      passShape: "方形",
      passNum: "#2",
      rollGap: "10",
      ironArea: "200",
      elongationRate: "30",
    },
    {
      rackNum: "机架2",
      passShape: "圆形",
      passNum: "#3",
      rollGap: "12",
      ironArea: "220",
      elongationRate: "35",
    },
    {
      rackNum: "机架3",
      passShape: "方形",
      passNum: "#4",
      rollGap: "15",
      ironArea: "250",
      elongationRate: "40",
    },
    {
      rackNum: "机架4",
      passShape: "圆形",
      passNum: "#5",
      rollGap: "18",
      ironArea: "280",
      elongationRate: "45",
    },
    {
      rackNum: "机架5",
      passShape: "方形",
      passNum: "#6",
      rollGap: "20",
      ironArea: "300",
      elongationRate: "50",
    },
    {
      rackNum: "机架5",
      passShape: "方形",
      passNum: "#6",
      rollGap: "20",
      ironArea: "300",
      elongationRate: "50",
    },
  ],
});
const { tableData } = toRefs(data);

// 折线图配置
const option1 = {
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["数据一", "数据二", "数据三", "数据四", "数据五"],
  },
  grid: {
    left: "5%",
    right: "5%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: ["机架1", "机架2", "机架3", "机架4", "机架5"],
    },
  ],
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "数据一",
      type: "line",
      data: [110, 192, 201, 234, 300],
    },
    {
      name: "数据二",
      type: "line",
      data: [120, 182, 191, 234, 290],
    },
    {
      name: "数据三",
      type: "line",
      data: [105, 172, 191, 234, 310],
    },
    {
      name: "数据四",
      type: "line",
      data: [125, 162, 191, 244, 295],
    },
    {
      name: "数据五",
      type: "line",
      data: [120, 172, 198, 223, 315],
    },
  ],
};

// 柱状图配置
const option2 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "5%",
    right: "5%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: ["机架1", "机架2", "机架3", "机架4", "机架5"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
      itemStyle: {
        color: "#489EFC",
      },
      barWidth: '50%'
    },
  ],
};

const myCharts = ref({});
// 初始化图表的函数
const initChart = () => {
  const chartConfigs = [
    { id: "rollTemperatureGraph", option: option1 },
    { id: "rollForceGraph", option: option2 },
    { id: "rollPowerGraph", option: option2 },
  ];

  chartConfigs.forEach(({ id, option }) => {
    if (myCharts.value[id]) {
      myCharts.value[id].dispose();
    }
    myCharts.value[id] = echarts.init(document.getElementById(id));
    myCharts.value[id].setOption(option, true);
  });

  // 调整窗口大小时的处理
  window.onresize = function () {
    for (const id in myCharts.value) {
      if (myCharts.value.hasOwnProperty(id)) {
        myCharts.value[id].resize();
      }
    }
  };
};

onUnmounted(() => {
  // 销毁图表实例
  for (const id in myCharts.value) {
    if (myCharts.value.hasOwnProperty(id)) {
      myCharts.value[id].dispose();
    }
  }
});
</script>

<style lang="scss" scoped>
.calcResult-container {
  margin-top: 20px;
  margin-bottom: 50px;
  background-color: #fff;
  border-radius: $base-border-radius;
  padding: 20px;
  box-shadow: $box-shadow;

  .echarts-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    .echarts-item {
      width: 33.3%;
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

      .echarts {
        width: 100%;
        height: 280px;
      }
    }
  }
}
</style>
