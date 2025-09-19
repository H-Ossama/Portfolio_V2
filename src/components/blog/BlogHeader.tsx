'use client'

import { usePortfolioConfig } from '@/lib/localization'
import { motion } from 'framer-motion'

export default function BlogHeader() {
  const { config } = usePortfolioConfig()
  
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-theme-primary">
          Oussama HATTAN's Blog
        </h1>
        
        <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
          Insights on web development, coding techniques, and professional experiences from a Full-Stack Developer based in Morocco.
        </p>
      </motion.div>
      
      {/* Keywords section for SEO - visible to users but also helps search engines */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        <span className="text-xs px-3 py-1 bg-blue-900/20 text-blue-400 rounded-full">
          #OussamaHATTAN
        </span>
        <span className="text-xs px-3 py-1 bg-purple-900/20 text-purple-400 rounded-full">
          #WebDevelopment
        </span>
        <span className="text-xs px-3 py-1 bg-green-900/20 text-green-400 rounded-full">
          #FullStackDeveloper
        </span>
        <span className="text-xs px-3 py-1 bg-amber-900/20 text-amber-400 rounded-full">
          #MoroccanDeveloper
        </span>
        <span className="text-xs px-3 py-1 bg-pink-900/20 text-pink-400 rounded-full">
          #ReactJS
        </span>
        <span className="text-xs px-3 py-1 bg-cyan-900/20 text-cyan-400 rounded-full">
          #NodeJS
        </span>
        <span className="text-xs px-3 py-1 bg-red-900/20 text-red-400 rounded-full">
          #FrontendDeveloper
        </span>
        <span className="text-xs px-3 py-1 bg-teal-900/20 text-teal-400 rounded-full">
          #BackendDeveloper
        </span>
      </div>
    </div>
  )
}