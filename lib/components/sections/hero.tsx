'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, FileText, Download } from 'lucide-react'
import { Button } from '@/lib/components/ui/button'
import { useEffect, useState, useMemo } from 'react'

interface HeroProps {
  personal: {
    name: string
    tagline: string
    role: string
    roles: string[]
    bio: string
    contact: {
      email: string
      linkedin: string
      github: string
      medium: string
    }
    resume?: {
      url: string
      filename: string
    }
  }
}

export function Hero({ personal }: HeroProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const roles = useMemo(() => personal.roles, [personal.roles])

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000) // Pause before deleting
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayedText, currentIndex, isDeleting, roles])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('ai-experience')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Parallax background elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          y: scrollY * 0.5,
        }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full blur-lg" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />
      </motion.div>
      <motion.div
        className="container-max section-padding text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading */}
        <motion.h1
          id="hero-heading"
          variants={itemVariants}
          className="text-responsive-hero font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
        >
          {personal.name}
        </motion.h1>

        {/* Animated role */}
        <motion.div
          variants={itemVariants}
          className="mb-6 sm:mb-8"
        >
          <div
            className="text-xl xs:text-2xl sm:text-3xl font-semibold text-primary mb-2 h-8 xs:h-10 sm:h-12 flex items-center justify-center"
            aria-live="polite"
            aria-label={`Current role: ${displayedText}`}
          >
            {displayedText}
            <span className="ml-1 animate-pulse" aria-hidden="true">|</span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg lg:text-body-large text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4"
        >
          {personal.tagline}
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base lg:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
        >
          {personal.bio}
        </motion.p>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4 relative z-10"
          style={{ pointerEvents: 'auto' }}
        >
          <a
            href={`https://linkedin.com/in/${personal.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 group relative z-20 cursor-pointer"
            style={{ pointerEvents: 'auto' }}
          >
            <Linkedin className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
            LinkedIn
          </a>

          <a
            href={`https://github.com/${personal.contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 group relative z-20 cursor-pointer"
            style={{ pointerEvents: 'auto' }}
          >
            <Github className="w-5 h-5 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors" />
            GitHub
          </a>

          <Button
            variant="outline"
            size="lg"
            className="group hover:scale-105 transition-all duration-200"
            asChild
          >
            <a
              href={`https://medium.com/${personal.contact.medium}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FileText className="w-5 h-5 group-hover:text-green-600 transition-colors" />
              Medium
            </a>
          </Button>

          {personal.resume && (
            <a
              href={personal.resume.url}
              download={personal.resume.filename}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 group relative z-20 cursor-pointer"
              style={{ pointerEvents: 'auto' }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          )}

          <Button
            variant="default"
            size="lg"
            className="group hover:scale-105 transition-all duration-200"
            asChild
          >
            <a
              href={`mailto:${personal.contact.email}`}
              className="flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get in touch
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <button
          onClick={scrollToNextSection}
          className="group flex flex-col items-center gap-1 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 touch-target focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-2"
          aria-label="Scroll to experience section"
        >
          <span className="text-xs sm:text-sm font-medium">Explore My Work</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="p-1.5 sm:p-2 rounded-full border border-muted-foreground/30 group-hover:border-foreground/50 transition-colors duration-200"
          >
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}