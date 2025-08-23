'use client'

import { useEffect } from 'react'

const SmoothScrollEnhancer = () => {
  useEffect(() => {
    // Enhanced smooth scrolling polyfill for better cross-browser support
    const originalScrollTo = window.scrollTo.bind(window)
    
    const enhancedScrollTo = (xOrOptions: number | ScrollToOptions, y?: number) => {
      if (typeof xOrOptions === 'object' && xOrOptions !== null) {
        const options = xOrOptions as ScrollToOptions
        if (options.behavior === 'smooth') {
          // Enhanced smooth scroll with better easing
          const start = window.pageYOffset
          const target = options.top || 0
          const distance = target - start
          const duration = 800
          const startTime = performance.now()

          const easeInOutCubic = (t: number) => 
            t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

          const animateScroll = (currentTime: number) => {
            const elapsedTime = currentTime - startTime
            const progress = Math.min(elapsedTime / duration, 1)
            const easedProgress = easeInOutCubic(progress)
            
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
    const originalScrollIntoView = Element.prototype.scrollIntoView
    
    Element.prototype.scrollIntoView = function(options?: boolean | ScrollIntoViewOptions) {
      if (typeof options === 'object' && options?.behavior === 'smooth') {
        const rect = this.getBoundingClientRect()
        const start = window.pageYOffset
        const target = start + rect.top - 80 // Account for header
        
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
  }, [])

  return null
}

export default SmoothScrollEnhancer