'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  fill?: boolean
  sizes?: string
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 85,
  fill = false,
  sizes,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) {
  // Generate a simple blur placeholder if none provided
  const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rq5TaUVZLDe9VvNvuF1lcNPcXCjPl3UcfUcnqiOhsIbGVlhQRLuiDOFUcKo9B6CiiigA=='

  const imageProps = {
    src,
    alt,
    className: cn('transition-opacity duration-300', className),
    quality,
    priority,
    placeholder,
    blurDataURL: placeholder === 'blur' ? (blurDataURL || defaultBlurDataURL) : undefined,
    onLoad,
    onError,
    ...props
  }

  if (fill) {
    return (
      <Image
        {...imageProps}
        fill
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
      />
    )
  }

  if (width && height) {
    return (
      <Image
        {...imageProps}
        width={width}
        height={height}
        sizes={sizes}
      />
    )
  }

  // Fallback to regular img if dimensions not provided
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onLoad={onLoad}
      onError={onError}
      loading={priority ? 'eager' : 'lazy'}
      {...props}
    />
  )
}

// Avatar component with optimized image loading
interface AvatarProps {
  src?: string
  alt: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  fallback?: string
}

export function Avatar({ 
  src, 
  alt, 
  size = 'md', 
  className,
  fallback 
}: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }

  const initials = fallback || alt.split(' ').map(n => n[0]).join('').toUpperCase()

  if (!src) {
    return (
      <div 
        className={cn(
          'rounded-full bg-muted flex items-center justify-center text-muted-foreground font-medium',
          sizeClasses[size],
          className
        )}
        role="img"
        aria-label={alt}
      >
        {initials}
      </div>
    )
  }

  return (
    <div className={cn('rounded-full overflow-hidden', sizeClasses[size], className)}>
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 96px, 128px"
      />
    </div>
  )
}