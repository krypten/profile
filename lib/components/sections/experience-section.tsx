import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ExperienceGrid } from './experience-grid';
import { Project, ExperienceCategory } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ExperienceSectionProps {
  title: string;
  description: string;
  projects: Project[];
  category: ExperienceCategory;
  highlights: Array<{
    icon: LucideIcon;
    label: string;
  }>;
  icons: {
    primary: LucideIcon;
    secondary: LucideIcon;
  };
  className?: string;
  id: string;
  alternateBackground?: boolean;
}

export function ExperienceSection({
  title,
  description,
  projects,
  category,
  highlights,
  icons,
  className,
  id,
  alternateBackground = false
}: ExperienceSectionProps) {
  
  // Map categories to explicit CSS classes for Tailwind
  const categoryStyles = {
    ai: {
      bg: 'bg-tech-ai/10',
      border: 'border-tech-ai/20',
      text: 'text-tech-ai',
      gradientFrom: 'from-tech-ai/5',
      gradientTo: 'to-tech-ai/10'
    },
    security: {
      bg: 'bg-tech-security/10',
      border: 'border-tech-security/20', 
      text: 'text-tech-security',
      gradientFrom: 'from-tech-security/5',
      gradientTo: 'to-tech-security/10'
    },
    mobile: {
      bg: 'bg-tech-mobile/10',
      border: 'border-tech-mobile/20',
      text: 'text-tech-mobile',
      gradientFrom: 'from-tech-mobile/5',
      gradientTo: 'to-tech-mobile/10'
    },
    robotics: {
      bg: 'bg-tech-robotics/10',
      border: 'border-tech-robotics/20',
      text: 'text-tech-robotics',
      gradientFrom: 'from-tech-robotics/5',
      gradientTo: 'to-tech-robotics/10'
    },
    vr: {
      bg: 'bg-tech-robotics/10',
      border: 'border-tech-robotics/20',
      text: 'text-tech-robotics',
      gradientFrom: 'from-tech-robotics/5',
      gradientTo: 'to-tech-robotics/10'
    }
  };
  
  const styles = categoryStyles[category];

  return (
    <section 
      className={cn(
        "section-padding", 
        alternateBackground && "bg-muted/30",
        className
      )} 
      id={id}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <h2 id={`${id}-heading`} className="text-section text-foreground">
              {title}
            </h2>
          </div>
          
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          
          {/* Key highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-2 hover:scale-105 transition-transform duration-150"
                >
                  <IconComponent className={cn("h-4 w-4", styles.text)} />
                  <span>{highlight.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience timeline */}
        <div className="max-w-4xl mx-auto">
          <ExperienceGrid 
            projects={projects}
            category={category}
          />
        </div>
      </div>
    </section>
  );
}