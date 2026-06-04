export type { ProjectId, ProjectCard, ProjectModal } from '../data/projects';

export interface ContactLink {
  icon: string;
  label: string;
  href: string;
}

export interface TimelineItem {
  date: string;
  company: string;
  role: string;
}

export interface NavigationLink {
  href: string;
  label: string;
}

export interface Photo {
  src: string;
  alt: string;
}
