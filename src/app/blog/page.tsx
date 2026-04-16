'use client';

import Link from 'next/link';
import { blogPostsList } from '@/lib/blogPosts';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

// Usar datos centralizados
const blogPosts = [...blogPostsList].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);
function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export default function BlogPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-linear-to-b from-gray-50 to-white py-16 lg:py-20">
        <div className="container-70 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-fade-in-down font-aurantiaca text-brand-purple">
            {t('blog.title')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700 animate-fade-in-up">
            {t('blog.subtitle')}
          </p>
        </div>
      </section>

      {/* Posts destacados */}
      {blogPosts.some(post => post.featured) && (
        <section className="py-12">
          <div className="container-70 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 animate-fade-in-up text-brand-purple font-avenir">{t('blog.featured')}</h2>
            <div className="grid grid-cols-1 gap-8">
              {blogPosts
                .filter(post => post.featured)
                .map((post, index) => (
                  <article 
                    key={post.id}
                    className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-smooth border border-gray-200 animate-fade-in-up hover-lift delay-${(index + 1) * 100}`}
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 bg-gray-100 flex items-center text-justify relative h-48 md:h-auto">
                        {post.imageUrl ? (
                            <Image 
                              src={post.imageUrl} 
                              alt={t(post.title)}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <svg className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          )}
                      </div>
                      <div className="md:w-2/3 p-8 text-justify">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span>{formatDate(post.publishedAt)}</span>
                          <span>•</span>
                          <span>{post.author}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 transition-colors text-brand-purple">
                          <Link href={`/blog/${post.slug}`} className="text-inherit">
                            {t(post.title)}
                          </Link>
                        </h3>
                        <p
                          className="text-gray-600 mb-4"
                          dangerouslySetInnerHTML={{ __html: t(post.excerpt) }}
                        />
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="font-medium transition-colors text-brand-pink hover:text-brand-pink-dark"
                        >
                          {t('news.readMore')} <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Todos los posts */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-brand-purple font-avenir">{t('blog.allPosts')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <article 
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col border border-gray-200"
              >
                <div className="h-48 bg-gray-100 flex items-center text-justify relative">
                  {post.imageUrl ? (
                    <Image 
                      src={post.imageUrl} 
                      alt={t(post.title)}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  )}
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 transition-colors text-brand-purple">
                    <Link href={`/blog/${post.slug}`} className="text-inherit">
                      {t(post.title)}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow text-justify">
                    {t(post.excerpt)}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="mt-4 font-medium transition-colors text-sm text-brand-pink hover:text-brand-pink-dark"
                  >
                    {t('news.readMore')} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
