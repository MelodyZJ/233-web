/**
 * ⽔冷模块接⼝
 */

import request from "@/utils/request";

// 获取钢种接⼝
export function getGradeInfo() {
  return request({
    url: "/v2/water_cooling/getGradeInfo",
    method: "get",
  });
}

// 获取任务列表接⼝
export function getSummary(data) {
  return request({
    url: "/v2/water_cooling/getSummary",
    method: "post",
    data,
  });
}

// 获取任务总数接⼝
export function getSummary() {
  return request({
    url: "/v2/water_cooling/getCoun",
    method: "get",
  });
}


