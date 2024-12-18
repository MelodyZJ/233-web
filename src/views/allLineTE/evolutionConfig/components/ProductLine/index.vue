<template>
  <div class="product-line-container">
    <div class="title">建立生产线</div>
    <div class="tip">请将组件拖入下框中建立生产线</div>
    <div class="content">
      <div class="product-line">
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.product-line-container {
  width: 100%;
  height: 270px;
  background-color: #fff;
  border-radius: $base-border-radius;
  display: flex;
  flex-direction: column;

  .title {
    padding: 15px 20px 5px 20px;
  }

  .tip {
    padding: 0 20px;
    font-size: 14px;
    color: #999999;
  }

  .content {
    flex-grow: 1;
    padding: 20px;

    .product-line {
      width: 100%;
      height: 100%;
      background-color: #f6f7f9;
      border-radius: 4px;
      border: 1px solid #EDEDEF;
    }
  }
}
</style>
