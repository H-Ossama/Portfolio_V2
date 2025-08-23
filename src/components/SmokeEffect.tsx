'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { useEffect, useState } from 'react'

const SmokeEffect = () => {
  const { theme } = useTheme()
  const [smokeParticles, setSmokeParticles] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    opacity: number
    duration: number
    delay: number
  }>>([])

  useEffect(() => {
    // Generate smoke particles
    const particles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random x position (percentage)
      y: 20 + Math.random() * 60, // Random y position between 20% and 80%
      size: 80 + Math.random() * 120, // Random size between 80px and 200px
      opacity: 0.03 + Math.random() * 0.05, // Very subtle opacity
      duration: 8 + Math.random() * 12, // Duration between 8-20 seconds
      delay: Math.random() * 5, // Random delay up to 5 seconds
    }))
    setSmokeParticles(particles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Smoke particles */}
      {smokeParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full blur-xl ${
            theme === 'dark' 
              ? 'bg-gradient-radial from-white/40 via-white/20 to-transparent' 
              : 'bg-gradient-radial from-gray-600/40 via-gray-400/20 to-transparent'
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, 50, -30, 20, 0],
            y: [0, -40, -80, -120, -160],
            scale: [0.8, 1.2, 1.5, 1.8, 2.2],
            opacity: [
              particle.opacity,
              particle.opacity * 1.5,
              particle.opacity * 1.2,
              particle.opacity * 0.8,
              0
            ],
            rotate: [0, 45, 90, 135, 180],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut",
            repeatDelay: 2,
          }}
        />
      ))}

      {/* Floating smoke wisps */}
      <motion.div
        className={`absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-2xl ${
          theme === 'dark'
            ? 'bg-gradient-radial from-blue-300/20 via-purple-300/10 to-transparent'
            : 'bg-gradient-radial from-blue-500/30 via-purple-500/15 to-transparent'
        }`}
        animate={{
          x: [0, 60, 120, 60, 0],
          y: [0, -30, -60, -30, 0],
          scale: [1, 1.3, 1.6, 1.3, 1],
          opacity: [0.3, 0.5, 0.4, 0.3, 0.2],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute top-2/3 right-1/3 w-40 h-40 rounded-full blur-2xl ${
          theme === 'dark'
            ? 'bg-gradient-radial from-cyan-300/15 via-teal-300/8 to-transparent'
            : 'bg-gradient-radial from-cyan-500/25 via-teal-500/12 to-transparent'
        }`}
        animate={{
          x: [0, -80, -160, -80, 0],
          y: [0, 40, 80, 40, 0],
          scale: [1.2, 1.5, 1.8, 1.5, 1.2],
          opacity: [0.2, 0.4, 0.3, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <motion.div
        className={`absolute top-1/2 left-2/3 w-28 h-28 rounded-full blur-xl ${
          theme === 'dark'
            ? 'bg-gradient-radial from-pink-300/20 via-rose-300/10 to-transparent'
            : 'bg-gradient-radial from-pink-500/30 via-rose-500/15 to-transparent'
        }`}
        animate={{
          x: [0, 40, 80, 40, 0],
          y: [0, -50, -100, -50, 0],
          scale: [0.9, 1.2, 1.5, 1.2, 0.9],
          opacity: [0.25, 0.4, 0.35, 0.25, 0.15],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7,
        }}
      />

      {/* Atmospheric haze layers */}
      <motion.div
        className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-purple-900/5 via-transparent to-blue-900/5'
            : 'bg-gradient-to-br from-purple-200/10 via-transparent to-blue-200/10'
        }`}
        animate={{
          opacity: [0.3, 0.5, 0.4, 0.3],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-tl from-emerald-900/3 via-transparent to-cyan-900/3'
            : 'bg-gradient-to-tl from-emerald-200/8 via-transparent to-cyan-200/8'
        }`}
        animate={{
          opacity: [0.2, 0.4, 0.3, 0.2],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      />

      {/* Subtle moving fog */}
      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-32 ${
          theme === 'dark'
            ? 'bg-gradient-to-t from-gray-900/10 via-gray-800/5 to-transparent'
            : 'bg-gradient-to-t from-gray-300/15 via-gray-200/8 to-transparent'
        } blur-sm`}
        animate={{
          x: [0, 100, -50, 0],
          opacity: [0.3, 0.5, 0.4, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute top-0 left-0 right-0 h-24 ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-gray-900/8 via-gray-800/4 to-transparent'
            : 'bg-gradient-to-b from-gray-300/12 via-gray-200/6 to-transparent'
        } blur-sm`}
        animate={{
          x: [0, -80, 40, 0],
          opacity: [0.2, 0.4, 0.3, 0.2],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </div>
  )
}

export default SmokeEffect
