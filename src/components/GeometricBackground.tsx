'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

const GeometricBackground = () => {
  const { theme } = useTheme()
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid Pattern */}
      <div 
        className={`absolute inset-0 ${theme === 'dark' ? 'opacity-[0.02]' : 'opacity-[0.03]'}`}
        style={{
          backgroundImage: `
            linear-gradient(${theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.15)'} 1px, transparent 1px),
            linear-gradient(90deg, ${theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.15)'} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Floating Geometric Shapes */}
      <motion.div
        className={`absolute top-20 left-10 w-2 h-2 ${theme === 'dark' ? 'bg-blue-400 opacity-20' : 'bg-blue-500 opacity-30'}`}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className={`absolute top-32 right-20 w-3 h-3 ${theme === 'dark' ? 'bg-purple-400 opacity-20' : 'bg-purple-500 opacity-30'} rotate-45`}
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
          rotate: [45, 225, 405]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className={`absolute top-64 left-1/4 w-1 h-1 ${theme === 'dark' ? 'bg-cyan-400 opacity-30' : 'bg-cyan-500 opacity-40'} rounded-full`}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-1/3 w-2 h-2 bg-emerald-400 opacity-20"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        animate={{
          x: [0, -20, 0],
          y: [0, 25, 0],
          rotate: [0, 120, 240, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-48 left-1/2 w-3 h-3 bg-yellow-400 opacity-15 rotate-12"
        animate={{
          x: [0, 35, 0],
          y: [0, -40, 0],
          rotate: [12, 192, 372]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Large Background Gradients */}
      <motion.div
        className="absolute top-10 right-10 w-96 h-96 bg-gradient-radial from-blue-500/5 to-transparent rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-radial from-purple-500/5 to-transparent rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.05, 0.15]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial from-cyan-500/5 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.18, 0.08]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating Code Elements */}
      <motion.div
        className="absolute top-40 left-20 text-blue-400/10 font-mono text-sm select-none"
        animate={{
          y: [0, -10, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {'{ }'}
      </motion.div>
      
      <motion.div
        className="absolute top-80 right-32 text-purple-400/10 font-mono text-xs select-none"
        animate={{
          y: [0, 15, 0],
          opacity: [0.15, 0.05, 0.15]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        &lt;/&gt;
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-1/4 text-cyan-400/10 font-mono text-xs select-none"
        animate={{
          y: [0, -20, 0],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        React
      </motion.div>
      
      <motion.div
        className="absolute bottom-60 right-20 text-emerald-400/10 font-mono text-sm select-none"
        animate={{
          y: [0, 12, 0],
          opacity: [0.12, 0.02, 0.12]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        const
      </motion.div>
    </div>
  )
}

export default GeometricBackground
