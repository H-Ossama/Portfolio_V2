'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode, memo } from 'react'
import { usePerformanceMode, getAnimationConfig } from '@/lib/usePerformanceMode'

interface RevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
  className?: string
}

const RevealAnimation = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.3, // Much faster duration
  distance = 20, // Smaller distance for smoother feel
  once = true,
  className = ''
}: RevealProps) => {
  const ref = useRef(null)
  const performanceMode = usePerformanceMode()
  const { enableSectionAnimations, durationMultiplier } = getAnimationConfig(performanceMode)
  
  const isInView = useInView(ref, { 
    once, 
    // Start animations much earlier on mobile for better perceived performance
    margin: performanceMode === 'low' ? "300px 0px 0px 0px" : "100px 0px -20px 0px"
  })

  // For low performance mode, we might want to simplify animations significantly
  // or disable them entirely
  if (!enableSectionAnimations) {
    return <div className={className}>{children}</div>
  }
  
  // Reduce animation distance on mobile
  const animDistance = performanceMode === 'low' ? distance * 0.5 : distance

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -animDistance : direction === 'right' ? animDistance : 0,
      y: direction === 'up' ? animDistance : direction === 'down' ? -animDistance : 0,
      scale: direction === 'scale' ? 0.95 : 1, // Less extreme scale for mobile
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: duration * durationMultiplier, // Adjust duration based on performance
        delay: delay * 0.2 * durationMultiplier, // Reduce delay impact even more on mobile
        ease: performanceMode === 'high' 
          ? [0.23, 1, 0.32, 1] // Cubic bezier for desktop
          : "easeOut", // Simpler easing for mobile
      }}
    >
      {children}
    </motion.div>
  )
}

// Memoize to prevent unnecessary re-renders
export default memo(RevealAnimation)
