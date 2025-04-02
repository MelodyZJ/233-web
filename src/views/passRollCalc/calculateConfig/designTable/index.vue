<template>
  <div class="design-table-container">
    <!-- 基本信息 -->
    <base-info ref="baseInfoRef"></base-info>
    <!-- 参数配置 -->
    <para-config-design ref="paraConfigRef"></para-config-design>
    <!-- 按钮 -->
    <div class="btn">
      <v-btn
        variant="tonal"
        class="submit-btn"
        :loading="loading"
        @click="submitForm"
        >提交</v-btn
      >
      <v-btn variant="outlined" class="reset-btn">重置</v-btn>
    </div>
  </div>
</template>

<script setup>
import BaseInfo from "../components/BaseInfo.vue";
import ParaConfigDesign from "../components/Design.vue";
import { designSave } from "@/api/rollingTable.js";

const baseInfoRef = ref(null);
const paraConfigRef = ref(null);
const loading = ref(false);
// 提交
const submitForm = async () => {
  const baseInfoForm = baseInfoRef.value.getBaseInfoForm();
  const paraConfig = paraConfigRef.value.getTableData();

  try {
    loading.value = true;
    const res = await designSave({
      uuid: "123",
      ...baseInfoForm,
      data: paraConfig,
    });
    if (res.data.code === 0) {
    } else {
      ElMessage({
        message: res.data.msg || "接口请求出错！",
        type: "error",
      });
    }
  } catch (error) {
    ElMessage({
      message: error,
      type: "error",
    });
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: flex-end;
  padding: 20px 0 30px 0;

  .submit-btn {
    background-color: #0c5fff;
    color: #fff;
  }

  .reset-btn {
    border: 1px solid #dcdfe6;
    margin-left: 10px;
  }
}
</style>
