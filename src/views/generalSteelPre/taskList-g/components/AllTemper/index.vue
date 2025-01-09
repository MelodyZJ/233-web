<template>
  <div class="table-data">
    <div class="left">
      <div class="part-title">头部数据</div>
      <div class="echarts-item">
        <div id="headDataGraph" class="echarts"></div>
      </div>
    </div>
    <div class="right">
      <div class="temper-list">
        <div class="left">
          <div class="row">
            <span class="key">位置</span>
            <span class="value">速度</span>
          </div>
          <div class="row" v-for="(item1, index) in temperList" :key="index">
            <span class="key">{{ item1.name }}</span>
            <span class="value">{{ item1.value }}</span>
          </div>
        </div>
        <div class="right">
          <img src="@/assets/imgs/temper.png" alt="温度" />
        </div>
      </div>
      <div class="echarts-item">
        <div id="coldLineGraph" class="echarts"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { nextTick } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

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
    data: ["表面", "芯部", "均温"],
    icon: "rich",
    show: true,
    itemWidth: 10,
    itemHeight: 8,
    textStyle: {
      color: "#999999",
      fontSize: "14px",
    },
    top: 8,
    right: 30,
    itemGap: 15,
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "5%",
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
  color: ["#66C184", "#F89623", "#0FD7F2"],
  series: [
    {
      name: "表面",
      type: "line",
      data: [10, 120, 131, 154, 160, 175, 180],
      showSymbol: false,
    },
    {
      name: "芯部",
      type: "line",
      data: [20, 192, 191, 192, 200, 210, 230],
      showSymbol: false,
    },
    {
      name: "均温",
      type: "line",
      data: [0, 182, 201, 214, 220, 240, 250],
      showSymbol: false,
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

const temperList = ref([
  {
    name: "表面温度",
    value: "1050.00℃",
  },
  {
    name: "芯部温度",
    value: "1050.00℃",
  },
  {
    name: "平均温度",
    value: "1050.00℃",
  },
  {
    name: "距离",
    value: "10.00m",
  },
]);

const myCharts = ref({});
// 初始化图表的函数
const initChart = () => {
  const chartConfigs = [
    { id: "headDataGraph", option: option1 },
    { id: "coldLineGraph", option: option1 },
  ];

  chartConfigs.forEach(({ id, option }) => {
    const domElement = document.getElementById(id);
    if (domElement) {
      if (myCharts.value[id]) {
        myCharts.value[id].dispose();
      }
      myCharts.value[id] = echarts.init(domElement);
      myCharts.value[id].setOption(option, true);
    } else {
      console.log(`没有这个id:"${id}"`);
    }
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
.table-data {
  display: flex;

  .left {
    flex: 2;

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

    .echarts-item {
      width: 100%;

      .echarts {
        width: 100%;
        height: 430px;
      }
    }
  }

  .right {
    flex: 1;

    .temper-list {
      display: flex;
      width: 100%;
      margin-top: 30px;

      .list-item {
        display: flex;
        width: 25%;
      }

      .left {
        flex: 1;
        border: 1px solid #ededed;

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

      .right {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 150px;
          height: 150px;
        }
      }
    }

    .echarts-item {
      width: 100%;

      .echarts {
        width: 100%;
        height: 245px;
      }
    }
  }
}
</style>
