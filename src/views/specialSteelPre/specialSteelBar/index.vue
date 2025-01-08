<template>
  <div class="specialSteelBar-container">
    <!-- 特殊钢线材 -->
    <main-page v-if="routePath == '/specialSteelBar'"></main-page>
    <!-- 计算结果 -->
    <calc-result
      v-if="routePath == '/specialSteelBar/calcResult'"
    ></calc-result>
  </div>
</template>

<script setup>
import MainPage from "./MainPage/index.vue";
import CalcResult from "../common/index.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const routePath = ref(route.path);

const unwatch = watch(
  () => route.path,
  (newPath, oldPath) => {
    routePath.value = newPath;
  },
  { immediate: true }
);

// 在组件卸载时取消监听
onUnmounted(() => {
  unwatch();
});
</script>

<style lang="scss" scoped></style>
