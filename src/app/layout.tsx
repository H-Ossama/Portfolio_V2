import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oussama Hattan - Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web technologies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
