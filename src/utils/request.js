import axios from "axios";
import Cookies from "js-cookie";
import { getCookie } from "@/utils/getCookie";
import { tansParams } from "@/utils/common";

// 创建axios实例
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 300000,
});

// 请求拦截器的添加
instance.interceptors.request.use(
  (config) => {
    let token = getCookie("Token");

    if (token) {
      config.headers.Authorization = "Bearer " + token;
    } else {
      config.headers.Authorization = null;
    }

    // get请求映射params参数
    if (config.method === "get" && config.params) {
      let url = config.url + "?" + tansParams(config.params);
      url = url.slice(0, -1);
      config.params = {};
      config.url = url;
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
    if (response.data.code === 401 || response.data.code === 403) {
      console.log("登录已过期，请重新登录");
      Cookies.remove("Token");
    } else if (
      response.data.code !== 200
      // && response.data.code !== 400
    ) {
      ElMessage({
        message: response || "接口请求出错！",
        type: "error",
      });
    }

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
