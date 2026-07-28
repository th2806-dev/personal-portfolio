export interface TechSkill {
  name: string;
  category: 'languages' | 'frameworks' | 'persistence' | 'other' | 'tools';
  iconName?: string;
  level?: string;
  highlight?: boolean;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  categoryTags: string;
  description: string;
  keyStack: string[];
  image: string;
  architectureDetails: {
    pattern: string;
    highlights: string[];
    apiEndpoints?: string[];
    databaseDesign?: string;
  };
  demoUrl?: string;
  githubUrl?: string;
}

export interface EducationInfo {
  school: string;
  degree: string;
  period: string;
  gpa: string;
}

export interface StatMetric {
  value: string;
  label: string;
}
