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
      className="fixed top-0 left-0 right-0 h-0.5 bg-accent-cyan origin-left z-50 will-change-transform shadow-[0_0_15px_rgba(102,217,237,0.7)]"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgress
