import { createRouter, createWebHashHistory } from "vue-router";

// import Layout from "@/components/Layout/index.vue";

const routes = [
  {
    path: "/",
    redirect: "/content",
  },
  {
    path: "/content",
    component: () => import("@/views/content/index.vue"),
    props: (route) => ({
      param1: route.query.param1,
      param2: route.query.param2,
    }),
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
