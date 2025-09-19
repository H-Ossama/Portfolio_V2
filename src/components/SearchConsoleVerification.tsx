'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface SearchConsoleVerificationProps {
  verificationId: string;
}

export default function SearchConsoleVerification({ verificationId = 'GOOGLE_VERIFICATION_ID' }: SearchConsoleVerificationProps) {
  useEffect(() => {
    // You can add additional verification setup if needed
    console.log('Google Search Console verification loaded');
  }, []);

  return (
    <>
      {/* Google Search Console Verification Meta Tag */}
      <meta 
        name="google-site-verification" 
        content={verificationId} 
      />
    </>
  );
}