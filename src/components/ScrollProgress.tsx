'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  
  // Enhanced spring configuration for smoother animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
    restDelta: 0.001,
    mass: 0.1
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 origin-left z-50 will-change-transform"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgress
