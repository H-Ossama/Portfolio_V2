'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { usePortfolioConfig, useNavigationLabels } from '@/lib/localization'
import FlippableProjectCard from '../FlippableProjectCard'

// Enhanced project data with additional story information
const enhancedProjectData = [
  {
    id: 1,
    title: "PLATEFORME DE LOCATION DE VOITURES",
    description: "Une application web complète de location de voitures avec interface responsive HTML5/CSS3, système de réservation sécurisé et base de données optimisée.",
    techStack: ["PHP", "Laravel", "JavaScript", "Git", "HTML5", "CSS3", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/H-Ossama/Cars_Rental_v2.0",
    liveUrl: "", // Add if available
    image: "/images/project-1.svg",
    featured: true,
    period: "09/2024 - 04/2025",
    role: "Lead Developer responsible for the complete application architecture, database design, and implementation of the booking system with secure payment integration.",
    problemsSolved: [
      "Implemented secure authentication system with role-based access control for customers and administrators",
      "Developed an optimized MySQL database schema with proper indexes for efficient vehicle search and booking management",
      "Created a responsive reservation interface with date validation and vehicle availability checking in real-time",
      "Integrated a secure payment processing system with transaction history and receipt generation"
    ],
    purpose: "This project was developed to provide a comprehensive car rental platform that simplifies the vehicle reservation process, while offering administrators powerful tools to manage their fleet, track bookings, and analyze business performance."
  },
  {
    id: 2,
    title: "CLONE AIRBNB",
    description: "Application web complète clone d'Airbnb avec inscription et authentification sécurisée (OAuth, JWT), recherche avec filtres, gestion des propriétés (hôtes) et réservations, intégration de API RESTful.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "OAuth", "JWT", "Tailwind CSS", "RESTful API"],
    githubUrl: "https://github.com/H-Ossama/airbnb-clone",
    liveUrl: "", // Add if available
    image: "/images/project-2.svg",
    featured: true,
    role: "Full-Stack Developer responsible for both frontend and backend development, including the implementation of authentication system, property listing and searching functionality.",
    problemsSolved: [
      "Built a secure authentication system with JWT token management and social login integration",
      "Developed a complex search algorithm with multiple filter options (location, price, amenities, dates) for property listings",
      "Implemented a real-time booking system with conflict prevention and notification system",
      "Created a responsive UI that closely mimics the Airbnb experience with optimization for all device sizes"
    ],
    purpose: "This project was created to demonstrate full-stack development skills by replicating a popular platform with complex features. It showcases the ability to build a complete application with user authentication, database interactions, and dynamic frontend interfaces."
  },
  {
    id: 3,
    title: "SYSTÈME DE GESTION SCOLAIRE",
    description: "Application de gestion scolaire complète avec interface HTML5, gestion des notes et paiements, et base de données relationnelle optimisée pour les établissements scolaires.",
    techStack: ["Python", "MySQL", "HTML5", "CSS", "Flask", "SQLAlchemy"],
    githubUrl: "https://github.com/H-Ossama/school-management-system",
    liveUrl: "", // Add if available
    image: "/images/project-3.svg",
    featured: true,
    period: "06/2023",
    role: "Backend Developer focusing on database design, business logic implementation, and reporting system development for academic performance tracking.",
    problemsSolved: [
      "Designed a normalized relational database schema to handle complex educational data relationships",
      "Implemented a grade calculation system with customizable weighting factors for different assessment types",
      "Created a comprehensive reporting module for generating student performance analytics and progress reports",
      "Developed a payment tracking system with installment planning and automatic reminder generation"
    ],
    purpose: "This system was developed to modernize school administrative processes, reduce paperwork, and provide teachers and administrators with powerful tools to track student progress, manage grades, and communicate effectively with parents."
  }
];

export default function EnhancedProjects() {
  const { config } = usePortfolioConfig()
  const labels = useNavigationLabels()
  const { theme } = useTheme()

  // Combine the enhanced project data with the config
  const projects = enhancedProjectData.map(enhancedProject => {
    // Find the matching project in the config
    const configProject = config.projects.find(p => p.id === enhancedProject.id);

    const screenshots = configProject?.screenshots;
    const image = screenshots?.[0] || configProject?.image || enhancedProject.image;
    
    // Return the enhanced project, but use any values from config if they exist
    return {
      ...enhancedProject,
      title: configProject?.title || enhancedProject.title,
      description: configProject?.description || enhancedProject.description,
      image,
      screenshots,
      githubUrl: configProject?.githubUrl || enhancedProject.githubUrl,
      liveUrl: configProject?.liveUrl || enhancedProject.liveUrl,
      featured: configProject?.featured !== undefined ? configProject.featured : enhancedProject.featured,
      period: configProject?.period || enhancedProject.period,
      techStack: configProject?.techStack || enhancedProject.techStack,
    };
  });

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