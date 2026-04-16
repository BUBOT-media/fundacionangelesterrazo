import React from 'react';

export interface PatronatoMember {
  nombre: string;
  cargo: string;
}

export interface Valor {
  titulo: string;
  descripcion: string;
  icon: React.ReactNode;
}

export interface Objetivo {
  titulo: string;
  items: string[];
}

export const patronato: PatronatoMember[] = [
  { nombre: 'María de los Ángeles Terrazo Blanco', cargo: 'Presidenta' },
  { nombre: 'Luis Quinteiro Fiúza', cargo: 'Vicepresidente' },
  { nombre: 'Juan Carlos Aladro Fernández', cargo: 'Secretario' },
  { nombre: 'Susana García-Baquero Borrell', cargo: 'Vocal' },
  { nombre: 'Alfonso Carlos Penela Fernández', cargo: 'Vocal' },
  { nombre: 'Isidoro Nicieza', cargo: 'Vocal' },
  { nombre: 'Jose Manuel Amoedo', cargo: 'Vocal' },
];

export const valores: Valor[] = [
  {
    titulo: 'Compromiso con la literatura',
    descripcion: 'Defendemos la literatura como espacio de pensamiento, libertad creativa y expresión artística, fomentando especialmente la novela como género narrativo fundamental para la cultura contemporánea.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
  },
  {
    titulo: 'Compromiso educativo',
    descripcion: 'Promovemos el acceso a los libros y el hábito lector como herramientas de desarrollo personal, educativo y social.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    ),
  },
  {
    titulo: 'Apoyo al talento creativo',
    descripcion: 'Impulsamos a autores y autoras emergentes y consolidados, favoreciendo la difusión de su obra.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
  },
  {
    titulo: 'Rigor cultural y vocación pública',
    descripcion: 'Trabajamos con responsabilidad, transparencia y ética institucional en todas nuestras acciones culturales y programas literarios.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
  {
    titulo: 'Respeto a la diversidad artística',
    descripcion: 'Fomentamos la pluralidad temática y estilística, entendiendo la literatura como un espacio abierto a distintas sensibilidades y realidades.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
];

export const objetivos: Objetivo[] = [
  {
    titulo: 'Promover la lectura como práctica social y cultural',
    items: [
      'Impulsando actividades, clubes de lectura y encuentros literarios.',
      'Acercando la literatura a nuevos públicos y generaciones lectoras.',
    ],
  },
  {
    titulo: 'Fomentar la creación y difusión de la novela',
    items: [
      'Apoyando obras narrativas de calidad literaria.',
      'Incentivando la innovación en el género y la exploración de nuevas formas de relato.',
    ],
  },
  {
    titulo: 'Impulsar el Premio Ángeles Terrazo de Novela',
    items: [
      'Como plataforma de reconocimiento a autores y autoras.',
      'Favoreciendo la proyección cultural de las obras premiadas.',
    ],
  },
  {
    titulo: 'Acompañar y visibilizar a escritores y escritoras',
    items: [
      'Mediante programas de divulgación, formación y residencias literarias.',
      'Estableciendo redes con instituciones culturales y editoriales.',
    ],
  },
  {
    titulo: 'Contribuir al fortalecimiento del ecosistema cultural',
    items: [
      'Participando activamente en el tejido literario gallego y nacional.',
      'Promoviendo iniciativas que vinculen literatura, educación y sociedad.',
    ],
  },
];
