# Fundación Ángeles Terrazo

Sitio web oficial de la Fundación Ángeles Terrazo, una fundación literaria dedicada a reconocer y premiar la excelencia en la literatura.

## Tareas

- [x] 1. Poner información del esquema en la web
- [x] 2. Añadir imágenes
- [x]   - Favicon
- [x]   - Imágenes de los artículos del blog
- [x]   - Imágenes de los eventos de la agenda
- [ ] 3. Modificar estilos
- [x]   - Mover redes al header
- [X]   - La página tiene que estar en gallego y en castellano. El idioma principal es el
castellano.
- [X]   - Cambiar la font
- [X]   - Cambiar colores #271637 azul  #e00053 fucsia
- [ ]   - Arreglar animaciones
- [ ] 4. BBDD para gestión de contenidos y eventos de la agenda
- [x] 5. Gestor de correos para el formulario de contacto
- [ ] 6. Incluir en /webmaster:
- [ ]   - Autenticación del administrador
- [ ]   - Gestión de entradas del blog
- [ ]   - Gestión de eventos
- [ ]   - Gestión del premio anual
- [ ] 7. Revisar código final
- [1/2]   - Mover todos los componentes posibles a ficheros individuales
- [x] 8. Despliegue
- [x]   - Utilizar dominio de la fundación (fundacionangelesterrazo.gal)
- [ ] 9. Añadir documentación general y de uso

## 🚀 Tecnologías

- **Framework**: Next.js 15 (App Router)
- **Estilos**: TailwindCSS
- **Lenguaje**: TypeScript
- **Linting**: ESLint

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Rutas y páginas (App Router)
│   ├── (páginas públicas)
│   │   ├── page.tsx        # Página principal
│   │   ├── premio/         # Página del premio
│   │   ├── blog/           # Blog y artículos
│   │   ├── agenda/         # Eventos y actividades
│   │   └── contacto/       # Información de contacto
│   ├── webmaster/          # Panel de administración (oculto)
│   │   ├── blog/           # Gestión del blog
│   │   └── eventos/        # Gestión de eventos
│   ├── layout.tsx          # Layout principal
│   ├── globals.css         # Estilos globales
│   ├── sitemap.ts          # Generador de sitemap
│   └── robots.ts           # Configuración de robots.txt
├── components/             # Componentes reutilizables
│   ├── Header.tsx          # Cabecera con navegación
│   └── Footer.tsx          # Pie de página
├── lib/                    # Utilidades y lógica compartida
├── types/                  # Definiciones de tipos TypeScript
├── hooks/                  # Custom React hooks
└── contexts/               # Context providers de React
```

## 🌐 Páginas

### Públicas
- **/** - Página principal con información de la fundación
- **/premio** - Información sobre el premio anual de literatura
- **/blog** - Entradas de blog y artículos literarios
- **/agenda** - Calendario de próximos eventos
- **/contacto** - Formulario de contacto y redes sociales

### Administración
- **/webmaster** - Panel de administración (acceso restringido)
- **/webmaster/blog** - Gestión de entradas del blog
- **/webmaster/eventos** - Gestión de eventos

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local

# Ejecutar en desarrollo
npm run dev
```

## 📝 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 🔐 Acceso al Panel de Administración

El panel de administración está disponible en `/webmaster`. Las credenciales de demostración son:

- **Email**: admin@fundacion.org
- **Contraseña**: admin123

> ⚠️ **Nota**: En producción, implementar un sistema de autenticación robusto (NextAuth.js, Clerk, etc.)

## 🚧 Próximos pasos

1. **Base de datos**: Implementar persistencia con Prisma + PostgreSQL
2. **Autenticación**: Integrar NextAuth.js para gestión de usuarios
3. **Formulario de contacto**: Conectar con servicio de email
4. **CMS**: Considerar integración con Sanity o similar
5. **Imágenes**: Configurar almacenamiento (Cloudinary, S3)
6. **Tests**: Añadir tests con Jest y React Testing Library

## 📄 Licencia

Todos los derechos reservados © Fundación Ángeles Terrazo

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
cada a ello