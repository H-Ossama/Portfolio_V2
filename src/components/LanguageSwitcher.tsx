'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the locale type
type Locale = 'en' | 'fr' | 'de';

// Language options with proper labels and flags
const languages = [
  { 
    code: 'en', 
    name: 'English', 
    nativeName: 'English',
    flag: '🇺🇸',
    dir: 'ltr'
  },
  { 
    code: 'fr', 
    name: 'French', 
    nativeName: 'Français',
    flag: '🇫🇷',
    dir: 'ltr'
  },
  { 
    code: 'de', 
    name: 'German', 
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    dir: 'ltr'
  },
];

// Language labels in each language
const languageLabels = {
  en: {
    language: 'Language',
    selectLanguage: 'Select Language'
  },
  fr: {
    language: 'Langue',
    selectLanguage: 'Choisir la langue'
  },
  de: {
    language: 'Sprache',
    selectLanguage: 'Sprache auswählen'
  }
};

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'compact' | 'full' | 'mobile';
}

export default function LanguageSwitcher({ 
  className = '', 
  variant = 'compact' 
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get current locale from pathname
  const getCurrentLocale = (): Locale => {
    const segments = pathname.split('/');
    const firstSegment = segments[1];
    
    if (firstSegment === 'fr' || firstSegment === 'de') {
      return firstSegment as Locale;
    }
    
    return 'en';
  };

  const currentLocale = getCurrentLocale();
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];
  const labels = languageLabels[currentLocale as keyof typeof languageLabels] || languageLabels.en;

  const changeLanguage = (newLocale: string) => {
    // Close dropdown
    setIsOpen(false);
    
    // Get the current path without locale
    let pathWithoutLocale = pathname;
    
    // Remove current locale from path if present (handle all locales including 'en')
    if (pathname.startsWith('/en') || pathname.startsWith('/fr') || pathname.startsWith('/de')) {
      pathWithoutLocale = pathname.substring(3) || '/';
    }
    
    // Create new path with locale
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    
    router.push(newPath);
  };

  if (!mounted) {
    return null; // Prevent hydration issues
  }

  // Compact variant (dropdown)
  if (variant === 'compact') {
    return (
      <div className={`relative ${className}`}>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-3 py-2 glass-card rounded-lg text-theme-secondary hover:text-theme-primary hover:shadow-glow transition-all duration-300"
          aria-label={labels.selectLanguage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Globe size={16} className="text-theme-secondary" />
          <span className="text-lg">{currentLanguage.flag}</span>
          <span className="hidden sm:inline-block text-sm font-medium">
            {currentLanguage.code.toUpperCase()}
          </span>
          <motion.svg 
            className="w-4 h-4 text-theme-muted"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 w-48 glass-card rounded-xl shadow-glow z-50"
            >
              <div className="py-2">
                {languages.map((language) => (
                  <motion.button
                    key={language.code}
                    onClick={() => changeLanguage(language.code)}
                    className={`w-full text-left px-4 py-3 text-sm hover:bg-white/5 flex items-center space-x-3 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl ${
                      currentLocale === language.code 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'text-theme-secondary hover:text-theme-primary'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <div className="flex flex-col">
                      <span className="font-medium">{language.nativeName}</span>
                      <span className="text-xs text-theme-muted">{language.name}</span>
                    </div>
                    {currentLocale === language.code && (
                      <motion.svg 
                        className="w-4 h-4 ml-auto text-blue-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </motion.svg>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Backdrop */}
        {isOpen && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    );
  }

  // Full variant (horizontal buttons)
  if (variant === 'full') {
    return (
      <div className={`flex items-center space-x-1 ${className}`}>
        {languages.map((language) => (
          <motion.button
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 glass-card hover:shadow-glow ${
              currentLocale === language.code
                ? 'bg-blue-500/20 text-blue-400'
                : 'text-theme-secondary hover:text-theme-primary'
            }`}
            title={language.nativeName}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.code.toUpperCase()}</span>
          </motion.button>
        ))}
      </div>
    );
  }

  // Mobile variant (select dropdown)
  if (variant === 'mobile') {
    return (
      <div className={`relative ${className}`}>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 w-10 h-10 glass-card rounded-lg text-theme-secondary hover:text-theme-primary hover:shadow-glow transition-all duration-300 justify-center"
          aria-label={labels.selectLanguage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Globe size={16} />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 w-40 glass-card rounded-xl shadow-glow z-50"
            >
              <div className="py-2">
                {languages.map((language) => (
                  <motion.button
                    key={language.code}
                    onClick={() => changeLanguage(language.code)}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-white/5 flex items-center space-x-2 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl ${
                      currentLocale === language.code 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'text-theme-secondary hover:text-theme-primary'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-base">{language.flag}</span>
                    <span className="font-medium text-xs">{language.code.toUpperCase()}</span>
                    {currentLocale === language.code && (
                      <motion.div 
                        className="w-2 h-2 bg-blue-400 rounded-full ml-auto"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Backdrop */}
        {isOpen && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    );
  }

  return null;
}