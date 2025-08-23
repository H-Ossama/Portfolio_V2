'use client'

import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio.en'

interface SkillCategoryProps {
  title: string
  skills: string[]
  delay: number
}

function SkillCategory({ title, skills, delay }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: 45 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="glass-card p-8 hover:shadow-glow-lg group"
    >
      <h3 className="text-2xl font-bold text-theme-primary mb-8 text-center group-hover:text-gradient transition-all duration-300">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              ease: "easeOut", 
              delay: delay + (index * 0.1) 
            }}
            viewport={{ once: true }}
            className="relative group/skill"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-glass-light hover:bg-glass-medium text-theme-secondary hover:text-theme-primary px-4 py-3 rounded-lg text-center font-medium transition-all duration-300 cursor-default transform hover:scale-105 border border-gray-600/30 hover:border-primary-500/50">
              {skill}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: portfolioConfig.skills.frontend,
      delay: 0.2
    },
    {
      title: "Backend",
      skills: portfolioConfig.skills.backend,
      delay: 0.4
    },
    {
      title: "Database",
      skills: portfolioConfig.skills.database,
      delay: 0.6
    },
    {
      title: "Development",
      skills: portfolioConfig.skills.development,
      delay: 0.8
    }
  ]

  return (
    <section id="skills" className="section-padding relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-glow rounded-full opacity-10 floating-element"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-purple-glow rounded-full opacity-15 floating-element-delayed"></div>
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
          <h2 className="text-5xl lg:text-6xl font-bold text-theme-primary mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              delay={category.delay}
            />
          ))}
        </div>

        {/* Enhanced Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <div className="glass-card max-w-4xl mx-auto p-12 hover:shadow-glow-lg transition-all duration-500">
            <div className="relative">
              {/* Glowing icon */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center text-3xl floating-element">
                  🧠
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-theme-primary mb-6 pt-8">
                Continuous Learning
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm always eager to learn new technologies and frameworks. Currently exploring 
                advanced React patterns, TypeScript, and cloud deployment strategies. 
                The tech world evolves rapidly, and I'm committed to staying current with 
                industry best practices and emerging trends.
              </p>
              
              {/* Progress indicators */}
              <div className="flex justify-center space-x-8 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-xl mb-2 floating-element">
                    📚
                  </div>
                  <span className="text-sm text-gray-400">Learning</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-xl mb-2 floating-element-delayed">
                    ⚡
                  </div>
                  <span className="text-sm text-gray-400">Building</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-xl mb-2 floating-element">
                    🚀
                  </div>
                  <span className="text-sm text-gray-400">Growing</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
