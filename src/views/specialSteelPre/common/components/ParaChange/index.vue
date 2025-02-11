<template>
  <div class="ParaChange-containr">
    <div class="title">各道次参数变化</div>

    <div class="echarts-content">
      <div class="echarts-item">
        <div class="part-title">晶粒尺寸</div>
        <div class="unit">单位：℃</div>
        <div id="rollTemperatureGraph" class="echarts"></div>
      </div>
      <div class="echarts-item">
        <div class="part-title">再结晶分数</div>
        <div class="unit">单位：℃</div>
        <div id="rollForceGraph" class="echarts"></div>
      </div>
      <div class="echarts-item">
        <div class="part-title">残余应变</div>
        <div class="unit">单位：%</div>
        <div id="remnantGraph" class="echarts"></div>
      </div>
      <div class="echarts-item">
        <div class="part-title">变形抗力</div>
        <div class="unit">单位：MPa</div>
        <div id="deformationGraph" class="echarts"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";

onMounted(() => {
  nextTick(() => {
    initChart();
  });
});

// 柱状图配置
const option1 = {
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
    data: [
      "1#",
      "2#",
      "3#",
      "4#",
      "5#",
      "6#",
      "7#",
      "8#",
      "9#",
      "10#",
      "11#",
      "12#",
      "13#",
      "14#",
      "15#",
    ],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [
        120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130, 120,
      ],
      type: "bar",
      itemStyle: {
        color: "#2569F6",
      },
      barWidth: "50%",
    },
  ],
};

const option2 = JSON.parse(JSON.stringify(option1));
option2.series[0].itemStyle.color = "#56C3F8";

const option3 = JSON.parse(JSON.stringify(option1));
option3.series[0].itemStyle.color = "#EF8D33";

const option4 = JSON.parse(JSON.stringify(option1));
option4.series[0].itemStyle.color = "#66C184";

const myCharts = ref({});
// 初始化图表的函数
const initChart = () => {
  const chartConfigs = [
    { id: "rollTemperatureGraph", option: option1 },
    { id: "rollForceGraph", option: option2 },
    { id: "remnantGraph", option: option3 },
    { id: "deformationGraph", option: option4 },
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
.ParaChange-containr {
  .title {
    font-size: 16px;
  }

  .echarts-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    .echarts-item {
      width: 50%;
      margin-bottom: 20px;
      position: relative;

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

      .unit {
        position: absolute;
        top: 70px;
        left: 32px;
        font-size: 12px;
        color: #4c4c4c;
      }

      .echarts {
        width: 100%;
        height: 280px;
      }
    }
  }
}
</style>
