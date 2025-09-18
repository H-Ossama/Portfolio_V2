import { MetadataRoute } from 'next'
import generateSitemap from '@/lib/sitemap'

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemap()
}