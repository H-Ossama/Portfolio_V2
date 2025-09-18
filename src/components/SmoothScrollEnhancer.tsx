'use client'

import { useEffect } from 'react'
import { usePerformanceMode, getAnimationConfig } from '@/lib/usePerformanceMode'

const SmoothScrollEnhancer = () => {
  const performanceMode = usePerformanceMode()
  const { enableSmoothScroll } = getAnimationConfig(performanceMode)
  
  useEffect(() => {
    // Skip smooth scrolling enhancements on low-performance devices
    if (!enableSmoothScroll) {
      return
    }
    
    // Store original functions
    const originalScrollTo = window.scrollTo.bind(window)
    const originalScrollIntoView = Element.prototype.scrollIntoView
    
    const enhancedScrollTo = (xOrOptions: number | ScrollToOptions, y?: number) => {
      if (typeof xOrOptions === 'object' && xOrOptions !== null) {
        const options = xOrOptions as ScrollToOptions
        if (options.behavior === 'smooth') {
          // Use a simpler animation for mobile/low-performance devices
          const start = window.pageYOffset
          const target = options.top || 0
          const distance = target - start
          
          // Shorter duration for mobile (800ms → 600ms)
          const duration = 600
          const startTime = performance.now()

          // Simplified easing function
          const easeOutQuad = (t: number) => t * (2 - t)

          const animateScroll = (currentTime: number) => {
            const elapsedTime = currentTime - startTime
            const progress = Math.min(elapsedTime / duration, 1)
            const easedProgress = easeOutQuad(progress)
            
            originalScrollTo(0, start + distance * easedProgress)

            if (progress < 1) {
              requestAnimationFrame(animateScroll)
            }
          }

          requestAnimationFrame(animateScroll)
          return
        }
      }
      
      // Fallback to original scrollTo
      if (typeof xOrOptions === 'number' && typeof y === 'number') {
        originalScrollTo(xOrOptions, y)
      } else if (typeof xOrOptions === 'object') {
        originalScrollTo(xOrOptions)
      }
    }

    // Override the scrollTo method
    window.scrollTo = enhancedScrollTo as any

    // Enhance scrollIntoView for better performance
    Element.prototype.scrollIntoView = function(options?: boolean | ScrollIntoViewOptions) {
      if (typeof options === 'object' && options?.behavior === 'smooth') {
        const rect = this.getBoundingClientRect()
        const start = window.pageYOffset
        // Adjust offset for header - smaller on mobile
        const headerOffset = window.innerWidth <= 768 ? 60 : 80
        const target = start + rect.top - headerOffset
        
        window.scrollTo({
          top: target,
          behavior: 'smooth'
        })
        return
      }
      
      // Fallback to original scrollIntoView
      originalScrollIntoView.call(this, options)
    }

    // Cleanup function
    return () => {
      window.scrollTo = originalScrollTo
      Element.prototype.scrollIntoView = originalScrollIntoView
    }
  }, [enableSmoothScroll])

  return null
}

export default SmoothScrollEnhancer