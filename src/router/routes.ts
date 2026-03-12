import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      {
        path: 'doma',
        component: () => import('pages/DomaMainPage.vue'),
        children: [
          {
            path: 'timber',
            name: 'doma-timber',
            component: () => import('src/pages/DomaPage/HousesTimber.vue'),
          },
          {
            path: 'brick',
            name: 'doma-brick',
            component: () => import('src/pages/DomaPage/HousesBrick.vue'),
          },
          {
            path: 'blocks',
            name: 'doma-blocks',
            component: () => import('src/pages/DomaPage/HousesBlocks.vue'),
          },
          {
            path: 'frame-panel',
            name: 'doma-frame-panel',
            component: () => import('src/pages/DomaPage/HousesFramePanel.vue'),
          },
          {
            path: 'ceramic',
            name: 'doma-ceramic',
            component: () => import('src/pages/DomaPage/HousesCeramic.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes