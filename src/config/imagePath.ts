const isProd = process.env.NODE_ENV === 'production';
// const isDev = process.env.NODE_ENV === 'development';

export const BASE_URL = isProd ? '/buildhouse' : '';

export const getAssetPath = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (isProd) {
    return `/buildhouse/${cleanPath}`;
  } else {
    return `../${cleanPath}`;
  }
};

// console.log('Current environment:', process.env.NODE_ENV);
// console.log('Is production:', isProd);