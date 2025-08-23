'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function TestLanguageButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          console.log('Test language button clicked!', { isOpen: !isOpen });
          alert('Test Language Button Clicked!');
        }}
        className="flex items-center justify-center w-10 h-10 glass-card rounded-lg text-theme-secondary hover:text-theme-primary hover:shadow-glow transition-all duration-300 bg-green-500/20 border-2 border-green-500"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe size={16} />
      </motion.button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-32 glass-card rounded-xl shadow-glow z-50 bg-purple-500/20 border-2 border-purple-500">
          <div className="p-2 text-center text-white">
            <p className="text-xs">Test Dropdown</p>
            <button 
              onClick={() => {
                alert('EN clicked');
                setIsOpen(false);
              }}
              className="block w-full text-xs py-1 hover:bg-white/10 rounded"
            >
              🇺🇸 EN
            </button>
            <button 
              onClick={() => {
                alert('FR clicked');
                setIsOpen(false);
              }}
              className="block w-full text-xs py-1 hover:bg-white/10 rounded"
            >
              🇫🇷 FR
            </button>
          </div>
        </div>
      )}
    </div>
  );
}