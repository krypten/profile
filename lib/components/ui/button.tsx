import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
  animated?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, animated = true, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"
    
    const buttonContent = (
      <Comp
        className={cn(
          // Base styles
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
          
          // Variant styles
          {
            "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg": variant === "default",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md": variant === "secondary",
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent-foreground/20": variant === "outline",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "text-primary underline-offset-4 hover:underline": variant === "link",
          },
          
          // Size styles
          {
            "h-10 px-4 py-2 touch-target": size === "default",
            "h-9 rounded-md px-3 min-h-[36px]": size === "sm",
            "h-11 rounded-md px-6 sm:px-8 touch-target": size === "lg",
            "h-10 w-10 touch-target": size === "icon",
          },
          
          className
        )}
        ref={ref}
        {...props}
      />
    )

    if (!animated) {
      return buttonContent
    }
    
    return (
      <motion.div
        whileHover={{ 
          scale: 1.05,
          y: -2,
          boxShadow: variant === "default" 
            ? "0 10px 25px -5px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.1)"
            : "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        }}
        whileTap={{ 
          scale: 0.95,
          y: 0
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 25,
          duration: 0.2
        }}
        className="inline-block"
      >
        {buttonContent}
      </motion.div>
    )
  }
)
Button.displayName = "Button"

export { Button }