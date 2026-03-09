import { defineRouter } from '#q-app/wrappers'
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'
import routes from './routes'

// Задайте свой базовый путь, совпадающий с названием репозитория на GitHub Pages или вашими настройками
const BASE_PATH = '/buildhouse/'; // замените на свой реальный репозиторий или путь

/*
 * Если не используется SSR, можно экспортировать маршрут в реальном объекте.
 * Создайте роутер с нужным типом истории.
 */

export default defineRouter(function (/* { store, ssrContext } */) {
  // Определите функцию создания истории в зависимости от режима
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? () => createWebHistory(BASE_PATH)
      : () => createWebHashHistory(BASE_PATH)

  // Создайте роутер с нужной историей и маршрутами
  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    // Используйте явно заданный базовый путь
    history: createHistory(),
  })

  return Router
})
