'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface CoreWebVitals {
  CLS: number | null
  FID: number | null
  FCP: number | null
  LCP: number | null
  TTFB: number | null
}

const WebVitalsMonitor = () => {
  const [vitals, setVitals] = useState<CoreWebVitals>({
    CLS: null,
    FID: null,
    FCP: null,
    LCP: null,
    TTFB: null
  })
  const [showVitals, setShowVitals] = useState(false)

  useEffect(() => {
    // Only show vitals in development
    if (process.env.NODE_ENV !== 'development') return

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            setVitals(prev => ({ ...prev, LCP: entry.startTime }))
            break
          case 'first-input':
            const fidEntry = entry as PerformanceEventTiming
            setVitals(prev => ({ ...prev, FID: fidEntry.processingStart - fidEntry.startTime }))
            break
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              setVitals(prev => ({ 
                ...prev, 
                CLS: (prev.CLS || 0) + (entry as any).value 
              }))
            }
            break
        }
      }
    })

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
    } catch (e) {
      // Fallback for browsers that don't support all entry types
    }

    // Measure FCP and TTFB
    const paintEntries = performance.getEntriesByType('paint')
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint')
    if (fcpEntry) {
      setVitals(prev => ({ ...prev, FCP: fcpEntry.startTime }))
    }

    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigationEntry) {
      setVitals(prev => ({ ...prev, TTFB: navigationEntry.responseStart }))
    }

    // Show vitals panel after 3 seconds
    const timer = setTimeout(() => setShowVitals(true), 3000)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  // Function to get color based on performance thresholds
  const getColor = (metric: string, value: number | null) => {
    if (value === null) return 'text-gray-400'
    
    switch (metric) {
      case 'LCP':
        return value <= 2500 ? 'text-green-400' : value <= 4000 ? 'text-yellow-400' : 'text-red-400'
      case 'FID':
        return value <= 100 ? 'text-green-400' : value <= 300 ? 'text-yellow-400' : 'text-red-400'
      case 'CLS':
        return value <= 0.1 ? 'text-green-400' : value <= 0.25 ? 'text-yellow-400' : 'text-red-400'
      case 'FCP':
        return value <= 1800 ? 'text-green-400' : value <= 3000 ? 'text-yellow-400' : 'text-red-400'
      case 'TTFB':
        return value <= 800 ? 'text-green-400' : value <= 1800 ? 'text-yellow-400' : 'text-red-400'
      default:
        return 'text-gray-400'
    }
  }

  // Don't render in production
  if (process.env.NODE_ENV !== 'development' || !showVitals) return null

  return (
    <motion.div
      className="fixed bottom-4 left-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-3 text-xs font-mono z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-white/80 mb-2 font-semibold">Core Web Vitals</div>
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-white/60">LCP:</span>
          <span className={getColor('LCP', vitals.LCP)}>
            {vitals.LCP ? `${Math.round(vitals.LCP)}ms` : '-'}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/60">FID:</span>
          <span className={getColor('FID', vitals.FID)}>
            {vitals.FID ? `${Math.round(vitals.FID)}ms` : '-'}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/60">CLS:</span>
          <span className={getColor('CLS', vitals.CLS)}>
            {vitals.CLS ? vitals.CLS.toFixed(3) : '-'}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/60">FCP:</span>
          <span className={getColor('FCP', vitals.FCP)}>
            {vitals.FCP ? `${Math.round(vitals.FCP)}ms` : '-'}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/60">TTFB:</span>
          <span className={getColor('TTFB', vitals.TTFB)}>
            {vitals.TTFB ? `${Math.round(vitals.TTFB)}ms` : '-'}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default WebVitalsMonitor
