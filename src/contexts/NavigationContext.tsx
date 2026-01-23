'use client'

import React, { createContext, useContext, useState } from 'react'

interface NavigationContextType {
    isMenuOpen: boolean
    setIsMenuOpen: (isOpen: boolean) => void
    isLoading: boolean
    setIsLoading: (isLoading: boolean) => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({ children }: { children: React.ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    return (
        <NavigationContext.Provider value={{ isMenuOpen, setIsMenuOpen, isLoading, setIsLoading }}>
            {children}
        </NavigationContext.Provider>
    )
}

export function useNavigation() {
    const context = useContext(NavigationContext)
    if (context === undefined) {
        throw new Error('useNavigation must be used within a NavigationProvider')
    }
    return context
}
