'use client';

import Link from 'next/link';
import { awardWinners } from '@/lib/awardWinners';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PremioPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-background">
      {/* Hero del Premio */}
      <section className="bg-linear-to-b from-gray-50 to-white py-20 lg:py-15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-aurantiaca" style={{ color: '#271637' }}>
            {t('award.title')}
          </h1>
        </div>
      </section>

      {/* Bases del premio */}
      <section className="py-16 lg:py-12">
        <div className="container-70 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">

              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="shrink-0 mb-4 sm:mb-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#271637' }}>
                      <svg className="h-7 w-7 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="sm:ml-10 flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
                      {t('award.bases.note.title')}
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                      {t('award.bases.note.description')}
                    </p>
                    <a 
                      href="/NOTA ACLARATORIA*.pdf"
                      download
                      className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium text-sm sm:text-base text-white transition-colors hover:opacity-90"
                      style={{ backgroundColor: '#e00053' }}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="break-words">{t('award.bases.note.button')}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="shrink-0 mb-4 sm:mb-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#271637' }}>
                      <svg className="h-7 w-7 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="sm:ml-10 flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
                      {t('award.bases.title')}
                    </h2>
                    <a 
                      href="/BASES PREMIO ÁNGELES TERRAZO DE NOVELA 2026.pdf"
                      download
                      className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium text-sm sm:text-base text-white transition-colors hover:opacity-90"
                      style={{ backgroundColor: '#e00053' }}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="break-words">{t('award.bases.button')}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="shrink-0 mb-4 sm:mb-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#271637' }}>
                      <svg className="h-7 w-7 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                  </div>
                  <div className="sm:ml-10 flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
                      {t('award.inscription.title')}
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                      {t('award.inscription.description')}
                    </p>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfNBSr1e-U6YHgs8g9eMTJQRzm6zVMjb9U6Y7QlfmP_uW474w/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium text-sm sm:text-base text-white transition-colors hover:opacity-90"
                      style={{ backgroundColor: '#e00053' }}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      <span className="break-words">{t('award.inscription.button')}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      {/* Ganadores */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
            {t('award.winners.title')}
          </h2>
          <div className="space-y-12">
            {awardWinners.map((winner) => (
              <div 
                key={winner.year}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-8">
                    <div className="text-center ">
                      <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto flex items-center justify-center" >
                        <svg className="h-16 w-16 text-gray-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                        {winner.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
                      {winner.name}
                    </h3>
                    <p className="font-medium mb-4" style={{ color: '#271637' }}>
                      {t('award.winners.featuredWork')}: {winner.work}
                    </p>
                    <p className="text-gray-600">
                      {winner.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#271637', fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
            {t('award.cta.title')}
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            {t('award.cta.description')}
          </p>
          <Link
            href="/contacto"
            className="inline-block rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors"
            style={{ backgroundColor: '#e00053' }}
          >
            {t('award.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
