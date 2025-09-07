'use client'

import { motion } from 'framer-motion'
import { usePortfolioConfig, useNavigationLabels } from '@/lib/localization'
import Image from 'next/image'
import { useEffect } from 'react'

export default function About() {
  const { config } = usePortfolioConfig()
  const labels = useNavigationLabels()
  
  // Force refresh on component mount
  useEffect(() => {
    // This will force Next.js to rerender this component
    console.log('About component mounted - forcing refresh');
  }, []);
  
  return (
    <section id="about" className="section-padding relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-purple-glow rounded-full opacity-20 floating-element"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-glow rounded-full opacity-15 floating-element-delayed"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, margin: "60px 0px" }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-theme-primary">
              {labels.about} <span className="text-gradient">{config.personal.name.split(' ')[0]}</span>
            </h2>
            
            <div className="space-y-8 text-lg leading-relaxed text-theme-secondary">
              <p>{config.personal.bio}</p>
              
              <p>
                {config.personal.location_description || `Based in ${config.personal.location}, I'm always excited to take on new challenges 
                and collaborate with teams that share a passion for innovation and quality. 
                Whether it's building responsive user interfaces or developing robust backend systems, 
                I approach every project with enthusiasm and attention to detail.`}
              </p>
              
              <p>
                {config.personal.interests || `When I'm not coding, you can find me exploring the latest web development trends, 
                contributing to open-source projects, or learning new technologies to stay ahead 
                in this rapidly evolving field.`}
              </p>
            </div>

            {/* Stats with glass morphism */}
            <div className="grid grid-cols-2 gap-8 mt-16">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card-theme p-8 text-center hover:shadow-glow transition-all duration-300"
              >
                <div className="text-5xl font-bold text-gradient mb-3">2+</div>
                <div className="text-theme-muted font-medium">{config.sections?.about?.yearsExperience || 'Years Experience'}</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass-card-theme p-8 text-center hover:shadow-glow-purple transition-all duration-300"
              >
                <div className="text-5xl font-bold text-gradient mb-3">
                  {config.projects.length}+
                </div>
                <div className="text-theme-muted font-medium">{config.sections?.about?.projectsCompleted || 'Projects Completed'}</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Image Section - Improved Design */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, margin: "60px 0px" }}
            className="relative perspective-1000"
          >
            <div className="relative mx-auto max-w-md">
              {/* Modern gradient halo effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/30 via-purple-500/20 to-cyan-500/30 rounded-2xl blur-xl opacity-70 animate-pulse"></div>
              
              {/* Improved glass card with better padding */}
              <div className="relative glass-card-theme p-6 border border-white/10 hover:shadow-lg transition-all duration-500 transform hover:scale-105 rounded-2xl">
                {/* Reduced height container with better aspect ratio */}
                <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={config.personal.profileImage}
                    alt={`${config.personal.name} - About`}
                    fill
                    className="object-cover object-center"
                    unoptimized={true}
                    key={`profile-img-${Date.now()}`} // Force re-render
                  />
                  {/* Improved overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Added subtle inner border */}
                  <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>
                </div>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary-400 rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary-400 rounded-bl-lg"></div>
            </div>

            {/* Improved floating tech icons with better positioning */}
            <div className="absolute -top-4 -right-4 w-16 h-16 glass-card-theme rounded-full flex items-center justify-center floating-element shadow-lg">
              <span className="text-2xl">⚛️</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 glass-card-theme rounded-full flex items-center justify-center floating-element-delayed shadow-lg">
              <span className="text-3xl">🔧</span>
            </div>
            <div className="absolute top-1/2 -left-3 w-12 h-12 glass-card-theme rounded-full flex items-center justify-center floating-element shadow-md">
              <span className="text-xl">💻</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
