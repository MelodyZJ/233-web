<template>
  <div class="login-container">
    <v-app>
      <v-main>
        <!-- 你的页面内容 -->
      </v-main>
      <v-bottom-navigation color="teal" grow>
        <v-btn value="home">
          <v-icon>mdi-home</v-icon>
          <span>首页</span>
        </v-btn>
        <v-btn value="community">
          <v-icon>mdi-forum</v-icon>
          <span>社区</span>
        </v-btn>
        <v-btn value="create">
          <v-icon>mdi-creation</v-icon>
          <span>创作</span>
        </v-btn>
        <v-btn value="find">
          <v-icon>mdi-controller</v-icon>
          <span>找游戏</span>
        </v-btn>
        <v-btn value="mine">
          <v-icon>mdi-account</v-icon>
          <span>我的</span>
        </v-btn>
      </v-bottom-navigation>
    </v-app>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const router = useRouter();
</script>

<style lang="scss" scoped>
.login-container {
  background-color: pink;
  height: 100vh;
}
</style>
