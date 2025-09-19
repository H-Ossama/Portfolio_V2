import { Locale } from '@/lib/localization';
import { absoluteUrl } from './seo-utils';
import { getPortfolioConfig } from '@/lib/localization-server';

/**
 * Generate schema.org JSON-LD structured data for the Person entity
 * This is used for personal information in search results
 */
export function generatePersonSchema(locale: Locale) {
  const config = getPortfolioConfig(locale);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: config.personal.name,
    alternateName: 'Oussama Hattan',
    jobTitle: config.personal.title,
    description: config.personal.bio,
    url: absoluteUrl('/'),
    sameAs: [
      config.contact.github,
      config.contact.linkedin,
      // Add other social profiles here
    ],
    image: absoluteUrl('/images/hattan-profile.png'),
    email: config.contact.email,
    telephone: config.contact.phone,
    nationality: 'Moroccan',
    address: {
      '@type': 'PostalAddress',
      addressLocality: config.personal.location,
      addressCountry: 'Morocco',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'EFET School of Engineering',
        url: 'https://www.efet-engineering.com/'
      }
    ],
    knowsLanguage: ['English', 'French', 'Arabic', 'German'],
    workLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rabat',
        addressCountry: 'Morocco'
      }
    },
    knowsAbout: [
      'Web Development',
      'Frontend Development',
      'React.js',
      'Next.js',
      'TypeScript',
      'UI/UX Design'
    ]
  };
}

/**
 * Generate schema.org JSON-LD structured data for the WebSite entity
 * This provides search engines with information about your website structure
 */
export function generateWebsiteSchema(locale: Locale) {
  const config = getPortfolioConfig(locale);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${config.personal.name} - ${config.personal.title}`,
    description: config.personal.bio,
    url: absoluteUrl('/'),
    author: {
      '@type': 'Person',
      name: config.personal.name
    },
    inLanguage: locale,
    copyrightYear: new Date().getFullYear(),
    potentialAction: {
      '@type': 'SearchAction',
      target: `${absoluteUrl('/blog')}?search={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

/**
 * Generate schema.org JSON-LD structured data for a blog post
 */
export function generateBlogPostSchema(
  locale: Locale,
  slug: string,
  title: string,
  description: string,
  datePublished: string,
  dateModified: string = datePublished,
  imageUrl: string = '/images/og-image.jpg'
) {
  const config = getPortfolioConfig(locale);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: config.personal.name,
      url: absoluteUrl('/')
    },
    publisher: {
      '@type': 'Person',
      name: config.personal.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/images/hattan-profile.png')
      }
    },
    datePublished: datePublished,
    dateModified: dateModified,
    image: absoluteUrl(imageUrl),
    url: absoluteUrl(`/${locale === 'en' ? '' : locale + '/'}blog/${slug}`),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/${locale === 'en' ? '' : locale + '/'}blog/${slug}`)
    },
    keywords: [
      'Oussama Hattan',
      'Moroccan Developer',
      'Portfolio',
      'Web Development',
      'Frontend Engineer'
    ],
    inLanguage: locale
  };
}

/**
 * Generate schema.org JSON-LD structured data for a collection of projects
 */
export function generateProjectsSchema(locale: Locale) {
  const config = getPortfolioConfig(locale);
  
  const projects = config.projects.map(project => ({
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.description,
    codeRepository: project.githubUrl || null,
    programmingLanguage: project.techStack.join(', '),
    author: {
      '@type': 'Person',
      name: config.personal.name
    },
    dateCreated: project.period ? project.period.split(' - ')[0] : '2023-01-01'
  }));
  
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: project
    }))
  };
}

/**
 * Generate schema.org Breadcrumbs for navigation
 */
export function generateBreadcrumbSchema(
  locale: Locale, 
  paths: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: paths.map((path, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: path.name,
      item: absoluteUrl(path.url)
    }))
  };
}

/**
 * Generate all structured data for the home page
 */
export function generateHomePageStructuredData(locale: Locale) {
  return [
    generatePersonSchema(locale),
    generateWebsiteSchema(locale),
    generateProjectsSchema(locale)
  ];
}