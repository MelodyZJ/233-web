<template>
  <div class="part-box" style="height: 350px">
    <div class="part-title">铸坯属性</div>
    <div class="part-content">
      <el-form :inline="true" :model="billetForm" label-width="220px">
        <el-row>
          <el-col :span="11">
            <el-form-item label="铸坯形状">
              <el-select
                v-model="billetForm.billetShape"
                placeholder="请选择"
                clearable
                style="width: 200px"
              >
                <el-option
                  v-for="item in billetShapeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="铸坯尺寸(mm)">
              <div class="mr-2">
                <el-input
                  v-model="billetForm.billetSize.length"
                  placeholder="长"
                  style="width: 67px"
                />
              </div>
              <div class="mr-2">
                <el-input
                  v-model="billetForm.billetSize.width"
                  placeholder="宽"
                  style="width: 67px"
                />
              </div>
              <div class="mr-2">
                <el-input
                  v-model="billetForm.billetSize.height"
                  placeholder="高"
                  style="width: 67px"
                />
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11">
            <el-form-item label="铸坯表面中心温度" style="width: 500px">
              <div class="input-unit">
                <el-input
                  v-model="billetForm.surfaceCenterTemperature.head"
                  placeholder="头部"
                  style="width: 95px"
                />
                <span class="unit">°C</span>
              </div>
              <div class="input-unit">
                <el-input
                  v-model="billetForm.surfaceCenterTemperature.tail"
                  placeholder="尾部"
                  style="width: 95px"
                />
                <span class="unit">°C</span>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="铸坯倒角">
              <div class="input-unit">
                <el-input
                  v-model="billetForm.billetChamfer"
                  placeholder="请输入"
                  class="input"
                  style="width: 200px"
                />
                <span class="unit" style="top: 6px; right: 20px">mm</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11">
            <el-form-item label="铸坯角度温度" style="width: 500px">
              <div class="input-unit">
                <el-input
                  v-model="billetForm.angularTemperature.head"
                  placeholder="头部"
                  style="width: 95px"
                />
                <span class="unit">°C</span>
              </div>
              <div class="input-unit">
                <el-input
                  v-model="billetForm.angularTemperature.tail"
                  placeholder="尾部"
                  style="width: 95px"
                />
                <span class="unit">°C</span>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="铸坯密度">
              <div class="input-unit">
                <el-input
                  v-model="billetForm.density"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <span class="unit">kg/m³</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11">
            <el-form-item label="铸坯中心温度" style="width: 500px">
              <div class="input-unit">
                <el-input
                  v-model="billetForm.centerTemperature.head"
                  placeholder="头部"
                  style="width: 95px"
                />
                <span class="unit">°C</span>
              </div>
              <div class="input-unit">
                <el-input
                  v-model="billetForm.centerTemperature.tail"
                  placeholder="尾部"
                  style="width: 95px"
                />
                <span class="unit">°C</span>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="连铸拉速">
              <div class="input-unit">
                <el-input
                  v-model="billetForm.speed"
                  placeholder="请输入"
                  style="width: 200px"
                />
                <span class="unit">m/min</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="铸坯文件上传">
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
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
const billetForm = reactive({
  billetShape: "",
  billetSize: {
    length: "",
    width: "",
    height: "",
  },
  surfaceCenterTemperature: {
    head: "",
    tail: "",
  },
  billetChamfer: "",
  angularTemperature: {
    head: "",
    tail: "",
  },
  density: "",
  centerTemperature: {
    head: "",
    tail: "",
  },
  speed: "",
});

const billetShapeList = ref([
  {
    label: "大大大",
    value: "大大大",
  },
  {
    label: "小小小",
    value: "小小小",
  },
]);

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
