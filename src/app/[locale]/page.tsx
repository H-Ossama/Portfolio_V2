import DynamicIslandHeader from '@/components/DynamicIslandHeader'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import ClientWrapper from '@/components/ClientWrapper'
import ScrollProgress from '@/components/ScrollProgress'
import SmoothScrollEnhancer from '@/components/SmoothScrollEnhancer'
import DevelopmentBanner from '@/components/DevelopmentBanner'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'

// Lazy load non-critical components for better initial performance
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <div className="min-h-screen bg-transparent" />
})

const ModernSkills = dynamic(() => import('@/components/sections/ModernSkills'), {
  loading: () => <div className="min-h-screen bg-transparent" />
})

const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <div className="min-h-screen bg-transparent" />
})

const Education = dynamic(() => import('@/components/sections/Education'), {
  loading: () => <div className="min-h-screen bg-transparent" />
})

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <div className="min-h-screen bg-transparent" />
})

// Lazy load heavy background components
const ProgrammingSymbolsBackground = dynamic(() => import('@/components/ProgrammingSymbolsBackground'), {
  ssr: false,
  loading: () => null
})

const SmokeEffect = dynamic(() => import('@/components/SmokeEffect'), {
  ssr: false,
  loading: () => null
})

const RevealAnimation = dynamic(() => import('@/components/RevealAnimation'), {
  loading: () => <div className="contents">{}</div>
})

// Define supported locales
const locales = ['en', 'fr', 'de'] as const
type Locale = typeof locales[number]

interface LocalePageProps {
  params: {
    locale: string
  }
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale: locale,
  }))
}

export default function LocalePage({ params }: LocalePageProps) {
  // Validate locale
  if (!locales.includes(params.locale as Locale)) {
    notFound()
  }

  return (
    <ClientWrapper>
      {/* Development Banner - Shows first to new visitors */}
      <DevelopmentBanner />
      
      <main className="min-h-screen relative overflow-x-hidden">
        {/* Enhanced smooth scrolling */}
        <SmoothScrollEnhancer />
        
        {/* Load background components after initial paint */}
        <ProgrammingSymbolsBackground />
        <SmokeEffect />
        
        {/* Critical above-the-fold content */}
        <ScrollProgress />
        <DynamicIslandHeader />
        
        {/* Hero section loads immediately */}
        <Hero />
        
        {/* Other sections load progressively */}
        <RevealAnimation direction="up" delay={0.1}>
          <About />
        </RevealAnimation>
        <RevealAnimation direction="up" delay={0.1}>
          <ModernSkills />
        </RevealAnimation>
        <RevealAnimation direction="up" delay={0.1}>
          <Projects />
        </RevealAnimation>
        <RevealAnimation direction="up" delay={0.1}>
          <Education />
        </RevealAnimation>
        <RevealAnimation direction="up" delay={0.1}>
          <Contact />
        </RevealAnimation>
        
        <Footer />
      </main>
    </ClientWrapper>
  )
}