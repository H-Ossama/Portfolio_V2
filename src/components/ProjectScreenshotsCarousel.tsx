'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProjectScreenshotsCarouselProps {
  screenshots: string[]
  altBase?: string
  className?: string
}

const SWIPE_THRESHOLD_PX = 60

export default function ProjectScreenshotsCarousel({
  screenshots,
  altBase = 'Project screenshot',
  className = '',
}: ProjectScreenshotsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  if (!screenshots || screenshots.length === 0) return null

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    setIsLoaded(false)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
    setIsLoaded(false)
  }

  const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x <= -SWIPE_THRESHOLD_PX) {
      next()
      return
    }
    if (info.offset.x >= SWIPE_THRESHOLD_PX) {
      prev()
    }
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Loading overlay */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center bg-black/10 transition-opacity duration-300 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="absolute inset-0"
          drag={screenshots.length > 1 ? 'x' : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={onDragEnd}
          whileTap={{ cursor: 'grabbing' }}
          style={{ cursor: screenshots.length > 1 ? 'grab' : 'default' }}
        >
          <Image
            src={screenshots[currentIndex]}
            alt={`${altBase} ${currentIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            quality={75}
            priority={currentIndex === 0}
            loading={currentIndex === 0 ? 'eager' : 'lazy'}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
            onLoad={() => setIsLoaded(true)}
          />
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      {screenshots.length > 1 && (
        <>
          <div className="absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous screenshot"
              onPointerDown={(e) => e.stopPropagation()}
              className="rounded-full p-2 bg-blue-600/85 backdrop-blur-sm border border-white/25 text-white shadow-lg hover:bg-blue-600 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next screenshot"
              onPointerDown={(e) => e.stopPropagation()}
              className="rounded-full p-2 bg-blue-600/85 backdrop-blur-sm border border-white/25 text-white shadow-lg hover:bg-blue-600 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2 px-3 py-2 rounded-full bg-black/45 backdrop-blur-sm border border-white/15">
            {screenshots.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to screenshot ${i + 1}`}
                onClick={() => {
                  setCurrentIndex(i)
                  setIsLoaded(false)
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === currentIndex ? 'bg-blue-400 scale-125' : 'bg-white/80 hover:bg-white'
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="absolute top-3 left-3 z-20 text-xs px-2 py-1 rounded-full bg-black/55 backdrop-blur-sm border border-white/20 text-white">
            {currentIndex + 1} / {screenshots.length}
          </div>
        </>
      )}

      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
    </div>
  )
}
