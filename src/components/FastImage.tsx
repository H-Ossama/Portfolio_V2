'use client'

import Image from 'next/image'
import { useState } from 'react'

interface FastImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  quality?: number
}

// Small, optimized blur data URL
const TINY_BLUR_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXBXKRwAAAABJRU5ErkJggg=='

const FastImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false,
  fill = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  quality = 75 // Reduced quality for better performance
}: FastImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  // Make sure we have dimensions to prevent layout shifts
  const hasDimensions = (width && height) || fill
  const aspectRatio = !hasDimensions ? { aspectRatio: '16/9' } : {}

  return (
    <div 
      className={`relative ${className} ${!isLoaded ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
      style={aspectRatio}
    >
      <Image
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        priority={priority}
        sizes={sizes}
        quality={quality}
        onLoad={() => setIsLoaded(true)}
        placeholder="blur"
        blurDataURL={TINY_BLUR_DATA_URL}
        fetchPriority={priority ? 'high' : 'auto'}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  )
}

export default FastImage