'use client'

import { useState, type TouchEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ChevronLeft, ChevronRight, Download, ExternalLink } from 'lucide-react'

interface Certificate {
  name: string
  image: string
}

interface CertificateViewerProps {
  certificates: Certificate[]
  institutionName: string
  degree?: string
  period?: string
  description?: string
  locale: string
}

const swipeThreshold = 45

export default function CertificateViewer({
  certificates,
  institutionName,
  degree,
  period,
  description,
  locale,
}: CertificateViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  if (!certificates.length) {
    return null
  }

  const currentCertificate = certificates[currentIndex]

  const goToIndex = (index: number) => {
    const boundedIndex = (index + certificates.length) % certificates.length
    setCurrentIndex(boundedIndex)
  }

  const handleNext = () => goToIndex(currentIndex + 1)
  const handlePrevious = () => goToIndex(currentIndex - 1)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = currentCertificate.image
    const safeInstitution = institutionName.replace(/[^a-z0-9]+/gi, '_')
    const safeName = currentCertificate.name.replace(/[^a-z0-9]+/gi, '_')
    link.download = `${safeInstitution}_${safeName}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0]?.clientX ?? null)
  }

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) {
      return
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX
    const delta = touchStartX - touchEndX

    if (Math.abs(delta) >= swipeThreshold) {
      if (delta > 0) {
        handleNext()
      } else {
        handlePrevious()
      }
    }

    setTouchStartX(null)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-12 pt-6 sm:px-6 lg:px-10">
        <header className="flex flex-col gap-6">
          <Link
            href={`/${locale}#education`}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Education
          </Link>

          <div className="grid gap-6 rounded-3xl border border-white/5 bg-white/[0.03] p-6 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.65)] backdrop-blur lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Institution
                </p>
                <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
                  {institutionName}
                </h1>
              </div>

              {(degree || period) && (
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
                  {degree && (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-blue-200">
                      {degree}
                    </span>
                  )}
                  {period && (
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-slate-200/80">
                      {period}
                    </span>
                  )}
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">
                    {currentIndex + 1} / {certificates.length}
                  </span>
                </div>
              )}

              {description && (
                <p className="max-w-3xl text-base leading-relaxed text-slate-300">
                  {description}
                </p>
              )}

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                >
                  <Download className="h-4 w-4" />
                  Download
                </button>
                <a
                  href={currentCertificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/5"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open Original
                </a>
              </div>
            </div>

            <div className="grid gap-4 rounded-3xl border border-white/5 bg-slate-900/30 p-5">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span className="font-semibold text-slate-200">
                  {currentCertificate.name}
                </span>
                {certificates.length > 1 && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevious}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                      aria-label="Previous certificate"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                      aria-label="Next certificate"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>

              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentCertificate.image}
                    initial={{ opacity: 0.2, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentCertificate.image}
                      alt={`${institutionName} - ${currentCertificate.name}`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {certificates.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {certificates.map((certificate, index) => (
                    <button
                      key={certificate.name}
                      onClick={() => goToIndex(index)}
                      className={`group relative flex h-20 w-28 flex-none items-center justify-center overflow-hidden rounded-xl border transition ${
                        index === currentIndex
                          ? 'border-blue-400/80 bg-blue-500/10'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <Image
                        src={certificate.image}
                        alt={certificate.name}
                        fill
                        sizes="120px"
                        className="object-contain opacity-90 transition group-hover:opacity-100"
                      />
                      <span className="absolute bottom-1 left-1 right-1 truncate rounded-md bg-slate-900/80 px-2 py-1 text-[0.65rem] font-medium text-slate-100">
                        {certificate.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

      
      </div>
    </div>
  )
}