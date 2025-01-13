<template>
  <el-form
    :inline="true"
    :model="formData2"
    label-width="120px"
    class="ml-[-10px]"
  >
    <el-row>
      <el-col :span="6">
        <el-form-item label="小时产量(t/h)">
          <el-input
            v-model="formData2.tableNum"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="胚料形状">
          <el-input
            v-model="formData2.preform"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="还料长度">
          <el-input
            v-model="formData2.rollSpeed"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="还料面积(mm²)">
          <el-input
            v-model="formData2.productStandard"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="胚料温度(℃)">
          <el-input
            v-model="formData2.steelGrade"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="间隔时间(s)">
          <el-input
            v-model="formData2.weight"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="成品形状">
          <el-input
            v-model="formData2.intervalTtime"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="成品尺寸(mm)">
          <el-input
            v-model="formData2.intervalTtime"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="成品速度(m/s)">
          <el-input
            v-model="formData2.intervalTtime"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="轧烤温度(℃)">
          <el-input
            v-model="formData2.intervalTtime"
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
  formData2: {
    tableNum: "",
    preform: "",
    rollSpeed: "",
    productStandard: "",
    steelGrade: "",
    weight: "",
    intervalTtime: "",
  },
});
const { formData2 } = toRefs(data);
</script>

<style lang="scss" scoped></style>
