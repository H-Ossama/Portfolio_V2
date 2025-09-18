import './globals.css'
import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/seo-utils'

// Base metadata for the entire site
export const metadata: Metadata = {
  title: {
    template: '%s | Oussama Hattan',
    default: 'Oussama Hattan - Full Stack Developer'
  },
  description: 'Full Stack Developer specializing in modern web technologies',
  metadataBase: new URL(SITE_URL),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  verification: {
    google: 'google-site-verification-code', // Replace with your verification code if available
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
