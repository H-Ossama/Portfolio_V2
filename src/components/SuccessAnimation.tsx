'use client'

import React, { useEffect, useRef, useState } from 'react'

interface SuccessAnimationProps {
  isVisible: boolean
  onClose: () => void
  senderName?: string
}

export default function SuccessAnimation({ isVisible, onClose, senderName }: SuccessAnimationProps) {
  const [showConfetti, setShowConfetti] = useState(false)
  const [animationStep, setAnimationStep] = useState(0)
  const [countdown, setCountdown] = useState(10)

  const onCloseRef = useRef(onClose)
  const didAutoCloseRef = useRef(false)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    if (isVisible) {
      setShowConfetti(true)
      setAnimationStep(0)
      setCountdown(10)
      didAutoCloseRef.current = false
      
      const timer1 = setTimeout(() => setAnimationStep(1), 200)
      const timer2 = setTimeout(() => setAnimationStep(2), 800)
      const timer3 = setTimeout(() => setAnimationStep(3), 1500)
      
      // Countdown timer
      const countdownInterval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownInterval)
            return 0
          }
          return prev - 1
        })
      }, 1000)
      
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
        clearInterval(countdownInterval)
      }
    } else {
      setShowConfetti(false)
      setAnimationStep(0)
      setCountdown(10)
      didAutoCloseRef.current = false
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return
    if (countdown !== 0) return
    if (didAutoCloseRef.current) return
    didAutoCloseRef.current = true
    onCloseRef.current()
  }, [countdown, isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      />
      
      {/* Confetti Background */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <div 
                className={`w-2 h-2 ${
                  ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-purple-500', 'bg-pink-500'][Math.floor(Math.random() * 6)]
                } transform rotate-45`}
              />
            </div>
          ))}
        </div>
      )}
      
        {/* Success Modal */}
      <div className={`
        relative bg-white dark:bg-gray-900 rounded-3xl p-5 sm:p-6 md:p-8 max-w-sm sm:max-w-md mx-4 text-center
        transform transition-all duration-700 ease-out
        ${animationStep >= 1 ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}
        shadow-2xl border border-gray-200 dark:border-gray-700
      `}>
        
        {/* Success Icon */}
        <div className={`
          mx-auto mb-4 sm:mb-6 relative
          transform transition-all duration-1000 ease-out delay-300
          ${animationStep >= 2 ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}
        `}>
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-500 rounded-full animate-pulse" />
            
            {/* Check Mark */}
            <svg 
              className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={3} 
                d="M5 13l4 4L19 7"
                className={`
                  transform transition-all duration-700 ease-out delay-700
                  ${animationStep >= 3 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                `}
              />
            </svg>
            
            {/* Ripple Effect */}
            <div className="absolute inset-0 border-4 border-green-300 rounded-full animate-ping opacity-20" />
          </div>
        </div>

        {/* Success Message */}
        <div className={`
          transform transition-all duration-700 ease-out delay-500
          ${animationStep >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
        `}>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
            🎉 Message Sent Successfully!
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
            Thank you {senderName ? `, ${senderName}` : ''}! Your message has been delivered successfully. 
            I'll get back to you as soon as possible.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">✓</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">📧</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Notified</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">⚡</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Priority</div>
            </div>
          </div>
        </div>        {/* Action Buttons */}
        <div className={`
          flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center
          transform transition-all duration-700 ease-out delay-1000
          ${animationStep >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
        `}>
          <button
            onClick={onClose}
            className="px-5 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm sm:text-base font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            ✓ Continue Browsing
          </button>
          <div className="text-center mt-1 sm:mt-2">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Auto-closing in {countdown} seconds
            </p>
          </div>
        </div>

        {/* Close Button - More Prominent */}
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-110 z-10"
          aria-label="Close"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Auto-close Countdown */}
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex items-center gap-1 sm:gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 sm:py-2 shadow-lg">
          <div className="w-3 h-3 sm:w-4 sm:h-4 relative">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 transform -rotate-90" viewBox="0 0 24 24">
              <circle 
                cx="12" 
                cy="12" 
                r="10" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="text-gray-300 dark:text-gray-600"
              />
              <circle 
                cx="12" 
                cy="12" 
                r="10" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
                className="text-blue-500"
                style={{
                  strokeDasharray: '62.83',
                  strokeDashoffset: `${62.83 - (countdown / 10) * 62.83}`,
                  transition: 'stroke-dashoffset 1s linear'
                }}
              />
            </svg>
          </div>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
            {countdown}s
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        .animate-confetti {
          animation: confetti linear infinite;
        }
      `}</style>
    </div>
  )
}