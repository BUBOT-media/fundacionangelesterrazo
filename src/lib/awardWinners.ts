
export interface AwardWinner {
  year: number;
  name: string;
  work: string;
  bio: string;
  bioGl: string;
  imageUrl: string | null;
}

// Ganadores del Premio Ángeles Terrazo de Novela
export const awardWinners: AwardWinner[] = [
  {
    year: 2026,
    name: 'Alfredo Conde Cid',
    work: 'A chuvia eterna',
    bio: 'Ganador de la primera edición del Premio Ángeles Terrazo de Novela. Su obra, escrita en lengua gallega, evoca la vida, las tradiciones y las creencias de un territorio, combinando realismo, ironía y elementos casi mágicos. La novela fue seleccionada entre más de 200 obras presentadas desde siete países.',
    bioGl: 'Gañador da primeira edición do Premio Ángeles Terrazo de Novela. A súa obra, escrita en lingua galega, evoca a vida, as tradicións e as crenzas dun territorio, combinando realismo, ironía e elementos case máxicos. A novela foi seleccionada entre máis de 200 obras presentadas desde sete países.',
    imageUrl: '/alfredo-conde.jpg',
  },
];
