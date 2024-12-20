<template>
  <div class="part-box">
    <div class="part-title">参数配置</div>
    <div class="part-content">
      <div class="top-botton">
        <v-btn variant="outlined" class="custom-btn">上传参数</v-btn>
        <v-btn variant="outlined" class="custom-btn">下载模板</v-btn>
      </div>

      <el-form :model="paraConfigForm">
        <el-form-item>
          <el-table
            ref="tableRef1"
            :data="tableData1"
            highlight-current-row
            style="width: 100%"
            max-height="250"
            :header-cell-style="{ background: '#fafafa' }"
            border
          >
            <el-table-column
              label="序号"
              min-width="40"
              align="center"
              type="index"
            ></el-table-column>
            <el-table-column label="机组" align="center" max-width="150">
              <template #default="scope">
                <el-input v-model="scope.row.set" placeholder="请输入" />
              </template>
            </el-table-column>
            <el-table-column label="机架号" align="center" max-width="120">
              <template #default="scope">
                <el-input v-model="scope.row.rackNum" placeholder="请输入" />
              </template>
            </el-table-column>

            <el-table-column label="孔型形状" align="center" max-width="150">
              <template #default="scope">
                <el-input v-model="scope.row.passShape" placeholder="请输入" />
              </template>
            </el-table-column>

            <el-table-column label="孔型高度" align="center" max-width="150">
              <template #default="scope">
                <el-input v-model="scope.row.passHeight" placeholder="请输入" />
              </template>
            </el-table-column>

            <el-table-column label="菱形孔顶角" align="center" max-width="150">
              <template #default="scope">
                <el-input v-model="scope.row.topAngle" placeholder="请输入" />
              </template>
            </el-table-column>

            <el-table-column label="辊环直径" align="center" max-width="150">
              <template #default="scope">
                <el-input
                  v-model="scope.row.ringDiameter"
                  placeholder="请输入"
                />
              </template>
            </el-table-column>

            <el-table-column label="轧制速度" align="center" max-width="150">
              <template #default="scope">
                <el-input v-model="scope.row.rollSpeed" placeholder="请输入" />
              </template>
            </el-table-column>

            <el-table-column
              fixed="right"
              label="操作"
              align="center"
              max-width="150"
            >
              <template #default="scope">
                <el-button
                  link
                  type="primary"
                  @click.prevent="deleteRow(scope.$index)"
                >
                  删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>

          <v-btn variant="outlined" class="custom-btn mt-4" @click="onAddItem"
            >添加配置</v-btn
          >
        </el-form-item>

        <el-form-item>
          <el-table
            ref="tableRef2"
            :data="tableData2"
            highlight-current-row
            style="width: 100%"
            max-height="250"
            :header-cell-style="{ background: '#fafafa' }"
            border
          >
            <el-table-column label="钢种" align="center" max-width="150">
              <template #default="scope">
                <el-input v-model="scope.row.steelGrade" placeholder="请输入" />
              </template>
            </el-table-column>
            <el-table-column label="牌号" align="center" max-width="120">
              <template #default="scope">
                <el-input v-model="scope.row.brand" placeholder="请输入" />
              </template>
            </el-table-column>

            <el-table-column label="轧制力模型" align="center" max-width="150">
              <template #default="scope">
                <el-input
                  v-model="scope.row.rollForceModel"
                  placeholder="请输入"
                />
              </template>
            </el-table-column>

            <el-table-column
              label="产线布置形式"
              align="center"
              max-width="150"
            >
              <template #default="scope">
                <el-input
                  v-model="scope.row.productLineLayout"
                  placeholder="请输入"
                />
              </template>
            </el-table-column>

            <el-table-column label="热膨胀系数" align="center" max-width="150">
              <template #default="scope">
                <el-input
                  v-model="scope.row.heatExpansionCoe"
                  placeholder="请输入"
                />
              </template>
            </el-table-column>

            <el-table-column label="铸坯高度" align="center" max-width="150">
              <template #default="scope">
                <el-input
                  v-model="scope.row.billetHeight"
                  placeholder="请输入"
                />
              </template>
            </el-table-column>

            <el-table-column label="铸坯宽度" align="center" max-width="150">
              <template #default="scope">
                <el-input
                  v-model="scope.row.billetWidth"
                  placeholder="请输入"
                />
              </template>
            </el-table-column>

            <el-table-column label="铸坯长度" align="center" max-width="150">
              <template #default="scope">
                <el-input
                  v-model="scope.row.billetLength"
                  placeholder="请输入"
                />
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>

        <el-form-item>
          <el-table
            ref="tableRef3"
            :data="tableData3"
            highlight-current-row
            style="width: 100%"
            max-height="250"
            :header-cell-style="{ background: '#fafafa' }"
            border
          >
            <el-table-column label="C" align="center" max-width="150">
              <template #default="scope">
                <el-input v-model="scope.row.valuel1" placeholder="请输入" />
              </template>
            </el-table-column>
            <el-table-column label="Mn" align="center" max-width="120">
              <template #default="scope">
                <el-input v-model="scope.row.valuel2" placeholder="请输入" />
              </template>
            </el-table-column>

            <el-table-column label="Cr" align="center" max-width="150">
              <template #default="scope">
                <el-input v-model="scope.row.valuel3" placeholder="请输入" />
              </template>
            </el-table-column>

            <el-table-column label="P" align="center" max-width="150">
              <template #default="scope">
                <el-input v-model="scope.row.valuel4" placeholder="请输入" />
              </template>
            </el-table-column>

            <el-table-column label="S" align="center" max-width="150">
              <template #default="scope">
                <el-input v-model="scope.row.valuel5" placeholder="请输入" />
              </template>
            </el-table-column>

            <el-table-column label="Si" align="center" max-width="150">
              <template #default="scope">
                <el-input v-model="scope.row.valuel6" placeholder="请输入" />
              </template>
            </el-table-column>

            <el-table-column label="Al" align="center" max-width="150">
              <template #default="scope">
                <el-input v-model="scope.row.valuel7" placeholder="请输入" />
              </template>
            </el-table-column>

            <el-table-column label="V" align="center" max-width="150">
              <template #default="scope">
                <el-input v-model="scope.row.valuel8" placeholder="请输入" />
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
      </el-form>

      <div class="btn">
        <v-btn variant="tonal" class="submit-btn">提交</v-btn>
        <v-btn variant="outlined" class="reset-btn">重置</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import dayjs from "dayjs";

const paraConfigForm = reactive({});

const now = new Date();

const tableRef1 = ref(null);
const tableData1 = ref([
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  },
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  },
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  },
  {
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  },
]);

const tableRef2 = ref(null);
const tableData2 = ref([
  {
    steelGrade: "",
    brand: "",
    rollForceModel: "",
    productLineLayout: "",
    heatExpansionCoe: "",
    billetHeight: "",
    billetWidth: "",
    billetLength: "",
  },
]);

const tableRef3 = ref(null);
const tableData3 = ref([
  {
    valuel1: "",
    valuel2: "",
    valuel3: "",
    valuel4: "",
    valuel5: "",
    valuel6: "",
    valuel7: "",
    valuel8: "",
  },
]);

const deleteRow = (index) => {
  tableData1.value.splice(index, 1);
};

const onAddItem = () => {
  now.setDate(now.getDate() + 1);
  tableData1.value.push({
    set: "",
    rackNum: "",
    passShape: "",
    passHeight: "",
    topAngle: "",
    ringDiameter: "",
    rollSpeed: "",
  });
};
</script>

<style lang="scss" scoped>
.part-box {
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

  .part-content{
    .top-botton{
      display: flex;
      gap: 10px;
      margin-bottom: 15px;
    }
  }

  .custom-btn {
    background-color: #fff;
    color: #0c5fff;
  }

  .btn {
    display: flex;
    justify-content: flex-end;
    padding: 20px 0 30px 0;

    .submit-btn {
      background-color: #0c5fff;
      color: #fff;
    }

    .reset-btn {
      border: 1px solid #dcdfe6;
      margin-left: 10px;
    }
  }
}
</style>
