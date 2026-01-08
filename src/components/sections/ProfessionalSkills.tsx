'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { usePortfolioConfig } from '@/lib/localization'
import { useState } from 'react'
import { Code, Server, Database, Shield, Workflow, Brain } from 'lucide-react'

interface SkillWithDetails {
  name: string
  proficiency: number
  description: string
  projects?: string[]
  experience?: string
}

interface SkillCategoryProps {
  title: string
  icon: React.ReactNode
  skills: SkillWithDetails[]
  delay: number
}

function SkillCard({ skill, index, delay }: { 
  skill: SkillWithDetails
  index: number
  delay: number
}) {
  const { theme } = useTheme()
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.23, 1, 0.32, 1], 
        delay: delay + index * 0.05
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
      className={`group p-5 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-dark-800/50 border-gray-700/30 hover:border-blue-500/30'
          : 'bg-white/80 border-gray-200/60 hover:border-blue-500/30'
      } hover:shadow-md hover:shadow-blue-500/5`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h4 className={`font-bold text-base ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>{skill.name}</h4>
          
          <div className="mt-2 flex items-center gap-2">
            <div className={`h-1.5 w-full max-w-[140px] rounded-full overflow-hidden ${
              theme === 'dark' ? 'bg-dark-600/70' : 'bg-gray-200'
            }`}>
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.proficiency}%` }}
                transition={{ duration: 0.8, ease: "easeOut", delay: delay + 0.1 }}
              />
            </div>
            
            <span className={`text-xs font-medium ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {skill.proficiency}%
            </span>
          </div>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`p-1.5 rounded-md transition-colors ${
            theme === 'dark' 
              ? 'hover:bg-gray-700/50' 
              : 'hover:bg-gray-200/70'
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''} ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
      
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
          marginTop: isExpanded ? 16 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className={`text-sm mb-3 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {skill.description}
        </p>
        
        {skill.projects && skill.projects.length > 0 && (
          <div className="mb-3">
            <h5 className={`text-xs font-semibold uppercase mb-1.5 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Related Projects
            </h5>
            <div className="flex flex-wrap gap-2">
              {skill.projects.map(project => (
                <span 
                  key={project}
                  className={`text-xs px-2 py-1 rounded-md ${
                    theme === 'dark' 
                      ? 'bg-dark-700/70 text-gray-300' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {project}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {skill.experience && (
          <div className="text-xs">
            <span className={`font-medium ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Experience:
            </span>{' '}
            <span className={`${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {skill.experience}
            </span>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

function SkillCategory({ title, icon, skills, delay }: SkillCategoryProps) {
  const { theme } = useTheme()
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      viewport={{ once: true }}
      className="mb-10"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`p-3 rounded-xl ${
          theme === 'dark' 
            ? 'bg-dark-800 text-blue-400' 
            : 'bg-blue-50 text-blue-600'
        }`}>
          {icon}
        </div>
        <div>
          <h3 className={`text-xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h3>
          <div className="h-0.5 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mt-1" />
        </div>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((skill, index) => (
          <SkillCard 
            key={skill.name} 
            skill={skill} 
            index={index} 
            delay={delay + 0.1}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function ProfessionalSkills() {
  const { config } = usePortfolioConfig()
  const { theme } = useTheme()
  
  // Define professional skills with detailed information
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code size={22} />,
      skills: [
        {
          name: "React.js",
          proficiency: 88,
          description: "Experienced in building complex interactive UIs with React, including state management, hooks, context API, and integration with RESTful APIs.",
          projects: ["Portfolio Website", "CinemaHalal", "Job Finder & CV AI Assistant"],
          experience: "2+ years, multiple projects"
        },
        {
          name: "JavaScript",
          proficiency: 92,
          description: "Strong foundation in modern JavaScript (ES6+), including asynchronous programming, promises, DOM manipulation, and functional programming patterns.",
          projects: ["CinemaHalal", "CAR RENTAL PLATFORM", "Portfolio Website"],
          experience: "3+ years, multiple professional projects"
        },
        {
          name: "HTML5/CSS3",
          proficiency: 90,
          description: "Expert in semantic HTML and advanced CSS techniques including Flexbox, Grid, animations, and responsive design across all device sizes.",
          projects: ["PLATEFORME DE LOCATION DE VOITURES", "Portfolio Website"],
          experience: "3+ years, all web projects"
        },
        {
          name: "Tailwind CSS",
          proficiency: 85,
          description: "Proficient in utility-first CSS approach using Tailwind for rapid UI development with consistent design systems and performance optimization.",
          projects: ["Portfolio Website"],
          experience: "1+ year, multiple projects"
        }
      ],
      delay: 0.1
    },
    {
      title: "Backend Development",
      icon: <Server size={22} />,
      skills: [
        {
          name: "Node.js",
          proficiency: 85,
          description: "Experienced in server-side JavaScript development with Node.js, creating RESTful APIs, handling authentication, and server-side rendering.",
          projects: ["CinemaHalal", "Job Finder & CV AI Assistant"],
          experience: "2+ years, multiple projects"
        },
        {
          name: "Express.js",
          proficiency: 82,
          description: "Skilled in building robust, scalable web applications and APIs using Express.js with middleware, routing, and MVC architecture.",
          projects: ["CinemaHalal"],
          experience: "2+ years, multiple projects"
        },
        {
          name: "PHP/Laravel",
          proficiency: 80,
          description: "Experienced in backend development with PHP and Laravel, including MVC architecture, Eloquent ORM, and building secure web applications.",
          projects: ["PLATEFORME DE LOCATION DE VOITURES"],
          experience: "2+ years, multiple academic projects"
        },
        {
          name: "Python",
          proficiency: 85,
          description: "Proficient in Python for backend development, data processing, and automation scripts with experience in frameworks and database integration.",
          projects: ["SYSTÈME DE GESTION SCOLAIRE"],
          experience: "2+ years, academic and personal projects"
        }
      ],
      delay: 0.2
    },
    {
      title: "Database & Storage",
      icon: <Database size={22} />,
      skills: [
        {
          name: "MongoDB",
          proficiency: 82,
          description: "Skilled in NoSQL database design, CRUD operations, aggregation pipelines, and integration with Node.js applications using Mongoose ODM.",
          projects: [],
          experience: "2+ years, multiple projects"
        },
        {
          name: "MySQL",
          proficiency: 85,
          description: "Experienced in relational database design, normalization, complex queries, transactions, and performance optimization in MySQL environments.",
          projects: ["PLATEFORME DE LOCATION DE VOITURES", "SYSTÈME DE GESTION SCOLAIRE"],
          experience: "3+ years, multiple academic and professional projects"
        }
      ],
      delay: 0.3
    },
    {
      title: "Network & Security",
      icon: <Shield size={22} />,
      skills: [
        {
          name: "Network Administration",
          proficiency: 90,
          description: "Comprehensive knowledge of network infrastructure, TCP/IP, routing protocols, firewall configuration, and network troubleshooting.",
          experience: "2+ years, specialized education at EFET"
        },
        {
          name: "IT Security",
          proficiency: 92,
          description: "Strong foundation in cybersecurity principles, threat detection, vulnerability assessment, and implementing security best practices.",
          experience: "2+ years, specialized education and certification"
        },
        {
          name: "Linux Administration",
          proficiency: 88,
          description: "Proficient in Linux system administration, shell scripting, service configuration, and server hardening for production environments.",
          experience: "2+ years, specialized education and personal projects"
        }
      ],
      delay: 0.4
    }
  ]
  
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background decoration - subtle and professional */}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Professional <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A focused showcase of my professional skills and technical expertise with demonstrated experience and application in real-world projects.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div>
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={category.delay}
            />
          ))}
        </div>

        {/* Professional Development & Learning Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className={`p-5 sm:p-8 rounded-xl backdrop-blur-sm border ${
            theme === 'dark'
              ? 'bg-dark-800/50 border-gray-700/30'
              : 'bg-white/80 border-gray-200/60'
          }`}>
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className={`p-3 rounded-xl shrink-0 mb-3 sm:mb-0 ${
                theme === 'dark' 
                  ? 'bg-purple-900/50 text-purple-400' 
                  : 'bg-purple-50 text-purple-600'
              }`}>
                <Brain size={24} />
              </div>
              
              <div className="w-full">
                <h3 className={`text-xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Continuous Professional Development
                </h3>
                
                <p className={`text-sm mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Beyond technical skills, I maintain a disciplined approach to professional development:
                </p>
                
                <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2">
                  {[
                    {
                      title: "Problem-Solving Methodology",
                      description: "Systematic approach to breaking down complex problems, analyzing requirements, and implementing optimal solutions."
                    },
                    {
                      title: "Technical Documentation",
                      description: "Creating clear, comprehensive documentation for code, APIs, and technical processes to ensure maintainability."
                    },
                    {
                      title: "Collaborative Development",
                      description: "Experience with version control (Git), code reviews, and working in team environments with effective communication."
                    },
                    {
                      title: "Continuous Learning",
                      description: "Proactive approach to staying current with industry trends, best practices, and emerging technologies."
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 mb-3 sm:mb-0">
                      <div className={`mt-1 shrink-0 ${
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        <Workflow size={16} />
                      </div>
                      <div>
                        <h4 className={`text-sm font-semibold mb-1 ${
                          theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                        }`}>
                          {item.title}
                        </h4>
                        <p className={`text-xs ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}