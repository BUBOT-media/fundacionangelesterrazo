'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TransparenciaPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-linear-to-b from-gray-50 to-white py-16 lg:py-15">
        <div className="container-70 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl font-aurantiaca"  style={{ color: '#271637' }}>
            {t('transparency.title')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
            {t('transparency.subtitle')}
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 lg:py-2">
        <div className="container-70 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-12">
              {/* Estatutos */}
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <div className="shrink-0 mb-4 sm:mb-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#271637' }}>
                      <svg className="h-7 w-7 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="sm:ml-6 flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
                      {t('transparency.estatutos.title')}
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                      {t('transparency.estatutos.description')}
                    </p>
                    <button 
                      className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-500 rounded-md font-medium cursor-not-allowed text-sm sm:text-base"
                      disabled
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="break-words">{t('transparency.estatutos.button')}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Memoria Anual */}
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <div className="shrink-0 mb-4 sm:mb-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#271637' }}>
                      <svg className="h-7 w-7 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="sm:ml-6 flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
                      {t('transparency.memoria.title')}
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                      {t('transparency.memoria.description')}
                    </p>
                    <button 
                      className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-500 rounded-md font-medium cursor-not-allowed text-sm sm:text-base"
                      disabled
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="break-words">{t('transparency.memoria.button')}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-10 bg-white">
        <div className="container-70 px-4 sm:px-6 lg:px-8 text-center" style={{ color: '#271637' }}>
          <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-6" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
          {t('transparency.cta.title')}
        </h2>
        <p className="text-lg mb-10" style={{ color: '#271637' }}>
          {t('transparency.cta.description')}
        </p>
        <Link
          href="/contacto"
          className="inline-block rounded-lg px-10 py-5 text-lg font-semibold text-white shadow-lg transition-colors"
          style={{ backgroundColor: '#e00053' }}
        >
          {t('transparency.cta.button')}
        </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
