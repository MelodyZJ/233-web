<template>
  <div class="YieldStrength-container">
    <div class="echarts-item">
      <div id="pieGraph" class="echarts"></div>
    </div>

    <div class="echarts-item">
      <div id="nightingaleGraph" class="echarts"></div>
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

const option1 = {
  title: {
    text: "",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "bottom",
  },
  color: ["#538eff", "#01db9d", "#4c79b8", "#f4bb00"],
  series: [
    {
      type: "pie",
      radius: "60%",
      data: [
        { value: 1048, name: "铁素体体积分数" },
        { value: 735, name: "珠光体体积分数" },
        { value: 580, name: "贝氏体体积分数" },
        { value: 484, name: "马氏体体积分数" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

const option2 = {
  title: {
    text: "",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    top: "bottom",
  },
  color: ["#01dca1", "#01d2b4", "#01c6c8", "#01bade", "#01aef4", "#41a1ff"],
  series: [
    {
      name: "",
      type: "pie",
      radius: [0, 130],
      center: ["50%", "50%"],
      roseType: "radius",
      itemStyle: {
        borderRadius: 0,
      },
      data: [
        { value: 40, name: "细晶强化" },
        { value: 33, name: "相变强化" },
        { value: 28, name: "固溶强化" },
        { value: 22, name: "基体强度" },
        { value: 20, name: "位错强化" },
        { value: 15, name: "沉淀强化" },
      ],
    },
  ],
};

const myCharts = ref({});
// 初始化图表的函数
const initChart = () => {
  const chartConfigs = [
    { id: "pieGraph", option: option1 },
    { id: "nightingaleGraph", option: option2 },
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
.YieldStrength-container {
  display: flex;

  .echarts-item {
    flex: 1;
    margin-bottom: 20px;

    .echarts {
      width: 100%;
      height: 400px;
    }
  }
}
</style>
