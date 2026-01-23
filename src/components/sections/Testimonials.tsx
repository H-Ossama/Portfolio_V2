'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { Quote } from 'lucide-react'

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "CTO, NexusFin Solutions",
        content: "Oussama delivered exceptional results. His backend architecture optimization reduced our API latency by 40%, directly impacting our user retention."
    },
    {
        name: "David Chen",
        role: "Product Lead, StreamFlow",
        content: "Working with Oussama was a seamless experience. He understands complex data requirements quickly and delivers robust, scalable microservices."
    },
    {
        name: "Emily Rodriguez",
        role: "Founder, HealthTech Innovations",
        content: "The secure patient data system Oussama implemented was flawless. He brings a level of security awareness that is rare to find."
    }
]

export default function Testimonials() {
    const { theme } = useTheme()

    return (
        <section id="testimonials" className="py-24 relative overflow-hidden bg-accent-purple/5">
            <div className="container-custom px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="text-accent-cyan font-mono text-sm tracking-widest uppercase mb-4 block">
                        Testimonials
                    </span>
                    <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Client Stories
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl transition-all duration-300 ${theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/5 shadow-sm'
                                }`}
                        >
                            <Quote size={40} className="text-accent-purple/20 absolute top-6 right-6" />

                            <p className={`mb-8 leading-relaxed italic ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                "{item.content}"
                            </p>

                            <div>
                                <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                    {item.name}
                                </h3>
                                <span className="text-sm text-accent-cyan">
                                    {item.role}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
