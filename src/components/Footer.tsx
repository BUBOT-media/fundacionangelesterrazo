import { socialLinks } from '@/lib/socialLinks';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#271637] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Redes sociales */}
        <div className="flex justify-center space-x-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-[#e00053] hover:text-white transition-colors"
              aria-label={social.name}
            >
              <social.icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
            {/* Teléfono */}
            <a
              href="tel:+34886447293"
              className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-[#e00053] hover:text-white transition-colors"
              aria-label="Teléfono"
            >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92V19a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13.81.37 1.6.7 2.34a2 2 0 01-.45 2.11l-.27.27a16 16 0 006.58 6.58l.27-.27a2 2 0 012.11-.45c.74.33 1.53.57 2.34.7A2 2 0 0122 16.92z" />
                </svg>
            </a>
        </div>

        {/* Pie de página */}
        <p className="text-center text-white/70 text-sm">
          &copy; {new Date().getFullYear()} Fundación Ángeles Terrazo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
