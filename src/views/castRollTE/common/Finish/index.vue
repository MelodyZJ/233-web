<template>
  <div class="part-box" style="height: 180px">
    <div class="part-title">完成</div>
    <div class="part-content">
      <div class="btn">
        <v-btn variant="tonal" class="submit-btn">提交</v-btn>
        <v-btn variant="outlined" class="reset-btn">重置</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
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
    .btn {
      display: flex;
      justify-content: flex-end;

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
}
</style>
