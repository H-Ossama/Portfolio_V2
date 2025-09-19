import { MetadataRoute } from 'next';
import { absoluteUrl } from './seo-utils';

// Define supported locales
const locales = ['en', 'fr', 'de'];

// Sample blog posts for sitemap (will be replaced by dynamic fetching in production)
const blogPosts = [
  { 
    slug: 'oussama-hattan-journey', 
    availableLocales: ['en', 'fr', 'de'],
    lastModified: new Date('2023-08-15'),
  },
  { 
    slug: 'moroccan-developer-path', 
    availableLocales: ['en', 'fr'],
    lastModified: new Date('2023-09-01'),
  },
  { 
    slug: 'portfolio-development-process', 
    availableLocales: ['en'],
    lastModified: new Date('2023-09-10'),
  }
];

export default function generateSitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  
  // Create entries for the home page in each language
  locales.forEach(locale => {
    const path = locale === 'en' ? '/' : `/${locale}`;
    entries.push({
      url: absoluteUrl(path),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: locale === 'en' ? 1 : 0.9,
    });
    
    // Add blog index pages for each language
    entries.push({
      url: absoluteUrl(`${locale === 'en' ? '' : `/${locale}`}/blog`),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });
  
  // Add blog post pages
  blogPosts.forEach(post => {
    post.availableLocales.forEach(locale => {
      entries.push({
        url: absoluteUrl(`${locale === 'en' ? '' : `/${locale}`}/blog/${post.slug}`),
        lastModified: post.lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });
  
  return entries;
}

/**
 * For production, replace the static blogPosts array with dynamic fetching:
 * 
 * import { getAllBlogPosts } from './blog';
 * 
 * export async function generateDynamicSitemap(): Promise<MetadataRoute.Sitemap> {
 *   const posts = await getAllBlogPosts();
 *   const entries: MetadataRoute.Sitemap = [];
 *   
 *   // Base URLs
 *   // ...
 *   
 *   // Blog index pages
 *   // ...
 *   
 *   // Dynamic blog posts
 *   posts.forEach(post => {
 *     const availableLocales = post.metadata.locales || ['en'];
 *     const lastModified = new Date(post.metadata.date);
 *     
 *     availableLocales.forEach(locale => {
 *       entries.push({
 *         url: absoluteUrl(`${locale === 'en' ? '' : `/${locale}`}/blog/${post.slug}`),
 *         lastModified,
 *         changeFrequency: 'monthly',
 *         priority: 0.7,
 *       });
 *     });
 *   });
 *   
 *   return entries;
 * }
 */