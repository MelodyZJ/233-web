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
        v-model="loginForm.email"
        label="邮箱"
        placeholder="请输入邮箱"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        color="primary"
        class="has--label"
        required
        :error-messages="v1$.email.$errors.map((e) => e.$message)"
        @input="v1$.email.$touch"
        @blur="v1$.email.$touch"
        name="email"
        auto-complete="on"
      ></v-text-field>

      <v-text-field
        v-model="loginForm.password"
        class="has--label"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        label="密码"
        placeholder="请输入密码"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        color="primary"
        @click:append-inner="visible = !visible"
        required
        :error-messages="v1$.password.$errors.map((e) => e.$message)"
        @blur="v1$.password.$touch"
        name="password"
        auto-complete="on"
      ></v-text-field>

      <div class="d-flex justify-space-between align-center py-2 mt-[-20px]">
        <v-checkbox
          v-model="rememberPsw"
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
        v-model="registerForm.username"
        label="用户名"
        placeholder="请输入用户名"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
        color="primary"
        class="has--label"
        required
        :error-messages="v2$.username.$errors.map((e) => e.$message)"
        @blur="v2$.username.$touch"
      ></v-text-field>

      <v-text-field
        v-model="registerForm.email"
        label="邮箱"
        placeholder="请输入邮箱"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        color="primary"
        class="has--label"
        required
        :error-messages="v2$.email.$errors.map((e) => e.$message)"
        @blur="v2$.email.$touch"
      ></v-text-field>

      <v-text-field
        v-model="registerForm.password"
        label="密码"
        placeholder="请输入密码"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        color="primary"
        class="has--label"
        required
        :error-messages="v2$.password.$errors.map((e) => e.$message)"
        @blur="v2$.password.$touch"
      ></v-text-field>

      <v-text-field
        v-model="registerForm.worknumber"
        label="工号"
        placeholder="请输入工号"
        prepend-inner-icon="mdi-card-text-outline"
        variant="outlined"
        color="primary"
        class="has--label"
        required
        :error-messages="v2$.worknumber.$errors.map((e) => e.$message)"
        @blur="v2$.worknumber.$touch"
      ></v-text-field>

      <v-btn
        class="mt-2 mb-8"
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
import { ElMessage } from "element-plus";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, minLength } from "@vuelidate/validators";
import { useHomeStore } from "@/store/home.js";
import { login, register } from "@/api/user.js";
import { onMounted } from "vue";
import Cookies from "js-cookie";
import { getCookie } from "@/utils/getCookie";

const router = useRouter();
const homeStore = useHomeStore();

onMounted(() => {
  // 记住密码
  let Email = getCookie("Email");

  if (Email) {
    loginForm.email = Email;
    loginForm.password = getCookie("Password");
    rememberPsw.value = true;
  }
});

// 表单数据
const initialLoginForm = {
  email: "",
  password: "",
};

const initialRegisterForm = {
  username: "",
  email: "",
  password: "",
  worknumber: "",
};

const loginForm = reactive({
  ...initialLoginForm,
});

const registerForm = reactive({
  ...initialRegisterForm,
});

// 校验规则
const loginRules = {
  email: { required: helpers.withMessage("请输入邮箱", required) },
  password: {
    required: helpers.withMessage("请输入密码", required),
    minLength: helpers.withMessage("密码长度不能少于8个字符", minLength(8)),
  },
};
const registerRules = {
  username: { required: helpers.withMessage("请输入用户名", required) },
  email: { required: helpers.withMessage("请输入邮箱", required) },
  password: {
    required: helpers.withMessage("请输入密码", required),
    minLength: helpers.withMessage("密码长度不能少于8个字符", minLength(8)),
  },
  worknumber: { required: helpers.withMessage("请输入工号", required) },
};

const v1$ = useVuelidate(loginRules, loginForm);
const v2$ = useVuelidate(registerRules, registerForm);

// 密码是否可见
const visible = ref(false);
// 是否是注册页
const isRegister = ref(false);
// 切换登录与注册
const switchRegister = () => {
  isRegister.value = !isRegister.value;
};
// 按钮加载
const loading = ref(false);
const rememberPsw = ref(false);

// 登录
const handleLogin = async () => {
  const result = await v1$.value.$validate();
  if (!result) return;

  try {
    loading.value = true;
    const res = await login(loginForm);
    // console.log(res, "登录结果");
    if (res.data.code === 0) {
      Cookies.set("Token", res.data.data.token);
      homeStore.setUserInfo(res.data.data);

      // 记住密码
      if (rememberPsw.value) {
        Cookies.set("Email", loginForm.email);
        Cookies.set("Password", loginForm.password);
      } else {
        Cookies.remove("Email");
        Cookies.remove("Password");
      }

      router.push("/home");
    } else {
      ElMessage({
        message: res.data.msg || "接口请求出错！",
        type: "error",
      });
    }
  } catch (error) {
    ElMessage({
      message: error,
      type: "error",
    });
  } finally {
    loading.value = false;
  }
};

// 注册
const handleRegister = async () => {
  const result = await v2$.value.$validate();
  if (!result) return;

  try {
    loading.value = true;
    const res = await register(registerForm); // 注册
    // console.log(res, "注册结果");
    if (res.data.code === 0) {
      ElMessage({
        message: "注册成功！",
        type: "success",
      });
      isRegister.value = false;
    } else {
      ElMessage({
        message: res.data.msg || "接口请求出错！",
        type: "error",
      });
    }
  } catch (error) {
    ElMessage({
      message: error,
      type: "error",
    });
  } finally {
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
