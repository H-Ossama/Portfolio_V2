'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import ThemeSwitchLoading from '@/components/ThemeSwitchLoading'

type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
  isLoading: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [targetTheme, setTargetTheme] = useState<Theme>('light')

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      setTheme(savedTheme)
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
    setMounted(true)
  }, [])

  // Update localStorage and document class when theme changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('portfolio-theme', theme)
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(theme)
      
      // Update meta theme-color
      const metaThemeColor = document.querySelector('meta[name="theme-color"]')
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#ffffff')
      }
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTargetTheme(newTheme) // Set target theme first
    setIsLoading(true)
    
    // Store the theme switch flag in sessionStorage
    sessionStorage.setItem('theme-switch-reload', 'true')
    
    // Show loading animation with slower, smoother timing
    setTimeout(() => {
      setTheme(newTheme)
      // Trigger page reload after theme change to ensure proper theme application
      setTimeout(() => {
        window.location.reload()
      }, 600)
    }, 400)
  }

  const value = {
    theme,
    toggleTheme,
    setTheme: (newTheme: Theme) => {
      setTargetTheme(newTheme) // Set target theme first
      setIsLoading(true)
      
      // Store the theme switch flag in sessionStorage
      sessionStorage.setItem('theme-switch-reload', 'true')
      
      setTimeout(() => {
        setTheme(newTheme)
        setTimeout(() => {
          window.location.reload()
        }, 600)
      }, 400)
    },
    isLoading
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <div className="dark">{children}</div>
  }

  return (
    <ThemeContext.Provider value={value}>
      <div className={theme}>
        {children}
        <ThemeSwitchLoading 
          isVisible={isLoading} 
          targetTheme={targetTheme} 
        />
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
