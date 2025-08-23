'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

interface ThemeSwitchLoadingProps {
  isVisible: boolean
  targetTheme: 'dark' | 'light'
}

const ThemeSwitchLoading = ({ isVisible, targetTheme }: ThemeSwitchLoadingProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Background overlay with theme transition */}
          <motion.div
            className={`absolute inset-0 ${
              targetTheme === 'dark' 
                ? 'bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800' 
                : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
            }`}
            initial={{ 
              clipPath: 'circle(0% at 50% 50%)' 
            }}
            animate={{ 
              clipPath: 'circle(150% at 50% 50%)' 
            }}
            exit={{ 
              clipPath: 'circle(0% at 50% 50%)' 
            }}
            transition={{ 
              duration: 1.0, 
              ease: 'easeInOut' 
            }}
          />

          {/* Center animation */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Icon container */}
            <motion.div
              className={`relative w-20 h-20 rounded-full flex items-center justify-center mb-6 ${
                targetTheme === 'dark'
                  ? 'bg-dark-800/80 border border-gray-700/50'
                  : 'bg-white/80 border border-gray-300/50'
              } backdrop-blur-md shadow-2xl`}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 1.5, ease: 'linear', repeat: Infinity },
                scale: { duration: 2, ease: 'easeInOut', repeat: Infinity }
              }}
            >
              {/* Rotating glow effect */}
              <motion.div
                className={`absolute inset-0 rounded-full ${
                  targetTheme === 'dark'
                    ? 'bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30'
                    : 'bg-gradient-to-r from-orange-400/30 via-yellow-400/30 to-amber-400/30'
                }`}
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
              />
              
              {/* Theme icon */}
              <div className="relative z-10">
                {targetTheme === 'dark' ? (
                  <Moon 
                    size={32} 
                    className="text-blue-400 drop-shadow-lg" 
                  />
                ) : (
                  <Sun 
                    size={32} 
                    className="text-orange-400 drop-shadow-lg" 
                  />
                )}
              </div>
            </motion.div>

            {/* Loading text */}
            <motion.div
              className={`text-center ${
                targetTheme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-2">
                Switching to {targetTheme} mode
              </h3>
              
              {/* Animated dots */}
              <div className="flex justify-center space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      targetTheme === 'dark' ? 'bg-blue-400' : 'bg-orange-400'
                    }`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeInOut'
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 rounded-full ${
                  targetTheme === 'dark' 
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
                    : 'bg-gradient-to-r from-orange-400 to-yellow-400'
                }`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.random() * 50 - 25, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ThemeSwitchLoading
