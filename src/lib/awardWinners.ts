export interface AwardWinner {
  year: number;
  name: string;
  work: string;
  bio: string;
  imageUrl: string | null;
}

// Datos de ejemplo para los ganadores del premio
export const awardWinners: AwardWinner[] = [
  {
    year: 2026,
    name: 'Próximamente',
    work: 'Por anunciar',
    bio: 'El ganador del premio 2026 será anunciado próximamente.',
    imageUrl: null,
  },
];
