'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

const experienceData = [
    {
        role: "Freelance Full Stack Developer",
        company: "Self-Employed",
        period: "2023 - Present",
        description: "Developing custom web solutions for diverse clients using Next.js and Tailwind CSS. Managing end-to-end development lifecycle from requirement gathering to deployment."
    },
    {
        role: "Network & Systems Internship",
        company: "Tech Solutions Inc.",
        period: "2022 - 2023",
        description: "Assisted in network infrastructure management and system troubleshooting. Gained hands-on experience with Linux server administration and network security protocols."
    },
    {
        role: "IT Support Specialist",
        company: "Local Business",
        period: "2021 - 2022",
        description: "Provided technical support for hardware and software issues. Implemented backup solutions and maintained system uptime for critical business operations."
    }
]

export default function Experience() {
    const { theme } = useTheme()

    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="container-custom px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-accent-cyan font-mono text-lg">04</span>
                        <div className="h-px w-12 bg-accent-cyan/30"></div>
                        <span className="text-accent-cyan font-mono text-sm tracking-widest uppercase">
                            Experience
                        </span>
                    </div>
                    <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        My Journey<span className="text-accent-cyan">.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className={`p-8 rounded-2xl glass-card border transition-all duration-500 overflow-hidden ${theme === 'dark'
                                    ? 'bg-white/5 border-white/5 hover:border-accent-cyan/30'
                                    : 'bg-black/5 border-black/5 hover:border-accent-cyan/30'
                                }`}>
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-accent-cyan font-mono text-xs">{'//'}</span>
                                            <span className="font-mono text-sm text-accent-cyan/70">{item.period}</span>
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-2 group-hover:text-accent-cyan transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                            }`}>
                                            {item.role}
                                        </h3>
                                        <h4 className={`text-lg font-medium opacity-60 mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                            }`}>
                                            {item.company}
                                        </h4>
                                        <p className={`text-base leading-relaxed max-w-2xl opacity-70 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                            }`}>
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-end opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/20">
                                            <span className="font-mono text-accent-cyan text-xl">{index + 1}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent-cyan/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
