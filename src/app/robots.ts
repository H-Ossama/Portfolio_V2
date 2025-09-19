import { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/seo-utils';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'], // Prevent crawling of API routes and Next.js internal pages
    },
    sitemap: absoluteUrl('/sitemap.xml'), // Link to the sitemap for better crawling
  };
}