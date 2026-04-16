'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/lib/blogPosts';
import { BlogPost } from '@/types';

export default function HomePage() {
  const { t } = useLanguage();

  // Obtener la noticia super-destacada más reciente (si existe)
  const superHighlightedPost: BlogPost | undefined = blogPosts
    .filter(post => post.highlightLevel === 'super')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())[0];

  // Obtener noticias destacadas (excluyendo la super-destacada si existe)
  const featuredPosts: BlogPost[] = blogPosts
    .filter(post => post.highlightLevel === 'featured')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  // Noticias de fallback si no hay datos reales
  const fallbackNoticias = [
    { titleKey: 'news.item1.title', dateKey: 'news.item1.date' },
    { titleKey: 'news.item2.title', dateKey: 'news.item2.date' },
    { titleKey: 'news.item3.title', dateKey: 'news.item3.date' },
  ];

  // Formatear fecha
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('es-ES', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }).format(new Date(date));
  };

  return (
    <div className="bg-white">
      {/* Hero Banner con imagen de fondo */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/imagen-fondo-web.jpg" 
            alt="Fondo Fundación Ángeles Terrazo" 
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Contenido sobre la imagen */}
        <div className="relative z-1 text-center px-2 sm:px-4">
          <div className="max-w-2xl mx-auto">
            {/* Logo grande */}
            <div className="mx-auto mb-4 animate-fade-in">
              <Image 
                src="/logo_blanco.png" 
                alt="Logo Fundación Ángeles Terrazo" 
                width={500} 
                height={500}
                className="w-[550px] h-auto mx-auto"
              />
            </div>

            {/* Título con fondo semi-transparente */}
            <div className="bg-white/55 backdrop-blur-sm rounded-lg px-4 py-6 mb-10 inline-block max-w-xs">
              <h1 className="text-xl md:text-3xl lg:text-2xl mb-2 text-center" style={{ color: '#e00053', fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
              {t('hero.award.title')}
              </h1>
              <p className="text-lg md:text-base font-semibold text-center text-brand-pink font-avenir">
              {t('hero.award.subtitle')}
              </p>
              
            </div>
            
            {/* Texto "Apoyamos..." */}
            <p className="text-white text-xl md:text-2xl lg:text-2xl font-medium mb-10 drop-shadow-lg">
              {t('hero.description')}
            </p>
            
            {/* Botones */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:gap-6">
              <Link
                href="/la-fundacion"
                className="w-full sm:w-auto rounded-md px-3 py-3 text-lg font text-white shadow-lg hover:opacity-90 transition-opacity bg-brand-purple"
              >
                {t('hero.cta.foundation')}
              </Link>
              <Link 
                href="/contacto" 
                className="w-full sm:w-auto rounded-md px-3 py-3 text-lg font text-white shadow-lg hover:opacity-90 transition-opacity bg-brand-purple"
              >
                {t('hero.cta.contact')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contador / Próximas fechas clave */}
      <section className="py-8 lg:py-10 bg-white">
        <div className="container-70 px-6 sm:px-9 lg:px-20">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2 text-brand-purple font-avenir">
              {t('dates.title')}
            </h2>
            <p className="text-gray-600">{t('dates.subtitle')}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 items-stretch">
            {/* <div className="bg-gray-100 p-5 rounded-lg text-center border border-gray-200 animate-fade-in-up hover-lift transition-smooth delay-100 w-full sm:w-auto sm:min-w-[200px] sm:flex-1 sm:max-w-[280px] flex flex-col justify-center">
              <div className="text-2xl font-bold mb-2 text-brand-purple min-h-[64px] flex items-center justify-center">{t('dates.soon').toUpperCase()}</div>
              <p className="text-gray-700 font-medium">{t('dates.opening')}</p>
            </div> */}
            <div className="bg-gray-100 p-5 rounded-lg text-center border border-gray-200 animate-fade-in-up hover-lift transition-smooth delay-200 w-full sm:w-auto sm:min-w-[200px] sm:flex-1 sm:max-w-[280px] flex flex-col justify-center">
              <div className="text-2xl font-bold mb-2 text-brand-purple min-h-[64px] flex items-center justify-center">{t('dates.closingDate')}</div>
              <p className="text-gray-700 font-medium">{t('dates.closing')}</p>
            </div>
            <div className="bg-gray-100 p-5 rounded-lg text-center border border-gray-200 animate-fade-in-up hover-lift transition-smooth delay-300 w-full sm:w-auto sm:min-w-[200px] sm:flex-1 sm:max-w-[280px] flex flex-col justify-center">
              <div className="text-2xl font-bold mb-2 text-brand-purple min-h-[64px] flex items-center justify-center">{t('dates.verdictDate')}</div>
              <p className="text-gray-700 font-medium">{t('dates.verdict')}</p>
            </div>
            <div className="p-5 rounded-lg text-center animate-fade-in-up hover-lift transition-smooth delay-400 bg-brand-pink w-full sm:w-auto sm:min-w-[200px] sm:flex-1 sm:max-w-[280px] flex flex-col justify-center">
              <div className="text-2xl font-bold text-white mb-2 min-h-[64px] flex items-center justify-center">{t('dates.ceremonyDate')}</div>
              <p className="text-white font-medium">{t('dates.ceremony')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Noticias destacadas */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-[70%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-brand-purple">
              {t('news.title')}
            </h2>
            <Link 
              href="/blog" 
              className="text-brand-pink hover:text-brand-pink-dark font-medium transition-colors"
            >
              {t('news.viewAll')} <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Noticia Super-Destacada */}
          {superHighlightedPost && (
            <div className="mb-10">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
                <div className="flex flex-col">
                  <div className="p-8 pb-4">
                    <p className="text-sm text-brand-pink mb-2">{formatDate(superHighlightedPost.publishedAt)}</p>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-brand-purple font-avenir">
                      {t(superHighlightedPost.title)}
                    </h3>
                  </div>
                  <div className="w-full h-64 md:h-96 bg-gray-100 relative">
                    {superHighlightedPost.imageUrl ? (
                      <Image 
                        src={superHighlightedPost.imageUrl} 
                        alt={t(superHighlightedPost.title)}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <svg className="h-20 w-20 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-8 pt-6 text-justify">
                    <div 
                      className="text-gray-600 leading-relaxed text-justify prose prose-sm max-w-none font-semibold [&>p]:mb-6 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-brand-purple [&>h2]:mt-6 [&>h2]:mb-3 [&>h2]:font-avenir"
                      dangerouslySetInnerHTML={{ __html: t(superHighlightedPost.excerpt) }}
                    />
                    <div 
                      className="text-gray-600 leading-relaxed text-justify prose prose-sm max-w-none [&>p]:mb-4 mt-4 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-brand-purple [&>h2]:mt-6 [&>h2]:mb-3 [&>h2]:font-avenir"
                      dangerouslySetInnerHTML={{ __html: t(superHighlightedPost.content) }}
                    />
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* Noticias Destacadas (de blogPosts) */}
          {/* {featuredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                  <div className="h-48 bg-gray-100 flex items-center justify-center relative">
                    {post.imageUrl ? (
                      <Image 
                        src={post.imageUrl} 
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-brand-pink mb-2">{formatDate(post.publishedAt)}</p>
                    <h3 className="text-lg font-semibold mb-2 text-brand-purple">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-brand-pink hover:text-brand-pink-dark text-sm font-medium transition-colors"
                    >
                      {t('news.readMore')} →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            // Fallback: Noticias estáticas cuando no hay datos
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fallbackNoticias.map((noticia, i) => (
                <article key={i} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-brand-pink mb-2">{t(noticia.dateKey)}</p>
                    <h3 className="text-lg font-semibold mb-2 text-brand-purple">
                      {t(noticia.titleKey)}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('news.moreInfo')}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )} */}
        </div>
      </section>

      {/* Sobre la Fundación (resumen) */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-6xl font-bold mb-4 text-brand-purple font-aurantiaca">
              {t('mission.title')}
            </h2>
            <p className="leading-relaxed mb-4 text-brand-purple">
              {t('mission.description1')}
            </p>
            <p className="leading-relaxed mb-6 text-brand-purple">
              {t('mission.description2')}
            </p>
            <Link
              href="/la-fundacion"
              className="inline-block rounded-lg px-8 py-4 text-lg font-bold text-white shadow-md transition-colors tracking-wide bg-brand-pink hover:bg-brand-pink-dark"
            >
              {t('mission.cta')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
