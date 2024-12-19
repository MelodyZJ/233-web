<template>
  <div class="calculateConfig-container">
    <v-card variant="flat">
      <v-tabs v-model="tab" color="#0C5FFF">
        <v-tab value="1" class="tab-text">设计轧制表</v-tab>
        <v-tab value="2" class="tab-text">用户轧制表</v-tab>
      </v-tabs>

      <v-card-text class="pa-0">
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="1">
            <div class="part-title">基本信息</div>
            <div class="part-content">
              <el-form
                :inline="true"
                :model="designTableForm"
                label-width="100px"
              >
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="任务名称">
                      <el-input
                        v-model="designTableForm.riskName"
                        placeholder="请输入"
                        style="width: 300px"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :span="16">
                    <el-form-item label="所属项目">
                      <el-select
                        v-model="designTableForm.belongProject"
                        placeholder="请选择"
                        clearable
                        style="width: 300px"
                      >
                        <el-option
                          v-for="item in belongProjectList"
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
          </v-tabs-window-item>
          <v-tabs-window-item value="2">
            <div class="part-title">基本信息</div>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const tab = ref(null);

const designTableForm = reactive({
  riskName: "",
  belongProject: "",
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
</script>

<style lang="scss" scoped>
.calculateConfig-container {
  padding: 15px 30px;
  background-color: #fff;
  border-radius: $base-border-radius;
  height: calc(100vh - $base-main-padding * 2 - $top-header-height - 10px);

  // v-tab样式设置
  .tab-text {
    font-size: 15px;
    margin-right: 15px;
  }

  .v-btn--size-default {
    padding: 0;
  }

  .part-title {
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 15px;
    margin-bottom: 20px;
    margin-top: 15px;

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
}
</style>
