import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // path: '/',
      // component: () => import('@/components/layouts/MainLayout.vue'),
      // children: [
      // {
      path: '/',
      component: () => import('@/views/HomeView.vue'),
      // },
      // ],
    },
  ],
})

export default router
