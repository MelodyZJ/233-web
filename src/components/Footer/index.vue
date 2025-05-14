<template>
  <v-bottom-navigation v-model="currentIndex" color="#FB8C00" grow>
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
</template>

<script setup>
const currentIndex = ref(1);
</script>

<style lang="scss" scoped></style>
