import { createRouter, createWebHashHistory } from "vue-router";

import Layout from "@/components/Layout/index.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
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
        path: "/directCastRoll",
        component: () => import("@/views/castRollTE/common/index.vue"),
        name: "directCastRoll",
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
        children: [
          {
            path: "/taskList-a/resultShow",
            component: Layout,
            name: "resultShow1",
            meta: { title: "结果展示" },
          },
        ],
      },
    ],
  },
  {
    path: "/passRollCalc",
    component: Layout,
    children: [
      {
        path: "/calculateConfig",
        component: () =>
          import("@/views/passRollCalc/calculateConfig/index.vue"),
        name: "calculateConfig",
        meta: { title: "计算配置" },
      },
      {
        path: "/taskList-p",
        component: () => import("@/views/passRollCalc/taskList-p/index.vue"),
        name: "taskList-p",
        meta: { title: "任务列表" },
        children: [
          {
            path: "/taskList-p/resultShow",
            component: Layout,
            name: "resultShow2",
            meta: { title: "结果展示" },
          },
        ],
      },
    ],
  },
  {
    path: "/reduceDiameterCalc",
    component: Layout,
    children: [
      {
        path: "/highSpeedWire",
        component: () =>
          import("@/views/reduceDiameterCalc/highSpeedWire/index.vue"),
        name: "highSpeedWire",
        meta: { title: "高速线材" },
      },
    ],
  },
  {
    path: "/specialSteelPre",
    component: Layout,
    meta: { title: "特钢性能预报" },
  },
  {
    path: "/generalSteelPre",
    component: Layout,
    meta: { title: "普钢性能预报" },
  },
  {
    path: "/materialParameter",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/views/materialParameter/index.vue"),
        name: "materialParameter",
        meta: { title: "材料参数" },
      },
    ],
  },
  {
    path: "/moreProducts",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/views/moreProducts/index.vue"),
        name: "moreProducts",
        meta: { title: "更多产品" },
      },
    ],
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
