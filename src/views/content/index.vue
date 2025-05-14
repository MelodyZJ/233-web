<template>
  <div class="login-container">
    <v-app>
      <v-main>
        <!-- 瀑布屏 -->
         <Waterfall></Waterfall>
      </v-main>
      <!-- 底部 -->
      <Footer></Footer>
    </v-app>
  </div>
</template>

<script setup>
import Waterfall from "@/components/Waterfall/index.vue";
import Footer from "@/components/Footer/index.vue";

</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
}
</style>
