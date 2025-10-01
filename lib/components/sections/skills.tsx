'use client'

import React from 'react';
import {
  Code,
  Users,
  Brain,
  Award,
  Shield,
  Cpu,
  Globe,
  ExternalLink
} from 'lucide-react';
import { cn, getExternalLinkProps } from '@/lib/utils';
import { Certification } from '@/lib/types';

interface SkillsData {
  technical: string[];
  leadership: string[];
  domains: string[];
  certifications: Certification[];
}

interface SkillsSectionProps {
  skills: SkillsData;
  className?: string;
}

export function SkillsSection({ skills, className }: SkillsSectionProps) {

  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: Code,
      skills: skills.technical as string[] | Certification[],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      description: 'Core technical competencies and programming languages'
    },
    {
      title: 'Leadership & Management',
      icon: Users,
      skills: skills.leadership as string[] | Certification[],
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      borderColor: 'border-green-200 dark:border-green-800',
      description: 'Technical leadership and team management capabilities'
    },
    {
      title: 'Domain Expertise',
      icon: Brain,
      skills: skills.domains as string[] | Certification[],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      description: 'Specialized knowledge across multiple technology domains'
    },
    {
      title: 'Certifications',
      icon: Award,
      skills: skills.certifications as string[] | Certification[],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      description: 'Professional certifications and continuous learning achievements'
    }
  ];

  return (
    <section
      className={cn("section-padding", className)}
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <h2 id="skills-heading" className="text-responsive-section text-foreground">
              Skills & Expertise
            </h2>
          </div>

          <p className="text-sm sm:text-base lg:text-body-large text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive technical expertise spanning multiple domains, with proven leadership capabilities and continuous learning mindset that drives innovation and team success.
          </p>

          {/* Key highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-muted-foreground px-4">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" />
              <span>Full-Stack Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Security & AI Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <span>Global Scale Systems</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>Technical Leadership</span>
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={categoryIndex}
                className={cn(
                  "p-4 sm:p-6 rounded-lg border",
                  category.bgColor,
                  category.borderColor
                )}
                role="region"
                aria-labelledby={`skills-category-${categoryIndex}`}
              >
                {/* Category header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={cn(
                    "p-2 rounded-lg flex-shrink-0",
                    category.bgColor,
                    category.borderColor,
                    "border"
                  )}>
                    <IconComponent className={cn("h-4 w-4 sm:h-5 sm:w-5", category.color)} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3
                      id={`skills-category-${categoryIndex}`}
                      className="text-base sm:text-lg font-semibold text-foreground"
                    >
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.title === 'Certifications'
                    ? (category.skills as Certification[]).map((cert, skillIndex) => (
                      <a
                        key={skillIndex}
                        {...getExternalLinkProps(cert.url)}
                        className={cn(
                          "px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full border transition-all duration-150 cursor-pointer",
                          "bg-background/50 border-border hover:border-primary/30 hover:scale-105 hover:-translate-y-0.5",
                          "text-foreground hover:text-primary hover:bg-primary/10 inline-flex items-center gap-1",
                          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        )}
                        aria-label={`View ${cert.name} certification`}
                      >
                        {cert.name}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ))
                    : (category.skills as string[]).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={cn(
                          "px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full border transition-all duration-150 cursor-pointer",
                          "bg-background/50 border-border hover:border-primary/30 hover:scale-105 hover:-translate-y-0.5",
                          "text-foreground hover:text-primary hover:bg-primary/10"
                        )}
                      >
                        {skill}
                      </span>
                    ))
                  }
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills summary callout */}
        <div className="mt-8 sm:mt-12 lg:mt-16 p-4 sm:p-6 lg:p-8 rounded-lg border bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <div className="text-center">
            <h3 className="text-responsive-project font-semibold text-foreground mb-3 sm:mb-4">
              Cross-Functional Technical Leadership
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-6 px-4">
              Unique combination of deep technical expertise across AI, security, mobile, and emerging technologies, paired with proven leadership capabilities in scaling engineering teams and architecting systems that serve millions of users globally.
            </p>

            {/* Key metrics */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1">
                  10+
                </div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1">
                  4
                </div>
                <div className="text-muted-foreground">Technical Domains</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1">
                  10+
                </div>
                <div className="text-muted-foreground">Programming Languages</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1">
                  4
                </div>
                <div className="text-muted-foreground">Professional Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}