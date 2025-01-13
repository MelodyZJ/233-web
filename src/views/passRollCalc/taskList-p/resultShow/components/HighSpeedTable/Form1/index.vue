<template>
  <el-form
    :inline="true"
    :model="formData1"
    label-width="120px"
    class="ml-[-20px]"
  >
    <el-row>
      <el-col :span="6">
        <el-form-item label="表号">
          <el-input
            v-model="formData1.tableNum"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="胚料(mm)">
          <el-input
            v-model="formData1.preform"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="轧制速度(m/s)">
          <el-input
            v-model="formData1.rollSpeed"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="产品规格(mm)">
          <el-input
            v-model="formData1.productStandard"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="钢种">
          <el-input
            v-model="formData1.steelGrade"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="胚重(kg)">
          <el-input
            v-model="formData1.weight"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="间隔时间(s)">
          <el-input
            v-model="formData1.intervalTtime"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup>
const data = reactive({
  formData1: {
    tableNum: "",
    preform: "",
    rollSpeed: "",
    productStandard: "",
    steelGrade: "",
    weight: "",
    intervalTtime: "",
  },
});
const { formData1 } = toRefs(data);
</script>

<style lang="scss" scoped></style>
