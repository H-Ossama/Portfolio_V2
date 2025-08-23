'use client'

import { useState, useEffect } from 'react';
import { X, Construction, AlertTriangle, Clock } from 'lucide-react';
import { useLocalization } from '@/lib/localization';

const DevelopmentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { t } = useLocalization();

  useEffect(() => {
    // Check if banner was previously dismissed
    const bannerDismissed = localStorage.getItem('portfolio-dev-banner-dismissed');
    const dismissedTime = bannerDismissed ? parseInt(bannerDismissed) : 0;
    const currentTime = Date.now();
    const oneWeek = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

    // Show banner if it hasn't been dismissed or if it was dismissed more than a week ago
    if (!bannerDismissed || (currentTime - dismissedTime) > oneWeek) {
      // Small delay to prevent layout shift
      setTimeout(() => setIsVisible(true), 100);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      // Remember that user dismissed the banner
      localStorage.setItem('portfolio-dev-banner-dismissed', Date.now().toString());
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] transition-all duration-300 ${
          isClosing ? 'opacity-0 backdrop-blur-none' : 'opacity-100'
        }`}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />
      
      {/* Banner */}
      <div className={`fixed top-0 left-0 right-0 z-[9999] transform transition-all duration-300 ease-out ${
        isClosing ? '-translate-y-full opacity-0 scale-y-0' : 'translate-y-0 opacity-100 scale-y-100'
      }`}>
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white shadow-2xl border-b border-orange-400/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4 md:py-6">
              <div className="flex items-start gap-3 md:gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 mt-0.5">
                  <div className="relative animate-pulse">
                    <Construction className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    <AlertTriangle className="w-3 h-3 absolute -top-1 -right-1 text-amber-200 animate-bounce" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {t('developmentBanner.title')}
                        </h3>
                        <Clock className="w-4 h-4 text-amber-200" />
                      </div>
                      
                      <p className="text-sm md:text-base leading-relaxed text-white/95 max-w-4xl">
                        {t('developmentBanner.message')}
                      </p>
                      
                      <div className="flex items-center gap-2 pt-1">
                        <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                        <p className="text-sm md:text-base font-medium text-white">
                          {t('developmentBanner.thankYou')}
                        </p>
                      </div>
                    </div>
                    
                    {/* Close button */}
                    <button
                      onClick={handleClose}
                      className="flex-shrink-0 p-2 rounded-full hover:bg-white/20 active:bg-white/30 transition-all duration-200 group"
                      aria-label="Close banner"
                      title="Close this message"
                    >
                      <X className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle bottom border animation */}
          <div className="h-1 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 opacity-60"></div>
        </div>
      </div>
    </>
  );
};

export default DevelopmentBanner;