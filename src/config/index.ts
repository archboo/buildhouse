// src/config/index.ts
const isProd = process.env.NODE_ENV === 'production';
// const isDev = process.env.NODE_ENV === 'development';

export const BASE_URL = isProd ? '/buildhouse' : '';

export const getAssetPath = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (isProd) {
    // В продакшене: /buildhouse/путь/к/файлу
    return `/buildhouse/${cleanPath}`;
  } else {
    // Локально: /путь/к/файлу
    return `/${cleanPath}`;
  }
};

// Для отладки - выводим текущее окружение
console.log('Current environment:', process.env.NODE_ENV);
console.log('Is production:', isProd);