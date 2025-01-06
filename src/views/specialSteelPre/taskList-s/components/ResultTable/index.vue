<template>
  <div class="ResultTable-container">
    <el-table
      ref="tableRef"
      :data="tableData"
      highlight-current-row
      :header-cell-style="{ background: '#fafafa' }"
      border
      style="margin-top: 15px"
    >
      <el-table-column
        label="任务名称"
        align="center"
        min-width="200"
        prop="taskName"
      />
      <el-table-column
        label="钢种"
        align="center"
        min-width="100"
        prop="steelGrade"
      />
      <el-table-column
        label="产品类型"
        align="center"
        min-width="100"
        prop="productType"
      />
      <el-table-column
        label="钢坯类型"
        align="center"
        min-width="100"
        prop="billetType"
      />
      <el-table-column
        label="规格(mm)"
        align="center"
        min-width="100"
        prop="size"
      />
      <el-table-column
        label="开轧温度(℃)"
        align="center"
        min-width="100"
        prop="rollTemp"
      />
      <el-table-column
        label="铁素体(%)"
        align="center"
        min-width="100"
        prop="ferrite"
      />
      <el-table-column
        label="珠光体(%)"
        align="center"
        min-width="100"
        prop="pearlite"
      />
      <el-table-column
        label="贝氏体(%)"
        align="center"
        min-width="100"
        prop="bainite"
      />
      <el-table-column
        label="马氏体(%)"
        align="center"
        min-width="100"
        prop="martensite"
      />
      <el-table-column
        label="晶粒度(级)"
        align="center"
        min-width="100"
        prop="grainSize"
      />
    </el-table>

    <div class="echarts-content">
      <div class="echarts-item">
        <div class="part-title">轧线温度场</div>
        <div id="rollLineGraph" class="echarts"></div>
      </div>
      <div class="echarts-item">
        <div class="part-title">风冷线温度场</div>
        <div id="coolLineGraph" class="echarts"></div>
      </div>
      <div class="echarts-item">
        <div class="part-title">PF线温度场</div>
        <div id="PFLineGraph" class="echarts"></div>
      </div>

      <div class="left">
        <div class="echarts-item">
          <div class="part-title">抗拉强度对比</div>
          <div id="tensileStrengthGraph" class="echarts"></div>
        </div>
        <div class="echarts-item">
          <div class="part-title">屈服强度对比</div>
          <div id="yieldStrengthGraph" class="echarts"></div>
        </div>
        <div class="echarts-item">
          <div class="part-title">伸长率对比</div>
          <div id="elongationGraph" class="echarts"></div>
        </div>
        <div class="echarts-item">
          <div class="part-title">断面收缩率对比</div>
          <div id="shrinkageGraph" class="echarts"></div>
        </div>
      </div>
      <div class="right">
        <div class="echarts-item">
          <div class="part-title">组成项百分比</div>
          <div id="componentGraph" class="echarts"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";

const data = reactive({
  tableData: [
    {
      taskName: "ZTCDZZP20241014172127",
      steelGrade: "ZTCDZZP20",
      productType: "高速线材",
      billetType: "碳钢",
      size: "300*300",
      rollTemp: "1000",
      ferrite: "50",
      pearlite: "30",
      bainite: "10",
      martensite: "10",
      grainSize: "6",
    },
  ],
});

onMounted(() => {
  nextTick(() => {
    initChart();
  });
});

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
    top: "5%",
    bottom: "5%",
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

const myCharts = ref({});
// 初始化图表的函数
const initChart = () => {
  const chartConfigs = [
    { id: "rollLineGraph", option: option1 },
    { id: "coolLineGraph", option: option1 },
    { id: "PFLineGraph", option: option1 },
    { id: "tensileStrengthGraph", option: option1 },
    { id: "yieldStrengthGraph", option: option1 },
    { id: "componentGraph", option: option2 },
    { id: "elongationGraph", option: option1 },
    { id: "shrinkageGraph", option: option1 },
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
const { tableData } = toRefs(data);
</script>

<style lang="scss" scoped>
.ResultTable-container {
  .echarts-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;

    .echarts-item {
      width: 33.3%;
      margin-bottom: 20px;

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

      .echarts {
        width: 100%;
        height: 240px;
      }
    }

    .left {
      width: 66.6%;
      display: flex;
      flex-wrap: wrap;

      .echarts-item {
        width: 50%;
        margin-bottom: 20px;
      }
    }

    .right {
      width: 33.3%;
      height: 550px;

      .echarts-item {
        width: 100%;
        height: 100%;

        .echarts {
          height: 100%;
          margin: auto;
          background-color: #FAFAFA;
        }
      }
    }
  }
}
</style>
