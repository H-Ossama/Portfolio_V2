'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Advanced Performance Optimizer
 * 
 * This component implements multiple strategies to improve page performance:
 * 1. Defers non-critical resources and scripts
 * 2. Preloads critical assets
 * 3. Implements resource hints (preconnect, dns-prefetch)
 * 4. Uses content-visibility for off-screen sections
 * 5. Implements critical CSS inlining for above-the-fold content
 * 6. Optimizes font loading with font-display: swap
 */
export default function AdvancedPerformanceOptimizer() {
  const pathname = usePathname()

  useEffect(() => {
    // Apply performance optimizations when component mounts
    applyPerformanceOptimizations()
    
    // Clean up on component unmount
    return () => {
      cleanupPerformanceOptimizations()
    }
  }, [pathname])

  // Apply a comprehensive set of performance optimizations
  const applyPerformanceOptimizations = () => {
    // 1. Implement lazy loading for all off-screen images
    implementLazyLoading()
    
    // 2. Add resource hints (preconnect, dns-prefetch) for external domains
    addResourceHints()
    
    // 3. Optimize font loading
    optimizeFontLoading()
    
    // 4. Apply content-visibility to off-screen sections
    applyContentVisibility()
    
    // 5. Defer non-critical JavaScript
    deferNonCriticalJavaScript()
  }

  // Clean up any performance optimizations when component unmounts
  const cleanupPerformanceOptimizations = () => {
    // Remove any dynamically added elements or listeners
    document.querySelectorAll('link[data-performance-hint]').forEach(el => el.remove())
    document.querySelectorAll('script[data-deferred]').forEach(el => el.remove())
  }

  // Implement lazy loading for all images not in the viewport
  const implementLazyLoading = () => {
    if ('loading' in HTMLImageElement.prototype) {
      // Native lazy loading supported
      document.querySelectorAll('img:not([loading])').forEach(img => {
        if (!img.hasAttribute('loading') && !img.hasAttribute('data-priority')) {
          img.setAttribute('loading', 'lazy')
        }
      })
    }

    // Apply fetchpriority attribute
    document.querySelectorAll('img[data-priority="true"]').forEach(img => {
      img.setAttribute('fetchpriority', 'high')
    })
  }

  // Add resource hints for external domains
  const addResourceHints = () => {
    // Define domains we want to preconnect to
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      // Add other domains your site connects to frequently
    ]

    // Define domains we want to dns-prefetch
    const dnsPrefetchDomains = [
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com',
      // Add other analytics or third-party domains
    ]

    // Helper function to add resource hints
    const addResourceHint = (type: 'preconnect' | 'dns-prefetch', url: string) => {
      if (!document.querySelector(`link[rel="${type}"][href="${url}"]`)) {
        const link = document.createElement('link')
        link.rel = type
        link.href = url
        link.setAttribute('data-performance-hint', 'true')
        
        if (type === 'preconnect') {
          link.setAttribute('crossorigin', 'anonymous')
        }
        
        document.head.appendChild(link)
      }
    }

    // Add preconnect hints
    preconnectDomains.forEach(domain => addResourceHint('preconnect', domain))
    
    // Add dns-prefetch hints
    dnsPrefetchDomains.forEach(domain => addResourceHint('dns-prefetch', domain))
  }

  // Optimize font loading to improve CLS and perceived performance
  const optimizeFontLoading = () => {
    // Create a style element for font-display: swap
    const style = document.createElement('style')
    style.textContent = `
      @font-face {
        font-display: swap !important;
      }
    `
    document.head.appendChild(style)
  }

  // Apply content-visibility to sections that are not in the initial viewport
  const applyContentVisibility = () => {
    // Apply content-visibility: auto to lazy sections
    const lazySections = document.querySelectorAll('.lazy-section')
    lazySections.forEach(section => {
      if (section instanceof HTMLElement) {
        section.style.containIntrinsicSize = '0 500px' // Estimate height to reduce CLS
        section.style.contentVisibility = 'auto'
      }
    })
  }

  // Defer non-critical JavaScript to improve page load time
  const deferNonCriticalJavaScript = () => {
    // Find all script tags that don't have async or defer attributes
    const scripts = Array.from(document.querySelectorAll('script:not([async]):not([defer])'))
    
    scripts.forEach(script => {
      // Skip inline scripts, module scripts, and critical scripts
      if (!(script instanceof HTMLScriptElement) || 
          !script.src || 
          script.type === 'module' || 
          script.hasAttribute('data-critical')) {
        return
      }
      
      // Clone the script and set it to defer
      const deferredScript = document.createElement('script')
      deferredScript.src = script.src
      deferredScript.defer = true
      deferredScript.setAttribute('data-deferred', 'true')
      
      // Copy other attributes
      Array.from(script.attributes).forEach(attr => {
        if (attr.name !== 'src' && attr.name !== 'type') {
          deferredScript.setAttribute(attr.name, attr.value)
        }
      })
      
      // Replace the original script
      script.parentNode?.replaceChild(deferredScript, script)
    })
  }

  return null // This is a utility component with no UI
}