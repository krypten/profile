import { PortfolioData, Project, PersonalInfo, Education, ExperienceSectionData} from '@/lib/types'

// Type guard for runtime JSON validation
export class ValidationError extends Error {
  constructor(message: string, public field?: string) {
    super(message)
    this.name = 'ValidationError'
  }
}

// Validation functions for type safety
function validatePersonalInfo(data: any): data is PersonalInfo {
  if (typeof data !== 'object' || data === null) return false
  
  const requiredStringFields = ['name', 'tagline', 'role', 'bio']
  for (const field of requiredStringFields) {
    if (typeof data[field] !== 'string' || data[field].trim() === '') {
      return false
    }
  }

  if (typeof data.contact !== 'object' || data.contact === null) return false
  
  const requiredContactFields = ['email', 'linkedin', 'github', 'medium']
  for (const field of requiredContactFields) {
    if (typeof data.contact[field] !== 'string' || data.contact[field].trim() === '') {
      return false
    }
  }

  return true
}

function validateProject(data: any): data is Project {
  if (typeof data !== 'object' || data === null) return false

  // Required string fields
  const requiredStringFields = ['id', 'title', 'description', 'year']
  for (const field of requiredStringFields) {
    if (typeof data[field] !== 'string' || data[field].trim() === '') {
      return false
    }
  }

  // Validate technologies array
  if (!Array.isArray(data.technologies) || data.technologies.length === 0) {
    return false
  }
  if (!data.technologies.every((tech: any) => typeof tech === 'string' && tech.trim() !== '')) {
    return false
  }

  // Optional fields validation
  if (data.links !== undefined) {
    if (typeof data.links !== 'object' || data.links === null) return false
    const validLinkFields = ['github', 'demo', 'article']
    for (const [key, value] of Object.entries(data.links)) {
      if (validLinkFields.indexOf(key) === -1) return false
      if (value !== undefined && value !== null && typeof value !== 'string') return false
    }
  }

  if (data.impact !== undefined && typeof data.impact !== 'string') return false
  if (data.company !== undefined && typeof data.company !== 'string') return false

  return true
}

function validateEducation(data: any): data is Education {
  return (
    typeof data === 'object' &&
    typeof data.degree === 'string' &&
    typeof data.institution === 'string' &&
    typeof data.period === 'string'
  )
}

function validateSkills(data: any): boolean {
  return (
    typeof data === 'object' &&
    Array.isArray(data.technical) &&
    Array.isArray(data.leadership) &&
    Array.isArray(data.domains) &&
    Array.isArray(data.certifications) &&
    data.technical.every((skill: any) => typeof skill === 'string') &&
    data.leadership.every((skill: any) => typeof skill === 'string') &&
    data.domains.every((skill: any) => typeof skill === 'string')
  )
}

function validateExperienceSection(data: any): data is ExperienceSectionData {
  if (typeof data !== 'object' || data === null) return false
  
  const requiredStringFields = ['id', 'title', 'description']
  for (const field of requiredStringFields) {
    if (typeof data[field] !== 'string' || data[field].trim() === '') {
      return false
    }
  }
  
  if (!Array.isArray(data.projects) || !data.projects.every(validateProject)) {
    return false
  }
  
  return true
}

function validateExperiences(experiences: any): boolean {
  if (!Array.isArray(experiences) || !experiences.every(validateExperienceSection)) {
    return false
  }
  return true
}

export function validatePortfolioData(data: any): data is PortfolioData {
  if (typeof data !== 'object' || data === null) {
    throw new ValidationError('Portfolio data must be an object')
  }

  if (!validatePersonalInfo(data.personal)) {
    throw new ValidationError('Invalid personal information structure', 'personal')
  }

  if (!validateExperiences(data.experiences)) {
    throw new ValidationError('Invalid experiences structure', 'experiences')
  }

  if (!validateSkills(data.skills)) {
    throw new ValidationError('Invalid skills structure', 'skills')
  }

  if (!Array.isArray(data.education) || !data.education.every(validateEducation)) {
    throw new ValidationError('Invalid education structure', 'education')
  }

  return true
}

// Cache for portfolio data to avoid repeated validation
let cachedPortfolioData: PortfolioData | null = null

// Import the actual portfolio data
import portfolioData from '@/lib/data/portfolio.json'

export function getPortfolioData(): PortfolioData {
  // Return cached data if available
  if (cachedPortfolioData) {
    return cachedPortfolioData
  }

  // Use the imported JSON data
  const data = portfolioData

  try {
    // Validate the data structure
    validatePortfolioData(data)
    cachedPortfolioData = data as PortfolioData
    return cachedPortfolioData
  } catch (error) {
    throw new Error(`Portfolio data validation failed: ${error instanceof Error ? error.message : 'Unknown validation error'}`)
  }
}

// Function to reset cache (useful for testing or when data changes)
export function resetPortfolioCache(): void {
  cachedPortfolioData = null
}
