<template>
  <div class="Organization-container">
    <div class="left">
      <div class="part-title">非搭接点和搭接点</div>
      <div class="content">
        <img src="@/assets/imgs/mystery.png" alt="不明神秘图片" />
      </div>
    </div>
    <div class="mid">
      <div class="part-title">动态相析出曲线</div>
    </div>
    <div class="right">
      <div class="part-title">组织和力学性能</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.Organization-container {
  width: 100%;
  display: flex;
  gap: 20px;

  .left {
    flex: 1;

    .content {
      padding: 50px;
      background-color: #FAFAFA;

      img {
        width: 270px;
        margin: auto;
      }
    }
  }

  .mid {
    flex: 1;
  }

  .right {
    flex: 1;
  }

  .part-title {
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 15px;
    margin-bottom: 10px;

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
