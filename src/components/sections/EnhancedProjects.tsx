'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, Folder, Star, Filter, ChevronRight } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { usePortfolioConfig } from '@/lib/localization'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface Project {
  id: string | number
  title: string
  description: string
  image: string
  technologies?: string[]
  techStack?: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  category?: string
}

const ProjectCard = ({ project, index, locale }: { project: Project, index: number, locale: string }) => {
  const { theme } = useTheme()
  const isMobile = project.category?.toLowerCase().includes('mobile') || project.category === 'Mobile Security'

  // Grid Spanning Logic for "Artistic Mix"
  // Mobile projects are tall (row-span-2)
  // Specific large web projects for emphasis: Smart E-Commerce & Universal Admin
  // EFET is kept standard (small)
  const isLargeWeb = !isMobile && (
    project.title === 'Smart E-Commerce' ||
    project.title === 'Universal Admin Panel' ||
    (index === 0 && project.title !== 'EFET Website')
  )

  // "Stilt" effect: visual tilt/lift for Smart E-Commerce
  const isStilted = project.title === 'Smart E-Commerce'

  const spanClasses = isMobile
    ? 'row-span-2'
    : isLargeWeb
      ? 'md:col-span-2 md:row-span-2'
      : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group relative flex flex-col ${spanClasses} ${isMobile
        ? 'bg-transparent items-center justify-center py-2'
        : 'bg-dark-900/50 rounded-3xl border border-white/5 hover:border-white/10'
        } ${!isMobile ? 'hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden' : ''} ${isStilted ? 'hover:rotate-1 hover:scale-[1.01] hover:shadow-accent-cyan/10' : ''}`}
    >
      <Link href={`/${locale}/projects/${project.id}`} className={`block h-full flex flex-col w-full ${isMobile ? 'items-center' : ''}`}>

        {/* Image Container */}
        {isMobile ? (
          // Samsung S24 Ultra Layout
          // Characteristic: Sharp corners, small punch-hole camera, wider aspect ratio than iPhone
          <div className="relative w-full max-w-[280px] aspect-[9/19] bg-black rounded-[0.5rem] border-[3px] border-gray-600 shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.02] group-hover:shadow-accent-cyan/20 ring-1 ring-gray-700">

            {/* S24 Ultra Camera Hole - Small centered dot */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full z-20 border border-gray-800" />

            {/* Screen Content */}
            <div className="relative w-full h-full rounded-[0.3rem] overflow-hidden bg-dark-950">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />

              {/* Overlay with details on hover */}
              <div className="absolute inset-0 bg-dark-950/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-30">
                <span className="text-[10px] font-mono text-accent-cyan mb-2 uppercase tracking-widest">Mobile App</span>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-xs text-gray-400 mb-6 line-clamp-3 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {(project.technologies || project.techStack || []).slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[9px] font-mono font-bold px-2 py-1 rounded bg-white/10 text-white border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-2 px-4 rounded-full flex items-center gap-2 transition-colors">
                  VIEW DETAILS <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </div>
        ) : (
          // Web App Layout
          <>
            <div className={`relative overflow-hidden w-full ${isLargeWeb ? 'h-[300px] md:h-full flex-grow' : 'h-48 md:h-64'} bg-dark-950`}>
              {project.image.endsWith('.svg') ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes={isLargeWeb ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              <div className="absolute top-4 right-4 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                <div className="w-10 h-10 rounded-full bg-white text-dark-950 flex items-center justify-center shadow-lg">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`p-6 flex flex-col justify-between relative bg-gradient-to-b from-dark-900/0 to-dark-900/50 backdrop-blur-sm ${isLargeWeb ? 'md:absolute md:bottom-0 md:left-0 md:right-0 md:bg-gradient-to-t md:from-black/90 md:to-transparent' : 'flex-grow'}`}>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-accent-cyan font-mono text-xs font-bold tracking-tighter">0{index + 1}</span>
                  <span className="h-px w-4 bg-white/10" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">{project.category || 'Development'}</span>
                </div>

                <h3 className={`font-bold mb-3 leading-tight group-hover:text-accent-cyan transition-colors duration-300 ${isLargeWeb ? 'text-3xl md:text-4xl' : 'text-xl'} ${theme === 'dark' || isLargeWeb ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>

                <p className={`text-sm mb-6 line-clamp-2 leading-relaxed opacity-70 ${theme === 'dark' || isLargeWeb ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {(project.technologies || project.techStack || []).slice(0, 3).map((tech) => (
                  <span key={tech} className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full border uppercase tracking-wide transition-colors ${theme === 'dark' || isLargeWeb ? 'bg-white/5 text-gray-400 border-white/5 group-hover:border-white/10 group-hover:bg-white/10' : 'bg-black/5 text-gray-600 border-black/5 group-hover:border-black/10 group-hover:bg-black/10'}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </Link>
    </motion.div>
  )
}

export default function EnhancedProjects() {
  const { config } = usePortfolioConfig()
  const { theme } = useTheme()
  const params = useParams()
  const locale = (params?.locale as string) || 'en'
  const [filter, setFilter] = useState('All')

  // Projects are already merged in config, but we ensure fallback
  const allProjects = (config.projects || []) as Project[]

  // Derive categories dynamically from properties
  const categories = ['All', 'Web Development', 'Mobile Development']

  const filteredProjects = allProjects.filter(p => filter === 'All' || p.category === filter)

  const featuredProject = allProjects.find(p => p.featured) || allProjects[0]
  const displayProjects = filteredProjects.filter(p => p.id !== (filter === 'All' ? featuredProject?.id : -1))

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="container-custom px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-6xl md:text-8xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              My<br />Work
            </h2>
            <p className={`text-lg leading-relaxed max-w-md opacity-80 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA.
              Collaborated in 140+ projects with 50+ clients all around the world.
            </p>
          </motion.div>

          {featuredProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative perspective-1000 hidden lg:block"
            >
              <div className="relative z-10 transform-3d group">
                <div className="relative w-72 h-[580px] mx-auto rounded-[1.5rem] border-[3px] border-l-gray-600 border-r-gray-600 border-t-gray-700 border-b-gray-700 bg-dark-950 shadow-2xl overflow-hidden shadow-accent-cyan/20 transition-transform duration-500 group-hover:rotate-y-12">
                  {/* Samsung S24 Ultra Camera Hole */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full z-50 ring-1 ring-gray-800" />

                  {/* Reflection Layer */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent z-40 pointer-events-none" />

                  {featuredProject.image.endsWith('.svg') ? (
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-transparent to-transparent flex flex-col justify-end p-6 z-30">
                    <span className="text-accent-cyan font-mono text-[10px] mb-2 font-bold uppercase tracking-widest">Featured App</span>
                    <h3 className="text-xl font-bold text-white mb-4 italic tracking-tight">{featuredProject.title}</h3>
                    <Link href={`/${locale}/projects/${featuredProject.id}`} className="bg-white text-dark-950 font-bold py-3 px-6 rounded-lg text-xs flex items-center justify-center gap-2 hover:bg-accent-cyan transition-colors group/btn">
                      <span>OPEN PROJECT</span>
                      <ArrowUpRight size={16} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl opacity-50" />
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap items-center gap-8"
        >
          <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">Filter by</span>
          <div className="flex flex-wrap gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative group font-mono text-xs uppercase tracking-widest transition-all duration-300 ${filter === cat ? 'text-accent-cyan' : 'text-gray-500 hover:text-white'
                  }`}
              >
                <span className="flex items-center gap-1">
                  <span>{cat}</span>
                  <span className="text-[8px] opacity-40">/</span>
                </span>
                {filter === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent-cyan"
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-flow-dense">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} locale={locale} />
          ))}
        </div>

      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
      `}</style>
    </section>
  )
}