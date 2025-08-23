'use client'

import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio.en'
import { useTheme } from '@/contexts/ThemeContext'
import { useState } from 'react'

interface SkillItemProps {
  skill: string
  category: string
  index: number
  delay: number
}

interface SkillIconMap {
  [key: string]: string
}

function SkillCard({ skill, category, index, delay }: SkillItemProps) {
  const { theme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  
  // Enhanced icon mapping for skills
  const skillIcons: SkillIconMap = {
    // Frontend
    'HTML5': '🌐',
    'CSS3': '🎨',
    'JavaScript': '⚡',
    'React.js': '⚛️',
    'Tailwind CSS': '💨',
    'Responsive Design': '📱',
    
    // Backend
    'Node.js': '🟢',
    'Express.js': '🚀',
    'Python': '🐍',
    'REST APIs': '🔗',
    
    // Database
    'MongoDB': '🍃',
    'MySQL': '🗄️',
    
    // Networking
    'Administration des réseaux': '🌐',
    'Configuration des équipements réseau': '⚙️',
    'Sécurité informatique': '🔒',
    'Protocoles réseau': '📡',
    'Architecture réseau': '🏗️',
    
    // System
    'Linux Administration': '🐧',
    'DevOps': '♾️',
    'Virtualisation': '📦',
    'Cloud Computing': '☁️',
    'Sécurité des systèmes': '🛡️',
    
    // Tools
    'Git/GitHub': '📦',
    'VS Code': '💻',
    'npm/yarn': '📦',
    'OAuth/JWT': '🔑',
    'Google Maps API': '🗺️'
  }

  const getSkillLevel = (skill: string) => {
    const levels: { [key: string]: number } = {
      // Frontend
      'HTML5': 95,
      'CSS3': 90,
      'JavaScript': 92,
      'React.js': 88,
      'Tailwind CSS': 85,
      'Responsive Design': 90,
      
      // Backend
      'Node.js': 85,
      'Express.js': 82,
      'Python': 85,
      'REST APIs': 80,
      
      // Database
      'MongoDB': 82,
      'MySQL': 85,
      
      // Networking
      'Administration des réseaux': 90,
      'Configuration des équipements réseau': 88,
      'Sécurité informatique': 92,
      'Protocoles réseau': 87,
      'Architecture réseau': 85,
      
      // System
      'Linux Administration': 88,
      'DevOps': 80,
      'Virtualisation': 85,
      'Cloud Computing': 78,
      'Sécurité des systèmes': 90,
      
      // Tools
      'Git/GitHub': 90,
      'VS Code': 95,
      'npm/yarn': 85,
      'OAuth/JWT': 83,
      'Google Maps API': 80
    }
    return levels[skill] || 75
  }

  const skillLevel = getSkillLevel(skill)
  const icon = skillIcons[skill] || '⭐'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.23, 1, 0.32, 1], 
        delay: index * 0.1
      }}
      viewport={{ once: true, margin: "50px 0px -20px 0px" }}
      whileHover={{ 
        scale: 1.02, 
        y: -3
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative p-4 rounded-2xl backdrop-blur-xl border transition-all duration-300 cursor-pointer ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-dark-800/50 via-dark-700/30 to-dark-800/50 border-gray-700/40 hover:border-blue-400/60'
          : 'bg-gradient-to-br from-white/60 via-white/40 to-white/60 border-gray-300/40 hover:border-blue-500/60'
      } hover:shadow-lg hover:shadow-blue-500/10`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
    >
      {/* Glow effect - simplified */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: theme === 'dark' 
            ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))'
            : 'linear-gradient(135deg, rgba(59, 130, 246, 0.03), rgba(147, 51, 234, 0.03))',
          filter: 'blur(10px)'
        }}
      />
      
      {/* Skill icon with simple animation */}
      <motion.div 
        className="text-2xl mb-2 relative z-10 inline-block"
        animate={isHovered ? {
          scale: [1, 1.1, 1]
        } : {}}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {icon}
      </motion.div>
      
      {/* Skill name */}
      <h4 className={`font-semibold text-sm mb-2 transition-all duration-300 relative z-10 ${
        theme === 'dark' 
          ? 'text-white group-hover:text-blue-400' 
          : 'text-gray-900 group-hover:text-blue-600'
      }`}>
        {skill}
      </h4>
      
      {/* Simple skill level indicator */}
      <div className="relative z-10">
        <div className={`h-1.5 rounded-full overflow-hidden ${
          theme === 'dark' ? 'bg-dark-600/50' : 'bg-gray-200'
        }`}>
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skillLevel}%` }}
            transition={{ duration: 1, ease: "easeOut", delay: delay + index * 0.05 }}
          />
        </div>
      </div>
      
      {/* Category badge */}
      <motion.div
        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-dark-600/60 text-gray-300 group-hover:bg-blue-500/20 group-hover:text-blue-300'
            : 'bg-gray-200/60 text-gray-600 group-hover:bg-blue-500/20 group-hover:text-blue-600'
        }`}
        whileHover={{ scale: 1.1 }}
      >
        {category}
      </motion.div>
    </motion.div>
  )
}

function SkillCategory({ title, skills, delay, icon }: {
  title: string
  skills: string[]
  delay: number
  icon: string
}) {
  const { theme } = useTheme()
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true, margin: "100px 0px" }}
      className="mb-8"
    >
      {/* Category Header */}
      <motion.div
        className="flex items-center gap-3 mb-6"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`text-2xl p-3 rounded-xl backdrop-blur-md border ${
            theme === 'dark'
              ? 'bg-dark-800/50 border-gray-700/30'
              : 'bg-white/50 border-gray-300/30'
          }`}
          whileHover={{ 
            scale: 1.05,
            rotate: 5
          }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
        
        <div>
          <h3 className={`text-xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h3>
          <div className={`h-0.5 w-16 rounded-full mt-1 bg-gradient-to-r from-blue-500 to-purple-500`} />
        </div>
      </motion.div>

      {/* Skills Grid - More compact */}
      <div className="grid grid-cols-1 gap-3">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill}
            skill={skill}
            category={title}
            index={index}
            delay={delay + 0.1}
          />
        ))}
      </div>
    </motion.div>
  )
}

import { usePortfolioConfig, useNavigationLabels } from '@/lib/localization'

export default function ModernSkills() {
  const { config } = usePortfolioConfig()
  const labels = useNavigationLabels()
  const { theme } = useTheme()
  
  // Curated professional skill categories - only showing key skills
  const skillCategories = [
    {
      title: "Web Development",
      skills: ["React.js", "JavaScript", "Node.js", "HTML5", "CSS3"],
      delay: 0,
      icon: "�"
    },
    {
      title: "Network & Security", 
      skills: ["Sécurité informatique", "Administration des réseaux", "Architecture réseau"],
      delay: 0.1,
      icon: "�"
    },
    {
      title: "System & Database",
      skills: ["Linux Administration", "MySQL", "MongoDB"],
      delay: 0.2,
      icon: "�️"
    }
  ]

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 left-1/6 w-96 h-96 rounded-full opacity-10 ${
          theme === 'dark' ? 'bg-blue-500' : 'bg-blue-400'
        } blur-3xl animate-pulse`} />
        <div className={`absolute bottom-1/4 right-1/6 w-80 h-80 rounded-full opacity-10 ${
          theme === 'dark' ? 'bg-purple-500' : 'bg-purple-400'
        } blur-3xl animate-pulse`} 
        style={{ animationDelay: '1s' }} />
        <div className={`absolute top-2/3 left-2/3 w-64 h-64 rounded-full opacity-5 ${
          theme === 'dark' ? 'bg-cyan-500' : 'bg-cyan-400'
        } blur-3xl animate-pulse`}
        style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, margin: "100px 0px" }}
          className="text-center mb-12"
        >
          {/* Floating icon with 3D effect - smaller */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
            whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className={`inline-block text-4xl mb-6 p-4 rounded-2xl backdrop-blur-xl border ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-dark-800/60 via-dark-700/40 to-dark-800/60 border-gray-700/40' 
                : 'bg-gradient-to-br from-white/60 via-white/40 to-white/60 border-gray-300/40'
            } shadow-lg hover:shadow-blue-500/10 transition-all duration-300`}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5
            }}
          >
            ⚡
          </motion.div>
          
          <motion.h2 
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {config.sections?.skills?.coreSkills || 'Core'}{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>
          
          <motion.p 
            className={`text-lg max-w-3xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {config.sections?.skills?.description || 'Technologies et compétences clés que je maîtrise pour développer des solutions web modernes et sécurisées.'}
          </motion.p>
        </motion.div>

        {/* Skills Categories - More compact grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              delay={category.delay}
              icon={category.icon}
            />
          ))}
        </div>

        {/* Optional: Brief summary instead of large call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className={`text-sm max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {config.sections?.skills?.summary || 'Compétences acquises à travers une formation en développement web et une spécialisation en administration réseau.'}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
