'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@/contexts/NavigationContext';

export default function GoUpButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const { isMenuOpen } = useNavigation();

  // Show button when page is scrolled down
  useEffect(() => {
    let ticking = false;
    let lastValue = false;

    const toggleVisibility = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        ticking = false;
        const nextValue = window.pageYOffset > 300;
        if (nextValue !== lastValue) {
          lastValue = nextValue;
          setIsVisible(nextValue);
        }
      });
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && !isMenuOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-[9999] p-3 rounded-xl border backdrop-blur-md shadow-2xl transition-all duration-300 group ${theme === 'dark'
            ? 'bg-dark-900/80 border-white/10 text-gray-400 hover:text-accent-cyan hover:border-accent-cyan/30 shadow-black/50'
            : 'bg-white/80 border-black/10 text-gray-500 hover:text-accent-cyan hover:border-accent-cyan/30 shadow-gray-200'
            }`}
          aria-label="Go to top"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp size={20} className="transition-transform group-hover:-translate-y-0.5" />

          {/* Subtle tooltip for desktop */}
          <span className="absolute right-full mr-4 bg-dark-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 hidden md:block">
            TOP
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}