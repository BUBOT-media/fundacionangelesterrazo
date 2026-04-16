'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simular autenticación
    // En producción, esto debería hacer una llamada a tu API de autenticación
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Credenciales de ejemplo (NO usar en producción)
    if (formData.email === 'admin@fundacion.org' && formData.password === 'admin123') {
      // Establecer cookie de sesión (en producción usar httpOnly cookies)
      document.cookie = 'admin_token=demo_token; path=/; max-age=86400';
      router.push('/webmaster');
    } else {
      setError('Credenciales incorrectas');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Panel de Administración</h1>
            <p className="text-gray-600 mt-2">Fundación Ángeles Terrazo</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="admin@fundacion.org"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-amber-600 focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Credenciales de demo:<br />
              <code className="bg-gray-100 px-2 py-1 rounded text-xs">admin@fundacion.org / admin123</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
