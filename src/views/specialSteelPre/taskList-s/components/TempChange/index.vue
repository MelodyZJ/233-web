<template>
  <div class="TempChange-container">
    <div class="title">关键点温度预测</div>
    <div class="list">
      <div class="list-item" v-for="(item, index) in temperList" :key="index">
        <div class="left">
          <div class="row">
            <span class="key">关键点</span>
            <span class="value">{{ item.name }}</span>
          </div>
          <div class="row" v-for="(item1, index) in rowList" :key="index">
            <span class="key">{{ item1.name }}</span>
            <span class="value">{{ item1.value }}</span>
          </div>
        </div>
        <div class="right">
          <img src="@/assets/imgs/temper.png" alt="温度" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const temperList = ref([
  {
    name: "开轧温度",
  },
  {
    name: "精轧温度",
  },
  {
    name: "上风冷线温度",
  },
  {
    name: "下风冷线温度",
  },
]);

const rowList = ref([
  {
    name: "表面温度",
    value: "1050.00℃",
  },
  {
    name: "芯部温度",
    value: "1050.00℃",
  },
  {
    name: "平均温度",
    value: "1050.00℃",
  },
  {
    name: "距离",
    value: "10.00m",
  },
]);
</script>

<style lang="scss" scoped>
.TempChange-container {
  .title {
    font-size: 16px;
    margin-top: 10px;
  }

  .list {
    display: flex;
    width: 100%;
    margin-top: 20px;

    .list-item {
      display: flex;
      width: 25%;

      .left {
        flex: 1;
        border: 1px solid #ededed;

        .row {
          border-bottom: 1px solid #ededed;

          &:first-child {
            background-color: #ededed;
          }

          &:last-child {
            border-bottom: none;
          }

          span {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 13px;
          }

          .key {
            width: 45%;
          }

          .value {
            width: 55%;
          }
        }
      }

      .right {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
}
</style>
