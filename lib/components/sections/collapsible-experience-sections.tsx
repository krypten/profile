'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Expand, Minimize } from 'lucide-react'
import { CollapsibleExperienceSection } from './collapsible-experience-section'
import { Button } from '@/lib/components/ui/button'
import { Badge } from '@/lib/components/ui/badge'
import { cn } from '@/lib/utils'
import { ExperienceSectionData } from '@/lib/types'

interface CollapsibleExperienceSectionsProps {
  experiences: ExperienceSectionData[]
  className?: string
  defaultExpandedSections?: string[]
  showControls?: boolean
}

export function CollapsibleExperienceSections({
  experiences,
  className,
  defaultExpandedSections = [],
  showControls = true
}: CollapsibleExperienceSectionsProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(() => {
    // If no default sections specified, expand the first section by default
    if (defaultExpandedSections.length === 0 && experiences.length > 0) {
      return new Set([experiences[0].id])
    }
    return new Set(defaultExpandedSections)
  })

  const toggleAll = (expand: boolean) => {
    if (expand) {
      setExpandedSections(new Set(experiences.map(exp => exp.id)))
    } else {
      setExpandedSections(new Set())
    }
  }

  const totalProjects = experiences.reduce((sum, exp) => sum + exp.projects.length, 0)

  return (
    <div className={cn("space-y-0", className)}>
      {/* Controls - only show if there are multiple sections */}
      {showControls && experiences.length > 1 && (
        <section className="py-4 px-4 sm:px-6 lg:px-8">
          <div className="container-max">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  {expandedSections.size} of {experiences.length} sections expanded
                </span>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <Badge variant="outline" className="px-3 py-1">
                    {experiences.length} Domains
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    {totalProjects} Projects
                  </Badge>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleAll(true)}
                  className="text-xs"
                >
                  <Expand className="h-3 w-3 mr-1" />
                  Expand All
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleAll(false)}
                  className="text-xs"
                >
                  <Minimize className="h-3 w-3 mr-1" />
                  Collapse All
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Collapsible Experience Sections */}
      {experiences.map((experience, index) => (
        <motion.div
          key={experience.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1
          }}
        >
          <CollapsibleExperienceSection
            experience={experience}
            isExpanded={expandedSections.has(experience.id)}
            onToggle={(expanded) => {
              const newExpandedSections = new Set(expandedSections)
              if (expanded) {
                newExpandedSections.add(experience.id)
              } else {
                newExpandedSections.delete(experience.id)
              }
              setExpandedSections(newExpandedSections)
            }}
            showProjectCount={true}
          />
        </motion.div>
      ))}
    </div>
  )
}