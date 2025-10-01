'use client'

import { useState, createContext, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// Context for managing collapsible state
interface CollapsibleContextType {
  isOpen: boolean
  toggle: () => void
  disabled?: boolean
}

const CollapsibleContext = createContext<CollapsibleContextType | null>(null)

// Main Collapsible component
interface CollapsibleProps {
  children: React.ReactNode
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  disabled?: boolean
  className?: string
}

export function Collapsible({
  children,
  defaultOpen = false,
  open,
  onOpenChange,
  disabled = false,
  className
}: CollapsibleProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen)

  // Use controlled state if provided, otherwise use internal state
  const isOpen = open !== undefined ? open : internalIsOpen

  const toggle = () => {
    if (!disabled) {
      const newState = !isOpen
      if (onOpenChange) {
        onOpenChange(newState)
      } else {
        setInternalIsOpen(newState)
      }
    }
  }

  return (
    <CollapsibleContext.Provider value={{ isOpen, toggle, disabled }}>
      <div className={cn("w-full", className)}>
        {children}
      </div>
    </CollapsibleContext.Provider>
  )
}

// Trigger component (the clickable header)
interface CollapsibleTriggerProps {
  children: React.ReactNode
  className?: string
  showIcon?: boolean
  iconPosition?: 'left' | 'right'
}

export function CollapsibleTrigger({
  children,
  className,
  showIcon = true,
  iconPosition = 'right'
}: CollapsibleTriggerProps) {
  const context = useContext(CollapsibleContext)

  if (!context) {
    throw new Error('CollapsibleTrigger must be used within Collapsible')
  }

  const { isOpen, toggle, disabled } = context

  return (
    <button
      onClick={toggle}
      disabled={disabled}
      className={cn(
        "w-full flex items-center justify-between p-4 text-left",
        "hover:bg-accent/50 transition-colors duration-200",
        "focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {iconPosition === 'left' && showIcon && (
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="mr-3"
        >
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      )}

      <div className="flex-1">
        {children}
      </div>

      {iconPosition === 'right' && showIcon && (
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-3"
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      )}
    </button>
  )
}

// Content component (the collapsible content)
interface CollapsibleContentProps {
  children: React.ReactNode
  className?: string
}

export function CollapsibleContent({ children, className }: CollapsibleContentProps) {
  const context = useContext(CollapsibleContext)

  if (!context) {
    throw new Error('CollapsibleContent must be used within Collapsible')
  }

  const { isOpen } = context

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: [0.04, 0.62, 0.23, 0.98]
          }}
          className="overflow-hidden"
        >
          <div className={cn("p-4 pt-0", className)}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Utility hook for external control
export function useCollapsible() {
  const context = useContext(CollapsibleContext)

  if (!context) {
    throw new Error('useCollapsible must be used within Collapsible')
  }

  return context
}