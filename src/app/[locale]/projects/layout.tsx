'use client'

import React from 'react'

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-dark-950">
            {children}
        </div>
    )
}
