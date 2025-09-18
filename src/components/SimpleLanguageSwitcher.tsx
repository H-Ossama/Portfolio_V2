'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

interface SimpleLanguageSwitcherProps {
  variant?: 'compact' | 'mobile';
}

export default function SimpleLanguageSwitcher({ variant = 'compact' }: SimpleLanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Get current locale from pathname
  const getCurrentLocale = () => {
    const segments = pathname.split('/');
    const firstSegment = segments[1];
    
    if (firstSegment === 'fr' || firstSegment === 'de') {
      return firstSegment;
    }
    
    return 'en';
  };

  const currentLocale = getCurrentLocale();
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  const changeLanguage = (newLocale: string) => {
    setIsOpen(false);
    
    let newPath = pathname;
    
    // Remove current locale from path if present (handle all locales including 'en')
    if (pathname.startsWith('/en') || pathname.startsWith('/fr') || pathname.startsWith('/de')) {
      newPath = pathname.substring(3) || '/';
    }
    
    // Add new locale prefix if not English
    if (newLocale !== 'en') {
      newPath = `/${newLocale}${newPath === '/' ? '' : newPath}`;
    }
    
    // Ensure we don't end up with double slashes
    newPath = newPath.replace(/\/+/g, '/');
    
    router.push(newPath);
  };

  if (variant === 'mobile') {
    return (
      <div className="relative">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-10 h-10 glass-card rounded-lg text-theme-secondary hover:text-theme-primary hover:shadow-glow transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Select Language"
        >
          <Globe size={16} />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <>
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
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setIsOpen(false)}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 glass-card rounded-lg text-theme-secondary hover:text-theme-primary hover:shadow-glow transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Select Language"
      >
        <Globe size={16} className="text-theme-secondary" />
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="hidden sm:inline-block text-sm font-medium">
          {currentLanguage.code.toUpperCase()}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} className="text-theme-muted" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
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
                      <span className="font-medium">{language.name}</span>
                      <span className="text-xs text-theme-muted">{language.code.toUpperCase()}</span>
                    </div>
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
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
