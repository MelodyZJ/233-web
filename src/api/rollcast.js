/**
 * 铸轧温度演变模块接⼝
 */

import request from "@/utils/request";

// 获取钢种接⼝
export function getGrade() {
  return request({
    url: "/v2/rollcast/getGrade",
    method: "get",
  });
}

// 获取钢种对应牌号接⼝
export function getGradeMark(params) {
  return request({
    url: "/v2/rollcast/getGradeMark",
    method: "get",
    params,
  });
}

// 直接铸轧和连续铸轧接口
export function entry_func(data) {
  return request({
    url: "/wbds/cast_roll/entry_func",
    method: "post",
    data,
  });
}

