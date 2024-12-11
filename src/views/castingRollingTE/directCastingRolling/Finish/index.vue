<template>
  <div class="part-box" style="height: 180px">
    <div class="part-title">完成</div>
    <div class="part-content"></div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
</script>

<style lang="scss" scoped>
.part-box {
  background: #fff;

  .part-title {
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #f7f9fa;
    font-size: 15px;
    padding: 20px;
    border-radius: 4px;
    margin-bottom: 20px;

    &::before {
      content: "";
      display: block;
      width: 2px;
      height: 20px;
      background-color: #0c5fff;
      margin-right: 10px;
    }
  }

  .part-content {
    .unit {
      width: 20px;
      height: 22px;
      text-align: center;
      line-height: 22px;
      background-color: #fff;
      margin-left: -28px;
      z-index: 1;
    }
  }
}
</style>
