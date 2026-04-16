import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware para proteger rutas de administración
// En producción, deberías usar una solución de autenticación completa
// como NextAuth.js, Clerk, o Auth0

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Excluir la página de login de la protección
  if (pathname === '/webmaster/login') {
    return NextResponse.next();
  }

  // Verificar si es una ruta de administración
  if (pathname.startsWith('/webmaster')) {
    // Obtener el token de autenticación de las cookies
    const authToken = request.cookies.get('admin_token')?.value;
    
    // Si no hay token, redirigir a la página de login
    if (!authToken) {
      const loginUrl = new URL('/webmaster/login', request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
    
    // Aquí podrías validar el token con tu backend
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Proteger todas las rutas de webmaster excepto login
    '/webmaster/:path*',
  ],
};
