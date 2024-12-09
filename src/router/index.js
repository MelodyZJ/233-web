import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/views/Layout/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home/index.vue')
      },
      {
        path: '/share',
        component: () => import('@/views/Share/index.vue')
      },
      {
        path: '/product',
        component: () => import('@/views/Product/index.vue')
      },
      {
        path: '/communication',
        component: () => import('@/views/Communication/index.vue')
      },
      {
        path: '/download',
        component: () => import('@/views/Download/index.vue')
      },
      {
        path: '/about',
        component: () => import('@/views/About/index.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router