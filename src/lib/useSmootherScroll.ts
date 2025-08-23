'use client'

import { useCallback } from 'react'

interface ScrollOptions {
  offset?: number
  duration?: number
  easing?: (t: number) => number
}

// Easing functions for smooth animations
const easingFunctions = {
  easeInOutCubic: (t: number): number => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeOutQuart: (t: number): number => 1 - (--t) * t * t * t,
  easeInOutQuad: (t: number): number => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((
    target: string | Element,
    options: ScrollOptions = {}
  ) => {
    const {
      offset = 80,
      duration = 800,
      easing = easingFunctions.easeInOutCubic
    } = options

    let element: Element | null = null

    if (typeof target === 'string') {
      element = document.querySelector(target)
    } else {
      element = target
    }

    if (!element) {
      console.warn(`Element not found: ${target}`)
      return
    }

    const start = window.pageYOffset
    const elementPosition = element.getBoundingClientRect().top
    const targetPosition = start + elementPosition - offset
    const distance = targetPosition - start
    const startTime = performance.now()

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      const easedProgress = easing(progress)
      
      window.scrollTo(0, start + distance * easedProgress)

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }, [])

  const scrollToTop = useCallback((options: Omit<ScrollOptions, 'offset'> = {}) => {
    const {
      duration = 600,
      easing = easingFunctions.easeOutQuart
    } = options

    const start = window.pageYOffset
    const startTime = performance.now()

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      const easedProgress = easing(progress)
      
      window.scrollTo(0, start * (1 - easedProgress))

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }, [])

  return {
    scrollToElement,
    scrollToTop,
    easingFunctions
  }
}

export default useSmoothScroll