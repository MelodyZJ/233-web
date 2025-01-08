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
          <div id="nonBondPointGraph" class="echarts"></div>
        </div>
        <div class="echarts-item">
          搭接点
          <div id="bondPointGraph" class="echarts"></div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="part-title">组织和力学性能</div>
      <div class="echarts-item">
        <div id="organization" class="echarts"></div>
      </div>
      <div class="table">
        <div class="row">
          <span class="title">组织和力学性能</span>
        </div>
        <div class="row" v-for="(item1, index) in rowList" :key="index">
          <span class="key">{{ item1.name }}</span>
          <span class="value">{{ item1.value }}</span>
        </div>
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
      type: "cross",
    },
  },
  legend: {
    data: ["马氏体", "珠光体", "贝氏体", "铁素体"],
    icon: "rich",
    show: true,
    itemWidth: 10,
    itemHeight: 8,
    textStyle: {
      color: "#999999",
      fontSize: "14px",
    },
    top: 8,
    right: 10,
    itemGap: 15,
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
  color: ["#66C184", "#F89623", "#0FD7F2", "#007AFF"],
  series: [
    {
      name: "马氏体",
      type: "line",
      data: [10, 120, 131, 154, 160, 175, 180],
      showSymbol: false,
    },
    {
      name: "珠光体",
      type: "line",
      data: [20, 192, 191, 192, 200, 210, 230],
      showSymbol: false,
    },
    {
      name: "贝氏体",
      type: "line",
      data: [0, 182, 201, 214, 220, 240, 250],
      showSymbol: false,
    },
    {
      name: "铁素体",
      type: "line",
      data: [10, 222, 251, 264, 270, 280, 289],
      showSymbol: false,
    },
  ],
};

// 环形图配置
const option2 = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    x: "right",
    bottom: "0%",
    data: ["铁素体", "贝氏体", "珠光体", "马氏体"],
  },
  color: ["#2569f6", "#57c3f8", "#f08e34", "#67c185"],
  series: [
    {
      type: "pie",
      radius: ["0%", "15%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 335,
          name: "铁素体",
        },
        {
          value: 679,
          name: "贝氏体",
        },
        {
          value: 600,
          name: "珠光体",
        },
        {
          value: 700,
          name: "马氏体",
        },
      ],
    },
    {
      type: "pie",
      radius: ["22%", "37%"],
      label: {
        show: false,
        position: "center",
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 335,
          name: "铁素体",
        },
        {
          value: 890,
          name: "贝氏体",
        },
        {
          value: 1200,
          name: "珠光体",
        },
        {
          value: 1200,
          name: "马氏体",
        },
      ],
    },
    {
      type: "pie",
      radius: ["44%", "59%"],
      data: [
        {
          value: 268,
          name: "铁素体",
        },
        {
          value: 679,
          name: "贝氏体",
        },
        {
          value: 780,
          name: "珠光体",
        },
        {
          value: 890,
          name: "马氏体",
        },
      ],
    },
  ],
};

const rowList = ref([
  {
    name: "抗拉强度",
    value: "1050.00MPa",
  },
  {
    name: "屈服强度",
    value: "1050.00MPa",
  },
  {
    name: "伸长率",
    value: "90%",
  },
  {
    name: "晶粒尺寸",
    value: "10.00m",
  },
  {
    name: "晶粒度",
    value: "20",
  },
  {
    name: "网状碳化物等级",
    value: "50",
  },
]);

const myCharts = ref({});
// 初始化图表的函数
const initChart = () => {
  const chartConfigs = [
    { id: "nonBondPointGraph", option: option1 },
    { id: "bondPointGraph", option: option1 },
    { id: "organization", option: option2 },
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
    height: 300px;

    .echarts-item {
      width: 100%;
      height: 100%;

      .echarts {
        height: 100%;
        margin: auto;
        background-color: #fafafa;
      }
    }

    .table {
      width: 100%;
      margin-top: 30px;
      border: 1px solid #ededed;

      .title {
        width: 100%;
      }

      .row {
        border-bottom: 1px solid #ededed;

        &:first-child {
          background-color: #ededed;
        }

        &:last-child {
          border-bottom: none;
        }

        span {
          display: inline-block;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 13px;
        }

        .key {
          width: 45%;
        }

        .value {
          width: 55%;
        }
      }
    }
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
