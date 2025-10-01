import React from 'react';
import { ExperienceCard } from './experience-card';
import { Project, ExperienceCategory } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ExperienceGridProps {
  projects: Project[];
  category: ExperienceCategory;
  className?: string;
  showTimeline?: boolean;
  compact?: boolean;
}

export function ExperienceGrid({ 
  projects, 
  category, 
  className, 
  showTimeline = true,
  compact = false 
}: ExperienceGridProps) {
  // Sort projects by year in reverse chronological order
  const sortedProjects = [...projects].sort((a, b) => {
    // Extract start year from year string (e.g., "2024-2025" -> "2024")
    const getStartYear = (yearStr: string) => {
      const match = yearStr.match(/(\d{4})/);
      return match ? parseInt(match[1]) : 0;
    };
    
    return getStartYear(b.year) - getStartYear(a.year);
  });

  if (sortedProjects.length === 0) {
    return (
      <div className={cn("text-center py-8", className)}>
        <p className="text-muted-foreground">No projects available in this category.</p>
      </div>
    );
  }

  const spacing = compact ? "space-y-4" : "space-y-6 lg:space-y-8";
  const mobileSpacing = compact ? "space-y-3" : "space-y-4";

  return (
    <div className={cn("mobile-spacing", className)}>
      {/* Desktop and Tablet: Single column with optional timeline */}
      <div className="hidden sm:block">
        <div className={spacing}>
          {sortedProjects.map((project, index) => (
            <ExperienceCard
              key={project.id}
              project={project}
              category={category}
              showTimeline={showTimeline}
              isLast={index === sortedProjects.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Mobile: Stacked cards without timeline */}
      <div className={cn("sm:hidden", mobileSpacing)}>
        {sortedProjects.map((project) => (
          <ExperienceCard
            key={project.id}
            project={project}
            category={category}
            showTimeline={false}
          />
        ))}
      </div>
    </div>
  );
}