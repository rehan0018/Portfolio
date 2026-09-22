export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: 'AI & Systems' | 'Autonomous Agents' | 'Full Stack' | 'Web Engineering';
  featured: boolean;
  problem: string;
  whatIBuilt: string;
  architecture: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  orbitRadius: number; // For 3D constellation representation
  orbitSpeed: number;
  color: string;
  stats?: { label: string; value: string }[];
}

export interface TechnologyNode {
  name: string;
  description?: string;
  verifiedIn?: string; // Repository or public source where used
  children?: TechnologyNode[];
}

export interface TechnologyCategory {
  title: string;
  description: string;
  iconName: string;
  nodes: TechnologyNode[];
}

export interface JourneyMilestone {
  period: string;
  title: string;
  stage: 'Past' | 'Present' | 'Next';
  description: string;
  keyTakeaways: string[];
  verifiedContext: string;
}

export interface PhilosophyQuestion {
  id: string;
  inquiry: string;
  context: string;
  reflection: string;
  relatedDomain: 'Systems & Emergence' | 'Cognition & AI' | 'Resilience & Architecture' | 'Cosmology & Scale';
}

export interface CosmicTheme {
  title: string;
  quote: string;
  body: string[];
}
