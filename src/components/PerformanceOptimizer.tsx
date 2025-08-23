'use client'

import { useEffect } from 'react'

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical fonts
    const preloadFont = (fontUrl: string) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'font'
      link.href = fontUrl
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    }

    // Preload Inter font variations
    preloadFont('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2')
    
    // Optimize scroll performance with faster RAF handling
    let scrollTimer: NodeJS.Timeout | null = null
    const handleScroll = () => {
      // Debounce scroll events for better performance
      if (scrollTimer) clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        // Trigger scroll optimizations
        document.documentElement.style.setProperty('--scroll-optimized', '1')
      }, 16) // ~60fps
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Reduce motion for better performance on slower devices
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotionQuery.matches) {
      document.documentElement.style.setProperty('--motion-reduce', '1')
    }

    // Preconnect to external domains
    const preconnect = (url: string) => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = url
      document.head.appendChild(link)
    }

    preconnect('https://fonts.googleapis.com')
    preconnect('https://fonts.gstatic.com')

    // Service Worker registration for caching
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Silently fail if service worker registration fails
      })
    }

    // Optimize images loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]')
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src || ''
            img.classList.remove('lazy')
            imageObserver.unobserve(img)
          }
        })
      })

      images.forEach(img => imageObserver.observe(img))
    }

    // Initialize lazy loading
    const timer = setTimeout(optimizeImages, 100)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return null
}

export default PerformanceOptimizer
