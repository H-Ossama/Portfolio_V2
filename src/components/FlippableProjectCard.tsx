'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, ArrowRight, Eye, RotateCcw, Layers, Code, CheckCircle, HelpCircle } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'

// Custom CSS for card flipping behavior
const cardStyles = `
  .card-flipped .hover-effects-disabled {
    transform: none !important;
    transition: none !important;
  }
  
  .card-flipped .disable-hover-when-flipped {
    pointer-events: none !important;
    transform: none !important;
    transition: none !important;
  }
  
  .card-flipped .card-content * {
    transform: none !important;
    transition: none !important;
  }
`

interface ProjectDetailProps {
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  image: string
  featured: boolean
  period?: string
  role?: string
  problemsSolved?: string[]
  purpose?: string
}

export default function FlippableProjectCard({ project, index }: { 
  project: ProjectDetailProps
  index: number 
}) {
  const { theme } = useTheme()
  const [isFlipped, setIsFlipped] = useState(false)
  
  const toggleFlip = () => {
    setIsFlipped(!isFlipped)
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative h-[600px] w-full ${isFlipped ? 'card-flipped' : ''}`}
      style={{ perspective: "1000px" }}
    >
      {/* Add styles for card flipping */}
      <style jsx>{cardStyles}</style>
      {/* Card Container */}
      <div 
        className={`relative w-full h-full transition-all duration-700 transform-gpu ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{ 
          transformStyle: "preserve-3d", 
          willChange: "transform",
          pointerEvents: isFlipped ? 'none' : 'auto' 
        }}
      >
        {/* Front Side */}
        <div 
          className={`absolute inset-0 glass-card overflow-hidden ${
            isFlipped ? 'pointer-events-none' : 'pointer-events-auto hover:shadow-glow-lg group'
          } transition-all duration-500 backface-hidden disable-hover-when-flipped`}
        >
          {/* Project Image */}
          <div className="relative h-64 overflow-hidden card-content">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={`object-cover transition-transform duration-700 ${
                isFlipped ? '' : 'group-hover:scale-110'
              }`}
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${
              theme === 'dark' 
                ? 'from-dark-900/80 via-dark-900/20 to-transparent' 
                : 'from-gray-900/80 via-gray-900/20 to-transparent'
            }`}></div>
          </div>

          {/* Project Content */}
          <div className="p-8 flex flex-col h-[calc(100%-16rem)]">
            <h3 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {project.title}
            </h3>
            
            <p className={`mb-6 line-clamp-3 leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-6 flex-1 overflow-y-auto card-content">
              {project.techStack.slice(0, 4).map((tech: string) => (
                <span
                  key={tech}
                  className={`px-4 py-2 glass-pill text-sm hover-effects-disabled ${
                    isFlipped ? '' : 'hover:shadow-glow'
                  } transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className={`px-4 py-2 glass-pill text-sm ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  +{project.techStack.length - 4} more
                </span>
              )}
            </div>

            {/* Project Links and Details Button */}
            <div className="flex gap-6 items-center mt-auto card-content">
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-theme-muted hover-effects-disabled ${
                      isFlipped ? '' : 'hover:text-theme-primary'
                    } transition-all duration-300 group/link`}
                  >
                    <Github size={18} className={`icon-theme-muted ${
                      isFlipped ? '' : 'group-hover/link:text-blue-400 group-hover/link:rotate-12'
                    } transition-all duration-300`} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-theme-muted hover-effects-disabled ${
                      isFlipped ? '' : 'hover:text-theme-primary'
                    } transition-all duration-300 group/link`}
                  >
                    <ExternalLink size={18} className={`icon-theme-muted ${
                      isFlipped ? '' : 'group-hover/link:text-blue-400 group-hover/link:translate-x-1'
                    } transition-all duration-300`} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                )}
              </div>
              
              <div className="ml-auto">
                <button
                  onClick={toggleFlip}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-dark-700/50 text-blue-400 hover:bg-dark-600/60'
                      : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-sm font-medium">Details</span>
                  <RotateCcw size={16} className="animate-pulse-slow" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back Side */}
        <div 
          className={`absolute inset-0 glass-card p-8 overflow-auto backface-hidden rotate-y-180 ${
            isFlipped ? 'pointer-events-auto hover:shadow-glow-lg' : 'pointer-events-none'
          } transition-all duration-500 disable-hover-when-flipped`}
        >
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="mb-6">
              <h3 className={`text-2xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {project.title}
              </h3>
              {project.period && (
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={16} className={`${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.period}
                  </span>
                </div>
              )}
            </div>
            
            {/* Project Details */}
            <div className="flex-1 space-y-6 overflow-auto pr-2 mb-4">
              {/* Role */}
              {project.role && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg ${
                      theme === 'dark' ? 'bg-dark-700' : 'bg-gray-100'
                    }`}>
                      <Layers size={18} className={`${
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                    </div>
                    <h4 className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      My Role
                    </h4>
                  </div>
                  <p className={`text-sm pl-9 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.role}
                  </p>
                </div>
              )}
              
              {/* Technologies */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg ${
                    theme === 'dark' ? 'bg-dark-700' : 'bg-gray-100'
                  }`}>
                    <Code size={18} className={`${
                      theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                    }`} />
                  </div>
                  <h4 className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Technologies
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2 pl-9">
                  {project.techStack.map((tech: string) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs ${
                        theme === 'dark' 
                          ? 'bg-dark-700 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Problems Solved */}
              {project.problemsSolved && project.problemsSolved.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg ${
                      theme === 'dark' ? 'bg-dark-700' : 'bg-gray-100'
                    }`}>
                      <CheckCircle size={18} className={`${
                        theme === 'dark' ? 'text-green-400' : 'text-green-600'
                      }`} />
                    </div>
                    <h4 className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Challenges & Solutions
                    </h4>
                  </div>
                  <ul className={`text-sm space-y-3 pl-9 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.problemsSolved.map((problem, i) => (
                      <li key={i} className="flex gap-2">
                        <span className={theme === 'dark' ? 'text-green-400' : 'text-green-600'}>•</span>
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Purpose */}
              {project.purpose && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg ${
                      theme === 'dark' ? 'bg-dark-700' : 'bg-gray-100'
                    }`}>
                      <HelpCircle size={18} className={`${
                        theme === 'dark' ? 'text-amber-400' : 'text-amber-600'
                      }`} />
                    </div>
                    <h4 className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Project Purpose
                    </h4>
                  </div>
                  <p className={`text-sm pl-9 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.purpose}
                  </p>
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="mt-auto pt-3 flex items-center justify-between border-t border-gray-700/20 dark:border-gray-700/20 border-gray-300/20">
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-colors ${
                      theme === 'dark' 
                        ? 'bg-dark-700 text-blue-400 hover:bg-dark-600' 
                        : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                    }`}
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-colors ${
                      theme === 'dark' 
                        ? 'bg-dark-700 text-blue-400 hover:bg-dark-600' 
                        : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                    }`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              
              <button
                onClick={toggleFlip}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-dark-700/70 text-blue-400 hover:bg-dark-600/80'
                    : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                }`}
              >
                <span className="text-sm font-medium">Back</span>
                <RotateCcw size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}