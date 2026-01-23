'use client'

import { useState, useEffect } from 'react';
import { X, Construction, AlertTriangle, Clock, Snowflake } from 'lucide-react';
import { useLocalization } from '@/lib/localization';

const DevelopmentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isPaused, setIsPaused] = useState(false);
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

  // Auto-dismiss logic with pause support
  useEffect(() => {
    if (isVisible && !isClosing && !isPaused && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isClosing) {
      handleClose();
    }
  }, [isVisible, isClosing, isPaused, timeLeft]);

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
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] transition-all duration-300 ${isClosing ? 'opacity-0 backdrop-blur-none' : 'opacity-100'
          }`}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Banner - Moved lower down and centered to avoid nav conflict */}
      <div className={`fixed top-24 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl z-[9999] transform transition-all duration-500 ease-out ${isClosing ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'
        }`}>
        <div className="bg-dark-900/90 border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-gray-300 backdrop-blur-xl overflow-hidden">
          {/* Cyber Decorative Line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4 md:py-5">
              <div className="flex items-start gap-4">
                {/* Icon Box */}
                <div className="flex-shrink-0 mt-1">
                  <div className="relative w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center">
                    <Construction className="w-5 h-5 text-accent-cyan animate-pulse" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent-purple rounded-full animate-ping" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-start justify-between gap-6 mr-8">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3">
                        <h3 className="text-base md:text-lg font-bold text-white tracking-wider font-mono uppercase">
                          <span className="text-accent-cyan mr-2">{'//'}</span>
                          {t('developmentBanner.title')}
                        </h3>
                        <div className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                          BETA
                        </div>
                      </div>

                      <p className="text-sm text-gray-400 leading-relaxed font-light">
                        {t('developmentBanner.message')}
                      </p>

                      <div className="flex items-center gap-2 pt-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs font-mono text-green-400 opacity-80">System.Status: ACTIVE_DEVELOPMENT</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Controls Area (Timer + Close) */}
                <div className="flex items-center gap-3 absolute top-4 right-4">
                  {/* Timer Display & Freeze Button */}
                  <div className={`flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white/5 border transition-all duration-300 group ${isPaused ? 'border-accent-cyan/30 bg-accent-cyan/5' : 'border-white/10 hover:border-white/20'}`}>
                    <button
                      onClick={() => setIsPaused(!isPaused)}
                      className={`transition-all duration-300 ${isPaused ? 'text-accent-cyan' : 'text-gray-500 hover:text-white'}`}
                      title={isPaused ? "Resume Timer" : "Freeze Timer"}
                    >
                      <Snowflake
                        size={14}
                        className={`transition-transform duration-500 ${isPaused ? 'rotate-180 scale-110 drop-shadow-[0_0_5px_rgba(102,217,237,0.5)]' : 'group-hover:rotate-12'}`}
                      />
                    </button>
                    <div className="w-[1px] h-3 bg-white/10 mx-0.5" />
                    <span className={`text-[10px] md:text-xs font-mono w-6 text-center tabular-nums transition-colors duration-300 ${isPaused ? 'text-accent-cyan font-bold' : 'text-gray-400'}`}>
                      {timeLeft}s
                    </span>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={handleClose}
                    className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar for Auto-dismiss */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5 overflow-hidden">
            <div
              className="h-full bg-accent-cyan shadow-[0_0_10px_rgba(102,217,237,0.5)] origin-left w-full"
              style={{
                transform: `scaleX(${timeLeft / 15})`,
                transition: isPaused || timeLeft === 15 ? 'none' : 'transform 1000ms linear'
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DevelopmentBanner;