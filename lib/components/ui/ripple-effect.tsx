"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

interface RippleProps {
  x: number
  y: number
  size: number
}

interface RippleEffectProps {
  children: React.ReactNode
  className?: string
  color?: string
}

export function RippleEffect({ 
  children, 
  className = "", 
  color = "rgba(59, 130, 246, 0.3)" 
}: RippleEffectProps) {
  const [ripples, setRipples] = React.useState<RippleProps[]>([])
  const containerRef = React.useRef<HTMLDivElement>(null)

  const createRipple = (event: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const size = Math.max(rect.width, rect.height) * 2

    const newRipple: RippleProps = { x, y, size }
    setRipples(prev => [...prev, newRipple])

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.slice(1))
    }, 600)
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseDown={createRipple}
    >
      {children}
      
      <AnimatePresence>
        {ripples.map((ripple, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: ripple.x - ripple.size / 2,
              top: ripple.y - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
              backgroundColor: color,
            }}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}