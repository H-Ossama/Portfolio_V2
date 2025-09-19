'use client'

import { useEffect } from 'react'
import { usePerformanceMode, getAnimationConfig } from '@/lib/usePerformanceMode'

// Create a lightweight version that doesn't cause layout shifts
const SmoothScrollEnhancer = () => {
  const performanceMode = usePerformanceMode()
  const { enableSmoothScroll } = getAnimationConfig(performanceMode)
  
  useEffect(() => {
    // Skip smooth scrolling enhancements on low-performance devices
    if (!enableSmoothScroll) {
      return
    }
    
    // Handle anchor links with less layout thrashing
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.pathname === window.location.pathname) {
        e.preventDefault();
        
        // Get the target element by ID (without getBoundingClientRect)
        const targetId = anchor.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Simplified scrolling without forced reflow
          const headerOffset = 80;
          
          // Use scrollIntoView with offset using CSS scroll-margin-top
          targetElement.style.scrollMarginTop = `${headerOffset}px`;
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };
    
    // Add listener with passive option for better performance
    document.addEventListener('click', handleAnchorClick, { passive: false });
    
    // Cleanup
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [enableSmoothScroll]);

  return null;
};

export default SmoothScrollEnhancer;