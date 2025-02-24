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
import { nextTick } from "vue";

// 折线图和散点图二合一配置
const option = {
  title: {
    text: "",
  },
  tooltip: {
    trigger: "axis",
  },

  grid: {
    left: "4%",
    right: "4%",
    bottom: "8%",
    top: "5%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: ["100", "200", "300", "400", "500", "600", "700"],
    },
    //  设置第二个x轴
    {
      type: "category",
      position: "bottom",
      offset: 25,
      axisPointer: {
        type: "none",
      },
      //  隐藏第二条x轴
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
  ],
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "数据一",
      type: "line",
      data: [110, 192, 201, 234, 300, 320, 330],
    },
    {
      name: "数据二",
      type: "line",
      data: [120, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "数据三",
      type: "line",
      data: [105, 172, 191, 234, 310, 320, 315],
    },
    {
      name: "数据四",
      type: "line",
      data: [125, 162, 191, 244, 295, 355, 350],
    },
    {
      name: "数据五",
      type: "line",
      data: [120, 172, 198, 223, 315, 330, 310],
    },
  ],
};

const showGraph = ref(false);

const myCharts = ref({});
// 初始化图表的函数
const initChart = (data = {}) => {
  showGraph.value = true;

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
    background: #f5f5f5;
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
