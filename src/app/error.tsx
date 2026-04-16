'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Registrar el error en un servicio de análisis
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#271637' }}>
          Algo salió mal
        </h1>
        <p className="mb-8 max-w-md" style={{ color: '#271637' }}>
          Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-block rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors"
            style={{ backgroundColor: '#e00053' }}
          >
            Intentar de nuevo
          </button>
          <Link
            href="/"
            className="font-medium transition-colors"
            style={{ color: '#e00053' }}
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
