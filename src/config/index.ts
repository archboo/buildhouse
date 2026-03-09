// src/config/index.ts
const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';

// Базовый URL в зависимости от окружения
export const BASE_URL = isProd ? '/buildhouse' : '';

// Функция для получения правильного пути к ассетам
export const getAssetPath = (path: string): string => {
  // Убираем ведущий слеш если он есть
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (isProd) {
    // В продакшене: /buildhouse/путь/к/файлу
    return `/buildhouse/${cleanPath}`;
  } else {
    // Локально: /путь/к/файлу (без /buildhouse)
    return `/${cleanPath}`;
  }
};

// Для проверки текущего окружения
export const IS_PRODUCTION = isProd;
export const IS_DEVELOPMENT = isDev;