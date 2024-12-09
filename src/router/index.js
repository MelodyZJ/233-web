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
        path: '/castingRollingTemperatureEvolution',
        component: () => import('@/views/Share/index.vue')
      },
      {
        path: '/acrossTheLinetemperatureEvolution',
        component: () => import('@/views/Product/index.vue')
      },
      {
        path: '/passRollingCalculation',
        component: () => import('@/views/Communication/index.vue')
      },
      {
        path: '/optimumSpecialSteelRollingCalculation',
        component: () => import('@/views/Download/index.vue')
      },
      {
        path: '/reducingDiameterCalculation',
        component: () => import('@/views/About/index.vue')
      },
      {
        path: '/specialSteelPredictionProperties',
        component: () => import('@/views/About/index.vue')
      },
      {
        path: '/generalSteelPredictionProperties',
        component: () => import('@/views/About/index.vue')
      },
      {
        path: '/materialParameter',
        component: () => import('@/views/About/index.vue')
      },
      {
        path: '/moreProducts',
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