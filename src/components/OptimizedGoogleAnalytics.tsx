'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
  measurementId: string
}

const OptimizedGoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => {
  return (
    <>
      {/* Use strategy 'lazyOnload' for non-critical scripts */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
            transport_type: 'beacon',
            send_page_view: true
          });
        `}
      </Script>
    </>
  )
}

export default OptimizedGoogleAnalytics