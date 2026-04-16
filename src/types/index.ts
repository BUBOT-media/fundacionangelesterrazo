// Tipos para el blog
export type HighlightLevel = 'super' | 'featured' | 'normal';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  updatedAt: Date;
  featured: boolean;
  highlightLevel: HighlightLevel; // 'super' = super-destacada, 'featured' = destacada, 'normal' = normal
  imageUrl?: string;
}

// Tipos para eventos de la agenda
export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  imageUrl?: string;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Tipos para el premio
export interface Award {
  id: string;
  year: number;
  winnerName: string;
  winnerBio: string;
  workTitle: string;
  workDescription: string;
  imageUrl?: string;
}

// Tipos para información de contacto
export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'linkedin';
  url: string;
}

// Tipos para navegación
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
