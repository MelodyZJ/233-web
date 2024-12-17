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
    path: "/castingRollingTE",
    component: Layout,
    children: [
      {
        path: "/directCastingRolling",
        component: () =>
          import("@/views/castingRollingTE/directCastingRolling/index.vue"),
        name: "DirectCastingRolling",
        meta: { title: "直接铸轧" },
      },
      {
        path: "/continuousCastingRolling",
        component: () =>
          import("@/views/castingRollingTE/continuousCastingRolling/index.vue"),
        name: "ContinuousCastingRolling",
        meta: { title: "连续铸轧" },
      },
    ],
  },
  {
    path: "/allLineTE",
    component: Layout,
    meta: { title: "全线温度演变" },
  },
  {
    path: "/passRollingCalculation",
    component: Layout,
    meta: { title: "孔型轧制计算" },
  },
  {
    path: "/greatSteelRollingCalculation",
    component: Layout,
    meta: { title: "优特钢轧制计算" },
  },
  {
    path: "/reducingDiameterCalculation",
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
