'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Eye } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { usePortfolioConfig, useNavigationLabels } from '@/lib/localization'
import Image from 'next/image'

export default function Hero() {
  const { theme } = useTheme()
  const { config } = usePortfolioConfig()
  const labels = useNavigationLabels()
  
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      // Enhanced smooth scrolling with better behavior
      const headerOffset = 80 // Account for fixed header
      const elementPosition = contactSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const downloadResume = () => {
    // Download CV functionality
    const link = document.createElement('a')
    link.href = '/certificates/Oussma_Hattan_Resume.pdf' // Path to your CV file
    link.download = 'Oussma_Hattan_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const viewResume = () => {
    // View CV functionality - opens CV in new tab
    window.open('/certificates/Oussma_Hattan_Resume.pdf', '_blank')
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Simplified background for better LCP */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient background */}
        {/* this is for the home BG */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800 from-white via-gray-50 to-gray-100"></div> */}
        
        {/* Reduced floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-glow rounded-full opacity-20 floating-element"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-purple-glow rounded-full opacity-15 floating-element-delayed"></div>
      </div>

      <div className="container-custom px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Profile Image with glow effect - optimized loading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12 mt-40"
          >
            <div className="relative w-40 h-40 mx-auto mb-8 glow-effect">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full animate-spin-slow opacity-20"></div>
              <Image
                src={`${config.personal.profileImage}&no-cache=${new Date().getTime()}`}
                alt={config.personal.name}
                fill
                className="rounded-full object-cover border-4 border-gray-600/30 shadow-glow relative z-10"
                priority
                sizes="(max-width: 768px) 160px, 160px"
                quality={85}
                unoptimized={true}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Wv//Z"
              />
            </div>
          </motion.div>

          {/* Name with enhanced styling - optimized animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className={`text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white text-glow' : 'text-gray-900'
            }`}
            style={{
              background: theme === 'dark' 
                ? 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)'
                : 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {config.personal.name}
          </motion.h1>

          {/* Title with gradient and glow - optimized animation */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gradient mb-8"
          >
            {config.personal.title}
          </motion.h2>

          {/* Tagline - optimized animation */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className={`text-xl sm:text-2xl mb-16 max-w-4xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {config.personal.tagline}
          </motion.p>

          {/* CTA Buttons with glass morphism - optimized animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <button
              onClick={scrollToContact}
              className="btn-primary w-full sm:w-auto"
            >
              {labels.getInTouch}
            </button>
            <button
              onClick={downloadResume}
              className="btn-secondary w-full sm:w-auto flex items-center gap-3"
            >
              <Download size={20} />
              {labels.downloadCV}
            </button>
            <button
              onClick={viewResume}
              className="btn-secondary w-full sm:w-auto flex items-center gap-3"
            >
              <Eye size={20} />
              {labels.viewCV}
            </button>
          </motion.div>

          {/* Scroll indicator with enhanced styling - optimized */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col items-center"
          >
            <p className={`text-sm mb-6 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>Discover more below</p>
            <button
              onClick={scrollToContact}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-glow-pulse"></div>
              <ChevronDown 
                size={40} 
                className={`transition-colors duration-300 relative z-10 animate-bounce-gentle ${
                  theme === 'dark' 
                    ? 'text-primary-400 hover:text-primary-300' 
                    : 'text-primary-600 hover:text-primary-500'
                }`}
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
