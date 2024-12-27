<template>
  <div class="header-container">
    <div class="left">
      <img src="@/assets/icons/logo.png" alt="线棒材轧制数字化系统" />
      <span class="ml-2">线棒材轧制数字化系统</span>
    </div>
    <div class="right">
      <el-dropdown placement="bottom">
        <img src="@/assets/imgs/avatar.png" alt="用户头像" class="avatar" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const loginOut = () => {
  router.push("/login");
};
</script>

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

    :deep(.el-tooltip__trigger:focus-visible) {
      outline: none;
    }
  }
}
</style>
