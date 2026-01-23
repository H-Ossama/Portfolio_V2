'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

import { useRouter, usePathname } from 'next/navigation'

const navigation = [
  { name: 'home', href: '#home', num: '01' },
  { name: 'expertise', href: '#expertise', num: '02' },
  { name: 'work', href: '#work', num: '03' },
  { name: 'education', href: '#education', num: '04' },
  { name: 'experience', href: '#experience', num: '05' },
  { name: 'contact', href: '#contact', num: '06' },
]

export default function DynamicIslandHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      // Use both window.scrollY and document.documentElement.scrollTop for better compatibility
      const scrollPos = window.scrollY || document.documentElement.scrollTop || window.pageYOffset;
      setIsScrolled(scrollPos > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initialize on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const isHomePage = pathname === '/' || (pathname.split('/').length === 2 && ['en', 'fr', 'de'].includes(pathname.split('/')[1]));

      if (!isHomePage) {
        const locale = pathname.split('/')[1] || 'en';
        // Check if locale is valid, if not default to en
        const validLocale = ['en', 'fr', 'de'].includes(locale) ? locale : 'en';
        router.push(`/${validLocale}${href}`)
        return
      }

      const elementId = href.slice(1)
      setIsMenuOpen(false)
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }
    // Handle external or internal routes
    window.location.href = href
  }

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-[9999] transition-all duration-500">
        <div className={`flex items-center justify-between px-6 h-16 transition-all duration-300 ${isScrolled
          ? (theme === 'dark' ? 'bg-dark-900/95 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-md')
          : 'bg-transparent'
          }`}>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('#home')}>
            <span className={`font-mono text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              H_Oussama<span className="text-accent-cyan">._</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* <ThemeToggle /> */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors ${theme === 'dark' ? 'text-white hover:text-accent-cyan' : 'text-gray-900 hover:text-accent-cyan'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`absolute top-full left-0 right-0 h-screen ${theme === 'dark' ? 'bg-dark-950/95' : 'bg-white/95'} backdrop-blur-xl p-8`}
            >
              <nav className="flex flex-col gap-6">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center gap-4 text-left group"
                  >
                    <span className="text-accent-cyan font-mono text-sm">{'//'} {item.num}</span>
                    <span className="text-2xl font-bold uppercase tracking-tight group-hover:text-accent-cyan transition-colors">{item.name}</span>
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Desktop Header */}
      <header className="hidden md:block fixed top-8 left-1/2 -translate-x-1/2 z-[9999]">
        <motion.div
          layout
          className={`px-8 py-4 rounded-full border transition-all duration-500 ${isScrolled
            ? (theme === 'dark' ? 'bg-dark-900/90 border-white/10 shadow-2xl backdrop-blur-xl' : 'bg-white/90 border-black/10 shadow-xl backdrop-blur-xl')
            : (theme === 'dark' ? 'bg-black/60 border-white/10 backdrop-blur-md shadow-lg' : 'bg-white/60 border-black/10 backdrop-blur-md shadow-md')
            }`}
        >
          <div className="flex items-center gap-12">
            <div
              className="flex items-center gap-2 cursor-pointer group overflow-hidden whitespace-nowrap origin-left"
              onClick={() => scrollToSection('#home')}
            >
              <span className={`font-mono text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                H_Oussama<span className="text-accent-cyan">._</span>
              </span>
            </div>

            <nav className="flex items-center gap-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative group py-1"
                >
                  <div className="flex items-center gap-1">
                    <span className="text-accent-cyan font-mono text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">{'//'}</span>
                    <span className={`font-mono text-[10px] mr-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{item.num}</span>
                    <span className={`text-xs uppercase tracking-widest font-bold transition-colors ${theme === 'dark' ? 'text-white group-hover:text-accent-cyan' : 'text-gray-900 group-hover:text-accent-cyan'
                      }`}>{item.name}</span>
                  </div>
                  <div className="absolute -bottom-1 left-0 right-0 h-px bg-accent-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {/* <SimpleLanguageSwitcher variant="compact" />
              <ThemeToggle /> */}
            </div>
          </div>
        </motion.div>
      </header>
    </>
  )
}
