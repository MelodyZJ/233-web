<template>
  <div class="part-box" :style="{ height: showGraph ? '530px' : '200px' }">
    <div class="part-title">铸轧温度图像</div>
    <div class="echarts-item" v-if="showGraph">
      <div id="graph1" class="echarts"></div>
    </div>
    <div v-else class="no-data">提交后生成图像</div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
// import calcResultMock from "@/assets/mock/calcResult.json";

onMounted(() => {
  // initChart();
  // renderChart();
});

// 折线图配置
let option = {
  title: {
    text: "",
  },
  tooltip: {
    trigger: "axis",
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {},
    },
  },
  legend: {
    data: ["平均温度", "芯部温度", "表面温度"],
  },
  grid: {
    left: "5%",
    right: "5%",
    bottom: "8%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "value",
    name: "轧线温度场(℃)",
    nameTextStyle: {
      fontSize: 16, // 设置字体大小
      padding: [0, 0, 25, 20], // 上右下左与原位置距离
    },
  },
  series: [
    {
      name: "平均温度",
      type: "line",
      data: [],
    },
    {
      name: "芯部温度",
      type: "line",
      data: [],
    },
    {
      name: "表面温度",
      type: "line",
      data: [],
    },
  ],
};

const showGraph = ref(false);

const myCharts = ref({});

const renderChart = (calcResult) => {
  showGraph.value = true;

  // mock数据
  // const { data } = calcResultMock;

  // 真实数据
  const { data } = calcResult;
  const { calculateData } = data;

  // 平均温度
  option.series[0].data = calculateData[0].map((item) => [
    item.time,
    item.averageTemp,
  ]);

  // 芯部温度
  option.series[1].data = calculateData[0].map((item) => [
    item.time,
    item.coreTemp,
  ]);

  // 表面温度
  option.series[2].data = calculateData[0].map((item) => [
    item.time,
    item.surfaceTemp,
  ]);

  initChart();
};

// 初始化图表的函数
const initChart = () => {
  // 等待DOM渲染完成后再初始化图表
  nextTick(() => {
    const chartDom = document.getElementById("graph1");
    const myChart = echarts.init(chartDom);

    // 显示加载效果
    // myChart.showLoading({
    //   text: "正在加载...",
    //   color: "#0c5fff",
    //   textColor: "#000",
    //   maskColor: "rgba(255, 255, 255, 0.8)",
    //   zlevel: 0,
    // });

    myChart.setOption(option);
  });
};

defineExpose({
  renderChart,
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

  .echarts-item {
    width: 100%;
    margin-top: 50px;
    border-radius: 8px;

    .echarts {
      width: 100%;
      height: 420px;
    }
  }

  .no-data {
    text-align: center;
    color: #a6a6a6;
    margin-top: 65px;
  }
}
</style>
