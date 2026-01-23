'use client';

import { useState, useEffect } from 'react';
import { ArrowUpCircle } from 'lucide-react';

export default function GoUpButton() {
  const [isVisible, setIsVisible] = useState(false);

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
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[9999] p-3 bg-accent-cyan text-dark-950 rounded-full shadow-lg hover:scale-110 focus:outline-none transition-all duration-300 md:hidden"
          aria-label="Go to top"
        >
          <ArrowUpCircle className="w-6 h-6" />
        </button>
      )}
    </>
  );
}