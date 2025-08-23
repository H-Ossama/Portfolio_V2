'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LazyLoadingProps {
  children: React.ReactNode
  threshold?: number
  rootMargin?: string
  fallback?: React.ReactNode
  delay?: number
}

const LazyLoading = ({ 
  children, 
  threshold = 0.1, 
  rootMargin = '50px',
  fallback,
  delay = 0
}: LazyLoadingProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
            // Render children after a brief delay for smoother transitions
            setTimeout(() => setShouldRender(true), 100)
          }, delay)
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    const target = document.createElement('div')
    target.style.height = '1px'
    
    const container = document.currentScript?.parentNode
    if (container) {
      container.appendChild(target)
      observer.observe(target)
    }

    return () => {
      observer.disconnect()
      if (container && target.parentNode === container) {
        container.removeChild(target)
      }
    }
  }, [threshold, rootMargin, delay])

  const defaultFallback = (
    <motion.div
      className="flex items-center justify-center py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" 
             style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" 
             style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" 
             style={{ animationDelay: '300ms' }} />
      </div>
    </motion.div>
  )

  return (
    <AnimatePresence mode="wait">
      {!isVisible ? (
        <motion.div
          key="fallback"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {fallback || defaultFallback}
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: shouldRender ? 1 : 0, y: shouldRender ? 0 : 20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LazyLoading
