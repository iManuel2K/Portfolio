export interface Project {
  number: string;
  category: string;
  year: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  highlights?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface FloaterItem {
  src: string;
  alt: string;
  position: 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right';
  className?: string;
}
