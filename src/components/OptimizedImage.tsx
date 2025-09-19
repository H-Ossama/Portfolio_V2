'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  loading?: 'eager' | 'lazy'
  className?: string
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
}

// Small, optimized blur data URL that loads faster
const DEFAULT_BLUR_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXBXKRwAAAABJRU5ErkJggg=='

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  loading = 'lazy',
  className = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  quality = 75, // Reduced quality for better performance
  placeholder = 'blur',
  blurDataURL,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  // Setup intersection observer to lazy load images only when they're about to be visible
  useEffect(() => {
    if (!imageRef.current || priority) {
      // If priority is true, we don't need to observe
      setIsIntersecting(true)
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '200px', // Start loading 200px before image is visible
        threshold: 0.01 // Trigger when just 1% of the image is visible
      }
    )

    observer.observe(imageRef.current)
    
    return () => {
      observer.disconnect()
    }
  }, [priority])

  // Handle image load complete
  const handleImageLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  // Handle image load error
  const handleImageError = () => {
    onError?.()
  }

  // Determine image loading strategy
  const imageLoading = priority ? 'eager' : loading

  // Make sure we have dimensions to prevent layout shifts
  const hasDimensions = (width && height) || fill

  return (
    <div 
      ref={imageRef}
      className={`relative overflow-hidden ${className}`}
      style={!hasDimensions ? { aspectRatio: '16/9' } : {}}
    >
      {/* Static placeholder to prevent layout shift */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"
          aria-hidden="true"
        />
      )}
      
      {/* Image */}
      {(isIntersecting || priority) && (
        <Image
          src={src}
          alt={alt}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          fill={fill}
          priority={priority}
          loading={imageLoading}
          quality={quality}
          sizes={sizes}
          placeholder={placeholder}
          blurDataURL={blurDataURL || DEFAULT_BLUR_DATA_URL}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
        />
      )}
    </div>
  )
}