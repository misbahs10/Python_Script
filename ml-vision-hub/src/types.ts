export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string;
  tools: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  metrics: { name: string; value: string }[];
  image: string;
  highlights: string[];
}

export interface Dataset {
  id: string;
  name: string;
  size: string;
  format: string;
  features: string[];
  downloadUrl: string;
  description: string;
  downloads: number;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  image: string;
  author: string;
}

export interface MLResource {
  id: string;
  category: 'Books' | 'Tutorials' | 'Libraries' | 'Community';
  title: string;
  description: string;
  url: string;
  tag: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
