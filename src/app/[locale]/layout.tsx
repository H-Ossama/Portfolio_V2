import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPortfolioConfig, type Locale as PortfolioLocale } from '@/lib/localization-server'
import { ThemeProvider } from '@/contexts/ThemeContext'

// Optimize font loading
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

// Define supported locales
const locales = ['en', 'fr', 'de'] as const
type Locale = typeof locales[number]

interface LocaleLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale: locale,
  }))
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as PortfolioLocale
  
  if (!locales.includes(locale as Locale)) {
    return {
      title: 'Page Not Found',
      description: 'The page you are looking for does not exist.'
    }
  }

  const config = getPortfolioConfig(locale)
  
  return {
    title: config.meta.title,
    description: config.meta.description,
    keywords: config.meta.keywords,
    authors: [{ name: config.meta.author }],
    robots: 'index, follow',
    openGraph: {
      title: config.meta.title,
      description: config.meta.description,
      url: config.meta.url,
      siteName: config.personal.name,
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: config.meta.title,
        },
      ],
      locale: locale === 'en' ? 'en_US' : locale === 'fr' ? 'fr_FR' : 'de_DE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.meta.title,
      description: config.meta.description,
      images: ['/images/og-image.jpg'],
    },
    alternates: {
      canonical: locale === 'en' ? '/' : `/${locale}`,
      languages: {
        'en': '/',
        'fr': '/fr',
        'de': '/de',
      },
    },
  }
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = params.locale as Locale
  
  // Validate locale
  if (!locales.includes(locale)) {
    notFound()
  }

  return (
    <html lang={locale} className="scroll-smooth overflow-x-hidden nav-scroll">
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/images/hattan-profile.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/images/og-image.jpg"
          as="image"
          type="image/jpeg"
        />
        
        {/* Preconnect to external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Optimize resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Language alternates */}
        <link rel="alternate" hrefLang="en" href="/" />
        <link rel="alternate" hrefLang="fr" href="/fr" />
        <link rel="alternate" hrefLang="de" href="/de" />
        <link rel="alternate" hrefLang="x-default" href="/" />
      </head>
      <body className={`${inter.className} overflow-x-hidden will-change-scroll backface-hidden`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}