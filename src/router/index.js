import { createRouter, createWebHashHistory } from "vue-router";

// import Layout from "@/components/Layout/index.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@/views/home/index.vue"),
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

// 检测是否有token
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token"); // 从 localStorage 获取 token
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !token) {
    next({ path: "/login" });
  } else {
    next();
  }
});

export default router;
