import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-amber-700 mb-4" style={{ color: '#e00053' }}>404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
          Página no encontrada
        </h2>
        <p className="text-gray-600 mb-8 max-w-md" style={{ color: '#271637' }}>
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-block rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors"
          style={{ backgroundColor: '#e00053' }}
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
