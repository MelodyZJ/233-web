<template>
  <div class="resultVisible-container">
    <div class="top-input">
      <el-form :inline="true" :model="formData">
        <el-form-item label="机架" label-width="50px">
          <el-select
            v-model="formData.rack"
            placeholder="请选择"
            clearable
            style="width: 120px"
          >
            <el-option
              v-for="item in rackList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="电机备率" label-width="70px">
          <el-input-number
            v-model="formData.machineRatio"
            :min="1"
            :max="10"
            @change="handleChange"
          />
        </el-form-item>
      </el-form>

      <v-btn variant="outlined" class="white-btn"> 导出成JPG </v-btn>
    </div>

    <div class="echarts-content">
      <div class="echarts-item">
        <div class="part-title">轧制功率曲线图</div>
        <div id="rollPowerGraph" class="echarts"></div>
      </div>
      <div class="echarts-item">
        <div class="part-title">电机转速曲线图</div>
        <div id="motorSpeedGraph" class="echarts"></div>
      </div>
      <div class="echarts-item">
        <div class="part-title">延伸率曲线图</div>
        <div id="elongationGraph" class="echarts"></div>
      </div>
      <div class="echarts-item">
        <div class="part-title">力矩对比图</div>
        <div id="forceCompareGraph" class="echarts"></div>
      </div>
      <div class="echarts-item">
        <div class="part-title">轧制温度曲线图</div>
        <div id="rollTemperatureGraph" class="echarts"></div>
      </div>
      <div class="echarts-item">
        <div class="part-title">功率对比图</div>
        <div id="powerCompareGraph" class="echarts"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import router from "@/router";

onMounted(() => {
  nextTick(() => {
    initChart();
  });
});

const data = reactive({
  formData: {
    rack: "",
    machineRatio: 1,
  },
});
const { formData } = toRefs(data);

const rackList = ref([
  {
    value: "第一机组",
    label: "第一机组",
  },
  {
    value: "第二机组",
    label: "第二机组",
  },
]);

// 调整电机备率
const handleChange = (value) => {
  console.log(value);
};

// 折线图配置
const option1 = {
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

// 折线图和散点图二合一配置
const option2 = {
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
      data: [
        [100, 150],
        [200, 200],
        [300, 200],
        [400, 300],
        [500, 380],
      ],
    },
  ],
};

const myCharts = ref({});
// 初始化图表的函数
const initChart = () => {
  const chartConfigs = [
    { id: "rollPowerGraph", option: option2 },
    { id: "motorSpeedGraph", option: option1 },
    { id: "elongationGraph", option: option1 },
    { id: "forceCompareGraph", option: option2 },
    { id: "rollTemperatureGraph", option: option1 },
    { id: "powerCompareGraph", option: option1 },
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
.resultVisible-container {
  margin-top: 20px;
  flex-grow: 1;

  .top-input {
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
  }

  .echarts-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

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
        height: 280px;
      }
    }
  }
}
</style>
