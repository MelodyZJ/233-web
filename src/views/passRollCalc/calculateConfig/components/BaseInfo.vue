<template>
  <div class="part-box">
    <div class="part-title">基本信息</div>
    <div class="part-content">
      <el-form :inline="true" :model="baseInfoForm" label-width="100px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="任务名称">
              <el-input
                v-model="baseInfoForm.taskName"
                placeholder="请输入"
                style="width: 180px"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="所属项目">
              <el-select
                v-model="baseInfoForm.group_id"
                placeholder="请选择"
                filterable
                clearable
                style="width: 180px"
              >
                <template #footer>
                  <v-btn
                    variant="outlined"
                    style="color: #0c5fff"
                    size="small"
                    @click="addProject"
                    >添加项目</v-btn
                  >
                </template>
                <el-option
                  v-for="item in belongProjectList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="产线类型">
              <el-select
                v-model="baseInfoForm.roll_line_typ"
                placeholder="请选择"
                filterable
                clearable
                style="width: 180px"
              >
                <el-option
                  v-for="item in lineTypeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="相似产线">
              <el-select
                v-model="baseInfoForm.similarLine"
                placeholder="请选择"
                filterable
                clearable
                style="width: 180px"
              >
                <el-option
                  v-for="item in similarLineList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <v-dialog v-model="dialog" width="auto">
      <v-card width="400" class="px-1 py-2">
        <v-card-title class="text-lg px-3">新建项目</v-card-title>
        <v-card-text class="px-3">
          <el-input
            v-model="projectName"
            placeholder="新建项目名称"
            class="h-10"
          />
        </v-card-text>

        <template v-slot:actions>
          <div class="mr-1">
            <v-btn
              variant="outlined"
              class="border border-gray-300"
              @click="dialog = false"
              >取消</v-btn
            >
            <v-btn
              variant="tonal"
              class="bg-blue-600 text-white ml-3"
              @click="dialog = false"
              >确定</v-btn
            >
          </div>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
const baseInfoForm = ref({
  taskName: "",
  group_id: "",
  roll_line_typ: "",
  similarLine: "",
});

const belongProjectList = [
  {
    label: "项目1",
    value: 1,
  },
  {
    label: "项目2",
    value: 2,
  },
  {
    label: "项目3",
    value: 3,
  },
];

const lineTypeList = [
  {
    label: "高速线材",
    value: 1,
  },
  {
    label: "高速棒材",
    value: 2,
  },
  {
    label: "中小棒材",
    value: 3,
  },
  {
    label: "开坯大棒",
    value: 4,
  },
];

const similarLineList = [
  {
    label: "相似产线1",
    value: 1,
  },
];

// 新建项目弹窗
const dialog = ref(false);
const addProject = () => {
  dialog.value = true;
};

const projectName = ref("");

const getBaseInfoForm = () => {
  return baseInfoForm.value;
};

defineExpose({
  getBaseInfoForm,
});
</script>

<style lang="scss" scoped>
.part-box {
  width: 100%;
  overflow: hidden;

  .part-title {
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 15px;
    margin-bottom: 20px;

    &::before {
      content: "";
      display: block;
      width: 4px;
      height: 14px;
      border-radius: 10px;
      background-color: #f89623;
      margin-right: 10px;
    }
  }

  .part-content {
  }
}
</style>
