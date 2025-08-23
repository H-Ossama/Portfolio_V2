'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  blurDataURL?: string
  priority?: boolean
}

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMTEyMjMzIi8+CjxwYXRoIGQ9Ik0xMiAxNkwyMCAyNEwyOCAxNiIgc3Ryb2tlPSIjNjM3NGFkIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K',
  priority = false 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  const handleLoad = () => {
    setIsLoaded(true)
    setIsError(false)
  }

  const handleError = () => {
    setIsError(true)
    setIsLoaded(false)
  }

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Placeholder */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center"
        animate={{ 
          opacity: isLoaded ? 0 : 1 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-12 h-12 border-2 border-purple-400/30 border-t-purple-400 rounded-full animate-spin" />
      </motion.div>

      {/* Actual image */}
      {isInView && (
        <motion.img
          src={isError ? placeholder : src}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-300 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0,
            scale: isLoaded ? 1 : 1.05
          }}
          transition={{ duration: 0.4 }}
        />
      )}

      {/* Error state */}
      {isError && (
        <motion.div
          className="absolute inset-0 bg-red-900/20 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-red-400 text-sm">Failed to load</div>
        </motion.div>
      )}
    </div>
  )
}

export default LazyImage
