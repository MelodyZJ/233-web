<template>
  <div class="login-container">
    <v-card class="mx-auto pa-10 pb-8" elevation="8" width="448" rounded="lg">
      <div class="text-2xl mb-8">线棒材轧制数字化系统</div>

      <v-text-field
        label="账号"
        placeholder="请输入账号"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        color="primary"
        v-model="state.email"
      ></v-text-field>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        label="密码"
        placeholder="请输入密码"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
        hide-details
        color="primary"
        v-model="state.password"
      ></v-text-field>

      <div class="d-flex justify-space-between align-center py-2">
        <v-checkbox
          label="记住密码"
          color="#0c5fff"
          hide-details
          class="ml-[-10px]"
        ></v-checkbox>
        <span class="forget-psw">忘记密码</span>
      </div>

      <v-btn
        class="mb-8"
        color="#0c5fff"
        size="large"
        variant="tonal"
        block
        @click="handleLogin"
        :loading="loading"
      >
        登 录
      </v-btn>
    </v-card>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { login } from "@/api/user.js";
import { ElMessage } from "element-plus";

const router = useRouter();

const initialState = {
  email: "15777777777",
  password: "123456",
  // email: '',
  // password: ''
};

const state = reactive({
  ...initialState,
});

// 密码可见
const visible = ref(false);

const loading = ref(false);
// 登录
const handleLogin = async () => {
  try {
    loading.value = true;
    const res = await login(state);
    // const res = await register(state); // 注册
    // console.log(res, "登录结果");
    if (res.code === 200) {
      localStorage.setItem("token", res.data.token);
      router.push("/home");
    } else {
      ElMessage({
        message: res.data.msg || "接口请求出错！",
        type: "success",
      });
      loading.value = false;
    }
  } catch (error) {
    ElMessage({
      message: error,
      type: "error",
    });
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .forget-psw {
    cursor: pointer;

    &:hover {
      color: #0c5fff;
    }
  }
}
</style>
