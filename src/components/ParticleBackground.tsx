'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
  type: 'circle' | 'triangle' | 'square'
}

interface Connection {
  particle1: Particle
  particle2: Particle
  distance: number
}

// Particle colors matching huly.io theme
const colors = [
  '#3b82f6', // blue-500
  '#8b5cf6', // purple-500
  '#06b6d4', // cyan-500
  '#10b981', // emerald-500
  '#f59e0b', // amber-500
  '#ef4444', // red-500
]

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  // Initialize particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const initParticles = () => {
      const newParticles: Particle[] = []
      const particleCount = Math.min(50, Math.floor((window.innerWidth * window.innerHeight) / 15000))

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: ['circle', 'triangle', 'square'][Math.floor(Math.random() * 3)] as 'circle' | 'triangle' | 'square'
        })
      }
      setParticles(newParticles)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // Show particles after a delay
    setTimeout(() => setIsVisible(true), 1000)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      const updatedParticles = particles.map(particle => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.speedX *= -1
        if (particle.y <= 0 || particle.y >= canvas.height) particle.speedY *= -1

        // Mouse interaction
        const mouseDistance = Math.sqrt(
          Math.pow(mousePosition.x - particle.x, 2) + Math.pow(mousePosition.y - particle.y, 2)
        )
        if (mouseDistance < 100) {
          const force = (100 - mouseDistance) / 100
          particle.x += (particle.x - mousePosition.x) * force * 0.01
          particle.y += (particle.y - mousePosition.y) * force * 0.01
        }

        // Draw particle
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particle.color

        switch (particle.type) {
          case 'circle':
            ctx.beginPath()
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
            ctx.fill()
            break
          case 'triangle':
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y - particle.size)
            ctx.lineTo(particle.x - particle.size, particle.y + particle.size)
            ctx.lineTo(particle.x + particle.size, particle.y + particle.size)
            ctx.closePath()
            ctx.fill()
            break
          case 'square':
            ctx.fillRect(particle.x - particle.size, particle.y - particle.size, particle.size * 2, particle.size * 2)
            break
        }
        ctx.restore()

        return particle
      })

      // Draw connections
      const connections: Connection[] = []
      for (let i = 0; i < updatedParticles.length; i++) {
        for (let j = i + 1; j < updatedParticles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(updatedParticles[i].x - updatedParticles[j].x, 2) +
            Math.pow(updatedParticles[i].y - updatedParticles[j].y, 2)
          )
          if (distance < 150) {
            connections.push({
              particle1: updatedParticles[i],
              particle2: updatedParticles[j],
              distance
            })
          }
        }
      }

      // Draw connection lines
      connections.forEach(connection => {
        const opacity = (150 - connection.distance) / 150 * 0.1
        ctx.save()
        ctx.globalAlpha = opacity
        ctx.strokeStyle = connection.particle1.color
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(connection.particle1.x, connection.particle1.y)
        ctx.lineTo(connection.particle2.x, connection.particle2.y)
        ctx.stroke()
        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    if (isVisible) {
      animate()
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particles, mousePosition, isVisible])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
  )
}

export default ParticleBackground
