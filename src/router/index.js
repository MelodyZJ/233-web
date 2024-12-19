import { createRouter, createWebHashHistory } from "vue-router";

import Layout from "@/components/Layout/index.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/views/home/index.vue"),
        name: "Home",
        meta: { title: "首页" },
      },
    ],
  },
  {
    path: "/castRollTE",
    component: Layout,
    children: [
      {
        path: "/directCastingRoll",
        component: () => import("@/views/castRollTE/common/index.vue"),
        name: "directCastingRoll",
        meta: { title: "直接铸轧" },
      },
      {
        path: "/continuousCastRoll",
        component: () => import("@/views/castRollTE/common/index.vue"),
        name: "continuousCastRoll",
        meta: { title: "连续铸轧" },
      },
    ],
  },
  {
    path: "/allLineTE",
    component: Layout,
    children: [
      {
        path: "/evolutionConfig",
        component: () => import("@/views/allLineTE/evolutionConfig/index.vue"),
        name: "evolutionConfig",
        meta: { title: "演变配置" },
      },
      {
        path: "/taskList-a",
        component: () => import("@/views/allLineTE/taskList-a/index.vue"),
        name: "taskList-a",
        meta: { title: "任务列表" },
      },
    ],
  },
  {
    path: "/passRollCalculation",
    component: Layout,
    children: [
      {
        path: "/calculateConfig",
        component: () => import("@/views/passRollCalculation/calculateConfig/index.vue"),
        name: "calculateConfig",
        meta: { title: "计算配置" },
      },
      {
        path: "/taskList-p",
        component: () => import("@/views/passRollCalculation/taskList-p/index.vue"),
        name: "taskList-p",
        meta: { title: "任务列表" },
      },
    ],
  },
  {
    path: "/reduceDiameterCalculation",
    component: Layout,
    meta: { title: "减定径计算" },
  },
  {
    path: "/specialSteelPrediction",
    component: Layout,
    meta: { title: "特钢性能预报" },
  },
  {
    path: "/generalSteelPrediction",
    component: Layout,
    meta: { title: "普钢性能预报" },
  },
  {
    path: "/materialParameter",
    component: Layout,
    meta: { title: "材料参数" },
  },
  {
    path: "/moreProducts",
    component: Layout,
    meta: { title: "更多产品" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
