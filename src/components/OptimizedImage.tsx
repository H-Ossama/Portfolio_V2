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

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  loading = 'lazy',
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85, // Good balance between quality and file size
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  // Use default blur data URL for images without one
  const defaultBlurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiMxMTIyMzMiLz48cGF0aCBkPSJNMTIgMTZMMjAgMjRMMjggMTYiIHN0cm9rZT0iIzYzNzRhZCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4='

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

  return (
    <div 
      ref={imageRef}
      className={`relative overflow-hidden ${className}`}
      style={fill ? { width: '100%', height: '100%' } : {}}
    >
      {/* Loading placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"
          style={!fill && width && height ? { width, height } : {}}
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
          blurDataURL={blurDataURL || defaultBlurDataURL}
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