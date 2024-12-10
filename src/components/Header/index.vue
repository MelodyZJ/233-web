<template>
  <div class="header-container">
    <div class="left">
      <img src="@/assets/icons/logo.png" alt="线棒材轧制数字化系统" />
      <span class="ml-2">线棒材轧制数字化系统</span>
    </div>
    <div class="right">
      <el-popover
        placement="bottom"
        title="Title"
        :width="200"
        trigger="click"
        content="this is content, this is content, this is content"
      >
        <template #reference>
          <img src="@/assets/imgs/avatar.png" alt="用户头像" class="avatar" />
        </template>
      </el-popover>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header-container {
  background-color: var(--theme-header);
  height: $top-header-height;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky; /* 确保头部固定 */
  top: 0;
  z-index: 1000;

  .left {
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
  }

  .right {
    display: flex;
    align-items: center;

    .avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
  }
}
</style>
