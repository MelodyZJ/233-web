<template>
  <div class="login-container">
    <div class="logo-title">
      <img src="@/assets/icons/logo_blue.png" alt="线棒材轧制数字化系统" />
      <span class="ml-2">线棒材轧制数字化系统</span>
    </div>

    <!-- 登录页面 -->
    <v-card
      class="position-fixed right-40 pa-10 pb-8"
      elevation="8"
      width="480"
      rounded="lg"
      v-if="!isRegister"
    >
      <div class="text-2xl mb-8">用户登录</div>

      <v-text-field
        label="账号"
        placeholder="请输入账号"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        color="primary"
        v-model="loginForm.email"
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
        v-model="loginForm.password"
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
        class="mt-2 mb-8"
        color="#0c5fff"
        size="x-large"
        variant="tonal"
        block
        @click="handleLogin"
        :loading="loading"
      >
        登 录
      </v-btn>

      <div class="text-center text-base">
        没账号？去<span
          class="text-primary cursor-pointer"
          @click="switchRegister"
          >注册</span
        >
      </div>
    </v-card>

    <!-- 注册页面 -->
    <v-card
      class="position-fixed right-40 pa-10 pb-8"
      elevation="8"
      width="480"
      rounded="lg"
      v-else
    >
      <div class="text-2xl mb-8">新用户注册</div>

      <v-text-field
        label="用户名"
        placeholder="请输入用户名"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
        color="primary"
        v-model="registerForm.username"
      ></v-text-field>

      <v-text-field
        label="邮箱"
        placeholder="请输入邮箱"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        color="primary"
        v-model="registerForm.email"
      ></v-text-field>

      <v-text-field
        label="密码"
        placeholder="请输入密码"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        color="primary"
        v-model="registerForm.password"
        :rules="passwordRules"
      ></v-text-field>

      <v-text-field
        label="工号"
        placeholder="请输入工号"
        prepend-inner-icon="mdi-card-text-outline"
        variant="outlined"
        color="primary"
        v-model="registerForm.worknumber"
      ></v-text-field>

      <v-btn
        class="mt-5 mb-8"
        color="#0c5fff"
        size="x-large"
        variant="tonal"
        block
        @click="handleRegister"
        :loading="loading"
      >
        注 册
      </v-btn>

      <div class="text-center text-base">
        已有账号，返回<span
          class="text-primary cursor-pointer"
          @click="switchRegister"
          >登录</span
        >
      </div>
    </v-card>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { login, register } from "@/api/user.js";
import { ElMessage } from "element-plus";
import Cookies from "js-cookie";

const router = useRouter();

const initialLoginForm = {
  email: "",
  password: "",
};

const loginForm = reactive({
  ...initialLoginForm,
});

const initialRegisterForm = {
  username: "admin",
  email: "1739593209@qq.com",
  password: "123456789",
  worknumber: "123456789",
};

const registerForm = reactive({
  ...initialRegisterForm,
});

const passwordRules = [
  (value) => {
    if (value) return true;
    return "Name is required.";
  },
  (value) => {
    if (value?.length <= 10) return true;
    return "Name must be less than 10 characters.";
  },
];

// 密码是否可见
const visible = ref(false);
// 是否是注册页
const isRegister = ref(false);
// 点击注册
const switchRegister = () => {
  isRegister.value = !isRegister.value;
};

const loading = ref(false);

// 登录
const handleLogin = async () => {
  try {
    loading.value = true;
    const res = await login(loginForm);
    // console.log(res, "登录结果");
    if (res.code === 0) {
      Cookies.set("Token", res.data.token);
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

// 注册
const handleRegister = async () => {
  try {
    loading.value = true;
    const res = await register(registerForm); // 注册
    // console.log(res, "注册结果");
    if (res.code === 200) {
      Cookies.set("Token", res.data.token);
      router.push("/home");
    } else {
      ElMessage({
        message: res.data.msg || "接口请求出错！",
        type: "error",
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
  background: url("@/assets/imgs/login_bg.png") no-repeat;
  background-size: cover;

  .logo-title {
    display: flex;
    align-items: center;
    font-size: 22px;
    color: #004498;
    font-weight: bold;
    letter-spacing: 1px;
    position: absolute;
    top: 35px;
    left: 40px;
  }

  .forget-psw {
    cursor: pointer;

    &:hover {
      color: #0c5fff;
    }
  }
}
</style>
