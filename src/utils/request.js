import axios from "axios";
import Cookies from "js-cookie";
import { getCookie } from "@/utils/getCookie";

// 创建axios实例
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 900000,
});

// 请求拦截器的添加
instance.interceptors.request.use(
  (config) => {
    let token = getCookie("Token");

    // 携带token
    if (token) {
      config.headers["x-token"] = token;
    }

    // 判断是不是模型接口，如果是则替换baseURL
    if (config.url.startsWith("/wbds")) {
      config.baseURL = import.meta.env.VITE_MODEL_API;
      // 清除token
      delete config.headers["x-token"];
    }

    // get请求映射params参数
    if (config.method === "get" && config.params) {
      const params = new URLSearchParams(config.params);
      const queryString = params.toString();
      const newUrl = config.url.includes("?")
        ? `${config.url}&${queryString}`
        : `${config.url}?${queryString}`;
      config.url = newUrl;
      delete config.params;
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

// 响应拦截器的添加
instance.interceptors.response.use(
  (response) => {
    // 过期登录
    // if (response.data.code === 401 || response.data.code === 403) {
    //   console.log("登录已过期，请重新登录");
    //   Cookies.remove("Token");
    // } else if (
    //   response.data.code !== 200
    //   // && response.data.code !== 400
    // ) {
    //   ElMessage({
    //     message: response || "接口请求出错！",
    //     type: "error",
    //   });
    // }

    return response;
  },
  (err) => {
    Promise.reject(err);
  }
);

export const request = ({ method, url, data, config = {} }) => {
  method = method.toLowerCase();
  if (method == "post") {
    return instance.post(url, data, { ...config });
  } else if (method == "get") {
    return instance.get(url, {
      params: data,
      ...config,
    });
  } else if (method == "delete") {
    return instance.delete(url, {
      params: data,
      ...config,
    });
  } else if (method == "put") {
    return instance.put(url, data, { ...config });
  } else {
    console.error("未知的method" + method);
    return false;
  }
};

export default instance;
