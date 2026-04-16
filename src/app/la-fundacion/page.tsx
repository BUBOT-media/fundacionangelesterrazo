'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const valoresIcons = [
  <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
  <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />,
  <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
  <path key="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  <path key="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
];

const patronatoData = [
  { nombre: 'María de los Ángeles Terrazo Blanco', cargoKey: 'foundation.patronato.presidenta' },
  { nombre: 'Luis Quinteiro Fiúza', cargoKey: 'foundation.patronato.vicepresidente' },
  { nombre: 'Juan Carlos Aladro Fernández', cargoKey: 'foundation.patronato.secretario' },
  { nombre: 'Susana García-Baquero Borrell', cargoKey: 'foundation.patronato.vocal' },
  { nombre: 'Alfonso Carlos Penela Fernández', cargoKey: 'foundation.patronato.vocal' },
  { nombre: 'Isidoro Nicieza', cargoKey: 'foundation.patronato.vocal' },
  { nombre: 'Jose Manuel Amoedo', cargoKey: 'foundation.patronato.vocal' },
];

export default function LaFundacionPage() {
  const { t } = useLanguage();

  const valores = [
    { tituloKey: 'foundation.valores.1.titulo', descripcionKey: 'foundation.valores.1.descripcion', icon: valoresIcons[0] },
    { tituloKey: 'foundation.valores.2.titulo', descripcionKey: 'foundation.valores.2.descripcion', icon: valoresIcons[1] },
    { tituloKey: 'foundation.valores.3.titulo', descripcionKey: 'foundation.valores.3.descripcion', icon: valoresIcons[2] },
    { tituloKey: 'foundation.valores.4.titulo', descripcionKey: 'foundation.valores.4.descripcion', icon: valoresIcons[3] },
    { tituloKey: 'foundation.valores.5.titulo', descripcionKey: 'foundation.valores.5.descripcion', icon: valoresIcons[4] },
  ];

  const objetivos = [
    { tituloKey: 'foundation.objetivos.1.titulo', items: ['foundation.objetivos.1.item1', 'foundation.objetivos.1.item2'] },
    { tituloKey: 'foundation.objetivos.2.titulo', items: ['foundation.objetivos.2.item1', 'foundation.objetivos.2.item2'] },
    { tituloKey: 'foundation.objetivos.3.titulo', items: ['foundation.objetivos.3.item1', 'foundation.objetivos.3.item2'] },
    { tituloKey: 'foundation.objetivos.4.titulo', items: ['foundation.objetivos.4.item1', 'foundation.objetivos.4.item2'] },
    { tituloKey: 'foundation.objetivos.5.titulo', items: ['foundation.objetivos.5.item1', 'foundation.objetivos.5.item2'] },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-linear-to-b from-gray-50 to-white py-10 lg:py-15">
        <div className="container-70 px-4 sm:px-6 lg:px-5 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-aurantiaca" style={{ color: '#271637' }}>
            {t('foundation.title')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg" style={{ color: '#271637' }}>
            {t('foundation.subtitle')}
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 lg:py-2">
        <div className="container-70 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8 animate-fade-in-up text-center" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
        {t('foundation.history.title')}
          </h2>
          
          <div className="space-y-6 leading-relaxed animate-fade-in-up text-justify" style={{animationDelay: '0s', color: '#271637'}}>
        <p dangerouslySetInnerHTML={{ __html: t('foundation.history.p1') }} />
        <p dangerouslySetInnerHTML={{ __html: t('foundation.history.p2') }} />
        <p dangerouslySetInnerHTML={{ __html: t('foundation.history.p3') }} />
        <p dangerouslySetInnerHTML={{ __html: t('foundation.history.p4') }} />
          </div>
        </div>
      </section>

      {/* Patronato */}
      <section className="py-16 lg:py-10 bg-gray-50">
        <div className="container-70 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8 animate-fade-in-up" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
        {t('foundation.patronato.title')}
          </h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
        {/* Presidenta - Primera fila */}
        <div className="flex justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200 w-80">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#271637' }}>
          <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
            </div>
            <h3 className="text-base font-semibold mb-1" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 550 }}>
          {patronatoData[0].nombre}
            </h3>
            <p className="text-sm font-medium" style={{ color: '#e00053' }}>
          {t(patronatoData[0].cargoKey)}
            </p>
          </div>
        </div>

        {/* Vicepresidente y Secretario - Segunda fila */}
        <div className="flex justify-center gap-6 flex-wrap">
          {patronatoData.slice(1, 3).map((miembro, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200 w-80">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#271637'}}>
            <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="text-base font-semibold mb-1" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 550 }}>
            {miembro.nombre}
          </h3>
          <p className="text-sm font-medium" style={{ color: '#e00053' }}>
            {t(miembro.cargoKey)}
          </p>
            </div>
          ))}
        </div>

        {/* Vocales - Tercera fila */}
        <div className="flex justify-center gap-4 flex-wrap">
          {patronatoData.slice(3).map((miembro, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center border border-gray-200 w-45">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#271637' }}>
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="text-sm font-semibold mb-1" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 550 }}>
            {miembro.nombre}
          </h3>
          <p className="text-xs font-medium" style={{ color: '#e00053' }}>
            {t(miembro.cargoKey)}
          </p>
            </div>
          ))}
        </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 lg:py-10">
        <div className="container-70 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8 animate-fade-in-up" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 550 }}>
            {t('foundation.valores.title')}
          </h2>
          
          {/* Disposición pentagonal de valores */}
          <div className="max-w-6xl mx-auto relative">
            {/* Primera fila - 2 valores centrados */}
            <div className="flex justify-center gap-8 mb-8 flex-wrap">
              {valores.slice(0, 2).map((valor, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-80 text-center hover-lift transition-smooth animate-fade-in-up" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#271637' }}>
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {valor.icon}
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#271637' , fontFamily: 'Avenir, sans-serif', fontWeight: 550  }}>
                    {t(valor.tituloKey)}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: '#271637' }}>
                    {t(valor.descripcionKey)}
                  </p>
                </div>
              ))}
            </div>

            {/* Segunda fila - 3 valores */}
            <div className="flex justify-center gap-8 flex-wrap">
              {valores.slice(2).map((valor, index) => (
                <div key={index + 2} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-80 text-center hover-lift transition-smooth animate-fade-in-up" style={{animationDelay: `${0.1 * (index + 3)}s`}}>
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#271637' }}>
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {valor.icon}
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#271637' , fontFamily: 'Avenir, sans-serif', fontWeight: 550  }}>
                    {t(valor.tituloKey)}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: '#271637' }}>
                    {t(valor.descripcionKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="py-16 lg:py-12 bg-gray-50">
        <div className="container-70 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8 animate-fade-in-up" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
            {t('foundation.objetivos.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {objetivos.map((objetivo, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover-lift transition-smooth animate-fade-in-up" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: '#271637' }}>
                      {index + 1}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-3" style={{ color: '#271637' , fontFamily: 'Avenir, sans-serif', fontWeight: 550 }}>
                      {t(objetivo.tituloKey)}
                    </h3>
                    <ul className="space-y-2" style={{ color: '#271637' }}>
                      {objetivo.items.map((itemKey, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="mr-2 mt-1" style={{ color: '#271637' }}>•</span>
                          <span>{t(itemKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-10 bg-white">
        <div className="container-70 px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl mb-6" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
          {t('foundation.cta.title')}
        </h2>
        <p className="text-lg mb-10" style={{ color: '#271637' }}>
          {t('foundation.cta.description')}
        </p>
        <Link
          href="/contacto"
          className="inline-block rounded-lg px-10 py-5 text-lg font-semibold text-white shadow-lg hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#e00053' }}
        >
          {t('foundation.cta.button')}
        </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
