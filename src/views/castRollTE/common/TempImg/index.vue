<template>
  <div class="part-box" :style="{ height: showGraph ? '580px' : '200px' }">
    <div class="part-title">铸轧温度图像</div>
    <div class="echarts-item" v-if="showGraph">
      <div class="px-10 pb-8">
        <v-btn-toggle v-model="type" divided variant="outlined">
          <v-btn value="head-distance" @click="calcChart">
            <span class="hidden-sm-and-down">头部-距离-温度</span>
          </v-btn>

          <v-btn value="head-time" @click="calcChart">
            <span class="hidden-sm-and-down">头部-时间-温度</span>
          </v-btn>

          <template v-if="route.path == '/directCastRoll'">
            <v-btn value="tail-distance" @click="calcChart">
              <span class="hidden-sm-and-down">尾部-距离-温度</span>
            </v-btn>

            <v-btn value="tail-time" @click="calcChart">
              <span class="hidden-sm-and-down">尾部-时间-温度</span>
            </v-btn>
          </template>
        </v-btn-toggle>
      </div>
      <div id="graph1" class="echarts"></div>
    </div>
    <div v-else class="no-data">提交后生成图像</div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { useRoute } from "vue-router";
// import calcResultMock from "@/assets/mock/calcResult.json";

const route = useRoute();

// onMounted(() => {
//   renderChart();
// });

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
const type = ref("head-distance");

// 图表数据
let chartData = reactive([]);

//外部调用方法
const renderChart = (calcResult) => {
  showGraph.value = true;
  // const { data } = calcResultMock; // mock数据
  const { data } = calcResult; // 真实数据
  const { calculateData } = data;
  chartData = calculateData;
  calcChart();
};

// 计算并重新渲染图表
const calcChart = () => {
  let index;
  let xAxisType;

  switch (type.value) {
    case "head-distance":
      index = 0;
      xAxisType = "distance";
      break;
    case "head-time":
      index = 0;
      xAxisType = "time";
      break;
    case "tail-distance":
      index = 1;
      xAxisType = "distance";
      break;
    case "tail-time":
      index = 1;
      xAxisType = "time";
      break;
  }

  console.log("chartData", chartData);

  // 平均温度
  option.series[0].data = chartData[index].map((item) => {
    const xAxisValue = item[xAxisType];
    const yAxisValue = item.averageTemp;
    return [xAxisValue, yAxisValue];
  });

  // 芯部温度
  option.series[1].data = chartData[index].map((item) => {
    const xAxisValue = item[xAxisType];
    const yAxisValue = item.coreTemp;
    return [xAxisValue, yAxisValue];
  });

  // 表面温度
  option.series[2].data = chartData[index].map((item) => {
    const xAxisValue = item[xAxisType];
    const yAxisValue = item.surfaceTemp;
    return [xAxisValue, yAxisValue];
  });

  // 重新渲染图表
  initChart();
};

// 初始化图表的函数
const initChart = () => {
  // 等待DOM渲染完成后再初始化图表
  nextTick(() => {
    const chartDom = document.getElementById("graph1");
    const myChart = echarts.init(chartDom);
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
    border-radius: 8px;
    margin-top: -5px;

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
