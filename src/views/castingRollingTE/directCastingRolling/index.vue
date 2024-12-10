<template>
  <div class="directCastingRolling-container">
    <el-row>
      <el-col :span="18">
        <div ref="containerRef" class="form-container">
          <!-- 计算属性 -->
          <div id="part1" class="part-box" style="height: 180px">
            <div class="part-title">计算属性</div>
            <div class="part-content">
              <el-form :inline="true" :model="formInline" label-width="220px">
                <el-row>
                  <el-col :span="11">
                    <el-form-item label="截距网格数量（半个边长）">
                      <el-input
                        v-model="formInline.user"
                        placeholder="请输入"
                        style="width: 200px"
                      />
                      <span class="unit">个</span>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="轴向网格数量">
                      <el-input
                        v-model="formInline.user"
                        placeholder="请输入"
                        style="width: 200px"
                      />
                      <span class="unit">个</span>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-form-item label="空冷计算步长">
                  <el-input
                    v-model="formInline.user"
                    placeholder="请输入"
                    style="width: 200px"
                  />
                  <span class="unit">步</span>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <!-- 钢种属性 -->
          <div id="part2" class="part-box" style="height: 180px">
            <div class="part-title">钢种属性</div>
            <div class="part-content">
              <el-form :inline="true" :model="formInline" label-width="220px">
                <el-row>
                  <el-col :span="11">
                    <el-form-item label="钢种">
                      <el-select
                        v-model="steelGrade"
                        placeholder="请选择"
                        clearable
                        style="width: 200px"
                      >
                        <el-option
                          v-for="item in steelGradeList"
                          :key="item.id"
                          :label="item.label"
                          :value="item.id"
                        />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="环境温度">
                      <el-input
                        v-model="formInline.user"
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
                    v-model="steelGrade"
                    placeholder="请选择"
                    clearable
                    style="width: 200px"
                  >
                    <el-option
                      v-for="item in steelGradeList"
                      :key="item.id"
                      :label="item.label"
                      :value="item.id"
                    />
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <!-- 铸坯属性 -->
          <div id="part3" class="part-box" style="height: 180px">
            <div class="part-title">铸坯属性</div>
            <div class="part-content">
              <el-form :inline="true" :model="formInline" label-width="200px">
                <el-form-item label="铸坯形状">
                  <el-select
                    v-model="steelGrade"
                    placeholder="请选择"
                    clearable
                    style="width: 200px"
                  >
                    <el-option
                      v-for="item in steelGradeList"
                      :key="item.id"
                      :label="item.label"
                      :value="item.id"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item label="铸坯尺寸">
                  <div class="mr-2">
                    <el-input
                      v-model="formInline.user"
                      placeholder="长"
                      clearable
                      style="width: 60px"
                    />
                  </div>
                  <div class="mr-2">
                    <el-input
                      v-model="formInline.user"
                      placeholder="宽"
                      clearable
                      style="width: 60px"
                    />
                  </div>
                  <div class="mr-2">
                    <el-input
                      v-model="formInline.user"
                      placeholder="高"
                      clearable
                      style="width: 60px"
                    />
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <!-- 铸轧间距属性 -->
          <div id="part4" class="part-box" style="height: 180px">
            <div class="part-title">铸轧间距属性</div>
          </div>
          <!-- 铸轧温度图像 -->
          <div id="part5" class="part-box" style="height: 180px">
            <div class="part-title">铸轧温度图像</div>
          </div>
          <!-- 完成 -->
          <div id="part6" class="part-box" style="height: 180px">
            <div class="part-title">完成</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <el-anchor
          :container="containerRef"
          direction="vertical"
          type="default"
          @click="handleClick"
        >
          <el-anchor-link href="#part1" title="计算属性" />
          <el-anchor-link href="#part2" title="钢种属性" />
          <el-anchor-link href="#part3" title="铸坯属性" />
          <el-anchor-link href="#part4" title="铸轧间距属性" />
          <el-anchor-link href="#part5" title="铸轧温度图像" />
          <el-anchor-link href="#part6" title="完成" />
        </el-anchor>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const containerRef = ref(null);

const handleClick = (e) => {
  e.preventDefault();
};

const formInline = reactive({
  user: "",
  region: "",
  date: "",
});

const steelGrade = ref("");
const steelGradeList = ref([
  {
    id: 1,
    label: "Q235",
    value: "Q235",
  },
  {
    id: 2,
    label: "Q345",
    value: "Q345",
  },
]);
</script>

<style lang="scss" scoped>
.directCastingRolling-container {
  padding: 30px;
  background-color: #fff;
  border-radius: $base-border-radius;
  height: calc(100vh - $base-main-padding * 2 - $top-header-height);

  .form-container {
    height: calc(100vh - $base-main-padding * 2 - $top-header-height - 50px);
    overflow-y: auto;
  }

  .part-box {
    background: #fff;
    height: 100%;

    .part-title {
      height: 50px;
      display: flex;
      align-items: center;
      background-color: #f7f9fa;
      font-size: 15px;
      padding: 20px;
      border-radius: 4px;
      margin-bottom: 20px;

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
        width: 20px;
        height: 22px;
        text-align: center;
        line-height: 22px;
        background-color: #fff;
        margin-left: -28px;
        z-index: 1;
      }
    }
  }
}
</style>
