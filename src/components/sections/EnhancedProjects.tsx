'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { usePortfolioConfig } from '@/lib/localization'
import FlippableProjectCard from '../FlippableProjectCard'

export default function EnhancedProjects() {
  const { config } = usePortfolioConfig()
  const { theme } = useTheme()

  const projects = (config.projects || []).filter(p => p.featured)

  return (
    <section id="projects" className="section-padding relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/5 w-96 h-96 bg-gradient-purple-glow rounded-full opacity-10 floating-element"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-glow rounded-full opacity-15 floating-element-delayed"></div>
        <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-gradient-glow rounded-full opacity-10 floating-element"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className={`text-5xl lg:text-6xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {config.sections?.projects?.featuredProjects?.split(' ')[0] || 'Featured'} <span className="text-gradient">{config.sections?.projects?.featuredProjects?.split(' ').slice(1).join(' ') || 'Projects'}</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {config.sections?.projects?.description || 'A showcase of my recent work, demonstrating various technologies and problem-solving approaches'}
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <FlippableProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <div className="glass-card-theme max-w-2xl mx-auto p-12 hover:shadow-glow-lg transition-all duration-500">
            <div className="relative">
              {/* Glowing icon */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 glass-card-theme rounded-full flex items-center justify-center floating-element group">
                  <Github size={32} className="icon-theme-primary group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-theme-primary mb-6 pt-8">
                {config.sections?.projects?.wantToSeeMore || 'Want to see more?'}
              </h3>
              <p className="text-theme-secondary mb-8 leading-relaxed">
                {config.sections?.projects?.githubDescription || `Check out my GitHub profile for more projects, contributions, and code samples. 
                I'm constantly building and experimenting with new technologies.`}
              </p>
              <a
                href={config.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-3 group"
              >
                <Github size={20} />
                <span>{config.sections?.projects?.viewGithubProfile || 'View GitHub Profile'}</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}