import axios from 'axios';
import Cookies from 'js-cookie';
import 'element-plus/theme-chalk/el-message-box.css';
import { useThrottleFn } from '@vueuse/core';
// import { BASEURL } from './baseURL';
import { getCookie } from '@/utils/getCookie';
import { tansParams } from '@/utils/common';
// service循环遍历输出不同的请求方法
const instance = axios.create({
  baseURL: process.env.BASE_API, // 打包走这
  timeout: 300000
});

// let loadingInstance = null
// 请求拦截器的添加
instance.interceptors.request.use(
  (config) => {
    let token = getCookie('token');

    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    } else {
      config.headers.Authorization = null;
    }
    // get请求映射params参数
    if (config.method === 'get' && config.params) {
      let url = config.url + '?' + tansParams(config.params);
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
const router = useRouter();
// 响应拦截器的添加
instance.interceptors.response.use(
  (response) => {
    // 过期登录
    if (response.data.code === 401 || response.data.code === 403) {
      showToast('登录已过期，请重新登录');
      Cookies.remove('token');
      router.push('/login');
      // ElMessageBox.confirm('轻推授权已过期，请重新授权', '警告', {
      //   confirmButtonText: '重新登录',
      //   cancelButtonText: '',
      //   showCancelButton: false,
      //   'show-close': false,
      //   type: 'warning'
      // })
      //   .then(() => {
      //     window.open('https://web.qingtui.com/', '_blank');
      //     window.close();
      //   })
      //   .catch(() => {
      //     ElMessage({
      //       type: 'info',
      //       message: '取消操作'
      //     });
      //   });
    } else if (
      response.data.code !== 200
      // && response.data.code !== 400
    ) {
      showToast(response);
    }

    return response;
  },
  (err) => {
    Promise.reject(err);
  }
);

const showToast = useThrottleFn((response) => {
  showToast(response.data.msg);
  // ElMessage({
  //   message: response.data.msg,
  //   type: 'error',
  //   duration: 700,
  //   customClass: 'messageIndex'
  // });
}, 700);

export const request = ({ method, url, data, config = {} }) => {
  method = method.toLowerCase();
  if (method == 'post') {
    return instance.post(url, data, { ...config });
  } else if (method == 'get') {
    return instance.get(url, {
      params: data,
      ...config
    });
  } else if (method == 'delete') {
    return instance.delete(url, {
      params: data,
      ...config
    });
  } else if (method == 'put') {
    return instance.put(url, data, { ...config });
  } else {
    console.error('未知的method' + method);
    return false;
  }
};

export default instance;
