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

    useEffect(() => {
        setMounted(true)
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
        <div className="fixed bottom-6 right-6 md:bottom-auto md:right-auto md:left-0 md:top-1/2 md:-translate-y-1/2 z-50 flex flex-row md:flex-col gap-4 md:gap-6 pointer-events-none">
            <div className="pointer-events-auto flex flex-row md:flex-col gap-4 md:gap-6">
                {/* Theme Switcher */}
                <div
                    className="relative w-32 md:w-12 h-10 md:h-36 bg-gray-200/20 backdrop-blur-md dark:bg-black/40 border border-white/10 rounded-full p-1 flex flex-row md:flex-col justify-between cursor-pointer shadow-lg transition-transform hover:scale-105"
                    onClick={toggleTheme}
                >
                    {/* Sliding Pill */}
                    <motion.div
                        className="absolute top-1 bottom-1 h-[calc(100%-8px)] w-[calc(50%-4px)] md:left-1 md:right-1 md:w-[calc(100%-8px)] md:h-[calc(50%-4px)] bg-white dark:bg-gray-800 rounded-full shadow-md z-0"
                        animate={{
                            left: theme === 'light' ? '4px' : '52%',
                            top: typeof window !== 'undefined' && window.innerWidth >= 768 ? (theme === 'light' ? '4px' : '52%') : '4px',
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
                <div className="relative w-40 md:w-12 h-10 md:h-48 bg-gray-200/20 backdrop-blur-md dark:bg-black/40 border border-white/10 rounded-full p-1 flex flex-row md:flex-col justify-between shadow-lg transition-transform hover:scale-105">

                    {/* Sliding Pill Indicator for Language */}
                    <motion.div
                        className="absolute top-1 bottom-1 h-[calc(100%-8px)] w-[calc(33.33%-5px)] md:left-1 md:right-1 md:w-[calc(100%-8px)] md:h-[calc(33.33%-5px)] bg-white dark:bg-gray-800 rounded-full shadow-md z-0"
                        animate={{
                            left: currentLocale === 'en' ? '4px' : currentLocale === 'fr' ? 'calc(33.33% + 2px)' : 'calc(66.66%)',
                            top: typeof window !== 'undefined' && window.innerWidth >= 768 ? (currentLocale === 'en' ? '4px' : currentLocale === 'fr' ? 'calc(33.33% + 2px)' : 'calc(66.66%)') : '4px',
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
                                className={`transform -rotate-90 text-xs md:text-sm font-medium tracking-wider transition-colors duration-200 ${currentLocale === lang.code
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
