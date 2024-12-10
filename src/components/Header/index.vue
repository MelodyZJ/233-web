<template>
  <div class="header-container">
    <img src="@/assets/icons/logo.png" alt="线棒材轧制数字化系统" />
    <span class="ml-2">线棒材轧制数字化系统</span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header-container {
  background-color: var(--theme-header);
  height: 60px;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  position: sticky; /* 确保头部固定 */
  top: 0;
  z-index: 1000;
}
</style>
