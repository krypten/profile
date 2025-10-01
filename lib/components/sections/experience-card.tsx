import React from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Badge } from '@/lib/components/ui/badge';
import { Button } from '@/lib/components/ui/button';
import { Project, ExperienceCategory } from '@/lib/types';
import { cn, getExternalLinkProps, formatYear } from '@/lib/utils';

interface ExperienceCardProps {
  project: Project;
  category: ExperienceCategory;
  showTimeline?: boolean;
  isLast?: boolean;
}

export function ExperienceCard({
  project,
  category,
  showTimeline = true,
  isLast = false
}: ExperienceCardProps) {
  const hasLinks = !!(project.links.github || project.links.demo || project.links.article);

  // Map categories to explicit CSS classes for Tailwind
  const categoryStyles = {
    ai: {
      border: 'border-tech-ai',
      borderLeft: 'border-l-tech-ai',
      bg: 'bg-tech-ai/30'
    },
    security: {
      border: 'border-tech-security',
      borderLeft: 'border-l-tech-security',
      bg: 'bg-tech-security/30'
    },
    mobile: {
      border: 'border-tech-mobile',
      borderLeft: 'border-l-tech-mobile',
      bg: 'bg-tech-mobile/30'
    },
    robotics: {
      border: 'border-tech-robotics',
      borderLeft: 'border-l-tech-robotics',
      bg: 'bg-tech-robotics/30'
    },
    vr: {
      border: 'border-tech-robotics',
      borderLeft: 'border-l-tech-robotics',
      bg: 'bg-tech-robotics/30'
    }
  };

  const styles = categoryStyles[category] || {
    border: 'border-tech-default',
    borderLeft: 'border-l-tech-default',
    bg: 'bg-tech-default/30'
  };

  return (
    <div className="relative">
      {/* Timeline visualization */}
      {showTimeline && (
        <div className="absolute left-0 top-0 flex flex-col items-center">
          {/* Timeline dot */}
          <div
            className={cn(
              "w-3 h-3 rounded-full border-2 bg-background z-10 transition-transform hover:scale-110",
              styles.border
            )}
          />

          {/* Timeline line */}
          {!isLast && (
            <div
              className={cn(
                "w-0.5 flex-1 mt-2 min-h-16",
                styles.bg
              )}
            />
          )}
        </div>
      )}

      {/* Card content */}
      <div className="transition-transform duration-200 touch-manipulation">
        <Card
          className={cn(
            "ml-4 sm:ml-6 lg:ml-8 transition-all duration-300 group",
            "border-l-2 sm:border-l-4 hover:border-l-4 sm:hover:border-l-8",
            styles.borderLeft
          )}
          interactive={hasLinks}
          role="article"
          aria-labelledby={`project-${project.id}-title`}
        >
          <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <CardTitle
                  id={`project-${project.id}-title`}
                  className="group-hover:text-primary transition-colors text-responsive-project"
                >
                  {project.title}
                </CardTitle>
                <div className="flex flex-wrap items-center gap-2 mt-1 text-xs sm:text-sm text-muted-foreground">
                  <span className="font-medium">{formatYear(project.year)}</span>
                  {project.company && (
                    <>
                      <span className="hidden xs:inline">•</span>
                      <span className="xs:inline block">{project.company}</span>
                    </>
                  )}
                </div>
              </div>

              {/* External link indicators */}
              {hasLinks && (
                <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                  {project.links.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 sm:h-7 sm:w-7 p-0 hover:bg-primary/10 hover:border-primary/30 hover:scale-105 transition-all duration-150"
                      asChild
                    >
                      <a
                        {...getExternalLinkProps(project.links.github)}
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="sr-only">View on GitHub</span>
                      </a>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 sm:h-7 sm:w-7 p-0 hover:bg-primary/10 hover:border-primary/30 hover:scale-105 transition-all duration-150"
                      asChild
                    >
                      <a
                        {...getExternalLinkProps(project.links.demo)}
                        aria-label={`View ${project.title} demo`}
                      >
                        <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="sr-only">View demo</span>
                      </a>
                    </Button>
                  )}
                  {project.links.article && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 sm:h-7 sm:w-7 p-0 hover:bg-primary/10 hover:border-primary/30 hover:scale-105 transition-all duration-150"
                      asChild
                    >
                      <a
                        {...getExternalLinkProps(project.links.article)}
                        aria-label={`Read article about ${project.title}`}
                      >
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="sr-only">Read article</span>
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent className="pt-0 p-4 sm:p-6">
            {/* Project description */}
            <p className="text-sm sm:text-base lg:text-body-large text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              {project.description}
            </p>



            {/* Technology tags */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="tech"
                    category={category}
                    className="text-xs sm:text-sm cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition-transform duration-150"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}