import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '@/views/WelcomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomePage
    },
    {
      path: '/file-manager',
      name: 'file-manager',
      component: () => import('@/views/FileManager.vue')
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('@/views/opendata/ExplorePage.vue')
    },
    {
      path: '/contribute',
      name: 'contribute',
      component: () => import('@/views/opendata/ContributePage.vue')
    },
    {
      path: '/visualize',
      name: 'visualize',
      component: () => import('@/views/opendata/VisualizePage.vue')
    },
    {
      path: '/messages',
      name: 'messages',
      component: () => import('@/views/messages/MessagesView.vue')
    }
  ]
})

export default router
