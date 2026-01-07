'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface EducationScreenshotsProps {
  screenshots: string[]
}

export default function EducationScreenshots({ screenshots }: EducationScreenshotsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    setIsLoaded(false)
  }

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
    setIsLoaded(false)
  }

  if (!screenshots || screenshots.length === 0) {
    return null
  }

  return (
    <div className="relative mt-4 w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden group border border-theme-border shadow-lg">
      <div className={`absolute inset-0 flex items-center justify-center bg-theme-card z-10 transition-opacity duration-300 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <Image
            src={screenshots[currentIndex]}
            alt={`EFET project screenshot ${currentIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-contain"
            quality={75}
            priority={currentIndex === 0}
            loading={currentIndex === 0 ? 'eager' : 'lazy'}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
            onLoad={() => setIsLoaded(true)}
          />
        </motion.div>
      </AnimatePresence>

      {screenshots.length > 1 && (
        <>
          <button
            onClick={previousImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-theme-primary/50 hover:bg-theme-primary/70 text-white p-3 rounded-full opacity-75 hover:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-theme-primary/50 hover:bg-theme-primary/70 text-white p-3 rounded-full opacity-75 hover:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 bg-black/30 px-4 py-2 rounded-full">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsLoaded(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-400 scale-125' : 'bg-white/70 hover:bg-white'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
      
      {/* Image counter */}
      <div className="absolute top-2 right-2 bg-black/40 text-white text-xs px-2 py-1 rounded-full">
        {currentIndex + 1} / {screenshots.length}
      </div>
    </div>
  )
}