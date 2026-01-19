/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
      },
      colors: {
        // 2026 Premium Cyber-Minimalist Dark Theme
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',  // Electric violet - main accent
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        // Deep space backgrounds
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          850: '#15151a',
          900: '#1a191d',  // Deep Charcoal (Tamalsen Main BG)
          950: '#121215',  // Darker shade
        },
        // Neon accent colors
        accent: {
          violet: '#9b51e0', // Tamalsen Purple
          cyan: '#66d9ed',   // Tamalsen Cyan
          rose: '#f43f5e',
          amber: '#f59e0b',
        },
        glow: {
          violet: '#9b51e0',
          cyan: '#66d9ed',
          rose: '#f43f5e',
          blue: '#3b82f6',
          purple: '#9b51e0',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.05)',
          medium: 'rgba(255, 255, 255, 0.1)',
          heavy: 'rgba(255, 255, 255, 0.15)',
          dark: 'rgba(0, 0, 0, 0.3)',
        },
        light: {
          50: '#ffffff',
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
          400: '#cbd5e1',
          500: '#94a3b8',
          600: '#64748b',
          700: '#475569',
          800: '#334155',
          900: '#1e293b',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'blur-in': 'blurIn 1s ease-out',
        'scroll-smooth': 'scrollSmooth 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)' },
          '50%': { opacity: '0.9', boxShadow: '0 0 30px rgba(139, 92, 246, 0.8)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(1deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blurIn: {
          '0%': { filter: 'blur(10px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
        scrollSmooth: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0f 0%, #12121a 50%, #1a1a25 100%)',
        'gradient-dark-alt': 'linear-gradient(180deg, #0a0a0f 0%, #12121a 100%)',
        'gradient-light': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
        'gradient-glow-violet': 'radial-gradient(circle at center, rgba(124, 58, 237, 0.3) 0%, transparent 70%)',
        'gradient-glow-cyan': 'radial-gradient(circle at center, rgba(6, 182, 212, 0.25) 0%, transparent 70%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(124, 58, 237, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(6, 182, 212, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(244, 63, 94, 0.08) 0px, transparent 50%)',
        'gradient-accent': 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
        'gradient-accent-reverse': 'linear-gradient(135deg, #06b6d4 0%, #7c3aed 100%)',
      },
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(124, 58, 237, 0.3)',
        'glow-lg': '0 0 40px rgba(124, 58, 237, 0.4)',
        'glow-violet': '0 0 30px rgba(124, 58, 237, 0.4)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.4)',
        'glow-rose': '0 0 30px rgba(244, 63, 94, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-hover': '0 12px 40px 0 rgba(0, 0, 0, 0.5)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(124, 58, 237, 0.1)',
        'neon': '0 0 5px rgba(124, 58, 237, 0.5), 0 0 20px rgba(124, 58, 237, 0.3), 0 0 40px rgba(124, 58, 237, 0.2)',
        'neon-cyan': '0 0 5px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.2)',
        'soft-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
        'medium-dark': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        'large-dark': '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
        'bento': '0 1px 2px rgba(0, 0, 0, 0.5), 0 4px 8px rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
