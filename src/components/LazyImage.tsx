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
  width?: number
  height?: number
}

// Simple tiny placeholder
const TINY_PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXBXKRwAAAABJRU5ErkJggg=='

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = TINY_PLACEHOLDER,
  priority = false,
  width,
  height
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLDivElement>(null)

  // Calculate aspect ratio to prevent layout shifts
  const aspectRatio = width && height ? width / height : 16/9
  
  useEffect(() => {
    if (priority) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { 
        rootMargin: '100px',
        threshold: 0.01
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
      style={{ aspectRatio }}
    >
      {/* Static placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-800"
          aria-hidden="true"
        />
      )}

      {/* Actual image */}
      {isInView && (
        <img
          src={isError ? placeholder : src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          width={width}
          height={height}
        />
      )}

      {/* Error state */}
      {isError && (
        <div
          className="absolute inset-0 bg-red-900/20 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="text-red-400 text-sm">Failed to load</div>
        </div>
      )}
    </div>
  )
}

export default LazyImage
