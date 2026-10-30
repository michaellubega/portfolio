export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'mobile' | 'backend' | 'fintech' | 'systems';
  categoryLabel: string;
  description: string;
  role: string;
  timeline: string;
  image?: string;
  githubUrl: string;
  liveDemoAvailable: boolean;
  featured: boolean;
  technologies: string[];
  keyFeatures: string[];
  engineeringHighlights: {
    title: string;
    description: string;
  }[];
  architectureSummary: string;
  dataFlow: string[];
  interactivePreviewType: 'map_store' | 'system_telemetry' | 'expense_tracker' | 'payment_checkout';
}

export interface SkillItem {
  name: string;
  level: 'production' | 'developing' | 'foundational';
  category: 'mobile' | 'backend' | 'cloud' | 'networking' | 'tools' | 'foundations';
  context: string;
  iconName?: string;
}

export interface ArchitecturePattern {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  nodes: {
    label: string;
    detail: string;
    type: 'client' | 'network' | 'service' | 'database';
  }[];
  steps: string[];
}
