'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'gl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Header / Navigation
    'nav.home': 'Inicio',
    'nav.foundation': 'La Fundación',
    'nav.award': 'Premio',
    'nav.transparency': 'Transparencia',
    'nav.contact': 'Contacto',
    'nav.language.spanish': 'Castellano',
    'nav.language.gallego': 'Gallego',
    
    // Hero
    'hero.award.title': 'Premio Ángeles Terrazo de Novela 2026',
    'hero.award.subtitle': 'Convocatoria próxima',
    'hero.description': 'Apoyamos el arte literario, incentivando la creación, impulsando la edición y promoviendo la lectura.',
    'hero.cta.foundation': 'Conoce la Fundación',
    'hero.cta.contact': 'Contáctanos',
    
    // Key Dates
    'dates.title': 'Premio Ángeles Terrazo de Novela 2026',
    'dates.subtitle': 'Fechas clave del certamen',
    'dates.opening': 'Apertura de convocatoria',
    'dates.closing': 'Cierre de participación',
    'dates.verdict': 'Fallo del jurado',
    'dates.ceremony': 'Entrega del Premio',
    'dates.soon': 'Próximamente',
    'dates.pending': 'Pendiente',
    'dates.closingDate': '30 DE JUNIO DE 2026',
    'dates.verdictDate': 'OCTUBRE DE 2026',
    'dates.ceremonyDate': '14 DE NOVIEMBRE DE 2026',
    
    // News
    'news.title': 'Noticias destacadas',
    'news.superTitle': 'Noticia destacada',
    'news.viewAll': 'Ver todas',
    'news.readMore': 'Leer más',
    'news.moreInfo': 'Más información próximamente...',
    'news.item1.title': 'Constitución de la Fundación',
    'news.item1.date': '17 de marzo de 2025',
    'news.item2.title': 'Reconocimiento como entidad de interés cultural',
    'news.item2.date': '22 de septiembre de 2025',
    'news.item3.title': 'Primera convocatoria del Premio 2026',
    'news.item3.date': 'Próximamente',

    // Blog Page
    'blog.title': 'Blog',
    'blog.subtitle': 'Noticias, artículos y reflexiones sobre el mundo de la literatura.',
    'blog.featured': 'Destacados',
    'blog.allPosts': 'Todas las publicaciones',
    'blog.backToBlog': 'Volver al blog',
    'blog.breadcrumb.home': 'Inicio',
    'blog.breadcrumb.blog': 'Blog',
    
    // Noticia: Presentación Premio Vigo
    'news.presentacion.title': 'La Fundación Ángeles Terrazo presenta su Premio Literario en Vigo',
    'news.presentacion.excerpt': 'La Fundación Ángeles Terrazo se presenta oficialmente junto con su Premio Ángeles Terrazo de Novela, en un acto que se celebrará el próximo 21 de enero de 2026 en el Teatro AFundación de Vigo.',
    'news.presentacion.content': '<p>La Fundación Ángeles Terrazo se presenta oficialmente junto con su Premio Ángeles Terrazo de Novela, en un acto que se celebrará el próximo 21 de enero de 2026 en el Teatro AFundación de Vigo. Este premio nace con el objetivo de estimular la excelencia literaria y dar visibilidad a nuevas voces dentro de la narrativa contemporánea, consolidando el compromiso de la Fundación con la promoción de la literatura.</p><p>El acto estará presidido por nuestra fundadora, Ángeles Terrazo, acompañada por los miembros del patronato, quienes aportan su experiencia y refuerzan el compromiso de la Fundación con la cultura, la escritura y la difusión artística.</p><h2>Sobre la Fundación</h2><p>La Fundación Ángeles Terrazo fue constituida en Vigo en 2025 por iniciativa de Ángeles Terrazo, formalizando su creación mediante escritura pública el 17 de marzo de ese año. Su propósito, recogido en los estatutos, es promover el arte literario, la escritura y la lectura, fomentando la creación literaria, la difusión cultural y el acceso al conocimiento.</p><p>En reconocimiento a su relevancia cultural e institucional, la Fundación fue declarada de interés cultural por la Xunta de Galicia en septiembre de 2025 y adscrita al protectorado de la Consellería de Cultura, Lengua y Xuventude, un aval que respalda su papel dentro del panorama cultural gallego.</p><p>El patronato está compuesto por Ángeles Terrazo Blanco (Presidenta), Luis Quinteiro Fiúza (Vicepresidente), Juan Carlos Aladro Fernández (Secretario), Susana García-Baquero Borrell y Alfonso Carlos Penela Fernández (Vocales), quienes aportan su experiencia y dedicación al desarrollo de los objetivos de la Fundación.</p><p>Desde su creación, la Fundación Ángeles Terrazo se ha centrado en fomentar la literatura y la lectura como prácticas sociales y culturales, apoyar el talento creativo y promover la pluralidad artística. Entre sus objetivos destacan la organización de actividades de lectura y clubes literarios, la promoción y difusión de novelas, el impulso de programas de formación y residencias literarias, así como la contribución al fortalecimiento del ecosistema cultural gallego y nacional, consolidando su papel como referente en el ámbito literario.</p>',
    
    'news.presentacion-event.title': 'Así fue la presentación del Premio Ángeles Terrazo de Novela',
    'news.presentacion-event.excerpt': 'Vigo acogió el pasado 21 de enero la presentación oficial de la Fundación Ángeles Terrazo y de su Premio Ángeles Terrazo de Novela, un acto con el que la entidad se dio a conocer públicamente y anunció una iniciativa destinada a impulsar la creación literaria y contribuir al fortalecimiento del tejido cultural.',
    'news.presentacion-event.content': `<p>El evento estuvo presidido por <strong>Ángeles Terrazo</strong>, presidenta de la Fundación, acompañada por los miembros del patronato. El acto fue presentado por el músico y escritor <strong>Pedro Feijóo</strong> y contó con una <strong>intervención artística de Ramón Trigo</strong>, poniendo de manifiesto el diálogo entre distintas disciplinas culturales.</p>

<p>Durante su intervención, la presidenta destacó la <strong>vocación cultural y social</strong> de la Fundación, concebida como un espacio de apoyo a la creación, de impulso al talento y de contribución al desarrollo cultural. En este sentido, subrayó la importancia de <em>"fomentar la escritura, para que nuestros jóvenes encuentren vías de comunicación y expresión. Tenemos jóvenes talentosos que pueden hallar su camino a través de la palabra escrita y la comunicación"</em>.</p>

<h2 style="color: #e00053;">El Premio Ángeles Terrazo de Novela</h2>

<p>En el marco de la presentación, la Fundación anunció la creación del <strong>Premio Ángeles Terrazo de Novela</strong>, una iniciativa destinada a impulsar la creación literaria y apoyar el talento narrativo.</p>

<p>El galardón está dotado con <strong>20.000 €</strong> y nace con la vocación de convertirse en un referente cultural, respaldando proyectos literarios de calidad y fomentando la escritura como expresión artística y cultural.</p>

<p>Las bases del premio fueron dadas a conocer durante el acto y recogen el espíritu con el que nace esta convocatoria, alineada con los valores de la Fundación Ángeles Terrazo y su compromiso con la literatura.</p>

<h2>Bases del Premio</h2>

<ul style="list-style-type: disc; padding-left: 1.5rem;">
  <li style="margin-bottom: 1rem;">
    <strong>Participantes:</strong> Podrán concurrir autores y coautores de cualquier nacionalidad mayores de edad, con obras originales escritas en castellano o gallego.
  </li>
  
  <li style="margin-bottom: 1rem;">
    <strong>Obras presentadas a concurso:</strong> Las novelas deben ser originales e inéditas, sin haber sido publicadas ni premiadas anteriormente, ni estar pendientes de fallo en otros concursos. No se permite la creación de la obra mediante IA generativa.
    <ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem;">
      <li>Extensión: mínimo 200.000 caracteres y máximo 400.000 (con espacios).</li>
    </ul>
  </li>
  
  <li style="margin-bottom: 1rem;">
    <strong>Plazo de admisión:</strong> La recepción de originales finalizará el 30 de julio de 2026.
  </li>
  
  <li style="margin-bottom: 1rem;">
    <strong>Premio:</strong> Se otorgará un único premio de 20.000 €. No obstante, el jurado podrá declarar desierto el premio si las obras no alcanzan el nivel de calidad requerido.
  </li>
  
  <li style="margin-bottom: 1rem;">
    <strong>Concesión del Premio:</strong>
    <ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem;">
      <li>La obra ganadora será publicada en castellano y gallego, con derechos de traducción hasta 300 ejemplares.</li>
      <li>La titularidad de la obra seguirá siendo del autor, excepto los derechos de edición y promoción definidos por la Fundación.</li>
    </ul>
  </li>
  
  <li style="margin-bottom: 1rem;">
    <strong>Jurado:</strong>
    <ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem;">
      <li>Dario Villanueva Prieto</li>
      <li>José Manuel Otero Lastres</li>
      <li>Arantza Portabales Santomé</li>
      <li>Bieito Rubido Ramonde</li>
      <li>Adolfo Domínguez Fernández</li>
    </ul>
    <p>La decisión será inapelable y se dará a conocer en octubre de 2026.</p>
  </li>
  
  <li style="margin-bottom: 1rem;">
    <strong>Entrega del Premio:</strong> El acto de entrega se celebrará en Vigo, el 14 de noviembre de 2026.
  </li>
</ul>

<p>La Fundación Ángeles Terrazo invita a todos los escritores y escritoras a participar en esta convocatoria, que busca fomentar la creación literaria y apoyar la difusión de nuevas voces en el panorama narrativo en castellano y gallego.</p>`,
// Noticia: Convocatoria Premio Ángeles Terrazo 2026
'news.convocatoria.title': 'La Fundación Ángeles Terrazo crea en Galicia uno de los premios literarios con mayor dotación de España',
'news.convocatoria.excerpt':`Vigo, 2 de febrero de 2026. La <strong>Fundación Ángeles Terrazo</strong> abre la convocatoria de su <strong>Premio de Novela</strong>, dotado con 20.000 euros. El certamen nace con la vocación de <strong>impulsar la creación narrativa</strong> y <strong>apoyar a nuevas voces</strong> en el ámbito de la literatura.`,

'news.convocatoria.content': `<p>El Premio está abierto a <strong>autores y autoras así como coautores y coautoras de cualquier nacionalidad</strong>,
mayores de edad, que presenten <strong>novelas originales e inéditas</strong> escritas en <strong>castellano o gallego</strong>,
que no hayan sido publicadas ni premiadas con anterioridad ni se encuentren pendientes de fallo
en otros certámenes. Las novelas deberán tener una <strong>extensión mínima de 200.000 caracteres</strong> y
una <strong>máxima de 400.000</strong>, incluidos los espacios.</p>

<p>El <strong>plazo de admisión</strong> ya está abierto y <strong>finalizará el 30 de junio de 2026</strong>. Se concederá un
<strong>único premio dotado con 20.000 euros</strong>, aunque el jurado podrá declararlo desierto si
las obras presentadas no alcanzan el nivel requerido.</p>

<p>La <strong>obra ganadora</strong> será publicada en <strong>castellano y gallego</strong> e incluirá <strong>derechos de traducción
hasta 300 ejemplares</strong>. La titularidad de la obra seguirá perteneciendo al autor o autora,
quedando la <strong>Fundación Ángeles Terrazo</strong> como titular de <strong>derechos de edición y promoción</strong>,
en los términos establecidos en las bases.</p>

<h2 style="color:#e00053">El jurado</h2>

<p>El <strong>jurado</strong> estará compuesto por <strong>Darío Villanueva Prieto</strong>, <strong>José Manuel Otero Lastres</strong>,
<strong>Arantza Portabales Santomé</strong>, <strong>Bieito Rubido Ramonde</strong> y
<strong>Adolfo Domínguez Fernández</strong>, y su decisión será <strong>inapelable</strong>.
El <strong>fallo del premio</strong> se hará público en <strong>octubre de 2026</strong>.</p>

<p>El <strong>acto de entrega del premio</strong> tendrá lugar en <strong>Vigo el 14 de noviembre de 2026</strong>.</p>

<p>Con esta convocatoria, la <strong>Fundación Ángeles Terrazo</strong> reafirma su <strong>compromiso con la literatura</strong>
y anima a escritores y escritoras a participar en un premio concebido como un
<strong>nuevo referente para la narrativa contemporánea</strong> en castellano y gallego.</p>

<p>La <strong>Fundación Ángeles Terrazo</strong> invita a todos los escritores y escritoras a participar en esta
convocatoria, que busca <strong>fomentar la creación literaria</strong> y <strong>apoyar la difusión de nuevas voces</strong>
en el panorama narrativo en castellano y gallego.</p>`,
    // Mission
    'mission.title': 'Nuestra misión',
    'mission.description1': 'La Fundación Ángeles Terrazo fue creada en Vigo en el año 2025 con el propósito de promover el arte literario, la escritura y la lectura, impulsando la creación, la difusión cultural y el acceso al conocimiento.',
    'mission.description2': 'Reconocida como entidad de interés cultural por la Xunta de Galicia, trabajamos para fortalecer el tejido cultural literario mediante el apoyo a autores y la promoción de la literatura como espacio de expresión artística y pensamiento crítico.',
    'mission.cta': 'Conoce más sobre nosotros',

    // La Fundación Page
    'foundation.title': 'La Fundación',
    'foundation.subtitle': 'Conoce nuestra historia, patronato, valores y objetivos.',
    'foundation.history.title': 'Historia de la Fundación Ángeles Terrazo',
    'foundation.history.p1': 'La <strong>Fundación Ángeles Terrazo</strong> fue creada en Vigo en el año 2025 por iniciativa de <strong>María de los Ángeles Terrazo Blanco</strong>, quien formalizó su constitución mediante escritura pública otorgada el 17 de marzo de ese mismo año. Su propósito fundacional, recogido en sus estatutos, es <strong>promover el arte literario, la escritura y la lectura</strong>, impulsando la creación, la difusión cultural y el acceso al conocimiento. El Patronato Fundador estuvo compuesto por María de los Ángeles Terrazo Blanco (Presidenta), Luis Quinteiro Fiúza (Vicepresidente), Juan Carlos Aladro Fernández (Secretario), Susana García-Baquero Borrell (Vocal) y Alfonso Carlos Penela Fernández (Vocal).',
    'foundation.history.p2': 'En mayo de 2025, el Patronato de la Fundación solicitó su clasificación y reconocimiento institucional como entidad de <strong>interés gallego</strong>. Tras la tramitación del expediente y la revisión de su documentación fundacional —incluida la dotación inicial, los estatutos y la identificación de los miembros del patronato—, la Comisión de Secretarios Generales de las consellerías propuso su clasificación <strong>como fundación de interés cultural</strong>, atendiendo a la naturaleza y relevancia de sus fines.',
    'foundation.history.p3': 'El 22 de septiembre de 2025, la Consellería de Presidencia, Justicia y Deportes de la Xunta de Galicia dictó la orden por la que se declaró oficialmente la <strong>clasificación de la Fundación Ángeles Terrazo como entidad de interés cultural</strong>, quedando adscrita al protectorado de la <strong>Consellería de Cultura, Lengua y Juventud</strong>.',
    'foundation.history.p4': 'Desde su reconocimiento institucional, la Fundación desarrolla su labor en el ámbito cultural y literario, consolidando su compromiso con el fomento de la creación artística, el apoyo a autores y autoras, y la promoción de iniciativas que fortalecen el tejido cultural de Galicia y su proyección en el ámbito nacional e internacional.',
    'foundation.patronato.title': 'Patronato',
    'foundation.patronato.presidenta': 'Presidenta',
    'foundation.patronato.vicepresidente': 'Vicepresidente',
    'foundation.patronato.secretario': 'Secretario',
    'foundation.patronato.vocal': 'Vocal',
    'foundation.valores.title': 'Valores',
    'foundation.valores.1.titulo': 'Compromiso con la literatura',
    'foundation.valores.1.descripcion': 'Defendemos la literatura como espacio de pensamiento, libertad creativa y expresión artística, fomentando especialmente la novela como género narrativo fundamental para la cultura contemporánea.',
    'foundation.valores.2.titulo': 'Compromiso educativo',
    'foundation.valores.2.descripcion': 'Promovemos el acceso a los libros y el hábito lector como herramientas de desarrollo personal, educativo y social.',
    'foundation.valores.3.titulo': 'Apoyo al talento creativo',
    'foundation.valores.3.descripcion': 'Impulsamos a autores y autoras emergentes y consolidados, favoreciendo la difusión de su obra.',
    'foundation.valores.4.titulo': 'Rigor cultural y vocación pública',
    'foundation.valores.4.descripcion': 'Trabajamos con responsabilidad, transparencia y ética institucional en todas nuestras acciones culturales y programas literarios.',
    'foundation.valores.5.titulo': 'Respeto a la diversidad artística',
    'foundation.valores.5.descripcion': 'Fomentamos la pluralidad temática y estilística, entendiendo la literatura como un espacio abierto a distintas sensibilidades y realidades.',
    'foundation.objetivos.title': 'Objetivos',
    'foundation.objetivos.1.titulo': 'Promover la lectura como práctica social y cultural',
    'foundation.objetivos.1.item1': 'Impulsando actividades, clubes de lectura y encuentros literarios.',
    'foundation.objetivos.1.item2': 'Acercando la literatura a nuevos públicos y generaciones lectoras.',
    'foundation.objetivos.2.titulo': 'Fomentar la creación y difusión de la novela',
    'foundation.objetivos.2.item1': 'Apoyando obras narrativas de calidad literaria.',
    'foundation.objetivos.2.item2': 'Incentivando la innovación en el género y la exploración de nuevas formas de relato.',
    'foundation.objetivos.3.titulo': 'Impulsar el Premio Ángeles Terrazo de Novela',
    'foundation.objetivos.3.item1': 'Como plataforma de reconocimiento a autores y autoras.',
    'foundation.objetivos.3.item2': 'Favoreciendo la proyección cultural de las obras premiadas.',
    'foundation.objetivos.4.titulo': 'Acompañar y visibilizar a escritores y escritoras',
    'foundation.objetivos.4.item1': 'Mediante programas de divulgación, formación y residencias literarias.',
    'foundation.objetivos.4.item2': 'Estableciendo redes con instituciones culturales y editoriales.',
    'foundation.objetivos.5.titulo': 'Contribuir al fortalecimiento del ecosistema cultural',
    'foundation.objetivos.5.item1': 'Participando activamente en el tejido literario gallego y nacional.',
    'foundation.objetivos.5.item2': 'Promoviendo iniciativas que vinculen literatura, educación y sociedad.',
    'foundation.cta.title': '¿Quieres saber más?',
    'foundation.cta.description': 'Contacta con nosotros para cualquier consulta o propuesta de colaboración',
    'foundation.cta.button': 'Contactar',

    // Premio Page
    'award.title': 'Premio Ángeles Terrazo de Novela',
    'award.about.title': 'Sobre el Premio',
    'award.about.p1': 'El Premio Ángeles Terrazo de Novela nace con la vocación de impulsar y reconocer el talento literario, apoyando a autores y autoras cuya obra destaque por su originalidad y solidez narrativa.',
    'award.about.p2': 'Cada año, un jurado integrado por prestigiosos expertos del ámbito literario evalúa las obras presentadas de forma rigurosa y anónima, atendiendo a criterios de calidad literaria, originalidad, y potencial de proyección cultural.',
    'award.about.p3': 'El galardón incluye una dotación económica destinada a la publicación de la novela inédita en una edición especial impulsada por la Fundación. Además, se organizarán actividades culturales y encuentros literarios en torno a la obra ganadora, contribuyendo a su difusión y puesta en valor dentro de la comunidad lectora.',
    'award.about.p4': 'Este premio refuerza el compromiso de la Fundación Ángeles Terrazo con la creación literaria y la promoción de voces que enriquecen el patrimonio cultural y narrativo de nuestra sociedad.',
    'award.bases.title': 'Bases del premio',
    'award.bases.description': '.....',
    'award.bases.button': 'Descargar bases',
    'award.bases.note.title': 'Nota aclaratoria',
    'award.bases.note.description': 'Las bases del premio deben leerse conjuntamente con la presente nota aclaratoria.',
    'award.bases.note.button': 'Descargar nota aclaratoria',
    'award.inscription.title': 'Formulario de inscripción',
    'award.inscription.description': 'Requisito obligatorio para participantes.',
    'award.inscription.button': 'Inscríbete',
    'award.criteria.title': 'Criterios de Selección',
    'award.criteria.1.title': 'Calidad Literaria',
    'award.criteria.1.description': 'Excelencia en el uso del lenguaje, estructura narrativa y estilo.',
    'award.criteria.2.title': 'Originalidad',
    'award.criteria.2.description': 'Profundidad temática',
    'award.criteria.3.title': 'Potencial de proyección cultural',
    'award.criteria.3.description': 'Influencia en la sociedad y contribución al enriquecimiento cultural.',
    'award.criteria.4.title': 'Trayectoria',
    'award.criteria.4.description': 'Consistencia y evolución a lo largo de la carrera literaria.',
    'award.winners.title': 'Ganadores del Premio',
    'award.winners.featuredWork': 'Obra destacada',
    'award.cta.title': '¿Quieres saber más sobre el premio?',
    'award.cta.description': 'Si tienes preguntas sobre el proceso de nominación, los criterios de selección o cualquier otro aspecto del premio, no dudes en contactarnos.',
    'award.cta.button': 'Contáctanos',

    // Transparencia Page
    'transparency.title': 'Transparencia',
    'transparency.subtitle': 'Consulta nuestra documentación oficial y memorias anuales',
    'transparency.estatutos.title': 'Estatutos',
    'transparency.estatutos.description': 'Consulta nuestros estatutos fundacionales y documentación oficial que rigen el funcionamiento de la Fundación Ángeles Terrazo.',
    'transparency.estatutos.button': 'Pendiente de publicación',
    'transparency.memoria.title': 'Memoria Anual',
    'transparency.memoria.description': 'Accede a nuestras memorias anuales e informes de actividad que recogen las acciones, proyectos y resultados de la Fundación.',
    'transparency.memoria.button': 'Pendiente de publicación',
    'transparency.cta.title': '¿Quieres saber más?',
    'transparency.cta.description': 'Contacta con nosotros para cualquier consulta o propuesta de colaboración',
    'transparency.cta.button': 'Contactar',

    // Contacto Page
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Tienes alguna pregunta o quieres colaborar con nosotros? Estaremos encantados de escucharte.',
    'contact.info.title': 'Información de Contacto',
    'contact.info.email': 'Email',
    'contact.social.title': 'Síguenos en redes sociales',
    'contact.form.title': 'Envíanos un mensaje',
    'contact.form.success': '¡Mensaje enviado correctamente! Te responderemos lo antes posible.',
    'contact.form.name': 'Nombre y apellidos',
    'contact.form.name.placeholder': 'Escribe tu nombre completo',
    'contact.form.email': 'Correo electrónico',
    'contact.form.email.placeholder': 'Indica una dirección válida de contacto',
    'contact.form.phone': 'Teléfono',
    'contact.form.phone.placeholder': 'Opcional',
    'contact.form.subject': 'Asunto de la consulta',
    'contact.form.subject.placeholder': 'Selecciona un asunto',
    'contact.form.subject.premio': 'Información sobre el Premio Ángeles Terrazo de Novela',
    'contact.form.subject.participacion': 'Participación o envío de obras',
    'contact.form.subject.actividades': 'Actividades y programas culturales',
    'contact.form.subject.colaboraciones': 'Colaboraciones y patrocinios',
    'contact.form.subject.prensa': 'Prensa y comunicación',
    'contact.form.subject.otra': 'Otra consulta',
    'contact.form.message': 'Mensaje',
    'contact.form.message.placeholder': 'Cuéntanos en detalle el motivo de tu consulta',
    'contact.form.privacy.title': 'Protección de datos',
    'contact.form.privacy.text': 'La Fundación Ángeles Terrazo tratará tus datos con la única finalidad de atender tu consulta. No se cederán a terceros salvo obligación legal. Puedes solicitar el acceso, rectificación o supresión de tus datos a través del propio formulario o por los medios de contacto indicados en la web.',
    'contact.form.privacy.accept': 'He leído y acepto la Política de Privacidad',
    'contact.form.required': '* Campos marcados con asterisco son obligatorios',
    'contact.form.submit': 'Enviar mensaje',
    'contact.form.submitting': 'Enviando...',
    'contact.form.privacyAlert': 'Debes aceptar la Política de Privacidad para continuar.',
  },
  
  gl: {
    // Header / Navigation
    'nav.home': 'Inicio',
    'nav.foundation': 'A Fundación',
    'nav.award': 'Premio',
    'nav.transparency': 'Transparencia',
    'nav.contact': 'Contacto',
    'nav.language.spanish': 'Castelán',
    'nav.language.gallego': 'Galego',

    // Hero
    'hero.award.title': 'Premio Ángeles Terrazo de Novela 2026',
    'hero.award.subtitle': 'Próxima convocatoria',
    'hero.description': 'Apoiamos a arte literaria, fomentando a creación, promovendo a edición e impulsando a lectura.',
    'hero.cta.foundation': 'Descubre a Fundación',
    'hero.cta.contact': 'Contacta connosco',

    // Key Dates
    'dates.title': 'Premio Ángeles Terrazo de Novela 2026',
    'dates.subtitle': 'Datas clave do certame',
    'dates.opening': 'Apertura da convocatoria',
    'dates.closing': 'Data límite de presentación',
    'dates.verdict': 'Fallo do xurado',
    'dates.ceremony': 'Entrega do Premio',
    'dates.soon': 'Proximamente',
    'dates.pending': 'Pendente',
    'dates.closingDate': '30 DE XUÑO DE 2026',
    'dates.verdictDate': 'OUTUBRO DE 2026',
    'dates.ceremonyDate': '14 DE NOVEMBRO DE 2026',

    // News
    'news.title': 'Novas destacadas',
    'news.superTitle': 'Nova destacada',
    'news.viewAll': 'Ver todas',
    'news.readMore': 'Ler máis',
    'news.moreInfo': 'Máis información proximamente...',
    'news.item1.title': 'Constitución da Fundación',
    'news.item1.date': '17 de marzo de 2025',
    'news.item2.title': 'Recoñecemento como entidade de interese cultural',
    'news.item2.date': '22 de setembro de 2025',
    'news.item3.title': 'Primeira convocatoria do Premio 2026',
    'news.item3.date': 'Proximamente',

    // Blog Page
    'blog.title': 'Blog',
    'blog.subtitle': 'Novas, artigos e reflexións sobre o mundo da literatura.',
    'blog.featured': 'Destacados',
    'blog.allPosts': 'Todas as publicacións',
    'blog.backToBlog': 'Volver ao blog',
    'blog.breadcrumb.home': 'Inicio',
    'blog.breadcrumb.blog': 'Blog',

    // Noticia: Presentación Premio Vigo
    'news.presentacion.title': 'A Fundación Ángeles Terrazo presenta o seu Premio Literario en Vigo',
    'news.presentacion.excerpt': 'A Fundación Ángeles Terrazo preséntase oficialmente xunto co seu Premio Ángeles Terrazo de Novela, nun acto que se celebrará o vindeiro 21 de xaneiro de 2026 no Teatro AFundación de Vigo.',
    'news.presentacion.content': '<p>A Fundación Ángeles Terrazo preséntase oficialmente xunto co seu Premio Ángeles Terrazo de Novela, nun acto que se celebrará o vindeiro 21 de xaneiro de 2026 no Teatro AFundación de Vigo. Este premio nace co obxectivo de estimular a excelencia literaria e dar visibilidade a novas voces dentro da narrativa contemporánea, consolidando o compromiso da Fundación coa promoción da literatura.</p><p>O acto estará presidido pola nosa fundadora, Ángeles Terrazo, acompañada polos membros do padroado, quen achegan a súa experiencia e reforzan o compromiso da Fundación coa cultura, a escritura e a difusión artística.</p><h2>Sobre a Fundación</h2><p>A Fundación Ángeles Terrazo foi constituída en Vigo en 2025 por iniciativa de Ángeles Terrazo, formalizando a súa creación mediante escritura pública o 17 de marzo dese ano. O seu propósito, recollido nos estatutos, é promover a arte literaria, a escritura e a lectura, fomentando a creación literaria, a difusión cultural e o acceso ao coñecemento.</p><p>En recoñecemento á súa relevancia cultural e institucional, a Fundación foi declarada de interese cultural pola Xunta de Galicia en setembro de 2025 e adscrita ao protectorado da Consellería de Cultura, Lingua e Xuventude, un aval que respalda o seu papel dentro do panorama cultural galego.</p><p>O padroado está composto por Ángeles Terrazo Blanco (Presidenta), Luis Quinteiro Fiúza (Vicepresidente), Juan Carlos Aladro Fernández (Secretario), Susana García-Baquero Borrell e Alfonso Carlos Penela Fernández (Vogais), quen achegan a súa experiencia e dedicación ao desenvolvemento dos obxectivos da Fundación.</p><p>Desde a súa creación, a Fundación Ángeles Terrazo centrouse en fomentar a literatura e a lectura como prácticas sociais e culturais, apoiar o talento creativo e promover a pluralidade artística. Entre os seus obxectivos destacan a organización de actividades de lectura e clubs literarios, a promoción e difusión de novelas, o impulso de programas de formación e residencias literarias, así como a contribución ao fortalecemento do ecosistema cultural galego e nacional, consolidando o seu papel como referente no ámbito literario.</p>',
    
    'news.presentacion-event.title': 'Así foi a presentación do Premio Ángeles Terrazo de Novela',
    'news.presentacion-event.excerpt': 'Vigo acolleu o pasado 21 de xaneiro a presentación oficial da Fundación Ángeles Terrazo e do seu Premio Ángeles Terrazo de Novela, un acto co que a entidade se deu a coñecer publicamente e anunciou unha iniciativa destinada a impulsar a creación literaria e contribuír ao fortalecemento do tecido cultural.',
    'news.presentacion-event.content': `<p>O evento estivo presidido por <strong>Ángeles Terrazo</strong>, presidenta da Fundación, acompañada polos membros do padroado. O acto foi presentado polo músico e escritor <strong>Pedro Feijóo</strong> e contou cunha <strong>intervención artística de Ramón Trigo</strong>, poñendo de manifesto o diálogo entre distintas disciplinas culturais.</p>

<p>Durante a súa intervención, a presidenta destacou a <strong>vocación cultural e social</strong> da Fundación, concibida como un espazo de apoio á creación, de impulso ao talento e de contribución ao desenvolvemento cultural. Neste sentido, subliñou a importancia de <em>"fomentar a escritura, para que os nosos mozos atopen vías de comunicación e expresión. Temos mozos talentosos que poden atopar o seu camiño a través da palabra escrita e a comunicación"</em>.</p>

<h2 style="color: #e00053;">O Premio Ángeles Terrazo de Novela</h2>

<p>No marco da presentación, a Fundación anunciou a creación do <strong>Premio Ángeles Terrazo de Novela</strong>, unha iniciativa destinada a impulsar a creación literaria e apoiar o talento narrativo.</p>

<p>O galardón está dotado con <strong>20.000 €</strong> e nace coa vocación de converterse nun referente cultural, respaldando proxectos literarios de calidade e fomentando a escritura como expresión artística e cultural.</p>

<p>As bases do premio foron dadas a coñecer durante o acto e recollen o espírito co que nace esta convocatoria, aliñada cos valores da Fundación Ángeles Terrazo e o seu compromiso coa literatura.</p>

<h3>Bases do Premio</h3>

<ul style="list-style-type: disc; padding-left: 1.5rem;">
  <li style="margin-bottom: 1rem;">
    <strong>Participantes:</strong> Poderán concorrer autores e coautores de calquera nacionalidade maiores de idade, con obras orixinais escritas en castelán ou galego.
  </li>
  
  <li style="margin-bottom: 1rem;">
    <strong>Obras presentadas a concurso:</strong> As novelas deben ser orixinais e inéditas, sen ter sido publicadas nin premiadas anteriormente, nin estar pendentes de fallo noutros concursos. Non se permite a creación da obra mediante IA xerativa.
    <ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem;">
      <li>Extensión: mínimo 200.000 caracteres e máximo 400.000 (con espazos).</li>
    </ul>
  </li>
  
  <li style="margin-bottom: 1rem;">
    <strong>Prazo de admisión:</strong> A recepción de orixinais finalizará o 30 de xullo de 2026.
  </li>
  
  <li style="margin-bottom: 1rem;">
    <strong>Premio:</strong> Outorgarase un único premio de 20.000 €. Non obstante, o xurado poderá declarar deserto o premio se as obras non acadaren o nivel de calidade requirido.
  </li>
  
  <li style="margin-bottom: 1rem;">
    <strong>Concesión do Premio:</strong>
    <ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem;">
      <li>A obra gañadora será publicada en castelán e galego, con dereitos de tradución ata 300 exemplares.</li>
      <li>A titularidade da obra seguirá sendo do autor, excepto os dereitos de edición e promoción definidos pola Fundación.</li>
    </ul>
  </li>
  
  <li style="margin-bottom: 1rem;">
    <strong>Xurado:</strong>
    <ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.5rem;">
      <li>Dario Villanueva Prieto</li>
      <li>José Manuel Otero Lastres</li>
      <li>Arantza Portabales Santomé</li>
      <li>Bieito Rubido Ramonde</li>
      <li>Adolfo Domínguez Fernández</li>
    </ul>
    <p>A decisión será inapelable e darase a coñecer en outubro de 2026.</p>
  </li>
  
  <li style="margin-bottom: 1rem;">
    <strong>Entrega do Premio:</strong> O acto de entrega celebrarase en Vigo, o 14 de novembro de 2026.
  </li>
</ul>

<p>A Fundación Ángeles Terrazo convida a todos os escritores e escritoras a participar nesta convocatoria, que busca fomentar a creación literaria e apoiar a difusión de novas voces no panorama narrativo en castelán e galego.</p>`,
'news.convocatoria.title': 'A Fundación Ángeles Terrazo crea en Galicia un dos premios literarios con maior dotación de España',
'news.convocatoria.excerpt': 'Vigo, 2 de febreiro de 2026. A Fundación Ángeles Terrazo</strong> abre a convocatoria do seu Premio de Novela, dotado con 20.000 euros. O certame nace coa vocación de impulsar a creación narrativa</strong> e <strong>apoiar novas voces</strong> no ámbito da literatura.',
'news.convocatoria.content': `
<p>O Premio está aberto a <strong>autores e autoras, así como coautores e coautoras de calquera nacionalidade</strong>,
maiores de idade, que presenten <strong>novelas orixinais e inéditas</strong> escritas en <strong>castelán ou galego</strong>,
que non fosen publicadas nin premiadas con anterioridade nin se atopen pendentes de fallo
noutros certames. As novelas deberán ter unha <strong>extensión mínima de 200.000 caracteres</strong> e
unha <strong>máxima de 400.000</strong>, incluídos os espazos.</p>

<p>O <strong>prazo de admisión</strong> xa está aberto e <strong>finalizará o 30 de xuño de 2026</strong>. Concederase un
<strong>único premio dotado con 20.000 euros</strong>, aínda que o xurado poderá declaralo deserto se
as obras presentadas non acadan o nivel requirido.</p>

<p>A <strong>obra gañadora</strong> será publicada en <strong>castelán e galego</strong> e incluirá <strong>dereitos de tradución
ata 300 exemplares</strong>. A titularidade da obra seguirá pertencendo ao autor ou autora,
quedando a <strong>Fundación Ángeles Terrazo</strong> como titular dos <strong>dereitos de edición e promoción</strong>,
nos termos establecidos nas bases.</p>

<h2 style="color:#e00053">O xurado</h2>

<p>O <strong>xurado</strong> estará composto por <strong>Darío Villanueva Prieto</strong>, <strong>José Manuel Otero Lastres</strong>,
<strong>Arantza Portabales Santomé</strong>, <strong>Bieito Rubido Ramonde</strong> e
<strong>Adolfo Domínguez Fernández</strong>, e a súa decisión será <strong>inapelable</strong>.
O <strong>fallo do premio</strong> farase público en <strong>outubro de 2026</strong>.</p>

<p>O <strong>acto de entrega do premio</strong> terá lugar en <strong>Vigo o 14 de novembro de 2026</strong>.</p>

<p>Con esta convocatoria, a <strong>Fundación Ángeles Terrazo</strong> reafirma o seu <strong>compromiso coa literatura</strong>
e anima a escritores e escritoras a participar nun premio concibido como un
<strong>novo referente para a narrativa contemporánea</strong> en castelán e galego.</p>

<p>A <strong>Fundación Ángeles Terrazo</strong> convida a todos os escritores e escritoras a participar nesta
convocatoria, que busca <strong>fomentar a creación literaria</strong> e <strong>apoiar a difusión de novas voces</strong>
no panorama narrativo en castelán e galego.</p>`,

    // Mission
    'mission.title': 'A nosa misión',
    'mission.description1': 'A Fundación Ángeles Terrazo constitúese en Vigo no ano 2025 co propósito de promover a arte literaria, a escritura e a lectura, fomentando a creación, a difusión cultural e o acceso ao coñecemento.',
    'mission.description2': 'Recoñecida como entidade de interese cultural pola Xunta de Galicia, traballamos para fortalecer o tecido cultural literario apoiando ás autoras e autores e promovendo a literatura como espazo de expresión artística e pensamento crítico.',
    'mission.cta': 'Coñece máis sobre nós',

    // La Fundación Page
    'foundation.title': 'A Fundación',
    'foundation.subtitle': 'Descubre a nosa historia, patronato, valores e obxectivos.',
    'foundation.history.title': 'Historia da Fundación Ángeles Terrazo',
    'foundation.history.p1': 'A <strong>Fundación Ángeles Terrazo</strong> constituíuse en Vigo no ano 2025 por iniciativa de <strong>María de los Ángeles Terrazo Blanco</strong>, quen formalizou a súa constitución mediante escritura pública outorgada o 17 de marzo dese mesmo ano. O seu fin fundacional, recollido nos estatutos, é <strong>promover a arte literaria, a escritura e a lectura</strong>, fomentando a creación, a difusión cultural e o acceso ao coñecemento. O Padroado Fundacional estivo composto por María de los Ángeles Terrazo Blanco (Presidenta), Luis Quinteiro Fiúza (Vicepresidente), Juan Carlos Aladro Fernández (Secretario), Susana García-Baquero Borrell (Vogal) e Alfonso Carlos Penela Fernández (Vogal).',
    'foundation.history.p2': 'No mes de maio de 2025, o Padroado da Fundación solicitou a súa clasificación e recoñecemento institucional como entidade de <strong>interese galego</strong>. Tras a tramitación do expediente e a análise da documentación fundacional —incluíndo a dotación inicial, os estatutos e a identificación dos membros do padroado—, a Comisión de Secretarios Xerais das consellerías propuxo a súa clasificación <strong>como fundación de interese cultural</strong>, atendendo á natureza e relevancia dos seus fins.',
    'foundation.history.p3': 'O 22 de setembro de 2025, a Consellería de Presidencia, Xustiza e Deportes da Xunta de Galicia ditou a orde pola que se declarou oficialmente a <strong>clasificación da Fundación Ángeles Terrazo como entidade de interese cultural</strong>, quedando adscrita ao protectorado da <strong>Consellería de Cultura, Lingua e Xuventude</strong>.',
    'foundation.history.p4': 'Desde o seu recoñecemento institucional, a Fundación desenvolve a súa actividade no ámbito cultural e literario, consolidando o seu compromiso coa promoción da creación artística, o apoio ás autoras e autores e o impulso de iniciativas que fortalecen o tecido cultural de Galicia e a súa proxección a nivel nacional e internacional.',
    'foundation.patronato.title': 'Padroado',
    'foundation.patronato.presidenta': 'Presidenta',
    'foundation.patronato.vicepresidente': 'Vicepresidente',
    'foundation.patronato.secretario': 'Secretario',
    'foundation.patronato.vocal': 'Vogal',
    'foundation.valores.title': 'Valores',
    'foundation.valores.1.titulo': 'Compromiso coa literatura',
    'foundation.valores.1.descripcion': 'Defendemos a literatura como espazo de reflexión, liberdade creativa e expresión artística, promovendo especialmente a novela como xénero narrativo fundamental da cultura contemporánea.',
    'foundation.valores.2.titulo': 'Compromiso educativo',
    'foundation.valores.2.descripcion': 'Impulsamos o acceso aos libros e os hábitos de lectura como ferramentas de desenvolvemento persoal, educativo e social.',
    'foundation.valores.3.titulo': 'Apoio ao talento creativo',
    'foundation.valores.3.descripcion': 'Apoiamos a autoras e autores emerxentes e consolidados, promovendo a difusión das súas obras.',
    'foundation.valores.4.titulo': 'Rigor cultural e vocación pública',
    'foundation.valores.4.descripcion': 'Traballamos con responsabilidade, transparencia e ética institucional en todas as nosas accións culturais e programas literarios.',
    'foundation.valores.5.titulo': 'Respecto pola diversidade artística',
    'foundation.valores.5.descripcion': 'Fomentamos a pluralidade temática e estilística, entendendo a literatura como un espazo aberto a distintas sensibilidades e realidades.',
    'foundation.objetivos.title': 'Obxectivos',
    'foundation.objetivos.1.titulo': 'Promover a lectura como práctica social e cultural',
    'foundation.objetivos.1.item1': 'Impulsar actividades, clubs de lectura e encontros literarios.',
    'foundation.objetivos.1.item2': 'Achegar a literatura a novos públicos e xeracións lectoras.',
    'foundation.objetivos.2.titulo': 'Fomentar a creación e difusión da novela',
    'foundation.objetivos.2.item1': 'Apoiar obras narrativas de calidade literaria.',
    'foundation.objetivos.2.item2': 'Estimular a innovación no xénero e a exploración de novas formas narrativas.',
    'foundation.objetivos.3.titulo': 'Promover o Premio de Novela Ángeles Terrazo',
    'foundation.objetivos.3.item1': 'Como plataforma de recoñecemento de autoras e autores.',
    'foundation.objetivos.3.item2': 'Favorecer a proxección cultural das obras premiadas.',
    'foundation.objetivos.4.titulo': 'Acompañar e dar visibilidade ás escritoras e escritores',
    'foundation.objetivos.4.item1': 'A través de programas de difusión, formación e residencias literarias.',
    'foundation.objetivos.4.item2': 'Establecendo redes con institucións culturais e editoriais.',
    'foundation.objetivos.5.titulo': 'Contribuír ao fortalecemento do ecosistema cultural',
    'foundation.objetivos.5.item1': 'Participando activamente no tecido literario galego e nacional.',
    'foundation.objetivos.5.item2': 'Promovendo iniciativas que vinculen literatura, educación e sociedade.',
    'foundation.cta.title': 'Queres saber máis?',
    'foundation.cta.description': 'Contacta connosco para calquera consulta ou proposta de colaboración',
    'foundation.cta.button': 'Contacto',

    // Premio Page
    'award.title': 'Premio de Novela Ángeles Terrazo',
    'award.about.title': 'Sobre o Premio',
    'award.about.p1': 'O Premio de Novela Ángeles Terrazo nace coa vocación de promover e recoñecer o talento literario, apoiando a autoras e autores cuxa obra destaque pola súa orixinalidade e forza narrativa.',
    'award.about.p2': 'Cada ano, un xurado composto por persoas de prestixio no ámbito literario avalía as obras presentadas con rigor e anonimato, segundo criterios de calidade literaria, orixinalidade e potencial de proxección cultural.',
    'award.about.p3': 'O premio inclúe unha dotación económica destinada á publicación da novela inédita nunha edición especial promovida pola Fundación. Ademais, organizaranse actividades culturais e encontros literarios arredor da obra gañadora, contribuíndo á súa difusión e posta en valor dentro da comunidade lectora.',
    'award.about.p4': 'Este galardón reforza o compromiso da Fundación Ángeles Terrazo coa creación literaria e coa promoción de voces que enriquecen o patrimonio cultural e narrativo da nosa sociedade.',
    'award.bases.title': 'Bases do premio',
    'award.bases.description': '.....',
    'award.bases.button': 'Descarga as bases',
    'award.bases.note.title': 'Nota explicativa',
    'award.bases.note.description': 'As regras do premio deben lerse xunto con esta nota explicativa.',
    'award.bases.note.button': 'Descargar nota explicativa',
    'award.inscription.title': 'Formulario de rexistro',
    'award.inscription.description': 'Requisito obrigatorio para os participantes.',
    'award.inscription.button': 'Rexístrate',
    'award.criteria.title': 'Criterios de selección',
    'award.criteria.1.title': 'Calidade literaria',
    'award.criteria.1.description': 'Excelencia no uso da linguaxe, estrutura narrativa e estilo.',
    'award.criteria.2.title': 'Orixinalidade',
    'award.criteria.2.description': 'Profundidade temática.',
    'award.criteria.3.title': 'Potencial de proxección cultural',
    'award.criteria.3.description': 'Influencia na sociedade e contribución ao enriquecemento cultural.',
    'award.criteria.4.title': 'Traxectoria',
    'award.criteria.4.description': 'Coherencia e evolución ao longo da carreira literaria.',
    'award.winners.title': 'Obras premiadas',
    'award.winners.featuredWork': 'Obra destacada',
    'award.cta.title': 'Queres saber máis sobre o premio?',
    'award.cta.description': 'Se tes dúbidas sobre o proceso de candidatura, criterios de selección ou calquera outro aspecto do premio, non dubides en contactar connosco.',
    'award.cta.button': 'Contacta connosco',

    // Transparencia Page
    'transparency.title': 'Transparencia',
    'transparency.subtitle': 'Accede á nosa documentación oficial e memorias anuais',
    'transparency.estatutos.title': 'Estatutos',
    'transparency.estatutos.description': 'Accede aos nosos estatutos fundacionais e á documentación oficial que rexe o funcionamento da Fundación Ángeles Terrazo.',
    'transparency.estatutos.button': 'Pendiente de publicación',
    'transparency.memoria.title': 'Memoria anual',
    'transparency.memoria.description': 'Accede ás nosas memorias anuais e informes de actividade que recollen as accións, proxectos e resultados da Fundación.',
    'transparency.memoria.button': 'Pendiente de publicación',
    'transparency.cta.title': 'Queres saber máis?',
    'transparency.cta.description': 'Contacta connosco para calquera consulta ou proposta de colaboración',
    'transparency.cta.button': 'Contacto',

    // Contacto Page
    'contact.title': 'Contacto',
    'contact.subtitle': 'Tes algunha dúbida ou queres colaborar connosco? Estaremos encantados de escoitarte.',
    'contact.info.title': 'Información de contacto',
    'contact.info.email': 'Correo electrónico',
    'contact.social.title': 'Síguenos nas redes sociais',
    'contact.form.title': 'Envíanos unha mensaxe',
    'contact.form.success': 'Mensaxe enviada correctamente. Responderemos canto antes.',
    'contact.form.name': 'Nome completo',
    'contact.form.name.placeholder': 'Introduce o teu nome completo',
    'contact.form.email': 'Enderezo de correo electrónico',
    'contact.form.email.placeholder': 'Introduce un enderezo válido',
    'contact.form.phone': 'Teléfono',
    'contact.form.phone.placeholder': 'Opcional',
    'contact.form.subject': 'Asunto',
    'contact.form.subject.placeholder': 'Selecciona un asunto',
    'contact.form.subject.premio': 'Información sobre o Premio de Novela Ángeles Terrazo',
    'contact.form.subject.participacion': 'Participación ou presentación de obras',
    'contact.form.subject.actividades': 'Actividades e programas culturais',
    'contact.form.subject.colaboraciones': 'Colaboracións e patrocinio',
    'contact.form.subject.prensa': 'Prensa e comunicación',
    'contact.form.subject.otra': 'Outra consulta',
    'contact.form.message': 'Mensaxe',
    'contact.form.message.placeholder': 'Describe con detalle o motivo da túa consulta',
    'contact.form.privacy.title': 'Protección de datos',
    'contact.form.privacy.text': 'A Fundación Ángeles Terrazo tratará os teus datos unicamente para atender a túa consulta. Os datos non serán cedidos a terceiros salvo obriga legal. Podes solicitar o acceso, rectificación ou eliminación dos teus datos a través deste formulario ou polos medios de contacto indicados na web.',
    'contact.form.privacy.accept': 'Lin e acepto a Política de Privacidade',
    'contact.form.required': '* Os campos marcados cun asterisco son obrigatorios',
    'contact.form.submit': 'Enviar mensaxe',
    'contact.form.submitting': 'Enviando...',
    'contact.form.privacyAlert': 'Debes aceptar a Política de Privacidade para continuar.',
  },

};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
