<template>
  <div class="part-box" style="height: 310px">
    <div class="part-title">铸坯属性</div>
    <div class="part-content">
      <el-form
        ref="formRef"
        :inline="true"
        :model="billetForm"
        :rules="rules"
        label-width="220px"
      >
        <el-row>
          <el-col :span="11">
            <el-form-item label="铸坯形状" prop="shape">
              <el-select
                v-model="billetForm.shape"
                placeholder="请选择"
                clearable
                style="width: 200px"
              >
                <el-option
                  v-for="item in shapeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item
              label="铸坯尺寸(mm)"
              prop="billetSizeValidate"
              class="is-required"
            >
              <div class="mr-2 w-[67px]">
                <el-input
                  v-model="billetForm.billetSize.height"
                  placeholder="高"
                  type="number"
                />
              </div>
              <div class="mr-2 w-[67px]">
                <el-input
                  v-model="billetForm.billetSize.width"
                  placeholder="宽"
                  type="number"
                />
              </div>
              <div class="mr-2 w-[67px]">
                <el-input
                  v-model="billetForm.billetSize.length"
                  placeholder="长"
                  type="number"
                  :disabled="route.path == '/continuousCastRoll'"
                />
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11">
            <el-form-item
              label="铸坯表面中心温度"
              style="width: 500px"
              prop="surfaceCenterTempValidate"
              class="is-required"
            >
              <div class="input-unit">
                <el-input
                  v-model="billetForm.surfaceCenterTemp.head"
                  placeholder="头部"
                  type="number"
                  style="width: 95px"
                />
                <span class="unit">°C</span>
              </div>
              <div class="input-unit">
                <el-input
                  v-model="billetForm.surfaceCenterTemp.tail"
                  placeholder="尾部"
                  type="number"
                  :disabled="route.path == '/continuousCastRoll'"
                  style="width: 95px"
                />
                <span class="unit">°C</span>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="铸坯倒角" prop="chamfer">
              <div class="input-unit">
                <el-input
                  v-model="billetForm.chamfer"
                  placeholder="请输入"
                  class="input"
                  type="number"
                  style="width: 200px"
                />
                <span class="unit" style="top: 6px; right: 20px">mm</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11">
            <el-form-item
              label="铸坯角度温度"
              style="width: 500px"
              prop="angularTempValidate"
              class="is-required"
            >
              <div class="input-unit">
                <el-input
                  v-model="billetForm.angularTemperature.head"
                  placeholder="头部"
                  type="number"
                  style="width: 95px"
                />
                <span class="unit">°C</span>
              </div>
              <div class="input-unit">
                <el-input
                  v-model="billetForm.angularTemperature.tail"
                  placeholder="尾部"
                  type="number"
                  :disabled="route.path == '/continuousCastRoll'"
                  style="width: 95px"
                />
                <span class="unit">°C</span>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="铸坯密度" prop="density">
              <div class="input-unit">
                <el-input
                  v-model="billetForm.density"
                  placeholder="请输入"
                  type="number"
                  style="width: 200px"
                />
                <span class="unit">kg/m³</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11">
            <el-form-item
              label="铸坯中心温度"
              style="width: 500px"
              prop="centerTempValidate"
              class="is-required"
            >
              <div class="input-unit">
                <el-input
                  v-model="billetForm.centerTemperature.head"
                  placeholder="头部"
                  type="number"
                  style="width: 95px"
                />
                <span class="unit">°C</span>
              </div>
              <div class="input-unit">
                <el-input
                  v-model="billetForm.centerTemperature.tail"
                  placeholder="尾部"
                  type="number"
                  :disabled="route.path == '/continuousCastRoll'"
                  style="width: 95px"
                />
                <span class="unit">°C</span>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="连铸拉速" prop="speed">
              <div class="input-unit">
                <el-input
                  v-model="billetForm.speed"
                  placeholder="请输入"
                  type="number"
                  style="width: 200px"
                />
                <span class="unit">m/min</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- <el-form-item label="铸坯文件上传">
          <div class="input-unit">
            <el-upload
              v-model:file-list="fileList"
              class="upload-demo"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              multiple
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :limit="3"
              :on-exceed="handleExceed"
            >
              <v-btn variant="outlined" class="custom-btn">选择文件</v-btn>
            </el-upload>
          </div>
        </el-form-item> -->
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const billetForm = reactive({
  shape: "圆坯",
  billetSize: {
    length: "165",
    width: "165",
    height: "12000",
  },
  chamfer: "8",
  density: "7700",
  speed: "4",
  surfaceCenterTemp: {
    head: "950",
    tail: "970",
  },
  angularTemperature: {
    head: "900",
    tail: "930",
  },
  centerTemperature: {
    head: "1000",
    tail: "1050",
  },
});

// 自定义校验规则
const validateCustom = (rule, value, callback, formObject, requiredFields) => {
  const missingFields = requiredFields.filter((field) => !formObject[field]);

  if (missingFields.length > 0) {
    callback(new Error(`请完善所有参数`));
  } else {
    callback();
  }
};

// 校验铸坯尺寸参数
const validateBilletSize = (rule, value, callback) => {
  let arr =
    route.path == "/directCastRoll"
      ? ["height", "width", "length"]
      : ["height", "width"];

  validateCustom(rule, value, callback, billetForm.billetSize, arr);
};

// 校验表面温度
const validateSurfaceCenterTemp = (rule, value, callback) => {
  let arr = route.path == "/directCastRoll" ? ["head", "tail"] : ["head"];
  validateCustom(rule, value, callback, billetForm.surfaceCenterTemp, arr);
};

// 校验角度温度
const validateAngularTemp = (rule, value, callback) => {
  let arr = route.path == "/directCastRoll" ? ["head", "tail"] : ["head"];
  validateCustom(rule, value, callback, billetForm.angularTemperature, arr);
};

// 校验中心温度
const validateCenterTemp = (rule, value, callback) => {
  let arr = route.path == "/directCastRoll" ? ["head", "tail"] : ["head"];
  validateCustom(rule, value, callback, billetForm.centerTemperature, arr);
};

// 校验规则
const rules = reactive({
  shape: [{ required: true, message: "请选择铸坯形状", trigger: "change" }],
  chamfer: [{ required: true, message: "请输入铸坯倒角", trigger: "change" }],
  density: [{ required: true, message: "请输入铸坯密度", trigger: "change" }],
  speed: [{ required: true, message: "请输入连铸拉速", trigger: "change" }],
  billetSizeValidate: [{ validator: validateBilletSize, trigger: "change" }],
  surfaceCenterTempValidate: [
    { validator: validateSurfaceCenterTemp, trigger: "change" },
  ],
  angularTempValidate: [{ validator: validateAngularTemp, trigger: "change" }],
  centerTempValidate: [{ validator: validateCenterTemp, trigger: "change" }],
});

const shapeList = ref([
  {
    label: "方坯",
    value: "方坯",
  },
  {
    label: "矩形坯",
    value: "矩形坯",
  },
  {
    label: "圆坯",
    value: "圆坯",
  },
]);

// 文件上传
const fileList = ref([]);

const handleRemove = (file, uploadFiles) => {
  console.log(file, uploadFiles);
};

const handlePreview = (uploadFile) => {
  console.log(uploadFile);
};

const handleExceed = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  );
};

const beforeRemove = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  );
};

const formRef = ref(null);
// 校验表单
const validateForm = () => {
  return new Promise((resolve, reject) => {
    formRef.value.validate((valid) => {
      if (valid) {
        resolve(true);
      } else {
        ElMessage.error("请完善铸坯属性表单！");
        reject(false);
      }
    });
  });
};

// 返回给父组件的数据
const getBillet = async () => {
  const isValid = await validateForm();
  if (isValid) {
    const {
      shape,
      chamfer,
      density,
      speed,
      billetSize,
      surfaceCenterTemp,
      centerTemperature,
      angularTemperature,
    } = billetForm;

    let data = {
      shape,
      chamfer,
      density,
      speed,
      size: [billetSize.width, billetSize.length, billetSize.height],
      temperature: [
        surfaceCenterTemp.head, // 表面
        surfaceCenterTemp.tail || -1, // 连续铸轧尾部温度默认传-1
        angularTemperature.head, // 角部
        angularTemperature.tail || -1,
        centerTemperature.head, // 中心
        centerTemperature.tail || -1,
      ],
    };

    return data;
  } else {
    return false;
  }
};

defineExpose({
  getBillet,
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
    width: 100%;

    .input-unit {
      position: relative;
      margin-right: 10px;
    }

    .unit {
      width: fit-content;
      height: 22px;
      position: absolute;
      top: 8px;
      right: 10px;
      text-align: center;
      line-height: 22px;
      background-color: transparent;
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
