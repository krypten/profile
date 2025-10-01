import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Optimize font loading
  preload: true
})

export const metadata: Metadata = {
  title: 'Chaitanya Agrawal - Portfolio',
  description: 'Building secure, intelligent systems that scale. Technical leader with expertise in AI, Security, Mobile, and Robotics.',
  keywords: ['Technical Leader', 'AI', 'Security', 'Mobile Development', 'Robotics', 'Software Architecture'],
  authors: [{ name: 'Chaitanya Agrawal' }],
  creator: 'Chaitanya Agrawal',
  openGraph: {
    title: 'Chaitanya Agrawal - Portfolio',
    description: 'Building secure, intelligent systems that scale',
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chaitanya Agrawal - Portfolio',
    description: 'Building secure, intelligent systems that scale',
  },
  robots: {
    index: true,
    follow: false,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Accessibility improvements */}
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`${inter.className} text-crisp`}>
        <div className="min-h-screen bg-background text-foreground safe-area-top safe-area-bottom">
          {children}
        </div>
      </body>
    </html>
  )
}