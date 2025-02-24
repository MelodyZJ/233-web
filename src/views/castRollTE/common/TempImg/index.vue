<template>
  <div class="part-box" :style="{ height: showGraph ? '590px' : '200px' }">
    <div class="part-title">铸轧温度图像</div>
    <div class="echarts-item" v-if="showGraph">
      <div class="echarts-title">轧线温度场(℃)</div>
      <div id="graph1" class="echarts"></div>
    </div>
    <div v-else class="no-data">提交后生成图像</div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import calcResultMock from "@/assets/mock/calcResult.json";

onMounted(() => {
  initChart();
});

const averageTempsArr = ref([]);
const coreTempsArr = ref([]);
const surfaceTempsArr = ref([]);

// 折线图配置
const option = {
  title: {
    text: "",
  },
  tooltip: {
    trigger: "axis",
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
    name: "时间",
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "平均温度",
      type: "line",
      data: averageTempsArr.value.map((item) => [item.time, item.averageTemp]),
    },
    {
      name: "芯部温度",
      type: "line",
      data: coreTempsArr.value.map((item) => [item.time, item.coreTemp]),
    },
    {
      name: "表面温度",
      type: "line",
      data: surfaceTempsArr.value.map((item) => [item.time, item.surfaceTemp]),
    },
  ],
};

const showGraph = ref(true);

const myCharts = ref({});

// 初始化图表的函数
const initChart = () => {
  showGraph.value = true;

  const { data } = calcResultMock;
  const { calculateData } = data;

  // 平均温度
  averageTempsArr.value = calculateData[0].map((item) => ({
    time: item.time,
    averageTemp: item.averageTemp,
  }));

  // 芯部温度
  coreTempsArr.value = calculateData[0].map((item) => ({
    time: item.time,
    coreTemp: item.coreTemp,
  }));

  // 表面温度
  surfaceTempsArr.value = calculateData[0].map((item) => ({
    time: item.time,
    surfaceTemp: item.surfaceTemp,
  }));

  console.log("averageTempsArr", averageTempsArr);

  option.series[0].data = averageTempsArr;
  option.series[1].data = coreTempsArr;
  option.series[2].data = surfaceTempsArr;

  // console.log("averageTempsArr", averageTempsArr);

  // 等待DOM渲染完成后再初始化图表
  nextTick(() => {
    const chartConfigs = [{ id: "graph1", option: option }];

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
  });
};

onUnmounted(() => {
  // 销毁图表实例
  for (const id in myCharts.value) {
    if (myCharts.value.hasOwnProperty(id)) {
      myCharts.value[id].dispose();
    }
  }
});

defineExpose({
  initChart,
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
    margin-top: -10px;
    border-radius: 8px;

    .echarts-title {
      height: 80px;
      display: flex;
      align-items: center;
      font-size: 15px;
      margin-left: 30px;
    }

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
