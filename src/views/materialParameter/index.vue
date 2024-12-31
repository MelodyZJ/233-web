<template>
  <div class="materialParameter-container">
    <v-card variant="flat">
      <v-tabs v-model="tab" color="#0C5FFF">
        <v-tab value="1" class="tab-text">材料参数</v-tab>
      </v-tabs>

      <v-card-text class="pa-0">
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="1">
            <div class="top-search">
              <el-input
                v-model="queryParams.searchName"
                placeholder="输入牌号/标准号/标准名称"
                clearable
                style="width: 250px; height: 36px"
              />

              <div class="btn">
                <v-btn variant="outlined" class="primary-btn">查询</v-btn>
                <v-btn variant="outlined" class="white-btn">重置</v-btn>
              </div>
            </div>

            <!-- 多级表头 -->
            <el-table :data="tableData" style="width: 100%; margin-top: 20px">
              <el-table-column
                prop="steelGrade"
                label="钢种"
                min-width="100"
                align="center"
              />
              <el-table-column
                prop="brand"
                label="牌号"
                min-width="100"
                align="center"
              />
              <el-table-column
                prop="standard"
                label="标准"
                min-width="100"
                align="center"
              />
              <el-table-column
                prop="standardName"
                label="标准简称"
                min-width="100"
                align="center"
              />
              <el-table-column label="标准要求" align="center">
                <el-table-column
                  prop="C"
                  label="C(%)"
                  min-width="100"
                  align="center"
                />
                <el-table-column
                  prop="Si"
                  label="Si(%)"
                  min-width="100"
                  align="center"
                />
                <el-table-column
                  prop="Mn"
                  label="Mn(%)"
                  min-width="100"
                  align="center"
                />
                <el-table-column
                  prop="S"
                  label="S(%)"
                  min-width="100"
                  align="center"
                />
                <el-table-column
                  prop="P"
                  label="P(%)"
                  min-width="100"
                  align="center"
                />
                <el-table-column
                  prop="strengthYield1"
                  label="屈服强度(Mpa)"
                  min-width="150"
                  align="center"
                />
                <el-table-column
                  prop="strengthYield2"
                  label="屈服强度(Mpa)"
                  min-width="150"
                  align="center"
                />
              </el-table-column>
              <el-table-column
                prop="other"
                label="其他"
                min-width="100"
                align="center"
              />
            </el-table>

            <pagination
              v-show="total > 0"
              :total="total"
              v-model:page="queryParams.pageNum"
              v-model:limit="queryParams.pageSize"
              @pagination="getList"
            />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
const tab = ref(null);

const data = reactive({
  tableData: [
    {
      steelGrade: "钢种1",
      brand: "牌号1",
      standard: "标准1",
      standardName: "标准简称",
      C: "10",
      Si: "5",
      Mn: "10",
      S: "10",
      P: "10",
      strengthYield1: "50",
      strengthYield2: "50",
      other: "1",
    },
    {
      steelGrade: "钢种2",
      brand: "牌号2",
      standard: "标准2",
      standardName: "标准简称",
      C: "10",
      Si: "5",
      Mn: "10",
      S: "10",
      P: "10",
      strengthYield1: "50",
      strengthYield2: "50",
      other: "1",
    },
    {
      steelGrade: "钢种3",
      brand: "牌号3",
      standard: "标准3",
      standardName: "标准简称",
      C: "10",
      Si: "5",
      Mn: "10",
      S: "10",
      P: "10",
      strengthYield1: "50",
      strengthYield2: "50",
      other: "1",
    },
  ],
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    searchName: "",
  },
});
const { queryParams, tableData } = toRefs(data);
const total = ref(20);
const tableRef = ref(null);

// 获取列表
const getList = () => {};
</script>

<style lang="scss" scoped>
.materialParameter-container {
  padding: 15px 30px;
  background-color: #fff;
  border-radius: $base-border-radius;
  height: calc(100vh - $base-main-padding * 2 - $top-header-height - 10px);
  box-shadow: $box-shadow;

  // v-tab样式设置
  .tab-text {
    font-size: 15px;
    margin-right: 15px;
  }

  .v-btn--size-default {
    padding: 0;
  }

  .top-search {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
