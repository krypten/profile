'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { Education } from '@/lib/types';
import { cn } from '@/lib/utils';

interface EducationSectionProps {
  education: Education[];
  className?: string;
}

export function EducationSection({ education, className }: EducationSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section
      className={cn("section-padding bg-muted/20", className)}
      id="education"
      aria-labelledby="education-heading"
    >
      <div className="container-max">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
            <h2 id="education-heading" className="text-section text-foreground">
              Education & Learning
            </h2>
        </motion.div>

        {/* Education timeline */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline connector */}
                {index < education.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent" />
                )}

                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <motion.div
                    className="flex-shrink-0 mt-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }}
                    >
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </motion.div>
                  </motion.div>

                  {/* Education content */}
                  <div className="flex-1 min-w-0">
                    <motion.div
                      className="bg-card border border-border rounded-lg p-6 group focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
                      whileHover={{
                        scale: 1.02,
                        y: -4,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      role="article"
                      tabIndex={0}
                      aria-labelledby={`education-${index}-title`}
                    >
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h3
                            id={`education-${index}-title`}
                            className="text-project font-semibold text-foreground group-hover:text-primary transition-colors"
                          >
                            {edu.degree}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground mt-1">
                            <MapPin className="w-4 h-4" />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      {edu.description && (
                        <p className="text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}