export interface NavItem {
  name: string;
  href: string;
}

export const navigation: NavItem[] = [
  { name: 'Inicio', href: '/' },
  { name: 'La Fundación', href: '/la-fundacion' },
  { name: 'Premio', href: '/premio' },
  { name: 'Transparencia', href: '/transparencia' },
  // { name: 'Noticias y blog', href: '/blog' },
  { name: 'Contacto', href: '/contacto' },
];

export const footerNavigation: NavItem[] = [
  { name: 'Inicio', href: '/' },
  { name: 'El Premio', href: '/premio' },
  { name: 'Transparencia', href: '/transparencia' },
  { name: 'Blog', href: '/blog' },
  { name: 'Agenda', href: '/agenda' },
  { name: 'Contacto', href: '/contacto' },
];
