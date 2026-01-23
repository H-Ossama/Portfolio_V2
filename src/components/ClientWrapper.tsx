'use client'

import { useState, useEffect, ReactNode } from 'react'
import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useNavigation } from '@/contexts/NavigationContext'

// Dynamically import LoadingScreen to reduce initial bundle size
const LoadingScreen = dynamic(() => import('./LoadingScreen'), {
  ssr: false
})

interface ClientWrapperProps {
  children: ReactNode
}

const ClientWrapper = ({ children }: ClientWrapperProps) => {
  const { setIsLoading: setGlobalIsLoading } = useNavigation()
  const [isLoading, setIsLoading] = useState(true)
  const [isInitialized, setIsInitialized] = useState(false)
  const [showInitialLoading, setShowInitialLoading] = useState(true)
  const [currentTheme, setCurrentTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    // Get the theme from localStorage or system preference - optimized version
    const getInitialTheme = (): 'dark' | 'light' => {
      try {
        const savedTheme = localStorage.getItem('portfolio-theme')
        if (savedTheme === 'dark' || savedTheme === 'light') {
          return savedTheme
        }
        // Check system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      } catch {
        return 'dark'
      }
    }

    // Set the current theme for the loading screen
    setCurrentTheme(getInitialTheme())

    // Check if this is a theme switch reload
    const isThemeSwitch = sessionStorage.getItem('theme-switch-reload') === 'true'

    if (isThemeSwitch) {
      // This is a theme switch reload - don't show initial loading screen
      sessionStorage.removeItem('theme-switch-reload')
      setShowInitialLoading(false)
      setIsLoading(false)
      setGlobalIsLoading(false)
      setIsInitialized(true)
    } else {
      // Reduce initial loading delay significantly for faster first paint
      const timer = setTimeout(() => {
        setIsInitialized(true)
      }, 10) // Reduced from 100ms to 10ms

      return () => clearTimeout(timer)
    }
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setGlobalIsLoading(false)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && isInitialized && showInitialLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} theme={currentTheme} />
        )}
      </AnimatePresence>

      {(!isLoading || !showInitialLoading) && (
        <div className="min-h-screen">
          {children}
        </div>
      )}
    </>
  )
}

export default ClientWrapper
