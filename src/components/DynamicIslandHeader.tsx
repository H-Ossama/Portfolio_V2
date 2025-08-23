'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'
import SimpleLanguageSwitcher from './SimpleLanguageSwitcher'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export default function DynamicIslandHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      // Enhanced smooth scrolling with better behavior
      const headerOffset = 80 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Mobile Header - Full Width */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        <div className={`${
          isScrolled
            ? theme === 'dark'
              ? 'bg-dark-900/90 backdrop-blur-xl shadow-glow border-b border-gray-700/20'
              : 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/30'
            : 'bg-transparent'
        }`}>
          <div className="container-custom">
            <div className="flex items-center justify-between h-18 px-6 sm:px-8">
              {/* Mobile Logo */}
              <motion.div
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => scrollToSection('#home')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <div className="w-10 h-10 glass-card rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <Code2 size={20} className={`group-hover:text-gradient transition-all duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`} />
                  </div>
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-lg tracking-wide bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-400 group-hover:to-cyan-300 transition-all duration-300 font-mono">
                    H_Oussama
                  </span>
                  <span className={`text-xs -mt-1 font-medium tracking-wider uppercase opacity-80 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Portfolio
                  </span>
                </div>
              </motion.div>

              {/* Mobile Actions */}
              <div className="flex items-center space-x-3">
                <SimpleLanguageSwitcher variant="mobile" />
                <ThemeToggle />
                {/* Enhanced Mobile Menu Button */}
                <motion.button
                  className={`relative w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X size={20} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu size={20} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Overlay - Restored original sophisticated design */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`fixed inset-x-0 top-18 h-screen backdrop-blur-xl z-40 ${
                theme === 'dark' ? 'bg-dark-950/95' : 'bg-white/95'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="glass-card mx-4 mt-4 rounded-2xl overflow-hidden"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {/* Mobile Menu Header */}
                <div className={`px-6 py-4 border-b ${
                  theme === 'dark' ? 'border-gray-700/30' : 'border-gray-300/30'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 glass-card rounded-lg flex items-center justify-center">
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
                        className="text-gradient"
                      >
                        ✨
                      </motion.div>
                    </div>
                    <div>
                      <h3 className={`font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Navigation</h3>
                      <p className={`text-xs ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>Explore my portfolio</p>
                    </div>
                  </div>
                </div>

                {/* Navigation Items */}
                <nav className="px-4 py-4">
                  {navigation.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`flex items-center justify-between w-full px-4 py-4 text-left font-medium text-lg rounded-xl transition-all duration-300 group ${
                        theme === 'dark'
                          ? 'text-gray-300 hover:text-white hover:bg-white/5'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                      }`}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      whileHover={{ x: 8 }}
                    >
                      <span className="font-medium text-lg">{item.name}</span>
                      <motion.div
                        className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                      </motion.div>
                    </motion.button>
                  ))}
                </nav>

                {/* Mobile Menu Footer */}
                <div className={`px-6 py-4 border-t ${
                  theme === 'dark' ? 'border-gray-700/30' : 'border-gray-300/30'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-sm">
                        HO
                      </div>
                      <div>
                        <p className={`font-medium text-sm ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>H_Oussama</p>
                        <p className={`text-xs ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>Full Stack Developer</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-xs font-medium">Available</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Desktop Header - Dynamic Island */}
      <motion.header 
        className="hidden md:block fixed top-6 left-1/2 z-50"
        style={{ x: '-50%' }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className={`${
            isScrolled
              ? theme === 'dark'
                ? 'bg-dark-900/95 backdrop-blur-xl shadow-glow'
                : 'bg-white/95 backdrop-blur-xl shadow-lg'
              : theme === 'dark'
                ? 'bg-dark-800/60 backdrop-blur-md'
                : 'bg-white/70 backdrop-blur-md'
          } rounded-full border transition-all duration-500 px-8 py-4 ${
            theme === 'dark' ? 'border-gray-700/20' : 'border-gray-200/30'
          }`}
          animate={{
            scale: isScrolled ? 1.02 : 1,
          }}
          whileHover={{ scale: isScrolled ? 1.04 : 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-8">
            {/* Desktop Logo */}
            <motion.div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => scrollToSection('#home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="w-8 h-8 glass-card rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <Code2 size={16} className="icon-theme-primary group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                </div>
                <motion.div
                  className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <span className="font-black tracking-wide bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-400 group-hover:to-cyan-300 transition-all duration-300 font-mono">
                H_Oussama
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-1">
              {navigation.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 font-medium transition-all duration-300 relative group rounded-full ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-white hover:bg-white/5'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-black/5'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <motion.span 
                    className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-6 transition-all duration-300 rounded-full"
                    style={{ transform: 'translateX(-50%)' }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="flex items-center space-x-4">
              <SimpleLanguageSwitcher variant="compact" />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1 }}
              >
                <ThemeToggle />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.header>
    </>
  )
}
