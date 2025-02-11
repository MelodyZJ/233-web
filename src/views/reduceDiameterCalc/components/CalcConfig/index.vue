<template>
  <el-form :inline="true" :model="formData" label-width="120px">
    <el-row>
      <el-col :span="8">
        <el-form-item label="成品尺寸">
          <el-select
            v-model="formData.finishedSize"
            placeholder="请选择"
            clearable
            style="width: 200px"
          >
            <el-option
              v-for="item in finishedSizeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="钢种牌号">
          <el-select
            v-model="formData.steelGrade"
            placeholder="请选择"
            clearable
            style="width: 200px"
          >
            <el-option
              v-for="item in steelGradeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="牌号系数">
          <el-input
            v-model="formData.gradeCoe"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>

      <el-col :span="8">
        <el-form-item label="辊环规格">
          <el-select
            v-model="formData.ringSpec"
            placeholder="请选择"
            clearable
            style="width: 200px"
          >
            <el-option
              v-for="item in ringSpecList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="钢种密度">
          <el-input
            v-model="formData.steelDensity"
            placeholder="请输入"
            style="width: 200px"
          />
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="轧机间距">
          <el-input
            v-for="(item, index) in 4"
            :key="index"
            v-model="formData.millSpace['value' + (index + 1)]"
            placeholder="mm"
            style="width: 60px; margin-right: 10px; margin-bottom: 10px"
          />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup>
const data = reactive({
  formData: {
    finishedSize: "",
    steelGrade: "",
    gradeCoe: "",
    ringSpec: "",
    steelGrade: "",
    steelDensity: "",
    millSpace: {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
    },
  },
});
const { formData } = toRefs(data);

const finishedSizeList = ref([
  {
    name: "成品尺寸1",
    value: "成品尺寸1",
  },
  {
    name: "成品尺寸2",
    value: "成品尺寸2",
  },
]);

const steelGradeList = ref([
  {
    name: "钢种牌号1",
    value: "钢种牌号1",
  },
  {
    name: "钢种牌号2",
    value: "钢种牌号2",
  },
]);

const ringSpecList = ref([
  {
    name: "辊环规格1",
    value: "辊环规格1",
  },
  {
    name: "辊环规格2",
    value: "辊环规格2",
  },
]);
</script>

<style lang="scss" scoped></style>
