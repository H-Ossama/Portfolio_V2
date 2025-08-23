'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

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
  const isInView = useInView(ref, { 
    once, 
    margin: "100px 0px -20px 0px" // Start animations much earlier
  })

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      scale: direction === 'scale' ? 0.8 : 1,
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
        duration,
        delay: delay * 0.3, // Reduce delay impact
        ease: [0.23, 1, 0.32, 1], // Much snappier easing
      }}
    >
      {children}
    </motion.div>
  )
}

export default RevealAnimation
