'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, FileText, Download } from 'lucide-react'
import { usePortfolioConfig, useNavigationLabels } from '@/lib/localization'
import Image from 'next/image'

export default function About() {
  const { config } = usePortfolioConfig()
  const labels = useNavigationLabels()

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-dark-950">
      {/* Decorative background effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[120px] -z-10" />

      <div className="container-custom px-6 md:px-12">
        <div className="flex flex-col mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-accent-cyan font-mono text-sm">{'//'} 02</span>
            <span className="text-accent-cyan font-mono text-xs uppercase tracking-[0.3em]">Who I Am</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-9xl font-bold italic tracking-tighter leading-none"
          >
            Passionate <br />
            <span className="text-accent-cyan">Digital Architect.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Image & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-12 group">
              <div className="absolute inset-0 bg-accent-cyan/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <div className="absolute inset-0 border-[1px] border-white/10 rounded-2xl z-20 pointer-events-none" />
              <Image
                src={config.personal.profileImage}
                alt={config.personal.name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                unoptimized
              />
              <div className="absolute bottom-6 left-6 z-30">
                <div className="bg-dark-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                  <span className="text-[10px] font-mono text-white/80 uppercase tracking-widest">Available for Hire</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-white/60 leading-relaxed font-light italic">
                {config.personal.bio}
              </p>
              <div className="h-px w-20 bg-accent-cyan/50" />
            </div>
          </motion.div>

          {/* Right Column: Detailed Info & Stats */}
          <div className="lg:col-span-7 flex flex-col gap-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-[0.2em] font-bold block">Background</span>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {config.personal.location_description}
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-[0.2em] font-bold block">Interests</span>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {config.personal.interests}
                  </p>
                </div>
              </div>

              <div className="glass-card-theme p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent">
                <blockquote className="text-2xl font-bold italic tracking-tight text-white mb-6">
                  "Solving complex problems through elegant code and architectural precision."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-white/20" />
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{config.personal.name}</span>
                </div>
              </div>
            </motion.div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-1"
              >
                <span className="text-4xl md:text-5xl font-bold font-mono text-white italic">2<span className="text-accent-cyan">+</span></span>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">Years Experience</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-1"
              >
                <span className="text-4xl md:text-5xl font-bold font-mono text-white italic">{config.projects.length + (config.mobileProjects?.length || 0)}<span className="text-accent-cyan">+</span></span>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">Projets Réalisés</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-1 md:col-span-1 col-span-2"
              >
                <span className="text-4xl md:text-5xl font-bold font-mono text-white italic">100<span className="text-accent-cyan">%</span></span>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">Client Satisfaction</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-8"
            >
              <a href="#contact" className="inline-flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white text-dark-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <ArrowUpRight size={24} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest group-hover:text-accent-cyan transition-colors">Start a Project</span>
              </a>

              <div className="flex items-center gap-6">
                <a
                  href={config.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-accent-cyan transition-colors uppercase tracking-widest"
                >
                  <FileText size={16} />
                  <span>{labels.viewCV}</span>
                </a>
                <a
                  href={config.resume}
                  download
                  className="group flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-accent-cyan transition-colors uppercase tracking-widest"
                >
                  <Download size={16} />
                  <span>{labels.downloadCV}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
