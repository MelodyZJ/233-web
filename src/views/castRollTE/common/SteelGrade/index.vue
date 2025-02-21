<template>
  <div class="part-box" style="height: 190px">
    <div class="part-title">钢种属性</div>
    <div class="part-content">
      <el-form
        ref="formRef"
        :inline="true"
        :model="steelGradeForm"
        :rules="rules"
        label-width="220px"
      >
        <el-row>
          <el-col :span="11">
            <el-form-item label="钢种" prop="grade">
              <el-select
                v-model="steelGradeForm.gradeId"
                placeholder="请选择"
                clearable
                @change="gradeChanged"
                style="width: 200px"
              >
                <el-option
                  v-for="item in gradeList"
                  :key="item.uuid"
                  :label="item.grade"
                  :value="item.uuid"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="环境温度" prop="temperature">
              <el-input
                v-model="steelGradeForm.temperature"
                placeholder="请输入"
                type="number"
                style="width: 200px"
              />
              <span class="unit">°C</span>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="牌号" prop="mark">
          <el-select
            v-model="steelGradeForm.mark"
            placeholder="请选择"
            clearable
            style="width: 200px"
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
  grade: "建筑用钢",
  gradeId: "0bfa407a-4273-11ef-80c6-0242b1070010",
  mark: "HRB400E",
  temperature: "25",
});

// 校验规则
const rules = reactive({
  grade: [{ required: true, message: "请选择钢种", trigger: "change" }],
  temperature: [
    { required: true, message: "请输入环境温度", trigger: "change" },
  ],
  mark: [{ required: true, message: "请选择牌号", trigger: "change" }],
});

const gradeList = ref([]);
const markList = ref([]);

// 获取钢种列表
const getGradeFn = async () => {
  try {
    const res = await getGrade();
    if (res.data.code === 0) {
      gradeList.value = res.data.data;
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
    const res = await getGradeMark({ uuid: steelGradeForm.gradeId });
    if (res.data.code === 0) {
      markList.value = res.data.data;
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

// 钢种改变时，获取对应牌号列表
const gradeChanged = (val) => {
  const findGrade = gradeList.value.find((item) => {
    return item.uuid === val;
  });

  steelGradeForm.grade = findGrade.grade;
  steelGradeForm.mark = "";
  markList.value = [];

  getGradeMarkFn();
};

const formRef = ref(null);
// 校验表单
const validateForm = () => {
  return new Promise((resolve, reject) => {
    formRef.value.validate((valid) => {
      if (valid) {
        resolve(true);
      } else {
        ElMessage.error("请完善钢种属性表单！");
        reject(false);
      }
    });
  });
};

// 返回给父组件的数据
const getSteelGrade = async () => {
  const isValid = await validateForm();
  if (isValid) {
    return steelGradeForm;
  } else {
    return false;
  }
};

defineExpose({
  getSteelGrade,
});
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
