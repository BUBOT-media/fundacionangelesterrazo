import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Panel de Administración | Fundación Ángeles Terrazo',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Barra lateral de administración */}
      <div className="flex">
        <aside className="w-64 bg-gray-900 min-h-screen fixed left-0 top-0 p-4">
          <div className="mb-8">
            <h1 className="text-white font-bold text-lg">Panel Admin</h1>
            <p className="text-gray-400 text-sm">Fundación Ángeles Terrazo</p>
          </div>
          
          <nav className="space-y-2">
            <Link
              href="/webmaster"
              className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
            >
              <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </Link>
            
            <Link
              href="/webmaster/blog"
              className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
            >
              <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Blog
            </Link>
            
            <Link
              href="/webmaster/eventos"
              className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
            >
              <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Eventos
            </Link>
          </nav>
          
          <div className="absolute bottom-4 left-4 right-4">
            <Link
              href="/"
              className="flex items-center px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver al sitio
            </Link>
          </div>
        </aside>
        
        {/* Contenido principal */}
        <main className="ml-64 flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
