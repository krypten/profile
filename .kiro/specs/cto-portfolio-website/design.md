# Design Document

## Overview

The Portfolio Website will be a modern, single-page application built with Next.js 14 and Tailwind CSS, inspired by the clean, professional aesthetic of Magic Portfolio. The design emphasizes technical leadership, scalability, and cross-functional impact through a carefully crafted visual hierarchy and smooth scrolling experience.

The website will use a dark/light theme toggle, modern typography, and subtle animations to create an engaging yet professional presentation suitable for C-level positioning in tech startups.

## Architecture

### Technology Stack
- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS with custom design system
- **Typography:** Inter font family for modern, readable text
- **Icons:** Lucide React for consistent iconography
- **Animations:** Framer Motion for smooth transitions and scroll animations
- **Deployment:** Vercel for optimal Next.js performance

### Project Structure
```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── theme-toggle.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── experience.tsx
│   │   ├── skills.tsx
│   │   └── contact.tsx
│   └── layout/
│       ├── header.tsx
│       └── footer.tsx
├── data/
│   ├── portfolio.json
│   └── schema.json
├── lib/
│   ├── data-loader.ts
│   └── utils.ts
├── public/
│   └── images/
└── types/
    └── index.ts
```

## Components and Interfaces

### Core Data Types
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  category: 'ai' | 'security' | 'mobile' | 'robotics';
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
    article?: string;
  };
  impact?: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

interface Skill {
  name: string;
  category: 'technical' | 'leadership' | 'domain';
  level: 'expert' | 'advanced' | 'intermediate';
}
```

### Section Components

#### 1. Hero Section
- **Purpose:** Immediate impact with tagline and core positioning
- **Design:** Full viewport height with gradient background
- **Elements:**
  - Large typography for name and tagline
  - Animated typing effect for role description
  - Social links with hover animations
  - Scroll indicator with smooth animation

#### 2. Experience Sections (4 domains)
- **Layout:** Grid-based cards with timeline visualization
- **Domains:** AI & Machine Learning, Security & Cyber Defense, Mobile & Distributed Systems, Robotics & Immersive Tech
- **Card Design:**
  - Clean white/dark cards with subtle shadows
  - Timeline connector on the left
  - Project title, year, and impact metrics
  - Technology tags with color coding
  - External link indicators

#### 3. Skills & Certifications
- **Design:** Tag cloud with categorized grouping
- **Categories:** Technical Skills, Leadership, Domain Expertise, Certifications
- **Interaction:** Hover effects with skill level indicators

#### 4. Contact Section
- **Purpose:** Clear call-to-action for tech opportunities
- **Elements:** Professional contact form and direct links

### Design System

#### Color Palette
```css
:root {
  /* Light theme */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --accent: 210 40% 94%;
  --muted: 210 40% 96%;
  --border: 214.3 31.8% 91.4%;
}

[data-theme="dark"] {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --secondary: 217.2 32.6% 17.5%;
  --accent: 217.2 32.6% 17.5%;
  --muted: 217.2 32.6% 17.5%;
  --border: 217.2 32.6% 17.5%;
}
```

#### Typography Scale
- **Heading 1:** 4rem (64px) - Hero name
- **Heading 2:** 2.5rem (40px) - Section titles
- **Heading 3:** 1.875rem (30px) - Project titles
- **Body Large:** 1.125rem (18px) - Descriptions
- **Body:** 1rem (16px) - Standard text
- **Small:** 0.875rem (14px) - Meta information

#### Spacing System
- **Section padding:** 6rem (96px) vertical, 2rem (32px) horizontal
- **Card spacing:** 2rem (32px) between cards
- **Element spacing:** 1rem (16px) standard, 0.5rem (8px) tight

## Data Models

### Portfolio Data Structure
The portfolio content will be stored in a structured JSON file (`data/portfolio.json`) for easy maintenance without code changes. This allows for simple content updates by editing the JSON file directly.

#### JSON Schema Structure
```json
{
  "personal": {
    "name": "Chaitanya Agrawal",
    "tagline": "Building secure, intelligent systems that scale",
    "role": "Senior Software Engineer & Technical Leader",
    "bio": "Passionate about AI, Android, Security, Robotics, and Immersive Technology",
    "contact": {
      "email": "chaitiagrawal@gmail.com",
      "linkedin": "agrawalchaitanya",
      "github": "krypten",
      "medium": "@chaitiagrawal"
    }
  },
  
  "experience": {
    "ai": [
      {
        "id": "ai-agents-2024",
        "year": "2024-2025",
        "title": "AI-Driven Developer Agents",
        "company": "Amazon",
        "description": "Building AI systems and MCP integrations to accelerate engineering workflows",
        "impact": "Accelerating development velocity across engineering teams",
        "technologies": ["AI Agents", "MCP", "Python", "Distributed Systems"],
        "links": {
          "github": null,
          "demo": null,
          "article": null
        }
      }
    ],
    
    "security": [
      {
        "id": "ctf-workbook-2024",
        "year": "2024-2025",
        "title": "CTF Workbook",
        "company": "Personal Project",
        "description": "Documented offensive tactics and exploits for cybersecurity education",
        "impact": "Educational resource for security professionals",
        "technologies": ["Penetration Testing", "Documentation", "Security Research"],
        "links": {
          "demo": "https://krypten.github.io/ctf-workbook/",
          "github": "https://github.com/krypten/ctf-workbook"
        }
      }
    ],
    
    "mobile": [
      {
        "id": "alexa-mobile-sdk",
        "year": "2022-Present",
        "title": "Alexa Mobile Assistant SDK",
        "company": "Amazon",
        "description": "Defined technical architecture for Alexa-enabled devices worldwide",
        "impact": "Enabling Alexa integration across millions of mobile devices globally",
        "technologies": ["Android", "iOS", "SDK Architecture", "Distributed Systems"],
        "links": {}
      }
    ],
    
    "robotics": [
      {
        "id": "outliver-vr-2020",
        "year": "2020",
        "title": "Outliver VR Game",
        "company": "Team Daito",
        "description": "Co-led collaborative VR storytelling project with immersive gameplay",
        "impact": "Innovative VR experience combining narrative and technical excellence",
        "technologies": ["Unity", "VR Development", "C#", "Game Design"],
        "links": {
          "article": "https://medium.com/@chaitiagrawal/outliver-game-vr-team-daito-project-913b01ea699d"
        }
      }
    ]
  },
  
  "skills": {
    "technical": [
      "System Architecture", "Distributed Systems", "AI/ML", "Security", 
      "Android Development", "iOS Development", "Python", "Java", "Kotlin", "C++"
    ],
    "leadership": [
      "Technical Strategy", "Team Building", "Cross-functional Collaboration", 
      "Product Architecture", "Engineering Management"
    ],
    "domains": [
      "Artificial Intelligence", "Cybersecurity", "Mobile Development", 
      "Voice AI", "VR/AR", "Robotics", "E-commerce"
    ],
    "certifications": [
      "HTB Certified Penetration Testing Specialist",
      "Udacity Flying Car Nanodegree",
      "Udacity VR Developer Nanodegree",
      "Udacity Deep Learning Foundation"
    ]
  },
  
  "education": [
    {
      "degree": "B.Tech., Information Technology",
      "institution": "IIIT Allahabad",
      "period": "2012-2016"
    }
  ]
}
```

### Data Loading Strategy
A dedicated data loader utility will handle JSON parsing, validation, and type safety:

```typescript
// lib/data-loader.ts
import portfolioData from '../data/portfolio.json';
import { PortfolioData } from '../types';

export function getPortfolioData(): PortfolioData {
  // Validate and return typed data
  return portfolioData as PortfolioData;
}

export function getExperienceByCategory(category: string) {
  const data = getPortfolioData();
  return data.experience[category] || [];
}
```

### Content Management Benefits
- **Easy Updates:** Add new projects by editing JSON file
- **No Code Changes:** Content updates don't require rebuilding components
- **Version Control:** Track content changes through Git
- **Validation:** JSON schema validation ensures data consistency
- **Backup:** Simple to backup and restore content data

## Error Handling

### Client-Side Error Boundaries
- React Error Boundaries for graceful failure handling
- Fallback UI components for broken external links
- Loading states for dynamic content

### Performance Optimization
- Next.js Image optimization for any portfolio images
- Lazy loading for non-critical sections
- Code splitting for optimal bundle size
- Static generation for fast initial load

### Accessibility
- Semantic HTML structure with proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader optimization
- Color contrast compliance (WCAG 2.1 AA)

## Responsive Design

### Breakpoints
- **Mobile:** 320px - 768px (single column layout)
- **Tablet:** 768px - 1024px (two-column grid)
- **Desktop:** 1024px+ (three-column grid for experience sections)

### Mobile-First Approach
- Progressive enhancement from mobile base
- Touch-friendly interactive elements
- Optimized typography scaling
- Simplified navigation for small screens

## Animation and Interactions

### Scroll Animations
- Fade-in animations for sections as they enter viewport
- Parallax effects for hero background
- Progress indicator for scroll position

### Micro-Interactions
- Hover effects on project cards
- Button state transitions
- Theme toggle animation
- Smooth scrolling between sections

### Performance Considerations
- CSS transforms for hardware acceleration
- Reduced motion support for accessibility
- Optimized animation timing functions