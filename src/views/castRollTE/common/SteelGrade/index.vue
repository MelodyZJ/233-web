<template>
  <div class="part-box" style="height: 190px">
    <div class="part-title">钢种属性</div>
    <div class="part-content">
      <el-form :inline="true" :model="steelGradeForm" label-width="220px">
        <el-row>
          <el-col :span="11">
            <el-form-item label="钢种">
              <el-select
                v-model="steelGradeForm.grade"
                placeholder="请选择"
                clearable
                style="width: 200px"
              >
                <el-option
                  v-for="item in gradeList"
                  :key="item.id"
                  :label="item.grade"
                  :value="item.uuid"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="环境温度">
              <el-input
                v-model="steelGradeForm.temperature"
                placeholder="请输入"
                clearable
                style="width: 200px"
              />
              <span class="unit">°C</span>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="牌号">
          <el-select
            v-model="steelGradeForm.mark"
            placeholder="请选择"
            clearable
            style="width: 200px"
            @focus="getGradeMarkFn"
          >
            <el-option
              v-for="item in markList"
              :key="item.id"
              :label="item.mark"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { getGrade, getGradeMark } from "@/api/rollcast.js";

onMounted(() => {
  getGradeFn();
});

const steelGradeForm = reactive({
  grade: "",
  temperature: "",
  mark: "",
});

const gradeList = ref([]);
const markList = ref([]);

// 获取钢种列表
const getGradeFn = async () => {
  try {
    const res = await getGrade();
    if (res.data.code === 0) {
      gradeList.value = res.data.data;
      // console.log(gradeList.value, "------");
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
  }
};

// 获取钢种对应牌号列表
const getGradeMarkFn = async () => {
  try {
    const res = await getGradeMark(steelGradeForm.steelGrade);
    if (res.data.code === 0) {
      brandList.value = res.data.data;
      // console.log(brandList.value, "------");
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
  }
};
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
    .unit {
      width: fit-content;
      height: 22px;
      position: relative;
      top: 2px;
      right: 28px;
      text-align: center;
      line-height: 22px;
      background-color: #fff;
      z-index: 1;
      color: #606266;
    }
  }
}
</style>
