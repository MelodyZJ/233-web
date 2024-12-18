<template>
  <div class="part-box" style="height: 140px">
    <div class="part-title">除磷箱</div>
    <div class="part-content">
      <el-form :inline="true" :model="descaleBoxForm" label-width="120px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="是否投用">
              <el-switch
                v-model="value"
                class="ml-2"
                style="
                  --el-switch-on-color: #13ce66;
                  --el-switch-off-color: #ff4949;
                "
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="水压">
              <div class="input-unit">
                <el-input
                  v-model="descaleBoxForm.typeValue"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <span class="unit" style="right: 21px;">Mpa</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const descaleBoxForm = reactive({
  type: "",
  typeValue: "",
});

const value = ref(false);
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
    margin-bottom: 30px;

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
    width: 100%;

    .input-unit {
      position: relative;
    }

    .unit {
      width: 20px;
      height: 22px;
      position: absolute;
      top: 8px;
      right: 10px;
      text-align: center;
      line-height: 22px;
      background-color: #fff;
      z-index: 1;
      color: #606266;
    }

    .custom-btn {
      background-color: #fff;
      color: #0c5fff;
    }
  }
}
</style>
