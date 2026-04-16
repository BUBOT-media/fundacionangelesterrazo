import type { Metadata } from 'next';
import Link from 'next/link';
import { Event } from '@/types';
import { events } from '@/lib/events';

export const metadata: Metadata = {
  title: 'Agenda | Fundación Ángeles Terrazo',
  description: 'Consulta los próximos eventos, presentaciones y actividades culturales de la Fundación Ángeles Terrazo.',
};

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

function getMonthYear(date: Date): string {
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
  }).format(date);
}

function isUpcoming(date: Date): boolean {
  return date >= new Date();
}

export default function AgendaPage() {
  const upcomingEvents = events
    .filter(event => isUpcoming(event.date))
    .sort((a, b) => a.date.getTime() - b.date.getTime());
  
  const pastEvents = events
    .filter(event => !isUpcoming(event.date))
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-amber-50 to-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-amber-900 sm:text-5xl">
            Agenda de Eventos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
            Descubre nuestras próximas actividades culturales, talleres y eventos literarios.
          </p>
        </div>
      </section>

      {/* Próximos eventos */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-8 flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
            Próximos Eventos
          </h2>
          
          {upcomingEvents.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600">No hay eventos programados próximamente. ¡Vuelve pronto!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {upcomingEvents.map(event => (
                <article 
                  key={event.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-amber-500"
                >
                  <div className="md:flex">
                    <div className="md:w-48 bg-amber-700 text-white p-6 flex flex-col items-center justify-center text-center">
                      <span className="text-4xl font-bold">
                        {event.date.getDate()}
                      </span>
                      <span className="text-amber-200 uppercase text-sm tracking-wide">
                        {new Intl.DateTimeFormat('es-ES', { month: 'short' }).format(event.date)}
                      </span>
                      <span className="text-amber-200 text-sm">
                        {event.date.getFullYear()}
                      </span>
                      <span className="mt-2 text-sm font-medium">
                        {event.time}h
                      </span>
                    </div>
                    <div className="p-6 md:flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {event.description}
                      </p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <svg className="h-5 w-5 mr-2 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Eventos pasados */}
      {pastEvents.length > 0 && (
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-8 flex items-center">
              <span className="w-3 h-3 bg-gray-400 rounded-full mr-3"></span>
              Eventos Pasados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastEvents.map(event => (
                <article 
                  key={event.id}
                  className="bg-white rounded-lg shadow-sm p-6 opacity-75"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-lg flex flex-col items-center justify-center text-gray-600">
                      <span className="text-lg font-bold">
                        {event.date.getDate()}
                      </span>
                      <span className="text-xs uppercase">
                        {new Intl.DateTimeFormat('es-ES', { month: 'short' }).format(event.date)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {event.location}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">
            ¿Quieres estar al día de nuestros eventos?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Contacta con nosotros para recibir información sobre próximas actividades.
          </p>
          <Link
            href="/contacto"
            className="inline-block rounded-md bg-amber-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-colors"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
}
