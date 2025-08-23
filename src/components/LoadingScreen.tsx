'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const LoadingScreen = ({ onComplete, theme = 'dark' }: { onComplete: () => void; theme?: 'dark' | 'light' }) => {
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 100) // Reduced from 200ms
          return 100
        }
        return prev + 8 // Increased from 5 to make it even faster
      })
    }, 20) // Reduced from 30ms for faster updates
    
    return () => clearInterval(timer)
  }, [onComplete])

  const isDark = theme === 'dark'

  return (
    <motion.div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isDark 
          ? 'bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800' 
          : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
      }`}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }} // Reduced from 0.4
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 floating-element ${
          isDark ? 'bg-gradient-glow' : 'bg-gradient-to-r from-blue-400 to-purple-400'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full opacity-15 floating-element-delayed ${
          isDark ? 'bg-gradient-purple-glow' : 'bg-gradient-to-r from-purple-400 to-pink-400'
        }`}></div>
      </div>
      
      <div className="relative z-10 text-center">
        {/* Logo Animation - simplified */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
            isDark 
              ? 'glass-card logo-glow' 
              : 'bg-white/80 border border-gray-300/50 shadow-lg'
          }`}>
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`text-4xl font-bold ${
                isDark ? 'text-gradient' : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
              }`}
            >
              HO
            </motion.div>
          </div>
          <h1 className={`text-2xl font-bold mb-2 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Hattan Oussama</h1>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Portfolio Loading...</p>
        </motion.div>
        
        {/* Progress Bar */}
        <div className={`w-80 h-2 rounded-full overflow-hidden mx-auto mb-4 ${
          isDark ? 'bg-dark-700' : 'bg-gray-300'
        }`}>
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        {/* Progress Text */}
        <motion.p
          className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {progress}% Complete
        </motion.p>
        
        {/* Floating Code Elements */}
        <div className={`absolute -top-10 -left-10 opacity-30 font-mono text-sm floating-element ${
          isDark ? 'text-blue-400' : 'text-blue-600'
        }`}>
          {'{ }'}
        </div>
        <div className={`absolute -top-5 -right-15 opacity-30 font-mono text-xs floating-element-delayed ${
          isDark ? 'text-purple-400' : 'text-purple-600'
        }`}>
          &lt;/&gt;
        </div>
        <div className={`absolute -bottom-10 -left-15 opacity-30 font-mono text-xs floating-element ${
          isDark ? 'text-cyan-400' : 'text-cyan-600'
        }`}>
          React
        </div>
        <div className={`absolute -bottom-5 -right-10 opacity-30 font-mono text-sm floating-element-delayed ${
          isDark ? 'text-pink-400' : 'text-pink-600'
        }`}>
          JS
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
