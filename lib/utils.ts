import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Utility function to combine class names with Tailwind merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatYear(year: string): string {
  return year.replace('–', '—') // Use em dash for better typography
}

export function getExternalLinkProps(url?: string) {
  if (!url) return {}
  
  return {
    href: url,
    target: '_blank',
    rel: 'noopener noreferrer'
  }
}