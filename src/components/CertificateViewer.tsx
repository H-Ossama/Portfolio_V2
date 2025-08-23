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
  const imageContainerRef = useRef<HTMLDivElement>(null)

  const minZoom = 0.3
  const maxZoom = 3.0
  const zoomStep = 0.1

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0)
      setZoomLevel(0.8)
      setDragOffset({ x: 0, y: 0 })
      setIsDragging(false)
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
            <div className="flex items-center justify-between p-6 border-b border-gray-700 flex-shrink-0">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {institutionName} - {certificates[currentIndex].name}
                </h3>
                {certificates.length > 1 && (
                  <p className="text-gray-400 mt-1">
                    {currentIndex + 1} of {certificates.length}
                  </p>
                )}
              </div>
              
              <div className="flex items-center gap-3">
                {/* Zoom controls */}
                <button
                  onClick={handleZoomOut}
                  className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                  title="Zoom Out"
                  disabled={zoomLevel <= minZoom}
                >
                  <ZoomOut size={20} />
                </button>
                
                <span className="text-white text-sm font-medium min-w-[3rem] text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                
                <button
                  onClick={handleZoomIn}
                  className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                  title="Zoom In"
                  disabled={zoomLevel >= maxZoom}
                >
                  <ZoomIn size={20} />
                </button>
                
                <button
                  onClick={resetZoom}
                  className="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors text-sm"
                  title="Reset Zoom"
                >
                  Reset
                </button>
                
                {/* Download */}
                <button
                  onClick={handleDownload}
                  className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  title="Download Certificate"
                >
                  <Download size={20} />
                </button>
                
                {/* Close */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                  title="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Navigation for multiple certificates */}
            {certificates.length > 1 && (
              <div className="flex justify-center gap-2 p-4 border-b border-gray-700 flex-shrink-0">
                {certificates.map((cert, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabChange(index)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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

              {/* Navigation arrows for multiple certificates */}
              {certificates.length > 1 && zoomLevel <= 1.0 && (
                <>
                  <button
                    onClick={prevCertificate}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors z-10"
                    title="Previous Certificate"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextCertificate}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors z-10"
                    title="Next Certificate"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            {/* Instructions */}
            <div className="px-6 py-3 text-center text-gray-400 text-sm border-t border-gray-700 flex-shrink-0">
              {certificates.length > 1 && "Use arrows to navigate between certificates • "}
              Mouse wheel to zoom • Drag to pan • Double-click for quick zoom • Press ESC to close
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}