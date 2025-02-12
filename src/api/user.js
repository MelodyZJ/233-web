/**
 * ⽤户相关接⼝
 */

import request from "@/utils/request";

// 登录接⼝
export function login(data) {
  return request({
    url: "/user/login",
    method: "post",
    data,
  });
}

// 注册新⽤户接⼝
export function register(data) {
  return request({
    url: "/user/register",
    method: "post",
    data,
  });
}

