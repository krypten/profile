'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/lib/components/ui/collapsible'
import { ExperienceGrid } from './experience-grid'
import { Badge } from '@/lib/components/ui/badge'
import { cn } from '@/lib/utils'
import { ExperienceSectionData } from '@/lib/types'
import { mapIconItems, mapIconPair } from '@/lib/utils/icon-mapping'

interface CollapsibleExperienceSectionProps {
  experience: ExperienceSectionData
  isExpanded?: boolean
  onToggle?: (expanded: boolean) => void
  showProjectCount?: boolean
  className?: string
}

export function CollapsibleExperienceSection({
  experience,
  isExpanded = false,
  onToggle,
  showProjectCount = true,
  className
}: CollapsibleExperienceSectionProps) {
  const icons = mapIconPair(experience.icons)
  const highlights = mapIconItems(experience.highlights)

  // Category-specific styling
  const categoryStyles = {
    ai: {
      border: 'border-tech-ai/30',
      bg: 'bg-tech-ai/5',
      headerBg: 'bg-tech-ai/10',
      accent: 'text-tech-ai',
      gradientFrom: 'from-tech-ai/5',
      gradientTo: 'to-tech-ai/10'
    },
    security: {
      border: 'border-tech-security/30',
      bg: 'bg-tech-security/5',
      headerBg: 'bg-tech-security/10',
      accent: 'text-tech-security',
      gradientFrom: 'from-tech-security/5',
      gradientTo: 'to-tech-security/10'
    },
    mobile: {
      border: 'border-tech-mobile/30',
      bg: 'bg-tech-mobile/5',
      headerBg: 'bg-tech-mobile/10',
      accent: 'text-tech-mobile',
      gradientFrom: 'from-tech-mobile/5',
      gradientTo: 'to-tech-mobile/10'
    },
    robotics: {
      border: 'border-tech-robotics/30',
      bg: 'bg-tech-robotics/5',
      headerBg: 'bg-tech-robotics/10',
      accent: 'text-tech-robotics',
      gradientFrom: 'from-tech-robotics/5',
      gradientTo: 'to-tech-robotics/10'
    },
    vr: {
      border: 'border-tech-robotics/30',
      bg: 'bg-tech-robotics/5',
      headerBg: 'bg-tech-robotics/10',
      accent: 'text-tech-robotics',
      gradientFrom: 'from-tech-robotics/5',
      gradientTo: 'to-tech-robotics/10'
    }
  }

  const styles = categoryStyles[experience.category] || categoryStyles.ai

  // Get unique technologies from all projects in this section
  const allTechnologies = Array.from(
    new Set(experience.projects.flatMap(project => project.technologies))
  ).slice(0, 6) // Show top 6 technologies

  return (
    <section 
      className={cn(
        "py-4 px-4 sm:px-6 lg:px-8", 
        experience.alternateBackground && "bg-muted/30",
        className
      )} 
      id={experience.id}
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Collapsible 
            open={isExpanded}
            onOpenChange={onToggle}
          >
            <div className={cn(
              "rounded-lg border transition-all duration-300",
              styles.border,
              styles.bg
            )}>
              <CollapsibleTrigger 
                showIcon={false}
                className={cn(
                  "w-full p-6 sm:p-8 rounded-t-lg hover:bg-opacity-80 transition-all duration-200",
                  styles.headerBg
                )}
              >
                <div className="flex items-center gap-4 sm:gap-6 w-full">
                  {/* Section Icon */}
                  <div className="flex items-center">
                    <div className={cn(
                      "p-3 sm:p-4 rounded-lg border",
                      styles.border,
                      "bg-background/50"
                    )}>
                      <icons.primary className={cn("h-6 w-6 sm:h-8 sm:w-8", styles.accent)} />
                    </div>
                  </div>

                  {/* Section Info */}
                  <div className="flex-1 text-left">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-2 sm:mb-3">
                      {experience.title}
                    </h2>
                    <p className="text-sm sm:text-base lg:text-body-large text-muted-foreground line-clamp-2 mb-3 sm:mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    {/* Key highlights preview */}
                    <div className="hidden sm:flex items-center gap-4 lg:gap-6 text-xs sm:text-sm text-muted-foreground">
                      {highlights.slice(0, 3).map((highlight, index) => {
                        const IconComponent = highlight.icon;
                        return (
                          <div 
                            key={index} 
                            className="flex items-center gap-1 sm:gap-2"
                          >
                            <IconComponent className={cn("h-3 w-3 sm:h-4 sm:w-4", styles.accent)} />
                            <span className="truncate">{highlight.label}</span>
                          </div>
                        );
                      })}
                      {highlights.length > 3 && (
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{highlights.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Project Count */}
                  {showProjectCount && (
                    <div className="text-right">
                      <div className={cn("text-2xl sm:text-3xl font-bold", styles.accent)}>
                        {experience.projects.length}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        {experience.projects.length === 1 ? 'Project' : 'Projects'}
                      </div>
                    </div>
                  )}
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent className="p-0">
                <div className="p-6 sm:p-8 pt-0">
                  {/* Full Key highlights */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-3 sm:mb-4">
                      Key Highlights
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
                      {highlights.map((highlight, index) => {
                        const IconComponent = highlight.icon;
                        return (
                          <div 
                            key={index} 
                            className="flex items-center gap-2 hover:scale-105 transition-transform duration-150"
                          >
                            <IconComponent className={cn("h-4 w-4", styles.accent)} />
                            <span>{highlight.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* All Technologies */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-3 sm:mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {allTechnologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="px-3 py-1.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Projects Grid */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-4 sm:mb-6">
                      Projects & Experience
                    </h4>
                    <div className="max-w-4xl mx-auto">
                      <ExperienceGrid
                        projects={experience.projects}
                        category={experience.category}
                      />
                    </div>
                  </div>

                  {/* Section Summary */}
                  <div className={cn(
                    "mt-8 p-6 rounded-lg border bg-gradient-to-r",
                    styles.border,
                    styles.gradientFrom,
                    styles.gradientTo
                  )}>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div>
                        <div className={cn("text-xl sm:text-2xl font-bold mb-1", styles.accent)}>
                          {experience.projects.length}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Projects
                        </div>
                      </div>
                      <div>
                        <div className={cn("text-xl sm:text-2xl font-bold mb-1", styles.accent)}>
                          {allTechnologies.length}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Technologies
                        </div>
                      </div>
                      <div>
                        <div className={cn("text-xl sm:text-2xl font-bold mb-1", styles.accent)}>
                          {experience.projects.filter(p => p.links.demo || p.links.github || p.links.article).length}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Live Projects
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
        </motion.div>
      </div>
    </section>
  )
}