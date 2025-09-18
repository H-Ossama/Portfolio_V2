'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare } from 'lucide-react'
import { usePortfolioConfig, useContactFormLabels, useNavigationLabels } from '@/lib/localization'
import { useTheme } from '@/contexts/ThemeContext'
import SuccessAnimation from '@/components/SuccessAnimation'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const { theme } = useTheme()
  const { config } = usePortfolioConfig()
  const formLabels = useContactFormLabels()
  const navLabels = useNavigationLabels()
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear any previous error messages when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')
    setSuccessMessage('')

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmitStatus('error')
      setErrorMessage('Please fill in all fields.')
      setIsSubmitting(false)
      return
    }

    if (formData.message.trim().length < 10) {
      setSubmitStatus('error')
      setErrorMessage('Please write a message with at least 10 characters.')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSuccessMessage(data.message || 'Message sent successfully! I\'ll get back to you soon.')
        setShowSuccessAnimation(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: config.contact.email,
      href: `mailto:${config.contact.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: config.contact.phone,
      href: `tel:${config.contact.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: config.personal.location,
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: config.contact.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: config.contact.linkedin,
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      href: `https://wa.me/${config.contact.whatsapp.replace(/[^0-9]/g, '')}`,
    },
  ]

  return (
    <>
      {/* Success Animation Modal */}
      <SuccessAnimation 
        isVisible={showSuccessAnimation}
        onClose={() => {
          setShowSuccessAnimation(false)
          setSubmitStatus('idle')
          setSuccessMessage('')
        }}
        senderName={formData.name}
      />

      <section id="contact" className="section-padding relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-glow rounded-full opacity-10 floating-element"></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-gradient-purple-glow rounded-full opacity-15 floating-element-delayed"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0"
        >
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {navLabels.contact.split(' ')[0]} <span className="text-gradient">{navLabels.contact.split(' ').slice(1).join(' ') || 'Touch'}</span>
          </h2>
          <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {config.sections?.contact?.description || `Ready to discuss your next project or just want to say hello? 
            I'd love to hear from you!`}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 px-4 sm:px-0">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            <div className="glass-card p-5 sm:p-6 md:p-8 hover:shadow-glow transition-all duration-500">
              <h3 className={`text-2xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6 md:mb-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {config.sections?.contact?.letsStartConversation || "Let's start a conversation"}
              </h3>

              {/* Contact Info Cards */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-8 md:mb-10">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={info.label} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 sm:gap-4 md:gap-6 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 glass-card-theme rounded-lg flex items-center justify-center floating-element group-hover:shadow-glow transition-all duration-300">
                      <info.icon className="icon-theme-primary group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" size={24} />
                    </div>
                    <div>
                      <h4 className={`font-bold text-base sm:text-lg mb-0.5 sm:mb-1 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{info.label}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className={`transition-all duration-300 text-sm sm:text-base md:text-lg break-all ${
                            theme === 'dark' 
                              ? 'text-gray-300 hover:text-white' 
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className={`font-bold mb-4 sm:mb-5 md:mb-6 text-lg sm:text-xl ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Follow me on</h4>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 sm:w-14 sm:h-14 glass-card-theme rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300 floating-element group"
                      aria-label={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={22} className="icon-theme-primary group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card p-5 sm:p-6 md:p-8 lg:p-10 hover:shadow-glow-lg transition-all duration-500"
          >
            <h3 className={`text-2xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6 md:mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {navLabels.getInTouch}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-gray-300 mb-2 sm:mb-3">
                    {formLabels.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 glass-input focus:shadow-glow transition-all duration-300 text-sm sm:text-base"
                    placeholder={formLabels.name}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-gray-300 mb-2 sm:mb-3">
                    {formLabels.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 glass-input focus:shadow-glow transition-all duration-300 text-sm sm:text-base"
                    placeholder={formLabels.email}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-bold text-gray-300 mb-2 sm:mb-3">
                  {formLabels.subject} *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 glass-input focus:shadow-glow transition-all duration-300 text-sm sm:text-base"
                  placeholder={formLabels.subject}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-gray-300 mb-2 sm:mb-3">
                  {formLabels.message} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 glass-input focus:shadow-glow transition-all duration-300 resize-vertical text-sm sm:text-base"
                  placeholder={formLabels.message}
                />
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 sm:p-4 glass-card-theme border-l-4 border-red-400 bg-red-50/10 dark:bg-red-900/20"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-red-300 dark:text-red-300 text-red-700 font-medium text-sm sm:text-base">
                      {errorMessage}
                    </p>
                  </div>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg py-3 sm:py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm sm:text-base">{formLabels.sending}</span>
                  </>
                ) : (
                  <>
                    <Send size={18} className="hidden sm:block" />
                    <Send size={16} className="sm:hidden" />
                    <span className="text-sm sm:text-base">{formLabels.send}</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  )
}
