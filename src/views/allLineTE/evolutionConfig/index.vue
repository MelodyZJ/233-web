<template>
  <div class="directCastingRoll-container">
    <div class="left">
      <component-lib></component-lib>
    </div>
    <div class="right">
      <product-line></product-line>
      <product-detail></product-detail>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import ComponentLib from "./components/ComponentLib/index.vue";
import ProductLine from "./components/ProductLine/index.vue";
import ProductDetail from "./components/ProductDetail/index.vue";

</script>

<style lang="scss" scoped>
.directCastingRoll-container {
  height: calc(100vh - $base-main-padding * 2 - $top-header-height - 10px);
  display: flex;
  gap: 20px;

  .left {
    width: 320px;
    background-color: #fff;
    border-radius: $base-border-radius;
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
  }
}
</style>
