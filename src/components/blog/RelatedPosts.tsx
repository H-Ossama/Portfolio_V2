'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { getLocaleFromPathname } from '@/lib/localization'

interface RelatedPostsProps {
  currentSlug?: string
}

// Sample data for related posts
const relatedPosts = [
  {
    title: "Oussama HATTAN: My Journey as a Full-Stack Developer from Morocco",
    excerpt: "Learn about my journey as a Moroccan full-stack developer, my expertise, and how I can help with your web development projects.",
    slug: "oussama-hattan-journey",
    date: "September 19, 2025"
  },
  // More posts will be added in the future
]

export default function RelatedPosts({ currentSlug }: RelatedPostsProps) {
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  
  // Filter out current post if slug is provided
  const posts = currentSlug 
    ? relatedPosts.filter(post => post.slug !== currentSlug)
    : relatedPosts
  
  // If no other posts exist yet, don't show the component
  if (posts.length === 0) {
    return null
  }
  
  return (
    <div className="mt-16 pt-10 border-t border-gray-800">
      <h2 className="text-2xl font-bold mb-8 text-theme-primary">
        {currentSlug ? 'You might also like' : 'Featured Posts'}
      </h2>
      
      <div className="grid grid-cols-1 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a 
              href={`/${locale}/blog/${post.slug}`}
              className="block p-6 glass-card rounded-xl hover:shadow-glow transition-all duration-300"
            >
              <h3 className="text-xl font-medium mb-2 text-theme-primary">
                {post.title}
              </h3>
              
              <div className="text-sm text-theme-muted mb-3">
                {post.date}
              </div>
              
              <p className="text-theme-secondary">
                {post.excerpt}
              </p>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}