'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { useRouter, usePathname } from 'next/navigation'

// Language Data
const languages = [
    { code: 'en', label: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'fr', label: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'DE', name: 'Deutsch', flag: '🇩🇪' }
]

export default function FloatingControls() {
    const { theme, toggleTheme } = useTheme()
    const router = useRouter()
    const pathname = usePathname()
    const [mounted, setMounted] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        setMounted(true)
        const checkSize = () => setIsDesktop(window.innerWidth >= 768)
        checkSize()
        window.addEventListener('resize', checkSize)
        return () => window.removeEventListener('resize', checkSize)
    }, [])

    const getCurrentLocale = () => {
        const segments = pathname.split('/')
        const firstSegment = segments[1]
        if (['en', 'fr', 'de'].includes(firstSegment)) {
            return firstSegment
        }
        return 'en'
    }

    const currentLocale = getCurrentLocale()

    const changeLanguage = (newLocale: string) => {
        let pathWithoutLocale = pathname
        if (pathname.startsWith('/en') || pathname.startsWith('/fr') || pathname.startsWith('/de')) {
            pathWithoutLocale = pathname.substring(3) || '/'
        }
        const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
        router.push(newPath)
    }

    if (!mounted) return null

    return (
        <div
            className="fixed z-[9999] bottom-6 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 flex flex-row md:flex-col gap-4 md:gap-6 pointer-events-none md:pl-4"
            style={{ position: 'fixed', zIndex: 9999 }}
        >
            <div className="pointer-events-auto flex flex-row md:flex-col gap-4 md:gap-6">
                {/* Theme Switcher */}
                <div
                    className={`relative w-32 md:w-12 h-10 md:h-36 backdrop-blur-md border rounded-full p-1 flex flex-row md:flex-col justify-between cursor-pointer shadow-xl transition-all duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-black/60 border-white/10' : 'bg-white/80 border-gray-200'
                        }`}
                    onClick={toggleTheme}
                >
                    {/* Sliding Pill */}
                    <motion.div
                        className={`absolute top-1 bottom-1 h-[calc(100%-8px)] w-[calc(50%-4px)] md:left-1 md:right-1 md:w-[calc(100%-8px)] md:h-[calc(50%-4px)] rounded-full shadow-md z-0 ${theme === 'dark' ? 'bg-gray-800' : 'bg-accent-cyan'
                            }`}
                        animate={{
                            left: isDesktop ? '4px' : (theme === 'light' ? '4px' : '52%'),
                            top: isDesktop ? (theme === 'light' ? '4px' : '52%') : '4px',
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />

                    {/* Light Option */}
                    <div className="relative z-10 flex-1 flex items-center justify-center">
                        <span
                            className={`transform md:-rotate-90 text-[10px] md:text-sm font-medium tracking-wider transition-colors duration-200 ${theme === 'light' ? 'text-gray-900 font-bold' : 'text-gray-500 dark:text-gray-400'}`}
                        >
                            Light
                        </span>
                    </div>

                    {/* Dark Option */}
                    <div className="relative z-10 flex-1 flex items-center justify-center">
                        <span
                            className={`transform md:-rotate-90 text-[10px] md:text-sm font-medium tracking-wider transition-colors duration-200 ${theme === 'dark' ? 'text-white font-bold' : 'text-gray-500 dark:text-gray-400'}`}
                        >
                            Dark
                        </span>
                    </div>
                </div>

                {/* Language Switcher - Horizontal on mobile, Vertical on md */}
                <div className={`relative w-40 md:w-12 h-10 md:h-48 backdrop-blur-md border rounded-full p-1 flex flex-row md:flex-col justify-between shadow-xl transition-all duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-black/60 border-white/10' : 'bg-white/80 border-gray-200'
                    }`}>

                    {/* Sliding Pill Indicator for Language */}
                    <motion.div
                        className={`absolute top-1 bottom-1 h-[calc(100%-8px)] w-[calc(33.33%-5px)] md:left-1 md:right-1 md:w-[calc(100%-8px)] md:h-[calc(33.33%-5px)] rounded-full shadow-md z-0 ${theme === 'dark' ? 'bg-gray-800' : 'bg-accent-cyan'
                            }`}
                        animate={{
                            left: isDesktop ? '4px' : (currentLocale === 'en' ? '4px' : currentLocale === 'fr' ? 'calc(33.33% + 2px)' : 'calc(66.66%)'),
                            top: isDesktop ? (currentLocale === 'en' ? '4px' : currentLocale === 'fr' ? 'calc(33.33% + 2px)' : 'calc(66.66%)') : '4px',
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />

                    {languages.map((lang) => (
                        <div
                            key={lang.code}
                            className="relative z-10 flex-1 flex items-center justify-center cursor-pointer"
                            onClick={() => changeLanguage(lang.code)}
                        >
                            <span
                                className={`transform md:-rotate-90 text-[10px] md:text-sm font-medium tracking-wider transition-colors duration-200 ${currentLocale === lang.code
                                    ? 'text-gray-900 dark:text-white font-bold'
                                    : 'text-gray-500 dark:text-gray-400'
                                    }`}
                            >
                                {lang.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
