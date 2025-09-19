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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicons/site.webmanifest', rel: 'manifest' }
    ],
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
