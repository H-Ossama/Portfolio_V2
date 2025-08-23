'use client'

import { motion } from 'framer-motion'
import { usePortfolioConfig, useNavigationLabels } from '@/lib/localization'
import Image from 'next/image'

export default function About() {
  const { config } = usePortfolioConfig()
  const labels = useNavigationLabels()
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

          {/* Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, margin: "60px 0px" }}
            className="relative perspective-1000"
          >
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-50 animate-glow-pulse"></div>
              
              {/* Main glass card */}
              <div className="relative glass-card-theme p-8 hover:shadow-glow-lg transition-all duration-500 transform hover:scale-105">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src={config.personal.profileImage}
                    alt={`${config.personal.name} - About`}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Floating tech icons */}
            <div className="absolute -top-6 -right-6 w-16 h-16 glass-card-theme rounded-full flex items-center justify-center floating-element">
              <span className="text-2xl">⚛️</span>
            </div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 glass-card-theme rounded-full flex items-center justify-center floating-element-delayed">
              <span className="text-3xl">🔧</span>
            </div>
            <div className="absolute top-1/2 -left-4 w-12 h-12 glass-card-theme rounded-full flex items-center justify-center floating-element">
              <span className="text-xl">💻</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
