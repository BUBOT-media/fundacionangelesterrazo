import { BlogPost } from '@/types';

// Datos de ejemplo para las entradas del blog
// Los campos title, excerpt y content usan claves de traducción que se resuelven con t() en el componente
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'news.presentacion.title', // Clave de traducción
    slug: 'fundacion-angeles-terrazo-presenta-premio-literario-vigo',
    excerpt: 'news.presentacion.excerpt', // Clave de traducción
    content: 'news.presentacion.content', // Clave de traducción
    author: 'Fundación Ángeles Terrazo',
    publishedAt: new Date('2026-01-21'),
    updatedAt: new Date('2026-01-21'),
    featured: true,
    highlightLevel: 'featured',
    imageUrl: '/teatro_vigo.png',
  },
  {
    id: '2',
    title: 'news.presentacion-event.title', // Clave de traducción
    slug: 'fundacion-angeles-terrazo-evento-premio-literario-vigo',
    excerpt: 'news.presentacion-event.excerpt', // Clave de traducción
    content: 'news.presentacion-event.content', // Clave de traducción
    author: 'Fundación Ángeles Terrazo',
    publishedAt: new Date('2026-01-22'),
    updatedAt: new Date('2026-01-22'),
    featured: true,
    highlightLevel: 'featured',
    imageUrl: '/presentacion_fundacion.jpeg',
  },
  {
  id: '3',
  title: 'news.convocatoria.title',
  slug: 'fundacion-angeles-terrazo-creacion-premio-literario',
  excerpt: 'news.convocatoria.excerpt',
  content: 'news.convocatoria.content',
  author: 'Fundación Ángeles Terrazo',
  publishedAt: new Date('2026-02-02'),
  updatedAt: new Date('2026-02-02'),
  featured: true,
  highlightLevel: 'super',
  imageUrl: '/creacion_premio.jpeg',
  }
]
/*export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'La importancia de la literatura en la educación',
    slug: 'importancia-literatura-educacion',
    excerpt: 'Reflexionamos sobre el papel fundamental que juega la literatura en la formación de las nuevas generaciones.',
    content: `
      <p>La literatura ha sido, desde tiempos inmemoriales, una herramienta fundamental para la transmisión del conocimiento y los valores humanos. En el contexto educativo actual, su importancia no ha disminuido, sino que se ha transformado para adaptarse a las nuevas realidades.</p>
      
      <h2>El poder de las historias</h2>
      <p>Las historias nos permiten comprender experiencias ajenas, desarrollar empatía y ampliar nuestra visión del mundo. A través de la lectura, los estudiantes pueden vivir mil vidas y conocer perspectivas que de otro modo les serían inaccesibles.</p>
      
      <h2>Desarrollo del pensamiento crítico</h2>
      <p>La lectura literaria fomenta el análisis, la reflexión y el cuestionamiento. Los textos complejos requieren que el lector interprete, deduzca y forme sus propias opiniones, habilidades esenciales en la formación de ciudadanos conscientes.</p>
      
      <h2>Conclusión</h2>
      <p>Invertir en la promoción de la literatura entre los jóvenes es invertir en el futuro de nuestra sociedad. Desde la Fundación Ángeles Terrazo, seguiremos trabajando para que la literatura ocupe el lugar que merece en la educación.</p>
    `,
    author: 'Fundación Ángeles Terrazo',
    publishedAt: new Date('2024-12-15'),
    updatedAt: new Date('2024-12-15'),
    featured: true,
    imageUrl: undefined,
  },
  {
    id: '2',
    title: 'Entrevista con el ganador del premio 2023',
    slug: 'entrevista-ganador-2023',
    excerpt: 'Conversamos en profundidad con el galardonado sobre su trayectoria, inspiraciones y proyectos futuros.',
    content: `
      <p>Tuvimos el honor de conversar con el ganador del Premio Ángeles Terrazo de Novela 2023, quien nos compartió sus reflexiones sobre la escritura y su carrera literaria.</p>
      
      <h2>Sobre sus inicios</h2>
      <p>"Comencé a escribir desde muy joven, como una forma de entender el mundo que me rodeaba. La literatura fue mi refugio y, con el tiempo, se convirtió en mi vocación."</p>
      
      <h2>El proceso creativo</h2>
      <p>"Cada libro es un viaje diferente. No tengo una fórmula fija; dejo que las historias me guíen. Lo importante es ser honesto con uno mismo y con los lectores."</p>
      
      <h2>Sobre el premio</h2>
      <p>"Recibir el reconocimiento de la Fundación Ángeles Terrazo es un honor inmenso. Es una validación del trabajo de años y un estímulo para seguir creando."</p>
    `,
    author: 'Fundación Ángeles Terrazo',
    publishedAt: new Date('2024-11-20'),
    updatedAt: new Date('2024-11-20'),
    featured: false,
    imageUrl: undefined,
  },
  {
    id: '3',
    title: 'Tendencias literarias para 2025',
    slug: 'tendencias-literarias-2025',
    excerpt: 'Un análisis de las corrientes literarias que marcarán el próximo año según expertos del sector.',
    content: `
      <p>El panorama literario está en constante evolución. Analizamos las tendencias que, según los expertos, dominarán el mundo editorial en 2025.</p>
      
      <h2>Narrativa híbrida</h2>
      <p>La fusión de géneros sigue ganando terreno. Los lectores buscan experiencias nuevas que combinen elementos de distintas tradiciones literarias.</p>
      
      <h2>Voces diversas</h2>
      <p>La literatura de autores de comunidades históricamente marginadas continúa ganando visibilidad y reconocimiento, enriqueciendo el panorama literario global.</p>
      
      <h2>Sostenibilidad editorial</h2>
      <p>Las editoriales están adoptando prácticas más sostenibles, desde la producción hasta la distribución, respondiendo a la demanda de lectores conscientes.</p>
    `,
    author: 'Fundación Ángeles Terrazo',
    publishedAt: new Date('2024-10-05'),
    updatedAt: new Date('2024-10-05'),
    featured: false,
    imageUrl: undefined,
  },
];*/

// Versión reducida para listados (sin content)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const blogPostsList: Omit<BlogPost, 'content'>[] = blogPosts.map(({ content: _, ...rest }) => rest);

// Versión para el admin con estado
export interface AdminBlogPost {
  id: string;
  title: string;
  slug: string;
  publishedAt: Date;
  featured: boolean;
  status: 'published' | 'draft';
}
export const adminBlogPosts: AdminBlogPost[] = [];
/*export const adminBlogPosts: AdminBlogPost[] = [
  {
    id: '1',
    title: 'La importancia de la literatura en la educación',
    slug: 'importancia-literatura-educacion',
    publishedAt: new Date('2024-12-15'),
    featured: true,
    status: 'published',
  },
  {
    id: '2',
    title: 'Entrevista con el ganador del premio 2023',
    slug: 'entrevista-ganador-2023',
    publishedAt: new Date('2024-11-20'),
    featured: false,
    status: 'published',
  },
  {
    id: '3',
    title: 'Tendencias literarias para 2025',
    slug: 'tendencias-literarias-2025',
    publishedAt: new Date('2024-10-05'),
    featured: false,
    status: 'published',
  },
];
*/