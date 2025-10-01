'use client'

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/lib/components/ui/button';
import { PersonalInfo } from '@/lib/types';

interface FooterProps {
  personal: PersonalInfo;
  className?: string;
}

export function Footer({ personal, className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-6 px-4 border-t border-border bg-background ${className || ''}`}>
      <div className="container-max">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <span className="text-muted-foreground/70">© {currentYear} /</span>
            <span className="px-2 font-medium text-foreground">{personal.name}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 hover:bg-muted transition-colors"
              asChild
            >
              <a
                href={`https://github.com/${personal.contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 hover:bg-muted transition-colors"
              asChild
            >
              <a
                href={`https://linkedin.com/in/${personal.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 hover:bg-muted transition-colors"
              asChild
            >
              <a
                href={`mailto:${personal.contact.email}`}
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}