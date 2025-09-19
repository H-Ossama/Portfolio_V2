import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPortfolioConfig, type Locale as PortfolioLocale } from '@/lib/localization-server'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { absoluteUrl, getCanonicalUrl, getLocaleUrl } from '@/lib/seo-utils'
import Script from 'next/script'
import { Inter } from 'next/font/google'

// Optimize font loading with proper display strategy
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter', // Using CSS variable for font
  fallback: ['system-ui', 'sans-serif']
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
  
  // Prepare absolute URLs for SEO
  const ogImageUrl = absoluteUrl('/images/og-image.jpg')
  
  return {
    title: config.meta.title,
    description: config.meta.description,
    keywords: config.meta.keywords,
    authors: [{ name: config.meta.author }],
    robots: 'index, follow',
    openGraph: {
      title: config.meta.title,
      description: config.meta.description,
      url: getLocaleUrl(locale),
      siteName: config.personal.name,
      images: [
        {
          url: ogImageUrl,
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
      images: [ogImageUrl],
    },
    alternates: {
      canonical: getLocaleUrl(locale),
      languages: {
        'en': absoluteUrl('/'),
        'fr': absoluteUrl('/fr'),
        'de': absoluteUrl('/de'),
      },
    },
  }
}

import GoogleAnalytics from '@/components/OptimizedGoogleAnalytics';
import SearchConsoleVerification from '@/components/SearchConsoleVerification';

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = params.locale as Locale
  
  // Validate locale
  if (!locales.includes(locale)) {
    notFound()
  }

  return (
    <html lang={locale} className={`${inter.variable} scroll-smooth overflow-x-hidden nav-scroll`}>
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        
        {/* Critical resources preloaded - reduced to only most important ones */}
        <link
          rel="preload"
          href="/images/hattan-profile.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />
        
        {/* Preconnect to external domains - optimized */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* SEO: Properly formatted language alternates with absolute URLs */}
        <link rel="alternate" hrefLang="en" href={absoluteUrl('/')} />
        <link rel="alternate" hrefLang="fr" href={absoluteUrl('/fr')} />
        <link rel="alternate" hrefLang="de" href={absoluteUrl('/de')} />
        <link rel="alternate" hrefLang="x-default" href={absoluteUrl('/')} />
        
        {/* Canonical URL to prevent duplicate content issues */}
        <link rel="canonical" href={getLocaleUrl(locale)} />
        
        {/* Structured data for better SEO - moved to afterInteractive for non-blocking */}
        <Script id="schema-person" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: getPortfolioConfig(locale).personal.name,
            jobTitle: getPortfolioConfig(locale).personal.title,
            description: getPortfolioConfig(locale).personal.bio,
            url: absoluteUrl('/'),
            sameAs: [
              getPortfolioConfig(locale).contact.github,
              getPortfolioConfig(locale).contact.linkedin,
            ],
            image: absoluteUrl('/images/hattan-profile.png'),
            email: getPortfolioConfig(locale).contact.email,
            telephone: getPortfolioConfig(locale).contact.phone,
            nationality: 'Moroccan',
            address: {
              '@type': 'PostalAddress',
              addressLocality: getPortfolioConfig(locale).personal.location,
              addressCountry: 'Morocco',
            },
          })
        }} />
        
        {/* Google Analytics - using strategy */}
        <GoogleAnalytics measurementId="G-MEASUREMENT_ID" />
        
        {/* Google Search Console Verification */}
        <SearchConsoleVerification verificationId="GOOGLE_VERIFICATION_ID" />
      </head>
      <body className="font-sans overflow-x-hidden will-change-scroll backface-hidden">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}