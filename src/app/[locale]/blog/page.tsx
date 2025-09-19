import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPortfolioConfig, type Locale as PortfolioLocale } from '@/lib/localization-server'
import { absoluteUrl } from '@/lib/seo-utils'

// Define supported locales
const locales = ['en', 'fr', 'de'] as const
type Locale = typeof locales[number]

interface BlogPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const locale = params.locale as PortfolioLocale
  
  if (!locales.includes(locale as Locale)) {
    return {
      title: 'Page Not Found',
      description: 'The page you are looking for does not exist.'
    }
  }

  const config = getPortfolioConfig(locale)
  
  return {
    title: `Blog | ${config.personal.name} - Full-Stack Developer`,
    description: `Explore Oussama HATTAN's blog for insights on web development, coding techniques, and professional experiences as a Full-Stack Developer from Morocco.`,
    keywords: `Oussama HATTAN, Oussama, HATTAN, blog, web development blog, coding blog, developer blog, Morocco developer blog`,
    openGraph: {
      title: `Blog | ${config.personal.name} - Full-Stack Developer`,
      description: `Explore Oussama HATTAN's blog for insights on web development, coding techniques, and professional experiences as a Full-Stack Developer from Morocco.`,
      url: absoluteUrl(`/${locale}/blog`),
      siteName: config.personal.name,
      images: [
        {
          url: absoluteUrl('/images/og-image.jpg'),
          width: 1200,
          height: 630,
          alt: `${config.personal.name} Blog`,
        },
      ],
      locale: locale === 'en' ? 'en_US' : locale === 'fr' ? 'fr_FR' : 'de_DE',
      type: 'website',
    },
  }
}

// Import BlogHeader component
import BlogHeader from '@/components/blog/BlogHeader'
import RelatedPosts from '@/components/blog/RelatedPosts'

export default function BlogPage({ params }: BlogPageProps) {
  const locale = params.locale as Locale
  
  // Validate locale
  if (!locales.includes(locale)) {
    notFound()
  }
  
  return (
    <>
      <BlogHeader />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid grid-cols-1 gap-10">
          <BlogPostCard 
            title="Oussama HATTAN: My Journey as a Full-Stack Developer from Morocco"
            excerpt="Learn about my journey as a Moroccan full-stack developer, my expertise, and how I can help with your web development projects."
            date="September 19, 2025"
            slug="oussama-hattan-journey"
            locale={locale}
          />
          
          {/* More blog posts will be added here in the future */}
        </div>
        
        {/* Add schema markup for Blog */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Blog',
              name: 'Oussama HATTAN\'s Blog',
              description: 'Insights on web development, coding techniques, and professional experiences from a Full-Stack Developer based in Morocco.',
              url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://hattan-portfolio.vercel.app'}/${locale}/blog`,
              author: {
                '@type': 'Person',
                name: 'Oussama HATTAN',
                url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hattan-portfolio.vercel.app'
              },
              publisher: {
                '@type': 'Person',
                name: 'Oussama HATTAN',
                url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hattan-portfolio.vercel.app'
              }
            })
          }}
        />
      </div>
    </>
  )
}

// Blog post card component
function BlogPostCard({ 
  title, 
  excerpt, 
  date, 
  slug,
  locale 
}: { 
  title: string; 
  excerpt: string; 
  date: string; 
  slug: string;
  locale: string;
}) {
  return (
    <article className="glass-card p-8 rounded-2xl hover:shadow-glow transition-all duration-300">
      <h2 className="text-2xl font-bold mb-4 text-theme-primary">
        {title}
      </h2>
      
      <div className="mb-4 text-sm text-theme-muted">
        {date}
      </div>
      
      <p className="mb-6 text-theme-secondary">
        {excerpt}
      </p>
      
      <a 
        href={`/${locale}/blog/${slug}`}
        className="px-5 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg transition-all duration-300 inline-flex items-center"
      >
        Read More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </a>
    </article>
  )
}