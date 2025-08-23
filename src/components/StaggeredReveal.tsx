'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface StaggeredRevealProps {
  children: ReactNode[]
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'
  staggerDelay?: number
  duration?: number
  distance?: number
  once?: boolean
  className?: string
}

const StaggeredReveal = ({
  children,
  direction = 'up',
  staggerDelay = 0.1,
  duration = 0.6,
  distance = 30,
  once = true,
  className = ''
}: StaggeredRevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once, 
    margin: "-50px 0px -50px 0px"
  })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      }
    }
  }

  const itemVariants = {
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
      transition: {
        duration,
        ease: [0.25, 0.25, 0.25, 0.75],
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default StaggeredReveal
