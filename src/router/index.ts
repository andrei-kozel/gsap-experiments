import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/carousel',
      name: 'Carousel',
      component: () => import('../views/CarouselView.vue')
    }
  ]
})

export default router
