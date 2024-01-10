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
      component: () => import('@/views/filemanager/FileManager.vue')
    },
    {
      path: '/opendata/explore',
      name: 'explore',
      component: () => import('@/views/opendata/ExplorePage.vue')
    },
    {
      path: '/opendata/contribute',
      name: 'contribute',
      component: () => import('@/views/opendata/ContributePage.vue')
    },
    {
      path: '/to-do',
      name: 'to-do',
      component: () => import('@/views/toDo/dashboard.vue')
    },
    {
      path: '/opendata/visualize',
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

export default router;
