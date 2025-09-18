'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'
import { usePortfolioConfig, useNavigationLabels } from '@/lib/localization'
import CertificateViewer from '@/components/CertificateViewer'

interface Certificate {
  name: string
  image: string
}

interface EducationEntry {
  degree: string
  institution: string
  year: string
  grade?: string
  description: string
  certificates?: Certificate[]
}

export default function Education() {
  const { config } = usePortfolioConfig()
  const labels = useNavigationLabels()
  
  const [selectedCertificates, setSelectedCertificates] = useState<Certificate[]>([])
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const [selectedInstitution, setSelectedInstitution] = useState('')

  const openCertificateViewer = (certificates: Certificate[], institution: string) => {
    setSelectedCertificates(certificates)
    setSelectedInstitution(institution)
    setIsViewerOpen(true)
  }

  return (
    <section id="education" className="section-padding relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/5 w-80 h-80 bg-gradient-glow rounded-full opacity-10 floating-element"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-purple-glow rounded-full opacity-15 floating-element-delayed"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-theme-primary mb-4 sm:mb-6">
            <span className="text-gradient">{labels.education}</span> & Learning
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-theme-secondary max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            {config.sections?.education?.description || "My academic foundation and continuous learning journey in web development"}
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto mb-20">
          {config.education.map((edu: EducationEntry, index: number) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card p-6 sm:p-8 md:p-10 mb-8 hover:shadow-glow-lg transition-all duration-500 group"
            >
              {/* Responsive layout with flex column on mobile, row on larger screens */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8">
                {/* Icon - centered on mobile, left-aligned on larger screens */}
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 glass-card-theme rounded-full flex items-center justify-center floating-element group-hover:shadow-glow transition-all duration-500 mb-2 sm:mb-0">
                  <GraduationCap className="icon-theme-primary group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" size={30} />
                </div>

                {/* Content */}
                <div className="flex-1 w-full text-center sm:text-left">
                  <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-theme-primary mb-3 sm:mb-4 group-hover:text-gradient transition-all duration-300">
                    {edu.degree}
                  </h3>
                  
                  {/* Meta information with better wrapping for mobile */}
                  <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 text-theme-secondary text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-purple-400 flex-shrink-0" />
                      <span className="font-medium">{edu.year}</span>
                    </div>
                    {edu.grade && (
                      <div className="flex items-center gap-2">
                        <GraduationCap size={16} className="text-green-400 flex-shrink-0" />
                        <span className="font-medium">GPA: {edu.grade}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-theme-secondary leading-relaxed text-base sm:text-lg mb-5 sm:mb-6">
                    {edu.description}
                  </p>

                  {/* Certificate buttons with better mobile layout */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
                    {/* Certificate buttons */}
                    {edu.certificates && edu.certificates.length > 0 && (
                      <button
                        onClick={() => openCertificateViewer(edu.certificates!, edu.institution.split(',')[0])}
                        className="inline-flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium text-sm sm:text-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <Award size={16} className="flex-shrink-0" />
                        <span className="whitespace-nowrap">View Certificate{edu.certificates.length > 1 ? 's' : ''}</span>
                        {edu.certificates.length > 1 && (
                          <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                            {edu.certificates.length}
                          </span>
                        )}
                      </button>
                    )}

                    {/* ALX certificate link */}
                    {edu.institution.includes('ALX') && (
                      <a
                        href="https://intranet.alxswe.com/certificates/rBExG37Lpm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-medium text-sm sm:text-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <Award size={16} className="flex-shrink-0" />
                        <span className="whitespace-nowrap">View Online Certificate</span>
                        <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section (if any) */}
        {config.certifications && config.certifications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-theme-primary mb-8 sm:mb-12 text-center">
              <span className="text-gradient">Certifications</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
              {config.certifications.map((cert: any, index: number) => (
                <motion.div
                  key={`cert-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="glass-card p-5 sm:p-6 md:p-8 hover:shadow-glow transition-all duration-500 group"
                >
                  <h4 className="text-lg sm:text-xl font-bold text-theme-primary mb-2 sm:mb-3 group-hover:text-gradient transition-all duration-300 line-clamp-2">
                    {cert.name}
                  </h4>
                  <p className="text-theme-secondary mb-2 sm:mb-3 font-medium text-sm sm:text-base">{cert.issuer}</p>
                  <p className="text-theme-muted mb-3 sm:mb-4 text-sm">{cert.date}</p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-theme-primary font-medium transition-all duration-300 inline-flex items-center gap-1 sm:gap-2 group/link text-sm sm:text-base"
                    >
                      View Certificate 
                      <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <div className="glass-card max-w-4xl mx-auto p-6 sm:p-8 md:p-12 hover:shadow-glow-lg transition-all duration-500">
            <div className="relative">
              {/* Glowing icon */}
              <div className="absolute -top-12 sm:-top-16 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 sm:w-16 sm:h-16 glass-card-theme rounded-full flex items-center justify-center text-2xl sm:text-3xl floating-element">
                  📚
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-theme-primary mb-4 sm:mb-6 pt-6 sm:pt-8">
                {config.sections?.education?.continuousLearning || 'Continuous Learning Mindset'}
              </h3>
              <p className="text-theme-secondary leading-relaxed text-base sm:text-lg">
                {config.sections?.education?.learningDescription || `Beyond formal education, I believe in the importance of continuous learning 
                in the rapidly evolving tech industry. I regularly engage with online courses, 
                technical blogs, developer communities, and open-source projects to stay current 
                with the latest technologies and best practices. My goal is to never stop learning 
                and growing as a developer.`}
              </p>
              
              {/* Learning stats - Responsive grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10 max-w-xs sm:max-w-md mx-auto">
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 glass-card-theme rounded-full flex items-center justify-center text-lg sm:text-xl mb-2 floating-element mx-auto">
                    💡
                  </div>
                  <span className="text-xs sm:text-sm text-theme-muted">Always Curious</span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 glass-card-theme rounded-full flex items-center justify-center text-lg sm:text-xl mb-2 floating-element-delayed mx-auto">
                    🎯
                  </div>
                  <span className="text-xs sm:text-sm text-theme-muted">Goal Oriented</span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 glass-card-theme rounded-full flex items-center justify-center text-lg sm:text-xl mb-2 floating-element mx-auto">
                    🚀
                  </div>
                  <span className="text-xs sm:text-sm text-theme-muted">Future Ready</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Viewer Modal */}
      <CertificateViewer
        certificates={selectedCertificates}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        institutionName={selectedInstitution}
      />
    </section>
  )
}
