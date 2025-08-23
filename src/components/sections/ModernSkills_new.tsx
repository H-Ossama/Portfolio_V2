'use client'

import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio.en'
import { useTheme } from '@/contexts/ThemeContext'

interface SkillItemProps {
  skill: string
  category: string
  index: number
  delay: number
}

interface SkillIconMap {
  [key: string]: string
}

function SkillItem({ skill, category, index, delay }: SkillItemProps) {
  const { theme } = useTheme()
  
  // Icon mapping for skills
  const skillIcons: SkillIconMap = {
    'HTML5': '🌐',
    'CSS3': '🎨',
    'JavaScript': '⚡',
    'React.js': '⚛️',
    'Tailwind CSS': '💨',
    'Responsive Design': '📱',
    'Node.js': '🟢',
    'Express.js': '🚀',
    'PHP': '�',
    'Laravel': '🔴',
    'Python': '🐍',
    'REST APIs': '�',
    'MongoDB': '🍃',
    'MySQL': '🗄️',
    'Test Driven Development (TDD)': '🧪',
    'APIs': '🔌',
    'OAuth': '🔐',
    'JWT': '🎫',
    'Git': '📦',
    'Agile/Scrum': '🏃‍♂️',
    'Network Security': '🛡️',
    'Computer Networks': '🌐',
    'Database Architecture': '🏗️',
    'Sécurité informatique': '�'
  }

  const getSkillLevel = (skill: string) => {
    // Mock skill levels - you can customize this based on your actual skill levels
    const levels: { [key: string]: number } = {
      'HTML5': 95,
      'CSS3': 90,
      'JavaScript': 92,
      'React.js': 88,
      'Tailwind CSS': 85,
      'Responsive Design': 90,
      'Node.js': 85,
      'Express.js': 82,
      'PHP': 88,
      'Laravel': 85,
      'Python': 80,
      'REST APIs': 85,
      'MongoDB': 82,
      'MySQL': 75,
      'Test Driven Development (TDD)': 75,
      'APIs': 85,
      'OAuth': 80,
      'JWT': 80,
      'Git': 90,
      'Agile/Scrum': 75,
      'Network Security': 78,
      'Computer Networks': 80,
      'Database Architecture': 75,
      'Sécurité informatique': 78
    }
    return levels[skill] || 70
  }

  const skillLevel = getSkillLevel(skill)
  const icon = skillIcons[skill] || '⭐'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut", 
        delay: delay + (index * 0.1)
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`group relative p-6 rounded-2xl backdrop-blur-md border transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-dark-800/40 border-gray-700/30 hover:border-blue-400/50 hover:bg-dark-700/60'
          : 'bg-white/40 border-gray-300/30 hover:border-blue-500/50 hover:bg-white/60'
      }`}
    >
      {/* Skill icon */}
      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      {/* Skill name */}
      <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'text-white group-hover:text-blue-400' 
          : 'text-gray-900 group-hover:text-blue-600'
      }`}>
        {skill}
      </h4>
      
      {/* Skill level bar */}
      <div className="relative">
        <div className={`h-2 rounded-full overflow-hidden ${
          theme === 'dark' ? 'bg-dark-600' : 'bg-gray-200'
        }`}>
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skillLevel}%` }}
            transition={{ duration: 1.5, delay: delay + (index * 0.1) + 0.3 }}
            viewport={{ once: true }}
          />
        </div>
        <span className={`text-xs mt-1 block ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {skillLevel}%
        </span>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
    </motion.div>
  )
}

interface SkillCategoryProps {
  title: string
  skills: string[]
  delay: number
  icon: string
}

function SkillCategory({ title, skills, delay, icon }: SkillCategoryProps) {
  const { theme } = useTheme()
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="mb-16"
    >
      {/* Category header */}
      <div className="flex items-center gap-4 mb-8">
        <div className={`text-4xl p-3 rounded-xl ${
          theme === 'dark' 
            ? 'bg-dark-800/60 border border-gray-700/30' 
            : 'bg-white/60 border border-gray-300/30'
        } backdrop-blur-sm`}>
          {icon}
        </div>
        <div>
          <h3 className={`text-2xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h3>
          <p className={`${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {skills.length} technologies
          </p>
        </div>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <SkillItem
            key={skill}
            skill={skill}
            category={title}
            index={index}
            delay={delay}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function ModernSkills() {
  const { theme } = useTheme()
  
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: portfolioConfig.skills.frontend,
      delay: 0.2,
      icon: "💻"
    },
    {
      title: "Backend Development", 
      skills: portfolioConfig.skills.backend,
      delay: 0.4,
      icon: "⚙️"
    },
    {
      title: "Database & Storage",
      skills: portfolioConfig.skills.database,
      delay: 0.6,
      icon: "🗄️"
    },
    {
      title: "Development Tools",
      skills: portfolioConfig.skills.development,
      delay: 0.8,
      icon: "🛠️"
    }
  ]

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 left-1/6 w-96 h-96 rounded-full opacity-5 ${
          theme === 'dark' ? 'bg-blue-500' : 'bg-blue-400'
        } blur-3xl`} />
        <div className={`absolute bottom-1/4 right-1/6 w-80 h-80 rounded-full opacity-5 ${
          theme === 'dark' ? 'bg-purple-500' : 'bg-purple-400'
        } blur-3xl`} />
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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`inline-block text-6xl mb-6 p-4 rounded-2xl ${
              theme === 'dark' 
                ? 'bg-dark-800/60 border border-gray-700/30' 
                : 'bg-white/60 border border-gray-300/30'
            } backdrop-blur-sm`}
          >
            ⚡
          </motion.div>
          
          <h2 className={`text-5xl lg:text-6xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A comprehensive arsenal of modern technologies and frameworks I leverage to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
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

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className={`inline-block p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-dark-800/40 border-gray-700/30'
              : 'bg-white/40 border-gray-300/30'
          }`}>
            <div className="text-3xl mb-4">🎯</div>
            <h3 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Always Learning
            </h3>
            <p className={`${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-md`}>
              Technology evolves rapidly, and I'm committed to staying ahead of the curve with continuous learning and hands-on practice.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
