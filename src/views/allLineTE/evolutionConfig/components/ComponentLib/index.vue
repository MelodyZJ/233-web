<template>
  <div class="component-lib-container">
    <div class="title">组件库</div>
    <div class="content">
      <div class="component-list">
        <div class="component-item" v-for="(item, index) in 10" :key="index">
          <div class="item-image">
            <img src="@/assets/imgs/component.png" alt="组件" />
          </div>
          <div class="item-name">组件名称</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.component-lib-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .title {
    padding: 15px 20px;
  }

  .content {
    flex-grow: 1;
    overflow-y: auto;
    margin-bottom: 20px;

    .component-list {
      display: flex;
      flex-wrap: wrap;
      padding: 0 20px;
      gap: 20px;

      .component-item {
        width: 128px;
        height: 144px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #ededef;
        border-radius: 4px;
        overflow: hidden;

        .item-image {
          flex: 4;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 78px;
            height: 94px;
          }
        }

        .item-name {
          flex: 1;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #979a9b;
          background-color: #dbe1e4;
        }
      }
    }
  }
}
</style>
