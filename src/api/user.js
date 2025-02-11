/**
 * ⽤户相关接⼝
 */

import request from "@/utils/request";

// 注册新⽤户接⼝
export function register(data) {
  return request({
    url: "/user/register",
    method: "post",
    data,
  });
}

