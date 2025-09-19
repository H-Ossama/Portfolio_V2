'use client';

import { useState, useEffect } from 'react';
import { ArrowUpCircle } from 'lucide-react';

export default function GoUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      // Show the button when user scrolls down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener when component unmounts
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
          className="fixed bottom-6 right-6 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 md:hidden"
          aria-label="Go to top"
        >
          <ArrowUpCircle className="w-6 h-6" />
        </button>
      )}
    </>
  );
}