<template>
  <div class="flex items-center gap-3">
    <v-card
      v-for="(item, index) in rackList"
      :key="index"
      elevation="2"
      class="rack-item"
    >
      <el-form :model="item" label-width="80px">
        <el-form-item label="机架号">
          <el-input v-model="item.rackNum" disabled />
        </el-form-item>
        <el-form-item label="轧制温度">
          <el-input v-model="item.temperature" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="辊缝">
          <el-input v-model="item.rollGap" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="轧制速度">
          <el-input v-model="item.rollSpeed" placeholder="请输入" />
        </el-form-item>
      </el-form>
    </v-card>
  </div>
</template>

<script setup>
const rackList = ref([
  {
    rackNum: "27#",
    temperature: "228.65",
    rollGap: "1",
    rollSpeed: "100",
  },
  {
    rackNum: "28#",
    temperature: "228.65",
    rollGap: "2",
    rollSpeed: "100",
  },
  {
    rackNum: "29#",
    temperature: "228.65",
    rollGap: "1",
    rollSpeed: "100",
  },
  {
    rackNum: "30#",
    temperature: "228.65",
    rollGap: "3",
    rollSpeed: "100",
  },
]);
</script>

<style lang="scss" scoped>
.rack-item {
  width: 25%;
  margin: 4px;
  padding: 24px 16px 12px 8px;
}
</style>
