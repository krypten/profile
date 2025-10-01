import {
  Brain,
  Cpu,
  Zap,
  Shield,
  Lock,
  Target,
  Award,
  Smartphone,
  Globe,
  Users,
  Bot,
  Plane,
  Navigation,
  Cog,
  Headphones,
  Eye,
  Gamepad2,
  Layers,
  HelpCircle,
  type LucideIcon
} from 'lucide-react';

// Icon mapping from string identifiers to Lucide React components
const iconMap: Record<string, LucideIcon> = {
  // AI & Machine Learning icons
  brain: Brain,
  cpu: Cpu,
  zap: Zap,
  
  // Security icons
  shield: Shield,
  lock: Lock,
  target: Target,
  award: Award,
  
  // Mobile & Distributed Systems icons
  smartphone: Smartphone,
  globe: Globe,
  users: Users,
  
  // Robotics icons
  bot: Bot,
  plane: Plane,
  navigation: Navigation,
  cog: Cog,
  
  // VR & Immersive Technology icons
  headphones: Headphones,
  eye: Eye,
  gamepad2: Gamepad2,
  layers: Layers,
};

/**
 * Maps a string icon identifier to a Lucide React icon component
 * @param iconId - String identifier for the icon
 * @returns LucideIcon component or fallback icon if not found
 */
export function mapIcon(iconId: string): LucideIcon {
  const icon = iconMap[iconId.toLowerCase()];
  
  if (!icon) {
    console.warn(`Icon "${iconId}" not found in icon mapping. Using fallback icon.`);
    return HelpCircle; // Fallback icon for missing or invalid identifiers
  }
  
  return icon;
}

/**
 * Maps an array of icon objects with string identifiers to objects with LucideIcon components
 * @param items - Array of objects containing icon string identifiers
 * @returns Array of objects with LucideIcon components
 */
export function mapIconItems<T extends { icon: string }>(
  items: T[]
): Array<Omit<T, 'icon'> & { icon: LucideIcon }> {
  return items.map(item => ({
    ...item,
    icon: mapIcon(item.icon)
  }));
}

/**
 * Maps icon objects with string identifiers to objects with LucideIcon components
 * @param icons - Object containing primary and secondary icon string identifiers
 * @returns Object with LucideIcon components
 */
export function mapIconPair(icons: { primary: string; secondary: string }): {
  primary: LucideIcon;
  secondary: LucideIcon;
} {
  return {
    primary: mapIcon(icons.primary),
    secondary: mapIcon(icons.secondary)
  };
}

/**
 * Gets all available icon identifiers
 * @returns Array of available icon string identifiers
 */
export function getAvailableIcons(): string[] {
  return Object.keys(iconMap);
}

/**
 * Checks if an icon identifier is valid
 * @param iconId - String identifier to check
 * @returns Boolean indicating if the icon exists in the mapping
 */
export function isValidIcon(iconId: string): boolean {
  return iconId.toLowerCase() in iconMap;
}