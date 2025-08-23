'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            opacity: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : 180,
            scale: theme === 'dark' ? 1 : 0.5,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Moon className="w-5 h-5 text-yellow-300" />
        </motion.div>
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            opacity: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : -180,
            scale: theme === 'light' ? 1 : 0.5,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Sun className="w-5 h-5 text-orange-400" />
        </motion.div>
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(circle, rgba(253, 224, 71, 0.2) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(251, 146, 60, 0.2) 0%, transparent 70%)'
        }}
      />
    </motion.button>
  )
}

export default ThemeToggle
