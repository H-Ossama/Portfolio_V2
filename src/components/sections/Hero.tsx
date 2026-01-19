'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { usePortfolioConfig, useNavigationLabels } from '@/lib/localization'
import { Code2, Database, Globe, Server, Layers, Cpu, Terminal, ArrowRight, FileText, Download } from 'lucide-react'

// Simple Tech Stack Icon Component
const TechIcon = ({ icon: Icon, label, delay }: { icon: any, label: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center gap-2 group cursor-default"
  >
    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-accent-cyan/50 group-hover:shadow-[0_0_20px_rgba(102,217,237,0.2)] transition-all duration-300">
      <Icon size={24} className="text-gray-400 group-hover:text-accent-cyan transition-colors duration-300" />
    </div>
    <span className="text-xs font-mono text-gray-500 group-hover:text-accent-cyan transition-colors duration-300 opacity-0 group-hover:opacity-100 absolute translate-y-12">
      {label}
    </span>
  </motion.div>
)

export default function Hero() {
  const { theme } = useTheme()
  const { config } = usePortfolioConfig()
  const labels = useNavigationLabels()

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[128px]" />
      </div>

      <div className="container-custom px-6 relative z-10 flex flex-col items-center text-center">

        {/* Main Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className={`text-6xl sm:text-7xl lg:text-9xl font-bold tracking-tighter mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
            {config.personal.name.toUpperCase()}
          </h1>

          <h2 className="text-xl sm:text-2xl font-mono text-accent-cyan tracking-widest uppercase mb-8">
            {config.personal.title}
          </h2>
        </motion.div>

        {/* Description/Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`max-w-2xl text-lg sm:text-xl leading-relaxed mb-12 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
        >
          {config.personal.tagline || "Crafting digital experiences with precision and passion."}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-white/5 border border-white/10 hover:border-accent-purple/50 rounded-full transition-all duration-300"
          >
            <span className="flex items-center gap-2 text-white font-medium">
              {labels.getInTouch} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 rounded-full bg-accent-purple/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <div className="flex items-center gap-4">
            <a
              href={config.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-4 bg-white/5 border border-white/10 hover:border-accent-cyan/50 rounded-full transition-all duration-300"
            >
              <span className="flex items-center gap-2 text-white font-medium">
                <FileText size={18} className="text-accent-cyan" /> {labels.viewCV}
              </span>
            </a>

            <a
              href={config.resume}
              download
              className="group relative p-4 bg-white/5 border border-white/10 hover:border-accent-cyan/50 rounded-full transition-all duration-300"
              title={labels.downloadCV}
            >
              <Download size={18} className="text-accent-cyan group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>

      <div className="absolute bottom-12 left-0 right-0 z-10">
        <div className="container-custom px-6 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center gap-4 group cursor-pointer"
            onClick={() => {
              const nextSection = document.getElementById('expertise');
              if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest group-hover:text-accent-cyan transition-colors duration-300">
              Keep Scrolling
            </span>
            <div className="relative flex flex-col items-center">
              {/* Mouse Icon */}
              <div className="w-6 h-10 rounded-full border-2 border-gray-500 group-hover:border-accent-cyan p-1 transition-colors duration-300">
                <motion.div
                  className="w-1 h-2 bg-gray-500 group-hover:bg-accent-cyan rounded-full mx-auto"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Wavy Arrow */}
              <motion.div
                className="mt-2 text-gray-500 group-hover:text-accent-cyan transition-colors duration-300"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >
                <ArrowRight size={20} className="rotate-90" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
