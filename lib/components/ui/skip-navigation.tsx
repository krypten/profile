'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface SkipLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

function SkipLink({ href, children, className }: SkipLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        // Position off-screen by default
        'absolute -top-40 left-6 z-[100] px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium',
        // Show when focused
        'focus:top-6 transition-all duration-200',
        // Ensure it's accessible
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        className
      )}
      onFocus={(e) => {
        // Ensure the link is visible when focused
        e.currentTarget.style.position = 'fixed'
      }}
    >
      {children}
    </a>
  )
}

export function SkipNavigation() {
  const skipLinks = [
    { href: '#main-content', label: 'Skip to main content' },
    { href: '#navigation', label: 'Skip to navigation' },
    { href: '#ai-experience', label: 'Skip to projects' },
    { href: '#skills', label: 'Skip to skills' },
    { href: '#education', label: 'Skip to education' },
  ]

  return (
    <div className="sr-only focus-within:not-sr-only">
      {skipLinks.map((link) => (
        <SkipLink key={link.href} href={link.href}>
          {link.label}
        </SkipLink>
      ))}
    </div>
  )
}

// Screen reader only text component
interface ScreenReaderOnlyProps {
  children: React.ReactNode
  as?: keyof JSX.IntrinsicElements
  className?: string
}

export function ScreenReaderOnly({ 
  children, 
  as: Component = 'span',
  className 
}: ScreenReaderOnlyProps) {
  return (
    <Component className={cn('sr-only', className)}>
      {children}
    </Component>
  )
}

// Accessible heading component with proper hierarchy
interface AccessibleHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
  id?: string
}

export function AccessibleHeading({ 
  level, 
  children, 
  className,
  id 
}: AccessibleHeadingProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements
  
  return (
    <Component 
      id={id}
      className={className}
      tabIndex={-1} // Allow programmatic focus for skip links
    >
      {children}
    </Component>
  )
}