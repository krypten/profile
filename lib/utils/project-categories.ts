import { Project, ExperienceCategory } from '@/lib/types'

export interface ProjectCategoryData {
  id: string
  title: string
  description: string
  category: ExperienceCategory
  projects: Project[]
  icon: string
  color: string
}

// Category definitions with metadata
const categoryDefinitions: Record<string, Omit<ProjectCategoryData, 'projects'>> = {
  ai: {
    id: 'ai',
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Advanced AI systems, machine learning models, and intelligent automation solutions that leverage cutting-edge algorithms and data science techniques.',
    category: 'ai',
    icon: 'brain',
    color: 'tech-ai'
  },
  security: {
    id: 'security',
    title: 'Cybersecurity & Privacy',
    description: 'Security-focused applications, privacy protection tools, and cybersecurity solutions designed to protect digital assets and user data.',
    category: 'security',
    icon: 'shield',
    color: 'tech-security'
  },
  mobile: {
    id: 'mobile',
    title: 'Mobile & Cross-Platform Development',
    description: 'Native and cross-platform mobile applications, responsive web apps, and mobile-first solutions for iOS, Android, and web platforms.',
    category: 'mobile',
    icon: 'smartphone',
    color: 'tech-mobile'
  },
  robotics: {
    id: 'robotics',
    title: 'Robotics & Automation',
    description: 'Robotic systems, automation frameworks, and IoT solutions that bridge the physical and digital worlds through intelligent control systems.',
    category: 'robotics',
    icon: 'bot',
    color: 'tech-robotics'
  },
  vr: {
    id: 'vr',
    title: 'Virtual & Augmented Reality',
    description: 'Immersive VR/AR experiences, 3D applications, and mixed reality solutions that create engaging digital environments and interactions.',
    category: 'vr',
    icon: 'headphones',
    color: 'tech-robotics'
  },
  web: {
    id: 'web',
    title: 'Web Development & APIs',
    description: 'Full-stack web applications, RESTful APIs, and modern web technologies that deliver scalable and performant digital experiences.',
    category: 'ai', // Default fallback
    icon: 'globe',
    color: 'tech-ai'
  },
  data: {
    id: 'data',
    title: 'Data Science & Analytics',
    description: 'Data analysis tools, visualization platforms, and business intelligence solutions that transform raw data into actionable insights.',
    category: 'ai',
    icon: 'database',
    color: 'tech-ai'
  },
  cloud: {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    description: 'Cloud-native applications, DevOps tools, and infrastructure solutions that enable scalable and reliable system deployments.',
    category: 'ai',
    icon: 'cloud',
    color: 'tech-ai'
  }
}

// Keywords to help categorize projects automatically
const categoryKeywords: Record<string, string[]> = {
  ai: ['ai', 'machine learning', 'ml', 'neural', 'deep learning', 'nlp', 'computer vision', 'tensorflow', 'pytorch', 'scikit-learn', 'opencv', 'transformers'],
  security: ['security', 'cybersecurity', 'encryption', 'privacy', 'auth', 'oauth', 'jwt', 'ssl', 'tls', 'firewall', 'penetration', 'vulnerability'],
  mobile: ['mobile', 'ios', 'android', 'react native', 'flutter', 'swift', 'kotlin', 'xamarin', 'cordova', 'ionic'],
  robotics: ['robot', 'robotics', 'arduino', 'raspberry pi', 'iot', 'sensor', 'automation', 'control', 'embedded', 'firmware'],
  vr: ['vr', 'ar', 'virtual reality', 'augmented reality', 'unity', 'unreal', '3d', 'webxr', 'oculus', 'hololens'],
  web: ['web', 'website', 'frontend', 'backend', 'fullstack', 'api', 'rest', 'graphql', 'react', 'vue', 'angular', 'node', 'express'],
  data: ['data', 'analytics', 'visualization', 'dashboard', 'pandas', 'numpy', 'matplotlib', 'tableau', 'powerbi', 'sql', 'database'],
  cloud: ['cloud', 'aws', 'azure', 'gcp', 'docker', 'kubernetes', 'devops', 'ci/cd', 'terraform', 'serverless', 'microservices']
}

/**
 * Automatically categorize a project based on its content
 */
function categorizeProject(project: Project): string {
  const searchText = `${project.title} ${project.description} ${project.technologies.join(' ')}`.toLowerCase()
  
  // Count keyword matches for each category
  const categoryScores: Record<string, number> = {}
  
  Object.entries(categoryKeywords).forEach(([category, keywords]) => {
    categoryScores[category] = keywords.reduce((score, keyword) => {
      return score + (searchText.includes(keyword.toLowerCase()) ? 1 : 0)
    }, 0)
  })
  
  // Find category with highest score
  const bestCategory = Object.entries(categoryScores).reduce((best, [category, score]) => {
    return score > best.score ? { category, score } : best
  }, { category: 'web', score: 0 })
  
  return bestCategory.category
}

/**
 * Group projects into categories
 */
export function groupProjectsByCategories(projects: Project[]): ProjectCategoryData[] {
  // Group projects by auto-detected category
  const projectsByCategory: Record<string, Project[]> = {}
  
  projects.forEach(project => {
    const category = categorizeProject(project)
    if (!projectsByCategory[category]) {
      projectsByCategory[category] = []
    }
    projectsByCategory[category].push(project)
  })
  
  // Create category data objects
  const categories: ProjectCategoryData[] = Object.entries(projectsByCategory)
    .filter(([_, projects]) => projects.length > 0) // Only include categories with projects
    .map(([categoryId, projects]) => ({
      ...categoryDefinitions[categoryId],
      projects: projects.sort((a, b) => {
        // Sort by year (newest first)
        const getYear = (yearStr: string) => {
          const match = yearStr.match(/(\d{4})/)
          return match ? parseInt(match[1]) : 0
        }
        return getYear(b.year) - getYear(a.year)
      })
    }))
    .sort((a, b) => {
      // Sort categories by number of projects (descending)
      return b.projects.length - a.projects.length
    })
  
  return categories
}

/**
 * Get category metadata by ID
 */
export function getCategoryById(categoryId: string): Omit<ProjectCategoryData, 'projects'> | null {
  return categoryDefinitions[categoryId] || null
}

/**
 * Get all available category definitions
 */
export function getAllCategoryDefinitions(): Record<string, Omit<ProjectCategoryData, 'projects'>> {
  return categoryDefinitions
}