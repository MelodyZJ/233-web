<template>
  <div class="part-box" style="height: 180px">
    <div class="part-title">铸坯属性</div>
    <div class="part-content">
      <el-form :inline="true" :model="castingBlankForm" label-width="200px">
        <el-form-item label="铸坯形状">
          <el-select
            v-model="castingBlank"
            placeholder="请选择"
            clearable
            style="width: 200px"
          >
            <el-option
              v-for="item in castingBlankList"
              :key="item.id"
              :label="item.label"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="铸坯尺寸">
          <div class="mr-2">
            <el-input
              v-model="castingBlankForm.user"
              placeholder="长"
              clearable
              style="width: 60px"
            />
          </div>
          <div class="mr-2">
            <el-input
              v-model="castingBlankForm.user"
              placeholder="宽"
              clearable
              style="width: 60px"
            />
          </div>
          <div class="mr-2">
            <el-input
              v-model="castingBlankForm.user"
              placeholder="高"
              clearable
              style="width: 60px"
            />
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const castingBlankForm = reactive({
  user: "",
  region: "",
  date: "",
});

const castingBlank = ref("");
const castingBlankList = ref([
  {
    id: 1,
    label: "Q235",
    value: "Q235",
  },
  {
    id: 2,
    label: "Q345",
    value: "Q345",
  },
]);
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
