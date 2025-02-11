<template>
  <div class="ResultShow-container">
    <div class="top-titile" @click="router.go(-1)">
      <el-icon><ArrowLeft /></el-icon>
      <span>&nbsp;当前任务名名称</span>
    </div>

    <div class="echarts-content">
      <div class="echarts-item">
        <div class="part-title">图表标题</div>
        <div id="graph1" class="echarts"></div>
      </div>
      <div class="echarts-item">
        <div class="part-title">图表标题</div>
        <div id="graph2" class="echarts"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  initChart();
});

// 折线图和散点图二合一配置
const option = {
  title: {
    text: "",
  },
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
    {
      name: "随机点",
      type: "scatter",
      xAxisIndex: 1,
      symbolSize: 80,
      itemStyle: {
        color: "#EB3323",
        borderColor: "#EBB38A",
        borderWidth: 24,
      },
      data: [
        [50, 70],
        [100, 80],
        [200, 90],
        [300, 100],
      ],
    },
  ],
};

const myCharts = ref({});
// 初始化图表的函数
const initChart = () => {
  const chartConfigs = [
    { id: "graph1", option: option },
    { id: "graph2", option: option },
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
.ResultShow-container {
  padding: 10px 0;

  .top-titile {
    width: fit-content;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #0c5fff;
      transition: color 0.3s ease;
    }
  }

  .echarts-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .echarts-item {
      width: 100%;
      padding: 20px;

      .part-title {
        height: 50px;
        display: flex;
        align-items: center;
        font-size: 15px;

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
        height: 500px;
      }
    }
  }
}
</style>
