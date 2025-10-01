'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ChevronUp,
  Clipboard,
  Code,
  Home,
  GraduationCap
} from 'lucide-react'
import { Button } from '@/lib/components/ui/button'
import { cn } from '@/lib/utils'

interface NavigationProps {
  className?: string
}

export function Navigation({ className }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const navigationItems = [
    { id: 'hero', label: 'Home', href: '#hero', icon: Home },
    { id: 'ai-experience', label: 'Projects', href: '#ai-experience', icon: Clipboard },
    { id: 'skills', label: 'Skills', href: '#skills', icon: Code },
    { id: 'education', label: 'Education', href: '#education', icon: GraduationCap },
  ]

  // Handle scroll events for active section detection and progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100

      setScrollProgress(progress)
      setShowBackToTop(scrollTop > 500)

      // Find active section
      const experienceSections = [
        'ai-experience',
        'security-experience',
        'mobile-experience',
        'robotics-experience',
        'vr-experience'
      ]

      // Check all sections including experience sections
      const allSections = [
        'hero',
        ...experienceSections,
        'skills',
        'education'
      ]

      const currentSection = allSections.find(sectionId => {
        const section = document.getElementById(sectionId)
        if (!section) return false
        const rect = section.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        // If any experience section is active, highlight "Projects" in navigation
        if (experienceSections.includes(currentSection)) {
          setActiveSection('ai-experience') // This maps to "Projects" in navigation
        } else {
          setActiveSection(currentSection)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }

    setIsOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted/20">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary/80"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Navigation Header */}
      <motion.div
        className={cn(
          "fixed top-4 left-0 right-0 z-40 flex justify-center",
          className
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <header className="w-auto">
        <motion.nav 
          id="navigation"
          className="bg-background/80 backdrop-blur-md border border-border rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navigationItems.map((item) => {
              const IconComponent = item.icon
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium relative rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    activeSection === item.id.replace('#', '')
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  whileHover={{ 
                    scale: 1.05,
                    y: -1
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  aria-current={activeSection === item.id.replace('#', '') ? 'page' : undefined}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  <IconComponent className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                  
                  {/* Active indicator */}
                  {activeSection === item.id.replace('#', '') && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </motion.nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 mt-2 mx-2 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg overflow-hidden"
              id="mobile-navigation-menu"
              role="menu"
            >
              <div className="py-2" role="none">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.href)}
                      className={cn(
                        "w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-muted/50 flex items-center gap-3 touch-target focus:outline-none focus:bg-muted/50",
                        activeSection === item.id.replace('#', '')
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground"
                      )}
                      role="menuitem"
                      aria-current={activeSection === item.id.replace('#', '') ? 'page' : undefined}
                    >
                      <IconComponent className="h-4 w-4" />
                      {item.label}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </header>
      </motion.div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40"
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90 touch-target"
              aria-label="Back to top"
            >
              <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}