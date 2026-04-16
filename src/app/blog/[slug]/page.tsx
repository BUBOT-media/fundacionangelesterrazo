'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blogPosts';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { t } = useLanguage();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="bg-background">
      <article className="py-12 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-brand-pink transition-colors">
                  {t('blog.breadcrumb.home')}
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-pink transition-colors">
                  {t('blog.breadcrumb.blog')}
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="text-gray-900 font-medium truncate max-w-[200px]">
                {t(post.title)}
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-brand-purple mb-4 font-avenir">
              {t(post.title)}
            </h1>
            <div className="flex items-center gap-4 text-gray-500">
              <span>{formatDate(post.publishedAt)}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </header>

          {/* Featured Image placeholder */}
          <div className="mb-10 rounded-xl overflow-hidden bg-gray-100 h-64 flex items-center justify-center relative">
            {post.imageUrl ? (
              <Image 
                src={post.imageUrl} 
                alt={t(post.title)}
                fill
                className="object-cover"
              />
            ) : (
              <svg className="h-20 w-20 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            )}

          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none text-justify prose-headings:text-brand-purple prose-headings:font-avenir prose-a:text-brand-pink hover:prose-a:text-brand-pink-dark [&>p]:mb-4 [&>h2]:mt-6 [&>h2]:mb-3"
            dangerouslySetInnerHTML={{ __html: t(post.content) }}
          />

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/blog"
              className="inline-flex items-center text-brand-pink font-medium hover:text-brand-pink-dark transition-colors"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t('blog.backToBlog')}
            </Link>
          </footer>
        </div>
      </article>
    </div>
  );
}
