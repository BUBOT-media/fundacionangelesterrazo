import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fundacionangelesterrazo.gal';
  
  // Rutas estáticas
  const staticRoutes = [
    '',
    '/premio',
    '/blog',
    '/agenda',
    '/contacto',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // En producción, aquí añadirías las rutas dinámicas del blog y eventos
  // const blogPosts = await getBlogPosts();
  // const blogRoutes = blogPosts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }));

  return [...staticRoutes];
}
