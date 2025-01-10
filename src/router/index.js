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
            name: "taskList-a-resultShow",
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
            name: "taskList-p-resultShow",
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
        path: "/highSpeedWire-reduceDiameterCalc",
        component: () =>
          import("@/views/reduceDiameterCalc/highSpeedWire/index.vue"),
        name: "highSpeedWire-reduceDiameterCalc",
        meta: { title: "高速线材" },
      },
    ],
  },
  {
    path: "/specialSteelPre",
    component: Layout,
    children: [
      {
        path: "/specialSteelWire",
        component: () =>
          import("@/views/specialSteelPre/specialSteelWire/index.vue"),
        name: "specialSteelWire",
        meta: { title: "特殊钢线材" },
        children: [
          {
            path: "/specialSteelWire/calcResult",
            component: Layout,
            name: "specialSteelWire-calcResult",
            meta: { title: "计算结果" },
          },
        ],
      },
      {
        path: "/specialSteelBar",
        component: () =>
          import("@/views/specialSteelPre/specialSteelBar/index.vue"),
        name: "specialSteelBar",
        meta: { title: "特殊钢棒材" },
        children: [
          {
            path: "/specialSteelBar/calcResult",
            component: Layout,
            name: "specialSteelBar-calcResult",
            meta: { title: "计算结果" },
          },
        ],
      },
      {
        path: "/taskList-s",
        component: () => import("@/views/specialSteelPre/taskList-s/index.vue"),
        name: "taskList-s",
        meta: { title: "任务列表" },
      },
    ],
  },
  {
    path: "/generalSteelPre",
    component: Layout,
    children: [
      {
        path: "/highSpeedWire-g",
        component: () =>
          import("@/views/generalSteelPre/highSpeedWire/index.vue"),
        name: "highSpeedWire-g",
        meta: { title: "高速线材" },
        children: [
          {
            path: "/highSpeedWire-g/calcResult",
            component: Layout,
            name: "highSpeedWire-g-calcResult",
            meta: { title: "计算结果" },
          },
        ],
      },
      {
        path: "/highSpeedBar",
        component: () =>
          import("@/views/generalSteelPre/highSpeedBar/index.vue"),
        name: "highSpeedBar",
        meta: { title: "高速棒材" },
        children: [
          {
            path: "/highSpeedBar/calcResult",
            component: Layout,
            name: "highSpeedBar-calcResult",
            meta: { title: "计算结果" },
          },
        ],
      },
      {
        path: "/taskList-g",
        component: () => import("@/views/generalSteelPre/taskList-g/index.vue"),
        name: "taskList-g",
        meta: { title: "任务列表" },
        children: [
          {
            path: "/taskList-g/calcResult",
            component: Layout,
            name: "taskList-g-calcResult",
            meta: { title: "计算结果" },
          },
        ],
      },
    ],
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
