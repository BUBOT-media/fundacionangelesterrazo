'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { socialLinks } from '@/lib/socialLinks';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    // { name: t('nav.home'), href: '/' },
    { name: t('nav.foundation'), href: '/la-fundacion' },
    { name: t('nav.award'), href: '/premio' },
    {
      name: 'Inscripciones',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSfNBSr1e-U6YHgs8g9eMTJQRzm6zVMjb9U6Y7QlfmP_uW474w/viewform',
    },
    { name: t('nav.transparency'), href: '/transparencia' },
    { name: t('nav.contact'), href: '/contacto' },
  ];

  return (
    <header className="bg-[#271637] border-b border-white/20 sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/logo_neg.png" 
                alt="Logo Fundación Ángeles Terrazo" 
                width={500} 
                height={500}
                className="h-25 w-auto"
              />
            </Link>
          </div>

          {/* Navegación desktop */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => {
              const isExternal = item.href.startsWith('http');

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="text-white hover:text-[#e00053] focus:text-[#e00053] transition-colors font-medium"
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Separador */}
            <div className="h-6 w-px bg-gray-300" />

            {/* Redes sociales */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-[#271637] hover:bg-gray-100 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}

              {/* Teléfono */}
              <a
                href="tel:+34886447293"
                className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-[#271637] hover:bg-gray-100 transition-colors"
                aria-label="Teléfono"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92V19a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13.81.37 1.6.7 2.34a2 2 0 01-.45 2.11l-.27.27a16 16 0 006.58 6.58l.27-.27a2 2 0 012.11-.45c.74.33 1.53.57 2.34.7A2 2 0 0122 16.92z" />
                </svg>
              </a>
            </div>

            {/* Separador */}
            <div className="h-6 w-px bg-gray-300" />

            {/* Selector idioma */}
            <div className="flex items-center space-x-1 text-sm">
              <button
                onClick={() => setLanguage('es')}
                className={`text-white hover:text-[#e00053] transition-colors font-medium ${language === 'es' ? 'underline' : ''}`}
              >
                {t('nav.language.spanish')}
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => setLanguage('gl')}
                className={`text-white hover:text-[#e00053] transition-colors font-medium ${language === 'gl' ? 'underline' : ''}`}
              >
                {t('nav.language.gallego')}
              </button>
            </div>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-xs">
              <button onClick={() => setLanguage('es')} className={`text-white ${language === 'es' ? 'underline' : ''}`}>ES</button>
              <span className="text-gray-400">|</span>
              <button onClick={() => setLanguage('gl')} className={`text-white ${language === 'gl' ? 'underline' : ''}`}>GL</button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              ☰
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t bg-[#271637]">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const isExternal = item.href.startsWith('http');

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="text-white hover:text-[#e00053]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
