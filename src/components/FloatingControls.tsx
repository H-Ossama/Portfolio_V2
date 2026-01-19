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
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 pl-2 md:pl-4 pointer-events-none">
            <div className="pointer-events-auto flex flex-col gap-6">
                {/* Theme Switcher */}
                <div
                    className="relative w-10 md:w-12 h-32 md:h-36 bg-gray-200/20 backdrop-blur-md dark:bg-black/40 border border-white/10 rounded-full p-1 flex flex-col justify-between cursor-pointer shadow-lg transition-transform hover:scale-105"
                    onClick={toggleTheme}
                >
                    {/* Sliding Pill */}
                    <motion.div
                        className="absolute left-1 right-1 w-[calc(100%-8px)] h-[calc(50%-4px)] bg-white dark:bg-gray-800 rounded-full shadow-md z-0"
                        animate={{
                            top: theme === 'light' ? '4px' : '52%',
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />

                    {/* Light Option */}
                    <div className="relative z-10 flex-1 flex items-center justify-center">
                        <span
                            className={`transform -rotate-90 text-xs md:text-sm font-medium tracking-wider transition-colors duration-200 ${theme === 'light' ? 'text-gray-900 font-bold' : 'text-gray-500 dark:text-gray-400'}`}
                        >
                            Light
                        </span>
                    </div>

                    {/* Dark Option */}
                    <div className="relative z-10 flex-1 flex items-center justify-center">
                        <span
                            className={`transform -rotate-90 text-xs md:text-sm font-medium tracking-wider transition-colors duration-200 ${theme === 'dark' ? 'text-white font-bold' : 'text-gray-500 dark:text-gray-400'}`}
                        >
                            Dark
                        </span>
                    </div>
                </div>

                {/* Language Switcher - Vertical Pill */}
                <div className="relative w-10 md:w-12 h-44 md:h-48 bg-gray-200/20 backdrop-blur-md dark:bg-black/40 border border-white/10 rounded-full p-1 flex flex-col justify-between shadow-lg transition-transform hover:scale-105">

                    {/* Sliding Pill Indicator for Language */}
                    <motion.div
                        className="absolute left-1 right-1 w-[calc(100%-8px)] h-[calc(33.33%-5px)] bg-white dark:bg-gray-800 rounded-full shadow-md z-0"
                        animate={{
                            top: currentLocale === 'en' ? '4px' : currentLocale === 'fr' ? 'calc(33.33% + 2px)' : 'calc(66.66%)',
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
