'use client'

import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { usePortfolioConfig, useNavigationLabels } from '@/lib/localization'

export default function Footer() {
  const { config } = usePortfolioConfig()
  const labels = useNavigationLabels()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: config.contact.github,
      icon: 'Github',
    },
    {
      name: 'LinkedIn',
      url: config.contact.linkedin,
      icon: 'Linkedin',
    },
    {
      name: 'Email',
      url: `mailto:${config.contact.email}`,
      icon: 'Mail',
    },
    {
      name: 'Phone',
      url: `tel:${config.contact.phone}`,
      icon: 'Phone',
    },
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return Github
      case 'Linkedin':
        return Linkedin
      case 'Mail':
        return Mail
      case 'Phone':
        return Phone
      default:
        return Mail
    }
  }

  return (
    <footer className="relative bg-gradient-to-b from-dark-900 to-dark-950 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-80 h-80 bg-gradient-glow rounded-full opacity-5 floating-element"></div>
        <div className="absolute -top-32 right-1/3 w-64 h-64 bg-gradient-purple-glow rounded-full opacity-10 floating-element-delayed"></div>
      </div>

      <div className="container-custom px-6 sm:px-8 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          {/* Name and tagline */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-3 text-gradient">
              {config.personal.name}
            </h3>
            <p className="text-gray-300 max-w-md text-lg leading-relaxed">
              {config.personal.tagline}
            </p>
            <div className="mt-4 flex items-center justify-center md:justify-start gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for new opportunities</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => {
              const IconComponent = getIcon(link.icon)
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 glass-card-theme rounded-full flex items-center justify-center text-theme-secondary hover:text-theme-primary hover:shadow-glow transition-all duration-300 floating-element group"
                  aria-label={link.name}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent size={24} className="icon-theme-secondary group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Decorative line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Copyright and tech stack */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg">
              © {currentYear} {config.personal.name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center gap-2">
              <span>Built with</span>
              <span className="text-blue-400 font-medium">Next.js</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-medium">Tailwind CSS</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400 font-medium">Framer Motion</span>
            </div>
          </div>
        </div>

        {/* Additional footer note */}
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Designed and developed with passion ❤️ in Morocco
          </p>
        </div>
      </div>
    </footer>
  )
}
