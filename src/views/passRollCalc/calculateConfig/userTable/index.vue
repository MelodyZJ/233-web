<template>
  <div class="user-table-container">
    <!-- 基本信息 -->
    <base-info></base-info>
    <!-- 参数配置 -->
    <para-config-user></para-config-user>
  </div>
</template>

<script setup>
import BaseInfo from "../components/BaseInfo.vue";
import ParaConfigUser from "../components/User.vue";
</script>

<style lang="scss" scoped></style>
