import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPortfolioConfig, type Locale as PortfolioLocale } from '@/lib/localization-server'
import { absoluteUrl } from '@/lib/seo-utils'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// Define supported locales
const locales = ['en', 'fr', 'de'] as const
type Locale = typeof locales[number]

// Define blog posts
const blogPosts = [
  {
    slug: 'oussama-hattan-journey',
    availableLocales: ['en'], // Later can add fr and de versions
  }
]

interface BlogPostPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const paths: { locale: string; slug: string }[] = []
  
  blogPosts.forEach((post) => {
    post.availableLocales.forEach((locale) => {
      paths.push({
        locale,
        slug: post.slug,
      })
    })
  })
  
  return paths
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = params
  
  // Check if locale and post exist
  if (!locales.includes(locale as Locale) || 
      !blogPosts.find(post => post.slug === slug && post.availableLocales.includes(locale as Locale))) {
    return {
      title: 'Page Not Found',
      description: 'The page you are looking for does not exist.'
    }
  }

  try {
    const fullPath = path.join(process.cwd(), 'public/blog', `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    const config = getPortfolioConfig(locale as PortfolioLocale)
    
    return {
      title: data.title,
      description: data.excerpt,
      keywords: data.keywords,
      authors: [{ name: data.author }],
      openGraph: {
        title: data.title,
        description: data.excerpt,
        url: absoluteUrl(`/${locale}/blog/${slug}`),
        siteName: config.personal.name,
        images: [
          {
            url: absoluteUrl('/images/og-image.jpg'),
            width: 1200,
            height: 630,
            alt: data.title,
          },
        ],
        locale: locale === 'en' ? 'en_US' : locale === 'fr' ? 'fr_FR' : 'de_DE',
        type: 'article',
        publishedTime: data.date,
      },
      twitter: {
        card: 'summary_large_image',
        title: data.title,
        description: data.excerpt,
        images: [absoluteUrl('/images/og-image.jpg')],
      },
    }
  } catch (error) {
    return {
      title: 'Blog Post',
      description: 'Blog post content'
    }
  }
}

// Function to read and process markdown files
async function getPostData(slug: string) {
  const fullPath = path.join(process.cwd(), 'public/blog', `${slug}.md`)
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // Convert markdown to HTML
    const processedContent = await remark()
      .use(html)
      .process(content)
      
    const contentHtml = processedContent.toString()
    
    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      contentHtml,
    }
  } catch (error) {
    return null
  }
}

import RelatedPosts from '@/components/blog/RelatedPosts';

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = params
  
  // Check if locale is valid
  if (!locales.includes(locale as Locale)) {
    notFound()
  }
  
  // Check if post exists in this locale
  const post = blogPosts.find(p => p.slug === slug && p.availableLocales.includes(locale as Locale))
  if (!post) {
    notFound()
  }
  
  // Get post data
  const postData = await getPostData(slug)
  if (!postData) {
    notFound()
  }
  
  const config = getPortfolioConfig(locale as PortfolioLocale)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hattan-portfolio.vercel.app';
  const postUrl = `${baseUrl}/${locale}/blog/${slug}`;
  
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      {/* Back link */}
      <div className="mb-8">
        <a 
          href={`/${locale}/blog`}
          className="text-blue-400 hover:text-blue-300 inline-flex items-center transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blog
        </a>
      </div>
      
      {/* Post header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-theme-primary">
          {postData.title}
        </h1>
        
        <div className="flex items-center text-theme-muted text-sm mb-6">
          <span>{postData.date}</span>
          <span className="mx-2">•</span>
          <span>By {postData.author}</span>
        </div>
      </header>
      
      {/* Post content */}
      <article className="prose prose-invert prose-blue max-w-none">
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      
      {/* Author bio */}
      <div className="mt-16 pt-8 border-t border-gray-800">
        <div className="flex items-start sm:items-center flex-col sm:flex-row">
          <img 
            src="/images/hattan-profile.png" 
            alt={config.personal.name}
            className="w-20 h-20 rounded-full mr-6 mb-4 sm:mb-0"
          />
          <div>
            <h3 className="text-xl font-medium text-theme-primary mb-2">
              About {config.personal.name}
            </h3>
            <p className="text-theme-secondary mb-4">
              {config.personal.bio.substring(0, 150)}...
            </p>
            <a 
              href={`/${locale}/#about`}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      
      {/* Related Posts */}
      <RelatedPosts currentSlug={slug} />
      
      {/* CTA */}
      <div className="mt-12 bg-blue-900/20 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-blue-400 mb-3">
          Need a Full-Stack Developer for your project?
        </h3>
        <p className="text-theme-secondary mb-4">
          I specialize in building responsive and scalable web applications with modern technologies.
        </p>
        <a 
          href={`/${locale}/#contact`}
          className="px-5 py-3 bg-blue-600/30 hover:bg-blue-600/50 text-white rounded-lg transition-all duration-300 inline-flex items-center"
        >
          Get in touch
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
      
      {/* Add schema markup for BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: postData.title,
            description: postData.excerpt,
            image: `${baseUrl}/images/og-image.jpg`,
            author: {
              '@type': 'Person',
              name: postData.author,
              url: baseUrl
            },
            publisher: {
              '@type': 'Person',
              name: config.personal.name,
              url: baseUrl
            },
            datePublished: postData.date,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': postUrl
            },
            keywords: [
              'Oussama HATTAN', 
              'Full Stack Developer', 
              'Moroccan Developer', 
              'Web Development', 
              'React Developer', 
              'Node.js Developer'
            ]
          })
        }}
      />
    </div>
  )
}