<template>
  <div class="Organization-container">
    <div class="left">
      <div class="part-title">非搭接点和搭接点</div>
      <div class="content">
        <img src="@/assets/imgs/mystery.png" alt="不明神秘图片" />
      </div>
    </div>
    <div class="mid">
      <div class="part-title">动态相析出曲线</div>
      <div class="content">
        <div class="echarts-item">
          非搭接点
          <!-- <div class="unit">单位：℃</div> -->
          <div id="nonBondPointGraph" class="echarts"></div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="part-title">组织和力学性能</div>
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
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: ["马氏体", "珠光体", "贝氏体", "铁素体"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["1", "2", "3", "4", "5", "6", "7"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087"],
  series: [
    {
      name: "马氏体",
      type: "line",
      stack: "Total",
      areaStyle: {},
      lineStyle: {
        width: 0,
      },
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "珠光体",
      type: "line",
      stack: "Total",
      areaStyle: {},
      lineStyle: {
        width: 0,
      },
      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "贝氏体",
      type: "line",
      stack: "Total",
      areaStyle: {},
      lineStyle: {
        width: 0,
      },
      emphasis: {
        focus: "series",
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "铁素体",
      type: "line",
      stack: "Total",
      areaStyle: {},
      lineStyle: {
        width: 0,
      },
      emphasis: {
        focus: "series",
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
  ],
};

const myCharts = ref({});
// 初始化图表的函数
const initChart = () => {
  const chartConfigs = [{ id: "nonBondPointGraph", option: option1 }];

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
.Organization-container {
  width: 100%;
  display: flex;
  gap: 20px;

  .left {
    flex: 1;

    .content {
      padding: 50px;
      background-color: #fafafa;

      img {
        width: 270px;
        margin: auto;
      }
    }
  }

  .mid {
    flex: 1;

    .content {
      .echarts-item {
        width: 100%;
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

  .right {
    flex: 1;
  }

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
}
</style>
