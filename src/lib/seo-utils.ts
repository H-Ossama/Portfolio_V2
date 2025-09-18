// This utility helps create consistent absolute URLs for SEO purposes

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://hattan-portfolio.vercel.app';

// Generate absolute URL helper
export function absoluteUrl(path: string): string {
  // If the path already includes the domain, return it as is
  if (path.startsWith('http')) {
    return path;
  }
  
  // Make sure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Join the site URL and path
  return `${SITE_URL}${normalizedPath}`;
}

// Get locale-specific URL
export function getLocaleUrl(locale: string): string {
  return absoluteUrl(locale === 'en' ? '/' : `/${locale}`);
}

// Get canonical URL for any page
export function getCanonicalUrl(path: string, locale: string): string {
  // For the home page in each language
  if (path === '/' || path === `/${locale}` || path === `/${locale}/`) {
    return getLocaleUrl(locale);
  }
  
  // For other pages
  const pathWithoutLocale = path
    .replace(/^\/[a-z]{2}\//, '/') // Remove locale prefix if present
    .replace(/^\/[a-z]{2}$/, '/');  // Handle case where path is just /en, /fr, etc.
  
  // Add locale prefix except for English (which uses root)
  const localizedPath = locale === 'en' 
    ? pathWithoutLocale 
    : `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    
  return absoluteUrl(localizedPath);
}