import Link from 'next/link';

export default function AdminDashboard() {
  // Datos de ejemplo para el dashboard
  const stats = [
    { name: 'Entradas de blog', value: '3', href: '/webmaster/blog' },
    { name: 'Eventos programados', value: '4', href: '/webmaster/eventos' },
    { name: 'Visitas este mes', value: '1,234', href: '#' },
  ];

  const recentActivity = [
    { id: 1, action: 'Nueva entrada de blog creada', date: '15 Dic 2024', type: 'blog' },
    { id: 2, action: 'Evento actualizado: Ceremonia 2025', date: '10 Dic 2024', type: 'evento' },
    { id: 3, action: 'Nueva entrada de blog creada', date: '20 Nov 2024', type: 'blog' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Bienvenido al panel de administración</p>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.name}
            href={stat.href}
            className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
          >
            <p className="text-sm text-gray-500 mb-1">{stat.name}</p>
            <p className="text-3xl font-bold text-amber-700">{stat.value}</p>
          </Link>
        ))}
      </div>

      {/* Acciones rápidas */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Acciones rápidas</h2>
        <div className="flex gap-4">
          <Link
            href="/webmaster/blog/nuevo"
            className="inline-flex items-center px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-600 transition-colors"
          >
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Nueva entrada de blog
          </Link>
          <Link
            href="/webmaster/eventos/nuevo"
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Nuevo evento
          </Link>
        </div>
      </div>

      {/* Actividad reciente */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Actividad reciente</h2>
        </div>
        <ul className="divide-y divide-gray-200">
          {recentActivity.map((activity) => (
            <li key={activity.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className={`w-2 h-2 rounded-full mr-3 ${activity.type === 'blog' ? 'bg-amber-500' : 'bg-blue-500'}`}></span>
                  <span className="text-gray-900">{activity.action}</span>
                </div>
                <span className="text-sm text-gray-500">{activity.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
