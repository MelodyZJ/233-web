<template>
  <el-form
    :inline="true"
    :model="formData3"
    label-width="120px"
    class="ml-[-20px]"
  >
    <el-row>
      <el-col :span="6">
        <el-form-item label="工作序号">
          <el-input
            v-model="formData3.tableNum"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="轧制形状">
          <el-input
            v-model="formData3.preform"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="钢种">
          <el-input
            v-model="formData3.rollSpeed"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="轧制速度(m/s)">
          <el-input
            v-model="formData3.productStandard"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="AXV(mm²/s)">
          <el-input
            v-model="formData3.steelGrade"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="胚料尺寸(mm)">
          <el-input
            v-model="formData3.weight"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="胚料重量(kg)">
          <el-input
            v-model="formData3.intervalTtime"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="最大轧制产量(t/h)" label-width="140px">
          <el-input
            v-model="formData3.intervalTtime"
            placeholder="请输入"
            style="width: 180px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="轧制时间(s)">
          <el-input
            v-model="formData3.intervalTtime"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="间隔时间(s)">
          <el-input
            v-model="formData3.intervalTtime"
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
  formData3: {
    tableNum: "",
    preform: "",
    rollSpeed: "",
    productStandard: "",
    steelGrade: "",
    weight: "",
    intervalTtime: "",
  },
});
const { formData3 } = toRefs(data);
</script>

<style lang="scss" scoped></style>
