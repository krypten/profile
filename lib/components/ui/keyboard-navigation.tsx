'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

// Hook to detect keyboard navigation
export function useKeyboardNavigation() {
  const [isKeyboardUser, setIsKeyboardUser] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardUser(true)
      }
    }

    const handleMouseDown = () => {
      setIsKeyboardUser(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  return isKeyboardUser
}

// Enhanced focus management
interface FocusableProps {
  children: React.ReactNode
  className?: string
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  role?: string
  'aria-label'?: string
  'aria-describedby'?: string
}

export function Focusable({
  children,
  className,
  onFocus,
  onBlur,
  tabIndex = 0,
  role,
  ...ariaProps
}: FocusableProps) {
  const isKeyboardUser = useKeyboardNavigation()

  return (
    <div
      className={cn(
        'outline-none',
        isKeyboardUser && 'focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm',
        className
      )}
      tabIndex={tabIndex}
      onFocus={onFocus}
      onBlur={onBlur}
      role={role}
      {...ariaProps}
    >
      {children}
    </div>
  )
}

// Keyboard shortcut handler
interface KeyboardShortcutProps {
  keys: string[]
  onActivate: () => void
  description?: string
  disabled?: boolean
}

export function useKeyboardShortcut({
  keys,
  onActivate,
  disabled = false
}: KeyboardShortcutProps) {
  useEffect(() => {
    if (disabled) return

    const handleKeyDown = (event: KeyboardEvent) => {
      const pressedKeys: string[] = []
      
      if (event.ctrlKey) pressedKeys.push('ctrl')
      if (event.metaKey) pressedKeys.push('cmd')
      if (event.shiftKey) pressedKeys.push('shift')
      if (event.altKey) pressedKeys.push('alt')
      
      pressedKeys.push(event.key.toLowerCase())
      
      const shortcutMatch = keys.every(key => 
        pressedKeys.includes(key.toLowerCase())
      ) && keys.length === pressedKeys.length

      if (shortcutMatch) {
        event.preventDefault()
        onActivate()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [keys, onActivate, disabled])
}

// Roving tabindex for managing focus in lists
interface RovingTabIndexProps {
  children: React.ReactNode
  className?: string
  orientation?: 'horizontal' | 'vertical'
  loop?: boolean
}

export function RovingTabIndex({
  children,
  className,
  orientation = 'horizontal',
  loop = true
}: RovingTabIndexProps) {
  const [focusedIndex, setFocusedIndex] = useState(0)
  const containerRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const focusableElements = Array.from(
      container.querySelectorAll('[data-roving-tabindex-item]')
    ) as HTMLElement[]

    const handleKeyDown = (event: KeyboardEvent) => {
      const isHorizontal = orientation === 'horizontal'
      const nextKey = isHorizontal ? 'ArrowRight' : 'ArrowDown'
      const prevKey = isHorizontal ? 'ArrowLeft' : 'ArrowUp'

      if (event.key === nextKey) {
        event.preventDefault()
        const nextIndex = loop 
          ? (focusedIndex + 1) % focusableElements.length
          : Math.min(focusedIndex + 1, focusableElements.length - 1)
        setFocusedIndex(nextIndex)
        focusableElements[nextIndex]?.focus()
      } else if (event.key === prevKey) {
        event.preventDefault()
        const prevIndex = loop
          ? (focusedIndex - 1 + focusableElements.length) % focusableElements.length
          : Math.max(focusedIndex - 1, 0)
        setFocusedIndex(prevIndex)
        focusableElements[prevIndex]?.focus()
      } else if (event.key === 'Home') {
        event.preventDefault()
        setFocusedIndex(0)
        focusableElements[0]?.focus()
      } else if (event.key === 'End') {
        event.preventDefault()
        const lastIndex = focusableElements.length - 1
        setFocusedIndex(lastIndex)
        focusableElements[lastIndex]?.focus()
      }
    }

    // Set initial tabindex values
    focusableElements.forEach((element, index) => {
      element.tabIndex = index === focusedIndex ? 0 : -1
    })

    container.addEventListener('keydown', handleKeyDown)
    return () => container.removeEventListener('keydown', handleKeyDown)
  }, [focusedIndex, orientation, loop])

  return (
    <div
      ref={containerRef}
      className={className}
      role="group"
    >
      {children}
    </div>
  )
}