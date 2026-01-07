import CertificateViewer from '@/components/CertificateViewer';
import { getPortfolioConfig, type Locale } from '@/lib/localization-server';
import { slugify } from '@/lib/utils';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const locales: Locale[] = ['en', 'fr', 'de'];

type PageParams = {
  params: {
    locale: string;
    slug: string;
  };
};

function resolveLocale(locale: string): Locale | null {
  return locales.includes(locale as Locale) ? (locale as Locale) : null;
}

function getEducationEntry(locale: Locale, slug: string) {
  const config = getPortfolioConfig(locale);
  const match = config.education.find((entry) => {
    const entrySlug = slugify(`${entry.institution}-${entry.degree}`);
    return entrySlug === slug;
  });

  return { config, entry: match };
}

export async function generateStaticParams() {
  return locales.flatMap((locale) => {
    const config = getPortfolioConfig(locale);

    return (config.education || [])
      .filter((entry) => Array.isArray(entry.certificates) && entry.certificates.length > 0)
      .map((entry) => ({
        locale,
        slug: slugify(`${entry.institution}-${entry.degree}`),
      }));
  });
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const fallbackLocale: Locale = 'en';
  const locale = resolveLocale(params.locale) ?? fallbackLocale;
  const { entry, config } = getEducationEntry(locale, params.slug);

  if (!entry || !Array.isArray(entry.certificates) || entry.certificates.length === 0) {
    return {
      title: `${config.personal.name} | Certificates`,
      description: 'Certificates overview.',
    };
  }

  const certificateCount = entry.certificates.length;
  const displayInstitution = entry.institution.split(',')[0]?.trim() || entry.institution;

  return {
    title: `${displayInstitution} • Certificates | ${config.personal.name}`,
    description: `View ${certificateCount} certificate${certificateCount > 1 ? 's' : ''} from ${displayInstitution}.`,
    openGraph: {
      title: `${displayInstitution} • Certificates | ${config.personal.name}`,
      description: `Detailed view of ${certificateCount} certificate${certificateCount > 1 ? 's' : ''} from ${displayInstitution}.`,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/certificates/${params.slug}`,
    },
  };
}

export default function CertificatePage({ params }: PageParams) {
  const locale = resolveLocale(params.locale);

  if (!locale) {
    notFound();
  }

  const { entry, config } = getEducationEntry(locale, params.slug);

  if (!entry || !entry.certificates || entry.certificates.length === 0) {
    notFound();
  }

  const institutionName = entry.institution.split(',')[0]?.trim() || entry.institution;

  return (
    <CertificateViewer
      certificates={entry.certificates}
      institutionName={institutionName}
      degree={entry.degree}
      period={entry.year}
      description={entry.description}
      locale={locale}
    />
  );
}
