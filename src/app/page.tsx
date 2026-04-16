'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/lib/blogPosts';
import { BlogPost } from '@/types';

export default function HomePage() {
  const { t } = useLanguage();

  const superHighlightedPost: BlogPost | undefined = blogPosts
    .filter(post => post.highlightLevel === 'super')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())[0];

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('es-ES', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }).format(new Date(date));
  };

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">

        {/* Imagen fondo */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/imagen-fondo-web.jpg" 
            alt="Fondo Fundación Ángeles Terrazo" 
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Contenido */}
        <div className="relative z-10 text-center px-2 sm:px-4">
          <div className="max-w-2xl mx-auto">

            {/* Logo */}
            <div className="mx-auto mb-4">
              <Image 
                src="/logo_blanco.png" 
                alt="Logo Fundación Ángeles Terrazo" 
                width={500} 
                height={500}
                className="w-[550px] h-auto mx-auto"
              />
            </div>

            {/* Título */}
            <div className="bg-white/55 backdrop-blur-sm rounded-lg px-4 py-6 mb-10 inline-block max-w-xs">
              <h1 className="text-xl md:text-3xl lg:text-2xl mb-2 text-center text-[#e00053] font-bold">
                {t('hero.award.title')}
              </h1>
              <p className="text-lg font-semibold text-center text-brand-pink">
                {t('hero.award.subtitle')}
              </p>
            </div>

            {/* Texto */}
            <p className="text-white text-xl font-medium mb-10 drop-shadow-lg">
              {t('hero.description')}
            </p>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:gap-6">

              <Link
                href="/la-fundacion"
                className="w-full sm:w-auto rounded-md px-4 py-3 text-lg text-white bg-brand-purple"
              >
                {t('hero.cta.foundation')}
              </Link>

              <Link
                href="/premio"
                className="w-full sm:w-auto rounded-md px-4 py-3 text-lg text-white bg-brand-purple"
              >
                El premio
              </Link>

              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfNBSr1e-U6YHgs8g9eMTJQRzm6zVMjb9U6Y7QlfmP_uW474w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-md px-4 py-3 text-lg text-white bg-[#e00053]"
              >
                Inscripciones
              </Link>

              <Link
                href="/contacto"
                className="w-full sm:w-auto rounded-md px-4 py-3 text-lg text-white bg-brand-purple"
              >
                {t('hero.cta.contact')}
              </Link>

            </div>

          </div>
        </div>

      </section>

      {/* CONTENIDO SIGUIENTE */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          {superHighlightedPost && (
            <div>
              <h2 className="text-2xl font-bold text-brand-purple">
                {t(superHighlightedPost.title)}
              </h2>
              <p>{formatDate(superHighlightedPost.publishedAt)}</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
