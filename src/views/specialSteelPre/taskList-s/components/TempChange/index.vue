<template>
  <div class="TempChange-container">
    <div class="key-point">
      <div class="title">关键点温度预测</div>
      <div class="temper-list">
        <div class="list-item" v-for="(item, index) in temperList" :key="index">
          <div class="left">
            <div class="row">
              <span class="key">关键点</span>
              <span class="value">{{ item.name }}</span>
            </div>
            <div class="row" v-for="(item1, index) in rowList" :key="index">
              <span class="key">{{ item1.name }}</span>
              <span class="value">{{ item1.value }}</span>
            </div>
          </div>
          <div class="right">
            <img src="@/assets/imgs/temper.png" alt="温度" />
          </div>
        </div>
      </div>
    </div>

    <div class="all-line">
      <div class="title">全线温度预测</div>
      <div class="echarts-content">
        <div class="echarts-item">
          <div class="part-title">轧线温度场</div>
          <div class="unit">单位：℃</div>
          <div id="rollLineGraph2" class="echarts"></div>
        </div>
        <div class="echarts-item">
          <div class="part-title">风冷线温度场</div>
          <div class="unit">单位：℃</div>
          <div id="coolLineGraph2" class="echarts"></div>
        </div>
        <div class="echarts-item">
          <div class="part-title">选择点断面温度</div>
          <div class="temper-list">
            <div class="left">
              <div class="row">
                <span class="key">关键点</span>
                <span class="value">选择点</span>
              </div>
              <div class="row" v-for="(item1, index) in rowList" :key="index">
                <span class="key">{{ item1.name }}</span>
                <span class="value">{{ item1.value }}</span>
              </div>
            </div>
            <div class="right">
              <img src="@/assets/imgs/temper.png" alt="温度" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";

const temperList = ref([
  {
    name: "开轧温度",
  },
  {
    name: "精轧温度",
  },
  {
    name: "上风冷线温度",
  },
  {
    name: "下风冷线温度",
  },
]);

const rowList = ref([
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

// 折线图配置
const option1 = {
  title: {
    text: "",
  },
  tooltip: {
    trigger: "axis",
  },
  grid: {
    left: "5%",
    right: "5%",
    top: "10%",
    bottom: "0%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: ["100", "200", "300", "400", "500", "600", "700"],
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
  ],
};

onMounted(() => {
  nextTick(() => {
    initChart();
  });
});

const myCharts = ref({});
// 初始化图表的函数
const initChart = () => {
  const chartConfigs = [
    { id: "rollLineGraph2", option: option1 },
    { id: "coolLineGraph2", option: option1 },
  ];

  chartConfigs.forEach(({ id, option }) => {
    if (myCharts.value[id]) {
      myCharts.value[id].dispose();
    }
    myCharts.value[id] = markRaw(echarts.init(document.getElementById(id)));
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
.TempChange-container {
  .key-point {
    margin-top: 10px;

    .title {
      font-size: 16px;
    }
  }

  .all-line {
    margin-top: 30px;

    .title {
      font-size: 16px;
    }

    .echarts-content {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-top: 25px;

      .echarts-item {
        width: 33.3%;
        margin-bottom: 15px;
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

        .temper-list{
          padding: 0 30px;
        }

        .unit {
          position: absolute;
          top: 50px;
          left: 22px;
          font-size: 12px;
          color: #4c4c4c;
        }

        .echarts {
          width: 100%;
          height: 240px;
        }
      }
    }
  }

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
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>
