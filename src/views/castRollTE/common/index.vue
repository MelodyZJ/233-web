<template>
  <div class="common-container">
    <el-row>
      <el-col :span="showAnchor ? 18 : 23">
        <div ref="containerRef" class="form-container">
          <!-- 计算属性 -->
          <computational id="part1" ref="computationalRef"></computational>
          <!-- 钢种属性 -->
          <steel-grade id="part2" ref="steelGradeRef"></steel-grade>
          <!-- 铸坯属性 -->
          <cast-blank id="part3" ref="castBlankRef"></cast-blank>
          <!-- 铸轧间距属性 -->
          <cast-interval id="part4" ref="castIntervalRef"></cast-interval>
          <!-- 铸轧温度图像 -->
          <temp-img id="part5"></temp-img>
          <!-- 完成 -->
          <finish
            id="part6"
            @submitFn="submit"
            :submitLoading="submitLoading"
          ></finish>
        </div>
      </el-col>
      <el-col :span="1"></el-col>
      <el-col :span="4" v-if="showAnchor">
        <el-anchor
          :container="containerRef"
          direction="vertical"
          type="default"
          @click="handleClick"
        >
          <el-anchor-link href="#part1" title="计算属性" />
          <el-anchor-link href="#part2" title="钢种属性" />
          <el-anchor-link href="#part3" title="铸坯属性" />
          <el-anchor-link href="#part4" title="铸轧间距属性" />
          <el-anchor-link href="#part5" title="铸轧温度图像" />
          <el-anchor-link href="#part6" title="完成" />
        </el-anchor>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import Computational from "./Computational/index.vue";
import SteelGrade from "./SteelGrade/index.vue";
import CastBlank from "./CastBlank/index.vue";
import CastInterval from "./CastInterval/index.vue";
import TempImg from "./TempImg/index.vue";
import Finish from "./Finish/index.vue";
import { useRoute } from "vue-router";
import { direct_rolling_func, cast_rolling_func } from "@/api/rollcast.js";

const containerRef = ref(null);
// 视口宽度
const windowWidth = ref(
  window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
);

onMounted(() => {
  // 监听窗口大小变化事件
  window.addEventListener("resize", handleResize);
  handleResize();
});

// 监听路由变化重新刷新页面
const route = useRoute();
const reload = inject("reload");
const updateFun = () => {
  reload();
};

watch(
  () => route.path,
  (newPath, oldPath) => {
    if (newPath !== oldPath) {
      updateFun();
    }
  }
);

// 根据视口大小调整锚点栏显示与隐藏
const showAnchor = ref(true);
const handleResize = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value < 1500) {
    showAnchor.value = false;
  } else {
    showAnchor.value = true;
  }
};

// 锚点点击
const handleClick = (e) => {
  e.preventDefault();
};

const computationalRef = ref(null);
const steelGradeRef = ref(null);
const castBlankRef = ref(null);
const castIntervalRef = ref(null);

const submitLoading = ref(false);
// 表单提交
const submit = async () => {
  // 组装及校验子表单数据
  const calculation_data = await computationalRef.value.getCalculation();
  if (!calculation_data) return;

  const steelGrade_data = await steelGradeRef.value.getSteelGrade();
  if (!steelGrade_data) return;

  const billet_data = await castBlankRef.value.getBillet();
  if (!billet_data) return;

  const electromagnetic_data = await castIntervalRef.value.getElectromagnetic();
  if (!electromagnetic_data) return;

  const castRollingSpace_data = castIntervalRef.value.getCastRollingSpace();

  let obj = {
    calculation: {
      ...calculation_data,
    },
    steelGrade: {
      ...steelGrade_data,
    },
    billet: {
      ...billet_data,
    },
    electromagnetic: {
      ...electromagnetic_data,
    },
    castRollingSpace: {
      ...castRollingSpace_data,
    },
  };

  // 发送提交请求
  try {
    submitLoading.value = true;

    // 直接铸轧和连续铸轧
    const res = await (route.path === "/directCastRoll"
      ? direct_rolling_func(obj)
      : cast_rolling_func(obj));

    if (res.data.code === 0) {
      ElMessage({
        message: "提交成功！",
        type: "success",
      });
    } else {
      ElMessage({
        message: res.data.msg || "接口请求出错！",
        type: "error",
      });
    }
  } catch (error) {
    ElMessage({
      message: error,
      type: "error",
    });
  } finally {
    submitLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.common-container {
  padding: 30px;
  background-color: #fff;
  border-radius: $base-border-radius;
  height: calc(100vh - $base-main-padding * 2 - $top-header-height - 10px);
  box-shadow: $box-shadow;

  .form-container {
    height: calc(100vh - $base-main-padding * 2 - $top-header-height - 60px);
    overflow-y: auto;
  }

  :deep(.el-anchor__link) {
    font-size: 13px;
  }
}
</style>
