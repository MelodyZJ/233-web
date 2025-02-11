/**
 * 组织性能预报模块接⼝
 */

import request from "@/utils/request";

// 获取轧线全程温度演变冷床曲线
export function getTempOrTableData(params) {
  return request({
    url: "/v2/struct/getTempOrTableData",
    method: "get",
    params
  });
}

// 汇总⻚⾯接⼝
export function getGradeMark(data) {
  return request({
    url: "/v2/struct/getSummary",
    method: "post",
    data,
  });
}

// ⼒学性能预测接⼝
export function getMechanicalTableData(params) {
  return request({
    url: "/v2/struct/getMechanicalTableData",
    method: "get",
    params,
  });
}

// 各道次各参量变化接⼝
export function getPerformanceData(params) {
  return request({
    url: "/v2/struct/getPerformanceData",
    method: "get",
    params,
  });
}

// 组织体积分数接⼝
export function getVolumeChartData(params) {
  return request({
    url: "/v2/struct/getVolumeChartData",
    method: "get",
    params,
  });
}

// 玫瑰图接⼝
export function getRoseChartData(params) {
  return request({
    url: "/v2/struct/getRoseChartData",
    method: "get",
    params,
  });
}

// 添加数据接⼝
export function getRoseChartData(data) {
  return request({
    url: "/v2/struct/add",
    method: "post",
    data,
  });
}



