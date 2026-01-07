'use client'

import { useEffect, memo } from 'react'
import { usePerformanceMode, getAnimationConfig } from '@/lib/usePerformanceMode'

const PerformanceOptimizer = () => {
  const performanceMode = usePerformanceMode()
  const { 
    enableBackgroundEffects, 
    enableBlurEffects, 
    durationMultiplier 
  } = getAnimationConfig(performanceMode)
  
  useEffect(() => {
    // Apply performance mode to HTML element for CSS targeting
    document.documentElement.dataset.performanceMode = performanceMode
    
    // Apply optimizations based on device capabilities
    if (!enableBackgroundEffects) {
      document.documentElement.classList.add('reduced-motion')
    } else {
      document.documentElement.classList.remove('reduced-motion')
    }
    
    // Disable blur effects on lower-end devices to improve performance
    if (!enableBlurEffects) {
      document.documentElement.classList.add('no-backdrop-blur')
    } else {
      document.documentElement.classList.remove('no-backdrop-blur')
    }
    
    // Add CSS variables for animation speeds
    document.documentElement.style.setProperty('--duration-multiplier', durationMultiplier.toString())
    
    // Optimize scroll performance with better debouncing for mobile
    let scrollTimer: NodeJS.Timeout | null = null
    const handleScroll = () => {
      // Debounce scroll events - more aggressively on mobile
      if (scrollTimer) clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        // Trigger scroll optimizations
        document.documentElement.style.setProperty('--scroll-optimized', '1')
      }, performanceMode === 'low' ? 32 : 16) // 30fps on mobile, 60fps on desktop
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Respect user preference for reduced motion
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotionQuery.matches) {
      document.documentElement.style.setProperty('--motion-reduce', '1')
      document.documentElement.classList.add('reduced-motion')
    }

    // Service Worker registration with proper error handling and version tracking
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      // Delay the service worker registration slightly to improve initial page load performance
      const swRegistrationDelay = performanceMode === 'low' ? 2000 : 1000;
      
      setTimeout(() => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            // Check for updates periodically
            registration.update();
            
            // Handle updates properly
            if (registration.waiting) {
              // New version waiting
              notifyUserOfUpdate(registration);
            }
            
            // Listen for new installations
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing;
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // New version installed but waiting to activate
                    notifyUserOfUpdate(registration);
                  }
                });
              }
            });
          })
          .catch((error) => {
            // Log error but don't affect user experience
            console.warn('Service worker registration failed:', error);
          });
      }, swRegistrationDelay);
      
      // Function to notify about updates (optional implementation)
      const notifyUserOfUpdate = (registration: ServiceWorkerRegistration) => {
        if (registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
      };
      
      // Listen for controller change to reload page after update
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });
    }

    // Optimize images loading with different thresholds based on performance
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]')
      
      // Use larger rootMargin on low-performance devices to load earlier
      const rootMargin = performanceMode === 'low' ? '300px' : '100px'
      
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src || ''
            img.classList.remove('lazy')
            imageObserver.unobserve(img)
          }
        })
      }, { 
        rootMargin,
        threshold: 0.01 // Very small threshold to start loading as soon as image is visible
      })

      images.forEach(img => imageObserver.observe(img))
    }

    // Initialize lazy loading with longer delay on lower-performance devices
    const loadDelay = performanceMode === 'low' ? 200 : 100
    const timer = setTimeout(optimizeImages, loadDelay)
    
    // Add mobile-specific optimizations
    if (performanceMode === 'low') {
      // Add CSS optimizations for mobile
      const style = document.createElement('style')
      style.id = 'mobile-performance-optimizations'
      style.textContent = `
        /* Optimize layout calculations on mobile */
        .lazy-section {
          content-visibility: auto;
          contain-intrinsic-size: 1px 5000px;
        }
        
        /* Reduce CSS animation complexity on mobile */
        @media (max-width: 768px) {
          * {
            will-change: auto !important;
          }
          
          /* Force hardware acceleration for smoother scrolling */
          body {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            perspective: 1000px;
          }
          
          /* Disable hover effects on mobile for better performance */
          .hover-effect {
            transition: none !important;
          }
        }
      `
      
      // Add the styles to the document
      if (!document.getElementById('mobile-performance-optimizations')) {
        document.head.appendChild(style)
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
      
      // Clean up mobile optimizations
      const mobileOptStyle = document.getElementById('mobile-performance-optimizations')
      if (mobileOptStyle) {
        mobileOptStyle.remove()
      }
    }
  }, [performanceMode, enableBackgroundEffects, enableBlurEffects, durationMultiplier])

  return null
}

// Memoize to prevent unnecessary re-renders
export default memo(PerformanceOptimizer)
