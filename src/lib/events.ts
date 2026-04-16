import { Event } from '@/types';

// Datos de ejemplo para los eventos
export const events: Event[] = [
  {
    id: '1',
    title: 'Ceremonia de entrega del Premio 2025',
    description: 'Acompáñanos en la ceremonia de entrega del Premio Ángeles Terrazo de Novela. Un evento donde celebramos la excelencia literaria.',
    date: new Date('2025-03-15'),
    time: '19:00',
    location: 'Auditorio Nacional de Literatura, Madrid',
    imageUrl: undefined,
    isPublished: true,
    createdAt: new Date('2024-12-01'),
    updatedAt: new Date('2024-12-01'),
  },
  {
    id: '2',
    title: 'Taller de escritura creativa',
    description: 'Un taller práctico donde exploraremos técnicas de escritura creativa de la mano de reconocidos autores. Abierto a todos los niveles.',
    date: new Date('2025-02-20'),
    time: '17:00',
    location: 'Sede de la Fundación, Sala de eventos',
    imageUrl: undefined,
    isPublished: true,
    createdAt: new Date('2024-11-15'),
    updatedAt: new Date('2024-11-15'),
  },
  {
    id: '3',
    title: 'Coloquio: El futuro de la literatura',
    description: 'Mesa redonda con editores, escritores y críticos literarios para debatir sobre el estado actual y el futuro de la literatura.',
    date: new Date('2025-01-25'),
    time: '18:30',
    location: 'Biblioteca Municipal, Sala de conferencias',
    imageUrl: undefined,
    isPublished: true,
    createdAt: new Date('2024-10-20'),
    updatedAt: new Date('2024-10-20'),
  },
  {
    id: '4',
    title: 'Presentación del libro ganador 2023',
    description: 'El ganador del premio 2023 presentará su última obra y conversará con el público sobre su proceso creativo.',
    date: new Date('2025-01-10'),
    time: '19:30',
    location: 'Librería Central, Madrid',
    imageUrl: undefined,
    isPublished: true,
    createdAt: new Date('2024-09-01'),
    updatedAt: new Date('2024-09-01'),
  },
];

// Versión simplificada para el admin
export interface AdminEvent {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: string;
  isPublished: boolean;
}

export const adminEvents: AdminEvent[] = [
  {
    id: '1',
    title: 'Ceremonia de entrega del Premio 2025',
    date: new Date('2025-03-15'),
    time: '19:00',
    location: 'Auditorio Nacional de Literatura, Madrid',
    isPublished: true,
  },
  {
    id: '2',
    title: 'Taller de escritura creativa',
    date: new Date('2025-02-20'),
    time: '17:00',
    location: 'Sede de la Fundación',
    isPublished: true,
  },
  {
    id: '3',
    title: 'Coloquio: El futuro de la literatura',
    date: new Date('2025-01-25'),
    time: '18:30',
    location: 'Biblioteca Municipal',
    isPublished: true,
  },
  {
    id: '4',
    title: 'Presentación del libro ganador 2023',
    date: new Date('2025-01-10'),
    time: '19:30',
    location: 'Librería Central, Madrid',
    isPublished: true,
  },
];
