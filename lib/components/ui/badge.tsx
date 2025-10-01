import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "tech"
  category?: "ai" | "security" | "mobile" | "robotics" | "vr"
}

function Badge({ className, variant = "default", category, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        // Base styles
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        
        // Variant styles
        {
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80": variant === "default",
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80": variant === "destructive",
          "text-foreground": variant === "outline",
        },
        
        // Technology category styles
        variant === "tech" && category && {
          "border-transparent text-white": true,
          "bg-tech-ai": category === "ai",
          "bg-tech-security": category === "security", 
          "bg-tech-mobile": category === "mobile",
          "bg-tech-robotics": category === "robotics",
          "bg-tech-vr": category === "vr",
        },
        
        // Default tech style if no category specified
        variant === "tech" && !category && "border-transparent bg-tech-default text-white",
        
        className
      )}
      {...props}
    />
  )
}

export { Badge }