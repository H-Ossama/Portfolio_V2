import { MetadataRoute } from 'next';
import { absoluteUrl } from './seo-utils';

// Define supported locales
const locales = ['en', 'fr', 'de'];

export default function generateSitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hattan-portfolio.vercel.app';
  
  // Create entries for the home page in each language
  const entries = locales.map(locale => {
    const path = locale === 'en' ? '/' : `/${locale}`;
    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: locale === 'en' ? 1 : 0.9,
    };
  });
  
  return entries;
}