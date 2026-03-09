const isProduction = process.env.NODE_ENV === 'production';

export const asset = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (isProduction) {
    return `/buildhouse/${cleanPath}`;
  }
  return `${cleanPath}`;
};