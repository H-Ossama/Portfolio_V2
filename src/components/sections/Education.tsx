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
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-theme-primary mb-6">
            <span className="text-gradient">{labels.education}</span> & Learning
          </h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto leading-relaxed">
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
              className="glass-card p-10 mb-8 hover:shadow-glow-lg transition-all duration-500 group"
            >
              <div className="flex items-start gap-8">
                {/* Icon */}
                <div className="flex-shrink-0 w-20 h-20 glass-card-theme rounded-full flex items-center justify-center floating-element group-hover:shadow-glow transition-all duration-500">
                  <GraduationCap className="icon-theme-primary group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" size={36} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-theme-primary mb-4 group-hover:text-gradient transition-all duration-300">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-6 mb-6 text-theme-secondary">
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="text-blue-400" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar size={18} className="text-purple-400" />
                      <span className="font-medium">{edu.year}</span>
                    </div>
                    {edu.grade && (
                      <div className="flex items-center gap-3">
                        <GraduationCap size={18} className="text-green-400" />
                        <span className="font-medium">GPA: {edu.grade}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-theme-secondary leading-relaxed text-lg mb-6">
                    {edu.description}
                  </p>

                  {/* Certificate buttons and ALX link */}
                  <div className="flex flex-wrap gap-4">
                    {/* Certificate buttons */}
                    {edu.certificates && edu.certificates.length > 0 && (
                      <button
                        onClick={() => openCertificateViewer(edu.certificates!, edu.institution.split(',')[0])}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <Award size={18} />
                        View Certificate{edu.certificates.length > 1 ? 's' : ''}
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
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <Award size={18} />
                        View Online Certificate
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
            <h3 className="text-4xl font-bold text-theme-primary mb-12 text-center">
              <span className="text-gradient">Certifications</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {config.certifications.map((cert: any, index: number) => (
                <motion.div
                  key={`cert-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="glass-card p-8 hover:shadow-glow transition-all duration-500 group"
                >
                  <h4 className="text-xl font-bold text-theme-primary mb-3 group-hover:text-gradient transition-all duration-300">
                    {cert.name}
                  </h4>
                  <p className="text-theme-secondary mb-3 font-medium">{cert.issuer}</p>
                  <p className="text-theme-muted mb-4">{cert.date}</p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-theme-primary font-medium transition-all duration-300 inline-flex items-center gap-2 group/link"
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
          <div className="glass-card max-w-4xl mx-auto p-12 hover:shadow-glow-lg transition-all duration-500">
            <div className="relative">
              {/* Glowing icon */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 glass-card-theme rounded-full flex items-center justify-center text-3xl floating-element">
                  📚
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-theme-primary mb-6 pt-8">
                {config.sections?.education?.continuousLearning || 'Continuous Learning Mindset'}
              </h3>
              <p className="text-theme-secondary leading-relaxed text-lg">
                {config.sections?.education?.learningDescription || `Beyond formal education, I believe in the importance of continuous learning 
                in the rapidly evolving tech industry. I regularly engage with online courses, 
                technical blogs, developer communities, and open-source projects to stay current 
                with the latest technologies and best practices. My goal is to never stop learning 
                and growing as a developer.`}
              </p>
              
              {/* Learning stats */}
              <div className="flex justify-center space-x-12 mt-10">
                <div className="text-center">
                  <div className="w-12 h-12 glass-card-theme rounded-full flex items-center justify-center text-xl mb-2 floating-element">
                    💡
                  </div>
                  <span className="text-sm text-theme-muted">Always Curious</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 glass-card-theme rounded-full flex items-center justify-center text-xl mb-2 floating-element-delayed">
                    🎯
                  </div>
                  <span className="text-sm text-theme-muted">Goal Oriented</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 glass-card-theme rounded-full flex items-center justify-center text-xl mb-2 floating-element">
                    🚀
                  </div>
                  <span className="text-sm text-theme-muted">Future Ready</span>
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
