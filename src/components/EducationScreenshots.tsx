'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'

interface EducationScreenshotsProps {
  screenshots: string[]
}

export default function EducationScreenshots({ screenshots }: EducationScreenshotsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isImageError, setIsImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    setIsImageError(false)
    setIsLoading(true)
  }

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
    setIsImageError(false)
    setIsLoading(true)
  }

  if (!screenshots || screenshots.length === 0) {
    return null
  }

  if (isImageError) {
    return (
      <div className="relative mt-4 w-full h-[300px] md:h-[400px] rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <p className="text-theme-secondary">Failed to load image</p>
      </div>
    )
  }

  return (
    <div className="relative mt-4 w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full"
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              <Loader2 className="w-8 h-8 animate-spin text-theme-primary" />
            </div>
          )}
          <Image
            src={screenshots[currentIndex]}
            alt={`Project screenshot ${currentIndex + 1}`}
            fill
            className={`object-contain object-center bg-gray-100 dark:bg-gray-800 transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            priority
            onError={() => setIsImageError(true)}
            onLoad={() => setIsLoading(false)}
          />
        </motion.div>
      </AnimatePresence>

      {screenshots.length > 1 && (
        <>
          <button
            onClick={previousImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}