/**
 * 轧制表模块接⼝
 */

import request from "@/utils/request";

// 获取任务列表接⼝
export function getTaskList(data) {
  return request({
    url: "/v2/rollingtable/getTaskList",
    method: "post",
    data,
  });
}

// 删除分组接⼝
export function deleteGroup(params) {
  return request({
    url: "/v2/rollingtable/deleteGroup",
    method: "get",
    params,
  });
}

// 获取同⼀分组下所有数据
export function getEMData(params) {
  return request({
    url: "/v2/rollingtable/getEMData",
    method: "get",
    params,
  });
}

// 获取分组信息
export function getGroup() {
  return request({
    url: "/v2/rollingtable/getGroup",
    method: "get",
  });
}

// 新增分组
export function addNewGroup(params) {
  return request({
    url: "/v2/rollingtable/addNewGroup",
    method: "get",
    params,
  });
}

// 根据 uuid 获取数据
export function getTaskDataByUuid(params) {
  return request({
    url: "/v2/rollingtable/getTaskDataByUuid",
    method: "get",
    params,
  });
}

// 删除任务
export function deleteTask(params) {
  return request({
    url: "/v2/rollingtable/deleteTask",
    method: "get",
    params,
  });
}

