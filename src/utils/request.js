import axios from "axios";
import { getToken, removeToken } from "@/utils/auth";
import errorCode from "@/utils/errorCode";
import cache from "@/utils/cache";

// 请求头设置
axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";

// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.BASE_API,
  // 超时
  timeout: 30000,
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    // console.log("config", config);
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false;
    // 是否需要防止数据重复提交
    const isRepeatSubmit = (config.headers || {}).repeatSubmit === false;
    if (getToken() && !isToken) {
      config.headers["Authorization"] = "Bearer " + getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    // get请求映射params参数
    if (config.method === "get" && config.params) {
      const queryString = new URLSearchParams(config.params).toString();
      let url = config.url + "?" + queryString;
      url = url.slice(0, -1);
      config.params = {};
      config.url = url;
    }
    if (
      !isRepeatSubmit &&
      (config.method === "post" || config.method === "put")
    ) {
      const requestObj = {
        url: config.url,
        data:
          typeof config.data === "object"
            ? JSON.stringify(config.data)
            : config.data,
        time: new Date().getTime(),
      };
      const sessionObj = cache.session.getJSON("sessionObj");
      if (
        sessionObj === undefined ||
        sessionObj === null ||
        sessionObj === ""
      ) {
        cache.session.setJSON("sessionObj", requestObj);
      } else {
        const s_url = sessionObj.url; // 请求地址
        const s_data = sessionObj.data; // 请求数据
        const s_time = sessionObj.time; // 请求时间
        const interval = 1000; // 间隔时间(ms)，小于此时间视为重复提交
        if (
          s_data === requestObj.data &&
          requestObj.time - s_time < interval &&
          s_url === requestObj.url
        ) {
          const message = "已提交申请，请勿重复提交";
          console.warn(message);
          return Promise.reject(message);
        } else {
          cache.session.setJSON("sessionObj", requestObj);
        }
      }
    }
    return config;
  },
  (error) => {
    console.warn(error);
    ElMessage.closeAll();
    ElMessage({
      message: "当前网络异常",
      type: "error",
      customClass: "message-index",
    });
    Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode["default"];
    if (res.config.headers.all) {
      return res;
    }
    // 二进制数据则直接返回
    if (
      res.request.responseType === "blob" ||
      res.request.responseType === "arraybuffer"
    ) {
      return res.data;
    }
    if (code === 401) {
      removeToken();
      cache.session.remove("userInfo");
      ElMessage.closeAll();
      ElMessage({
        message: "无效的会话，或者会话已过期，请重新登录。",
        type: "error",
        customClass: "message-index",
      });
      window.location.href = "/";
      return Promise.reject("无效的会话，或者会话已过期，请重新登录。");
    } else if (code === 500) {
      console.warn(msg);
      ElMessage.closeAll();
      ElMessage({
        message: msg,
        type: "error",
        customClass: "message-index",
      });
      return Promise.reject(msg);
    } else if (code === 601) {
      console.warn(msg);
      ElMessage.closeAll();
      ElMessage({
        message: "服务器错误",
        type: "warning",
        customClass: "message-index",
      });
      return Promise.reject("error");
    } else if (code !== 200) {
      console.warn(msg);
      ElMessage.closeAll();
      ElMessage({
        message: "服务器错误",
        type: "warning",
        customClass: "message-index",
      });
      return Promise.reject("error");
    } else {
      return res.data;
    }
  },
  (error) => {
    let { message } = error;
    console.warn(message);
    if (message == "Network Error") {
      message = "服务器错误";
    } else if (message.includes("timeout")) {
      message = "接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "服务器错误";
    }
    ElMessage.closeAll();
    ElMessage({
      message: message,
      type: "error",
      customClass: "message-index",
    });
    return Promise.reject(error);
  },
);
export default service;
