import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      {
        path: '/doma',
        component: () => import('pages/DomaMainPage.vue'),
        children: [
          {
            path: 'doma-iz-brusa',
            name: 'doma-iz-brusa',
            component: () => import('src/pages/DomaPage/DomaIzBrusaPage.vue'),
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
