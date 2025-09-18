'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, ZoomIn, ZoomOut } from 'lucide-react'
import Image from 'next/image'

interface Certificate {
  name: string
  image: string
}

interface CertificateViewerProps {
  certificates: Certificate[]
  isOpen: boolean
  onClose: () => void
  institutionName: string
}

export default function CertificateViewer({ 
  certificates, 
  isOpen, 
  onClose, 
  institutionName 
}: CertificateViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [zoomLevel, setZoomLevel] = useState(0.8)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  
  // Touch-specific state
  const [touchStartX, setTouchStartX] = useState(0)
  const [lastTouchDistance, setLastTouchDistance] = useState(0)
  
  const imageContainerRef = useRef<HTMLDivElement>(null)

  const minZoom = 0.3
  const maxZoom = 3.0
  const zoomStep = 0.1
  const swipeThreshold = 50 // Minimum swipe distance to trigger navigation

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0)
      setZoomLevel(0.8)
      setDragOffset({ x: 0, y: 0 })
      setIsDragging(false)
      setTouchStartX(0)
      setLastTouchDistance(0)
    }
  }, [isOpen])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Mouse wheel zoom handler
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!imageContainerRef.current?.contains(e.target as Node)) return
      
      e.preventDefault()
      
      const delta = e.deltaY > 0 ? -zoomStep : zoomStep
      setZoomLevel(prev => {
        const newZoom = Math.max(minZoom, Math.min(maxZoom, prev + delta))
        
        // Reset drag offset when zooming out to minimum
        if (newZoom <= minZoom + 0.1) {
          setDragOffset({ x: 0, y: 0 })
        }
        
        return newZoom
      })
    }

    if (isOpen) {
      document.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      document.removeEventListener('wheel', handleWheel)
    }
  }, [isOpen, zoomStep])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = certificates[currentIndex].image
    link.download = `${institutionName}_${certificates[currentIndex].name}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const nextCertificate = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length)
    setZoomLevel(0.8)
    setDragOffset({ x: 0, y: 0 })
  }

  const prevCertificate = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
    setZoomLevel(0.8)
    setDragOffset({ x: 0, y: 0 })
  }

  const handleDoubleClick = () => {
    if (zoomLevel <= 0.9) {
      setZoomLevel(1.5)
    } else {
      setZoomLevel(0.8)
      setDragOffset({ x: 0, y: 0 })
    }
  }

  // Mouse handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setDragOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      // Single touch - prepare for potential drag or swipe
      setIsDragging(true)
      setTouchStartX(e.touches[0].clientX)
      setDragStart({
        x: e.touches[0].clientX - dragOffset.x,
        y: e.touches[0].clientY - dragOffset.y
      })
    } else if (e.touches.length === 2) {
      // Pinch zoom gesture starting
      const touchDistance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      )
      setLastTouchDistance(touchDistance)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault() // Prevent screen scrolling
    
    if (e.touches.length === 1 && isDragging) {
      // Single touch - dragging or swiping
      const touchX = e.touches[0].clientX
      const touchY = e.touches[0].clientY
      
      if (zoomLevel > 1.0) {
        // When zoomed in, drag the image around
        setDragOffset({
          x: touchX - dragStart.x,
          y: touchY - dragStart.y
        })
      }
    } else if (e.touches.length === 2) {
      // Pinch zoom gesture
      const touchDistance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      )
      
      if (lastTouchDistance > 0) {
        const delta = touchDistance - lastTouchDistance
        const zoomDelta = delta * 0.01 // Adjust sensitivity as needed
        
        setZoomLevel(prev => {
          const newZoom = Math.max(minZoom, Math.min(maxZoom, prev + zoomDelta))
          return newZoom
        })
      }
      
      setLastTouchDistance(touchDistance)
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    // Check for swipe navigation when not zoomed in
    if (zoomLevel <= 1.0 && certificates.length > 1) {
      const touchEndX = e.changedTouches[0]?.clientX || 0
      const swipeDistance = touchEndX - touchStartX
      
      if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
          prevCertificate() // Swipe right, go to previous
        } else {
          nextCertificate() // Swipe left, go to next
        }
      }
    }
    
    setIsDragging(false)
    setLastTouchDistance(0)
  }

  const handleTabChange = (index: number) => {
    setCurrentIndex(index)
    setZoomLevel(0.8)
    setDragOffset({ x: 0, y: 0 })
  }

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(maxZoom, prev + zoomStep * 2))
  }

  const handleZoomOut = () => {
    setZoomLevel(prev => {
      const newZoom = Math.max(minZoom, prev - zoomStep * 2)
      if (newZoom <= minZoom + 0.1) {
        setDragOffset({ x: 0, y: 0 })
      }
      return newZoom
    })
  }

  const resetZoom = () => {
    setZoomLevel(0.8)
    setDragOffset({ x: 0, y: 0 })
  }

  if (!certificates.length) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-[95vw] h-[95vh] max-w-6xl bg-dark-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 md:p-6 border-b border-gray-700 flex-shrink-0">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white line-clamp-2">
                  {institutionName} - {certificates[currentIndex].name}
                </h3>
                {certificates.length > 1 && (
                  <p className="text-gray-400 text-sm mt-0.5 sm:mt-1">
                    {currentIndex + 1} of {certificates.length}
                  </p>
                )}
              </div>
              
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
                {/* Zoom controls */}
                <button
                  onClick={handleZoomOut}
                  className="p-1.5 sm:p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                  title="Zoom Out"
                  disabled={zoomLevel <= minZoom}
                >
                  <ZoomOut size={18} className="hidden sm:block" />
                  <ZoomOut size={16} className="sm:hidden" />
                </button>
                
                <span className="text-white text-xs sm:text-sm font-medium min-w-[2.5rem] text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                
                <button
                  onClick={handleZoomIn}
                  className="p-1.5 sm:p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                  title="Zoom In"
                  disabled={zoomLevel >= maxZoom}
                >
                  <ZoomIn size={18} className="hidden sm:block" />
                  <ZoomIn size={16} className="sm:hidden" />
                </button>
                
                <button
                  onClick={resetZoom}
                  className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors text-xs sm:text-sm"
                  title="Reset Zoom"
                >
                  Reset
                </button>
                
                {/* Download */}
                <button
                  onClick={handleDownload}
                  className="p-1.5 sm:p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors ml-1"
                  title="Download Certificate"
                >
                  <Download size={18} className="hidden sm:block" />
                  <Download size={16} className="sm:hidden" />
                </button>
                
                {/* Close */}
                <button
                  onClick={onClose}
                  className="p-1.5 sm:p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                  title="Close"
                >
                  <X size={18} className="hidden sm:block" />
                  <X size={16} className="sm:hidden" />
                </button>
              </div>
            </div>

            {/* Navigation for multiple certificates */}
            {certificates.length > 1 && (
              <div className="flex justify-start sm:justify-center gap-1.5 sm:gap-2 p-2 sm:p-3 md:p-4 border-b border-gray-700 flex-shrink-0 overflow-x-auto">
                {certificates.map((cert, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabChange(index)}
                    className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                      index === currentIndex
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {cert.name}
                  </button>
                ))}
              </div>
            )}

            {/* Certificate Image Container */}
            <div 
              ref={imageContainerRef}
              className="relative flex-1 overflow-hidden bg-gray-900"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <motion.div
                  animate={{ 
                    scale: zoomLevel,
                    x: dragOffset.x,
                    y: dragOffset.y
                  }}
                  transition={{ type: "spring", duration: 0.3 }}
                  className="relative max-w-full max-h-full"
                  onDoubleClick={handleDoubleClick}
                  style={{ 
                    userSelect: 'none',
                    pointerEvents: 'none'
                  }}
                >
                  <Image
                    src={certificates[currentIndex].image}
                    alt={`${institutionName} - ${certificates[currentIndex].name}`}
                    width={1200}
                    height={1600}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                    style={{
                      objectFit: 'contain',
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '100%',
                      maxHeight: '100%'
                    }}
                    priority
                    draggable={false}
                  />
                </motion.div>
              </div>

              {/* Navigation arrows for multiple certificates - desktop only */}
              {certificates.length > 1 && zoomLevel <= 1.0 && (
                <>
                  <button
                    onClick={prevCertificate}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors z-10 hidden sm:block"
                    title="Previous Certificate"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextCertificate}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors z-10 hidden sm:block"
                    title="Next Certificate"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            {/* Instructions */}
            <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-center text-gray-400 text-xs sm:text-sm border-t border-gray-700 flex-shrink-0">
              <div className="hidden sm:block">
                {certificates.length > 1 && "Use arrows to navigate between certificates • "}
                Mouse wheel to zoom • Drag to pan • Double-click for quick zoom • Press ESC to close
              </div>
              <div className="sm:hidden">
                {certificates.length > 1 && "Swipe to navigate • "}
                Pinch to zoom • Drag to move • Tap controls to adjust
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}