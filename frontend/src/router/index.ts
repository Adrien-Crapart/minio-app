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
      path: '/opendata',
      redirect: { path: "/opendata" },
      component: () => import('@/views/opendata/ExplorePage.vue'),
      children: [
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
        }
      ]
    },
    {
      path: '/messages',
      name: 'messages',
      component: () => import('@/views/messages/MessagesView.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('@/views/todo/TodoPage.vue')
    },
    {
      path: '/trello',
      name: 'trello',
      component: () => import('@/views/trello/TrelloPage.vue')
    }
  ]
})

export default router;
