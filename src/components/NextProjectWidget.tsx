'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { useState, useEffect } from 'react'

interface NextProjectWidgetProps {
    project: {
        id: string | number
        title: string
        image?: string
        [key: string]: any
    }
    locale: string
}

export default function NextProjectWidget({ project, locale }: NextProjectWidgetProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Delay appearance to not distract immediately
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 2000)

        const handleScroll = () => {
            // Hide if reached the bottom footer to avoid overlap? 
            // Or just let it float.
            // Let's keep it simple for now.
        }

        return () => clearTimeout(timer)
    }, [])

    if (!project) return null

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.4, type: "spring" }}
                    className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40 hidden md:block" // Hidden on mobile to avoid clutter
                >
                    <div className="relative group">
                        <Link href={`/${locale}/projects/${project.id}`} className="block">
                            <div className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 w-72 transform transition-transform duration-300 hover:-translate-y-1">
                                {/* Image Preview */}
                                <div className="h-36 relative overflow-hidden bg-dark-900">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-800">
                                            <span className="text-gray-500 text-xs">No Preview</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-80" />

                                    <div className="absolute bottom-3 left-4">
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-cyan mb-1 block shadow-black drop-shadow-md">Next Project</span>
                                    </div>
                                </div>

                                {/* Interactive Footer */}
                                <div className="p-4 bg-white dark:bg-dark-800 flex items-center justify-between relative z-10">
                                    <h4 className="font-bold text-dark-900 dark:text-white text-sm line-clamp-1 pr-2">{project.title}</h4>
                                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-dark-900 dark:text-white group-hover:bg-accent-cyan group-hover:text-white transition-all duration-300">
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Close Button */}
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                setIsVisible(false)
                            }}
                            className="absolute -top-3 -right-3 w-8 h-8 bg-dark-900 text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer transform scale-0 group-hover:scale-100 transition-transform duration-200 border border-white/10 hover:bg-red-500"
                            aria-label="Close Preview"
                        >
                            <X size={14} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
