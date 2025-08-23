'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

const ProgrammingSymbolsBackground = () => {
  const { theme } = useTheme()
  
  // Programming language symbols and code snippets
  const symbols = [
    // JavaScript
    { symbol: 'JS', type: 'language', color: 'text-yellow-400', size: 'text-lg' },
    { symbol: '{...}', type: 'syntax', color: 'text-blue-400', size: 'text-sm' },
    { symbol: '=>', type: 'syntax', color: 'text-green-400', size: 'text-base' },
    { symbol: 'const', type: 'keyword', color: 'text-purple-400', size: 'text-xs' },
    
    // HTML
    { symbol: 'HTML', type: 'language', color: 'text-orange-400', size: 'text-lg' },
    { symbol: '<>', type: 'syntax', color: 'text-red-400', size: 'text-base' },
    { symbol: '</>', type: 'syntax', color: 'text-red-400', size: 'text-sm' },
    
    // CSS
    { symbol: 'CSS', type: 'language', color: 'text-blue-500', size: 'text-lg' },
    { symbol: '{}', type: 'syntax', color: 'text-cyan-400', size: 'text-base' },
    { symbol: '#id', type: 'selector', color: 'text-pink-400', size: 'text-xs' },
    
    // React
    { symbol: 'React', type: 'framework', color: 'text-cyan-400', size: 'text-base' },
    { symbol: 'JSX', type: 'language', color: 'text-blue-300', size: 'text-sm' },
    
    // TypeScript
    { symbol: 'TS', type: 'language', color: 'text-blue-600', size: 'text-lg' },
    { symbol: 'interface', type: 'keyword', color: 'text-indigo-400', size: 'text-xs' },
    
    // Python
    { symbol: 'Python', type: 'language', color: 'text-green-500', size: 'text-base' },
    { symbol: 'def', type: 'keyword', color: 'text-yellow-300', size: 'text-xs' },
    
    // Git
    { symbol: 'Git', type: 'tool', color: 'text-orange-500', size: 'text-sm' },
    { symbol: 'npm', type: 'tool', color: 'text-red-500', size: 'text-xs' },
    
    // General symbols
    { symbol: '[ ]', type: 'syntax', color: 'text-emerald-400', size: 'text-base' },
    { symbol: '( )', type: 'syntax', color: 'text-violet-400', size: 'text-sm' },
    { symbol: ';', type: 'syntax', color: 'text-gray-400', size: 'text-lg' },
    { symbol: '&&', type: 'operator', color: 'text-amber-400', size: 'text-base' },
    { symbol: '||', type: 'operator', color: 'text-lime-400', size: 'text-base' },
    { symbol: '===', type: 'operator', color: 'text-teal-400', size: 'text-sm' },
  ]

  // Generate multiple instances of symbols at different positions (optimized)
  const generateSymbolInstances = () => {
    const instances: Array<{
      symbol: string
      type: string
      color: string
      size: string
      top: string
      left: string
      id: number
      delay: number
      duration: number
    }> = []
    
    // Reduced positions for better performance - 8 instead of 12
    const positions = [
      { top: '15%', left: '20%' },
      { top: '25%', left: '80%' },
      { top: '45%', left: '15%' },
      { top: '65%', left: '85%' },
      { top: '30%', left: '70%' },
      { top: '70%', left: '25%' },
      { top: '55%', left: '60%' },
      { top: '85%', left: '75%' },
    ]

    positions.forEach((position, index) => {
      const symbol = symbols[index % symbols.length]
      instances.push({
        ...symbol,
        ...position,
        id: index,
        delay: index * 0.3, // Slightly increased delay for smoother loading
        duration: 10 + (index % 3) * 3 // Simplified duration calculation
      })
    })

    return instances
  }

  const symbolInstances = generateSymbolInstances()

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className={`absolute inset-0 ${theme === 'dark' ? 'opacity-[0.01]' : 'opacity-[0.02]'}`}
        style={{
          backgroundImage: `
            linear-gradient(${theme === 'dark' ? 'rgba(59, 130, 246, 0.05)' : 'rgba(59, 130, 246, 0.08)'} 1px, transparent 1px),
            linear-gradient(90deg, ${theme === 'dark' ? 'rgba(59, 130, 246, 0.05)' : 'rgba(59, 130, 246, 0.08)'} 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Programming symbols - optimized animations */}
      {symbolInstances.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute font-mono font-bold ${item.size} ${
            theme === 'dark' ? item.color : item.color.replace('400', '600').replace('300', '500')
          } opacity-60 dark:opacity-40 select-none`}
          style={{
            top: item.top,
            left: item.left,
          }}
          initial={{ 
            opacity: 0, 
            scale: 0.8,
          }}
          animate={{ 
            opacity: theme === 'dark' ? 0.4 : 0.6,
            scale: 1,
            x: [0, 15, -10, 0],
            y: [0, -10, 8, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
            scale: { duration: 0.8, delay: item.delay },
            opacity: { duration: 0.8, delay: item.delay }
          }}
        >
          {item.symbol}
        </motion.div>
      ))}

      {/* Additional floating code snippets */}
      <motion.div
        className={`absolute top-1/4 right-1/4 font-mono text-xs ${
          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
        } opacity-30 dark:opacity-20`}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        function()
      </motion.div>

      <motion.div
        className={`absolute bottom-1/3 left-1/5 font-mono text-sm ${
          theme === 'dark' ? 'text-green-400' : 'text-green-600'
        } opacity-30 dark:opacity-20`}
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
          rotate: [0, -3, 3, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        useState()
      </motion.div>

      <motion.div
        className={`absolute top-2/3 right-1/6 font-mono text-xs ${
          theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
        } opacity-30 dark:opacity-20`}
        animate={{
          x: [0, 15, 0],
          y: [0, -25, 0],
          rotate: [0, 2, -2, 0]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        .map()
      </motion.div>

      <motion.div
        className={`absolute top-1/6 left-2/3 font-mono text-sm ${
          theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
        } opacity-30 dark:opacity-20`}
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          rotate: [0, 4, -4, 0]
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        &lt;div&gt;
      </motion.div>

      {/* Gradient overlays for depth */}
      <div className={`absolute inset-0 bg-gradient-to-b ${
        theme === 'dark' 
          ? 'from-transparent via-transparent to-dark-950/20' 
          : 'from-transparent via-transparent to-white/20'
      } pointer-events-none`} />
      
      <div className={`absolute inset-0 bg-gradient-to-r ${
        theme === 'dark'
          ? 'from-dark-950/10 via-transparent to-dark-950/10'
          : 'from-white/10 via-transparent to-white/10'
      } pointer-events-none`} />
    </div>
  )
}

export default ProgrammingSymbolsBackground
