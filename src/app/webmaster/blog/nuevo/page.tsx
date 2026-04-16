'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NuevoPostPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: 'Fundación Ángeles Terrazo',
    featured: false,
    status: 'draft',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => {
      const updated = { ...prev, [name]: newValue };
      
      // Auto-generar slug desde el título
      if (name === 'title') {
        updated.slug = value
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .trim();
      }
      
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular guardado
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirigir al listado
    router.push('/webmaster/blog');
  };

  return (
    <div>
      <div className="mb-8">
        <Link 
          href="/webmaster/blog"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
        >
          <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al listado
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Nueva entrada de blog</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Título *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="Título de la entrada"
            />
          </div>

          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
              Slug (URL) *
            </label>
            <div className="flex items-center">
              <span className="text-gray-500 mr-2">/blog/</span>
              <input
                type="text"
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="url-de-la-entrada"
              />
            </div>
          </div>

          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
              Extracto *
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              required
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none"
              placeholder="Breve descripción de la entrada (se muestra en listados)"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Contenido *
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={15}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none font-mono text-sm"
              placeholder="Contenido de la entrada (se admite HTML)"
            />
            <p className="mt-1 text-sm text-gray-500">
              Puedes usar HTML para dar formato al contenido.
            </p>
          </div>

          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
              Autor
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
              />
              <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
                Entrada destacada
              </label>
            </div>

            <div>
              <label htmlFor="status" className="sr-only">Estado</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                <option value="draft">Borrador</option>
                <option value="published">Publicado</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4">
          <Link
            href="/webmaster/blog"
            className="px-4 py-2 text-gray-700 hover:text-gray-900"
          >
            Cancelar
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-600 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Guardando...' : 'Guardar entrada'}
          </button>
        </div>
      </form>
    </div>
  );
}
