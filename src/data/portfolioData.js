export const portfolioContent = {
  es: {
    meta: {
      title: 'Bismarck Hernández Castellón (@Marck) | Full-Stack Developer',
      description:
        'Portafolio profesional de Bismarck Hernández Castellón (Marck) — Desarrollador Full-Stack y Estudiante de Ingeniería en Sistemas en la UNAN-León.',
    },
    nav: {
      ariaLabel: 'Navegación principal',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      languageSwitcherLabel: 'Selector de idioma',
      links: [
        { id: 'inicio', label: 'Inicio', href: '#inicio' },
        { id: 'sobre-mi', label: 'Sobre Mí', href: '#sobre-mi' },
        { id: 'habilidades', label: 'Habilidades', href: '#habilidades' },
        { id: 'proyectos', label: 'Proyectos', href: '#proyectos' },
        { id: 'trayectoria', label: 'Trayectoria', href: '#trayectoria' },
        { id: 'contacto', label: 'Contacto', href: '#contacto' },
      ],
    },
    hero: {
      availabilityBadge: 'Disponible para proyectos & colaboraciones',
      firstName: 'Bismarck',
      lastName: 'Hernández Castellón',
      handle: '@Marck',
      subtitle: 'Developer • Creator • Dreamer',
      quote: 'Construyendo ideas en código y más allá',
      role: 'Desarrollador Full-Stack & Estudiante de Ingeniería en Sistemas.',
      valueProposition:
        'Transformo ideas complejas en aplicaciones web funcionales, bases de datos seguras y flujos automatizados que resuelven problemas reales.',
      primaryCta: {
        label: 'Ver Proyectos',
        href: '#proyectos',
      },
      secondaryCta: {
        label: 'Contactar',
        href: '#contacto',
      },
      githubUrl: 'https://github.com/Marck2-006',
      bannerAlt: 'Bismarck Hernández Castellón — Banner editorial noir de desarrollador',
      coreStackLabel: 'Core Stack //',
      scrollAriaLabel: 'Desplazarse a Sobre Mí',
      scrollLabel: 'Scroll',
      techBarLabels: {
        code: 'Full-Stack Code',
        flutter: 'Flutter & Dart',
        github: 'GitHub — Marck2-006',
        terminal: 'Linux & Sistemas',
      },
    },
    about: {
      sectionIndex: '01',
      sectionTag: 'SOBRE MÍ',
      title: 'Código limpio, arquitectura sólida y soluciones reales',
      cardHeader: '¿QUIÉN SOY?',
      locationBadge: 'UNAN-LEÓN // NI',
      paragraphs: [
        'Soy estudiante de Ingeniería en Sistemas en la UNAN-León y desarrollador de software apasionado por el enfoque Full-Stack y el desarrollo móvil multiplataforma. Mi labor se centra en construir aplicaciones eficientes combinando interfaces de usuario responsivas con arquitecturas backend sólidas, bases de datos relacionales orientadas a la seguridad y la automatización inteligente de flujos de trabajo. Entiendo la programación como una disciplina para resolver problemas concretos de forma metódica y escalable.',
        'Mi experiencia se ha consolidado en entornos de alto rendimiento mediante la participación activa en maratones de innovación y hackathons, donde la agilidad y el análisis de requerimientos son fundamentales. Combino una rigurosa visión lógica de ingeniería con una marcada sensibilidad por la experiencia de usuario y una iniciativa emprendedora orientada al valor tangible.',
      ],
      tags: [
        'Full-Stack Web',
        'Flutter Multiplataforma',
        'Seguridad RLS & Automatización',
      ],
      pillars: [
        {
          index: 'VOL. 01',
          title: 'Programming',
          subtitle: 'Arquitectura & Código Limpio',
          description:
            'Desarrollo Full-Stack, aplicaciones multiplataforma y bases de datos relacionales seguras diseñadas para escalar.',
          accent: 'blue',
        },
        {
          index: 'VOL. 02',
          title: 'Innovation',
          subtitle: 'Agilidad & Resolución Real',
          description:
            'Prototipado veloz, pensamiento sistémico y entregas bajo presión en hackathons y maratones de innovación.',
          accent: 'purple',
        },
        {
          index: 'VOL. 03',
          title: 'Technology',
          subtitle: 'Automatización & Futuro',
          description:
            'Orquestación de flujos con n8n, entornos Linux y adopción continua de herramientas modernas orientadas a impacto.',
          accent: 'crimson',
        },
      ],
    },
    skills: {
      sectionIndex: '02',
      sectionTag: 'HABILIDADES & STACK',
      title: 'Ecosistema técnico orientado a resultados',
      subtitle:
        'Herramientas, lenguajes y metodologías con los que diseño, construyo y automatizo software moderno.',
      filterAriaLabel: 'Filtrar habilidades por categoría',
      activeLearningBadge: 'Activo',
      filters: [
        { id: 'all', label: 'Todas' },
        { id: 'frontend', label: 'Frontend & Móvil' },
        { id: 'backend', label: 'Backend & Datos' },
        { id: 'devops', label: 'DevOps & Diseño' },
      ],
      items: [
        {
          id: 'frontend-ui',
          category: 'Frontend & UI',
          group: 'frontend',
          icon: 'Layout',
          description:
            'Construcción de interfaces web responsivas, adaptables y con excelente usabilidad.',
          items: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'UIkit'],
          span: 'md:col-span-2',
          accent: 'blue',
        },
        {
          id: 'mobile-dev',
          category: 'Desarrollo Móvil',
          group: 'frontend',
          icon: 'Smartphone',
          description:
            'Desarrollo de aplicaciones móviles multiplataforma con interfaces fluidas y responsivas.',
          items: ['Flutter', 'Dart'],
          span: 'md:col-span-1',
          accent: 'blue',
        },
        {
          id: 'active-learning',
          category: 'En Aprendizaje Activo',
          group: 'frontend',
          icon: 'Sparkles',
          description:
            'Desarrollo de interfaces web modernas basadas en componentes y gestión de estado.',
          items: ['React'],
          span: 'md:col-span-1',
          accent: 'crimson',
          isActiveLearning: true,
        },
        {
          id: 'databases',
          category: 'Bases de Datos',
          group: 'backend',
          icon: 'Database',
          description:
            'Diseño de esquemas relacionales, seguridad con RLS, triggers y auditoría de datos.',
          items: ['PostgreSQL', 'MySQL', 'Supabase'],
          span: 'md:col-span-2',
          accent: 'purple',
        },
        {
          id: 'backend-logic',
          category: 'Backend & Lógica',
          group: 'backend',
          icon: 'Cpu',
          description:
            'Desarrollo de lógica de negocio estructurada y aplicaciones robustas.',
          items: ['C# (.NET)', 'C', 'SQL'],
          span: 'md:col-span-1',
          accent: 'blue',
        },
        {
          id: 'automation',
          category: 'Automatización',
          group: 'backend',
          icon: 'Workflow',
          description:
            'Conexión de servicios, orquestación de flujos y desarrollo de asistentes automatizados.',
          items: ['n8n', 'Webhooks'],
          span: 'md:col-span-2',
          accent: 'purple',
        },
        {
          id: 'devops',
          category: 'Entorno & DevOps',
          group: 'devops',
          icon: 'Terminal',
          description:
            'Control de versiones estructurado y administración de entornos de servidor eficaces.',
          items: ['Git (Git Bash, GitKraken)', 'VS Code', 'JetBrains', 'Linux'],
          span: 'md:col-span-2',
          accent: 'blue',
        },
        {
          id: 'design-methodologies',
          category: 'Diseño & Metodologías',
          group: 'devops',
          icon: 'Compass',
          description:
            'Modelado de sistemas, arquitectura de software, trabajo ágil y prototipado.',
          items: ['Figma', 'DBML', 'PlantUML', 'Dia', 'Scrum', 'Logisim Evolution'],
          span: 'md:col-span-1',
          accent: 'purple',
        },
      ],
    },
    projects: {
      sectionIndex: '03',
      sectionTag: 'PROYECTOS DESTACADOS',
      title: 'Arquitectura aplicada a problemas reales',
      subtitle:
        'Desde preservación cultural respaldada por seguridad a nivel de fila hasta flujos de automatización autoalojados y prototipos de innovación.',
      featuredSectionLabel: 'A // Proyectos Principales',
      prototypesSectionLabel: 'B // Prototipos e Iniciativas Adicionales',
      technicalFocusLabel: 'Enfoque Técnico',
      impactArchitectureLabel: 'Impacto y Arquitectura',
      featured: [
        {
          id: 'nicalingo',
          index: '01',
          title: 'Nicalingo',
          category: 'Preservación Cultural • Plataforma Web',
          enfoqueTecnico:
            'Plataforma web enfocada en la preservación de lenguas originarias nicaragüenses (Miskito, Garífuna, Criollo, Mayagna, Rama y Ulwa).',
          impactoArquitectura:
            'Implementada con Supabase y PostgreSQL, aplicando políticas avanzadas de Row-Level Security (RLS) para garantizar un acceso seguro y estructurado a los módulos educativos.',
          stack: ['Supabase', 'PostgreSQL', 'Row-Level Security (RLS)', 'Web App'],
          accent: 'blue',
          highlights: ['6 Lenguas Originarias', 'Seguridad RLS', 'Módulos Educativos'],
        },
        {
          id: 'asistente-tareas',
          index: '02',
          title: 'Asistente Personal de Gestión de Tareas',
          category: 'Automatización • Productividad',
          enfoqueTecnico:
            'Sistema de automatización de productividad personal.',
          impactoArquitectura:
            'Flujos de trabajo construidos en n8n autoalojado en Render.com, sincronizados directamente con una base de datos PostgreSQL alojada en Supabase.',
          stack: ['n8n', 'Render.com', 'PostgreSQL', 'Supabase', 'Webhooks'],
          accent: 'purple',
          highlights: ['Self-Hosted n8n', 'Sincronización DB', 'Flujos Automatizados'],
        },
      ],
      prototypes: [
        {
          id: 'med-ia',
          title: 'Med-IA',
          tag: 'Hackathon • IA',
          description:
            'Solución de asistencia médica respaldada por inteligencia artificial, desarrollada en hackathon.',
          stack: ['Inteligencia Artificial', 'Prototipado Rápido', 'Salud Digital'],
          accent: 'crimson',
        },
        {
          id: 'ruta-salvaje',
          title: 'Ruta Salvaje',
          tag: 'MVP • Turismo',
          description:
            'Prototipo funcional (MVP) de plataforma de turismo de aventura.',
          stack: ['MVP', 'UI Responsiva', 'Turismo'],
          accent: 'blue',
        },
        {
          id: 'mi-cazuela',
          title: 'Mi Cazuela',
          tag: 'Frontend • Web',
          description:
            'Aplicación web de recetas con interfaz adaptativa utilizando HTML, CSS y Bootstrap.',
          stack: ['HTML5', 'CSS3', 'Bootstrap'],
          accent: 'purple',
        },
        {
          id: 'amigo-secreto',
          title: 'Amigo Secreto Web',
          tag: 'Zero-DB • Single File',
          description:
            'Aplicación de archivo único con generación de enlaces codificados cliente/servidor sin almacenamiento en base de datos.',
          stack: ['JavaScript', 'Single-File App', 'URL Encoding'],
          accent: 'blue',
        },
      ],
    },
    experience: {
      sectionIndex: '04',
      sectionTag: 'TRAYECTORIA',
      title: 'Formación, competencias y experiencia',
      subtitle:
        'Un recorrido que combina rigor académico, maratones de innovación de alto rendimiento e iniciativa emprendedora.',
      blockLabel: 'Bloque',
      blocks: [
        {
          id: 'academica',
          blockTitle: 'Formación Académica',
          blockIndex: '01',
          accent: 'blue',
          items: [
            {
              title: 'Ingeniería en Sistemas',
              organization:
                'Universidad Nacional Autónoma de Nicaragua (UNAN-León)',
              period: 'En curso',
              description:
                'Formación integral en arquitectura de software, ingeniería de requerimientos, estructuras de datos, bases de datos relacionales y sistemas operativos.',
              badge: 'Carrera Universitaria',
            },
          ],
        },
        {
          id: 'competencias',
          blockTitle: 'Competencias de Innovación y Hackathons',
          blockIndex: '02',
          accent: 'purple',
          items: [
            {
              title: 'Hackathon Nicaragua',
              organization: 'Edición 2026 — Equipo Sinskira',
              period: '2026',
              description:
                'Desarrollo ágil de soluciones tecnológicas en tiempos limitados bajo trabajo en equipo multidisciplinario.',
              badge: 'Equipo Sinskira',
            },
            {
              title: 'Rally Latinoamericano de Innovación',
              organization: 'UNAN-León',
              period: '2024 • 2025 • 2026',
              description:
                'Resolución intensiva de desafíos tecnológicos de 28 horas continuas.',
              badge: '3 Ediciones',
            },
          ],
        },
        {
          id: 'emprendimiento',
          blockTitle: 'Experiencia Emprendedora y Multimedia',
          blockIndex: '03',
          accent: 'crimson',
          items: [
            {
              title: 'Fundador de Untrends',
              organization: 'E-Commerce Universitario',
              period: 'Emprendimiento Propio',
              description:
                'Gestión integral de marca, catálogo digital y atención al cliente en emprendimiento de comercio electrónico para el sector universitario.',
              badge: 'Liderazgo & Negocio',
            },
            {
              title: 'Edición de Contenido y Multimedia',
              organization:
                'Programa Gamers en Acción por Tigo / Elemental School',
              period: 'Certificado',
              description:
                'Certificado en edición de video para redes sociales (Programa Gamers en Acción por Tigo / Elemental School); diseño de recursos visuales con Canva y CapCut.',
              badge: 'Canva & CapCut',
            },
          ],
        },
      ],
    },
    contact: {
      sectionIndex: '05',
      sectionTag: 'CONTACTO',
      title: 'Construyamos algo memorable',
      message:
        '¿Tienes un proyecto en mente, buscas colaborar en el desarrollo de una aplicación o quieres conectar sobre tecnología? Hablemos.',
      directResponseBadge: 'RESPUESTA DIRECTA',
      emailLabel: 'Correo Electrónico',
      sendEmailButton: 'Enviar Correo',
      copyEmailButton: 'Copiar Correo',
      copiedFeedback: '¡Copiado!',
      email: 'bjesushc2006@gmail.com',
      socials: [
        {
          id: 'github',
          name: 'GitHub',
          handle: 'Marck2-006',
          url: 'https://github.com/Marck2-006',
          description: 'Repositorios, experimentos y código fuente.',
        },
        {
          id: 'instagram',
          name: 'Instagram',
          handle: '@marck__2',
          url: 'https://www.instagram.com/marck__2?fqnt=dGZrbmVmYXN6aWpl',
          description: 'Proceso creativo, tecnología y día a día.',
        },
      ],
    },
    footer: {
      navAriaLabel: 'Enlaces del pie de página',
      backToTopAriaLabel: 'Volver al inicio',
      backToTopLabel: 'Inicio',
      copyrightSuffix:
        'Bismarck Hernández Castellón (@Marck). Diseñado y programado en React & Tailwind CSS.',
    },
  },

  en: {
    meta: {
      title: 'Bismarck Hernández Castellón (@Marck) | Full-Stack Developer',
      description:
        'Professional portfolio of Bismarck Hernández Castellón (Marck) — Full-Stack Developer and Systems Engineering student at UNAN-León.',
    },
    nav: {
      ariaLabel: 'Main navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      languageSwitcherLabel: 'Language selector',
      links: [
        { id: 'inicio', label: 'Home', href: '#inicio' },
        { id: 'sobre-mi', label: 'About', href: '#sobre-mi' },
        { id: 'habilidades', label: 'Skills', href: '#habilidades' },
        { id: 'proyectos', label: 'Projects', href: '#proyectos' },
        { id: 'trayectoria', label: 'Experience', href: '#trayectoria' },
        { id: 'contacto', label: 'Contact', href: '#contacto' },
      ],
    },
    hero: {
      availabilityBadge: 'Available for projects & collaborations',
      firstName: 'Bismarck',
      lastName: 'Hernández Castellón',
      handle: '@Marck',
      subtitle: 'Developer • Creator • Dreamer',
      quote: 'Turning ideas into code and beyond',
      role: 'Full-Stack Developer & Systems Engineering Student.',
      valueProposition:
        'I turn complex ideas into production-ready web applications, secure databases, and automated workflows that solve real-world problems.',
      primaryCta: {
        label: 'View Projects',
        href: '#proyectos',
      },
      secondaryCta: {
        label: 'Get in Touch',
        href: '#contacto',
      },
      githubUrl: 'https://github.com/Marck2-006',
      bannerAlt: 'Bismarck Hernández Castellón — Editorial noir developer banner',
      coreStackLabel: 'Core Stack //',
      scrollAriaLabel: 'Scroll to About section',
      scrollLabel: 'Scroll',
      techBarLabels: {
        code: 'Full-Stack Code',
        flutter: 'Flutter & Dart',
        github: 'GitHub — Marck2-006',
        terminal: 'Linux & Systems',
      },
    },
    about: {
      sectionIndex: '01',
      sectionTag: 'ABOUT ME',
      title: 'Clean code, solid architecture, and real-world solutions',
      cardHeader: 'WHO AM I?',
      locationBadge: 'UNAN-LEÓN // NI',
      paragraphs: [
        'I am a Systems Engineering student at UNAN-León and a software developer passionate about Full-Stack engineering and cross-platform mobile development. My work focuses on building efficient applications that pair responsive user interfaces with solid backend architectures, security-first relational databases, and intelligent workflow automation. I approach programming as a discipline for solving concrete problems methodically and at scale.',
        'My experience has been sharpened in high-intensity environments through active participation in innovation marathons and hackathons, where agility and sharp requirements analysis are essential. I combine rigorous engineering logic with a strong sensitivity to user experience and an entrepreneurial mindset focused on delivering tangible value.',
      ],
      tags: [
        'Full-Stack Web',
        'Cross-Platform Flutter',
        'RLS Security & Automation',
      ],
      pillars: [
        {
          index: 'VOL. 01',
          title: 'Programming',
          subtitle: 'Architecture & Clean Code',
          description:
            'Full-Stack web systems, cross-platform mobile apps, and secure relational databases engineered to scale.',
          accent: 'blue',
        },
        {
          index: 'VOL. 02',
          title: 'Innovation',
          subtitle: 'Agility & Real-World Solutions',
          description:
            'Rapid prototyping, systems thinking, and high-stakes delivery in hackathons and innovation marathons.',
          accent: 'purple',
        },
        {
          index: 'VOL. 03',
          title: 'Technology',
          subtitle: 'Automation & Future-Ready Stack',
          description:
            'Workflow orchestration with n8n, Linux environments, and continuous adoption of modern, high-impact tooling.',
          accent: 'crimson',
        },
      ],
    },
    skills: {
      sectionIndex: '02',
      sectionTag: 'SKILLS & STACK',
      title: 'Results-driven technical ecosystem',
      subtitle:
        'The tools, languages, and methodologies I use to design, build, and automate modern software.',
      filterAriaLabel: 'Filter skills by category',
      activeLearningBadge: 'Active',
      filters: [
        { id: 'all', label: 'All' },
        { id: 'frontend', label: 'Frontend & Mobile' },
        { id: 'backend', label: 'Backend & Data' },
        { id: 'devops', label: 'DevOps & Design' },
      ],
      items: [
        {
          id: 'frontend-ui',
          category: 'Frontend & UI',
          group: 'frontend',
          icon: 'Layout',
          description:
            'Building responsive, adaptive web interfaces engineered for seamless usability.',
          items: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'UIkit'],
          span: 'md:col-span-2',
          accent: 'blue',
        },
        {
          id: 'mobile-dev',
          category: 'Mobile Development',
          group: 'frontend',
          icon: 'Smartphone',
          description:
            'Developing cross-platform mobile apps with fluid, responsive interfaces.',
          items: ['Flutter', 'Dart'],
          span: 'md:col-span-1',
          accent: 'blue',
        },
        {
          id: 'active-learning',
          category: 'Currently Learning',
          group: 'frontend',
          icon: 'Sparkles',
          description:
            'Building modern component-driven web interfaces and managing application state.',
          items: ['React'],
          span: 'md:col-span-1',
          accent: 'crimson',
          isActiveLearning: true,
        },
        {
          id: 'databases',
          category: 'Databases',
          group: 'backend',
          icon: 'Database',
          description:
            'Relational schema design, Row-Level Security (RLS), triggers, and data auditing.',
          items: ['PostgreSQL', 'MySQL', 'Supabase'],
          span: 'md:col-span-2',
          accent: 'purple',
        },
        {
          id: 'backend-logic',
          category: 'Backend & Core Logic',
          group: 'backend',
          icon: 'Cpu',
          description:
            'Developing structured business logic and resilient software applications.',
          items: ['C# (.NET)', 'C', 'SQL'],
          span: 'md:col-span-1',
          accent: 'blue',
        },
        {
          id: 'automation',
          category: 'Automation',
          group: 'backend',
          icon: 'Workflow',
          description:
            'Connecting services, orchestrating workflows, and building automated assistants.',
          items: ['n8n', 'Webhooks'],
          span: 'md:col-span-2',
          accent: 'purple',
        },
        {
          id: 'devops',
          category: 'Environment & DevOps',
          group: 'devops',
          icon: 'Terminal',
          description:
            'Structured version control and efficient server environment administration.',
          items: ['Git (Git Bash, GitKraken)', 'VS Code', 'JetBrains', 'Linux'],
          span: 'md:col-span-2',
          accent: 'blue',
        },
        {
          id: 'design-methodologies',
          category: 'Design & Methodologies',
          group: 'devops',
          icon: 'Compass',
          description:
            'System modeling, software architecture, agile workflows, and prototyping.',
          items: ['Figma', 'DBML', 'PlantUML', 'Dia', 'Scrum', 'Logisim Evolution'],
          span: 'md:col-span-1',
          accent: 'purple',
        },
      ],
    },
    projects: {
      sectionIndex: '03',
      sectionTag: 'FEATURED PROJECTS',
      title: 'Architecture applied to real-world problems',
      subtitle:
        'From cultural preservation backed by row-level security to self-hosted automation pipelines and hackathon prototypes.',
      featuredSectionLabel: 'A // Core Projects',
      prototypesSectionLabel: 'B // Prototypes & Additional Initiatives',
      technicalFocusLabel: 'Technical Focus',
      impactArchitectureLabel: 'Impact & Architecture',
      featured: [
        {
          id: 'nicalingo',
          index: '01',
          title: 'Nicalingo',
          category: 'Cultural Preservation • Web Platform',
          enfoqueTecnico:
            'Web platform dedicated to preserving Nicaraguan indigenous languages (Miskito, Garífuna, Creole, Mayagna, Rama, and Ulwa).',
          impactoArquitectura:
            'Built with Supabase and PostgreSQL, enforcing advanced Row-Level Security (RLS) policies to guarantee secure, structured access to educational modules.',
          stack: ['Supabase', 'PostgreSQL', 'Row-Level Security (RLS)', 'Web App'],
          accent: 'blue',
          highlights: ['6 Indigenous Languages', 'RLS Security', 'Learning Modules'],
        },
        {
          id: 'asistente-tareas',
          index: '02',
          title: 'Personal Task Management Assistant',
          category: 'Automation • Productivity',
          enfoqueTecnico: 'Personal productivity automation system.',
          impactoArquitectura:
            'Automated workflows built on self-hosted n8n deployed on Render.com, synced directly with a PostgreSQL database hosted on Supabase.',
          stack: ['n8n', 'Render.com', 'PostgreSQL', 'Supabase', 'Webhooks'],
          accent: 'purple',
          highlights: ['Self-Hosted n8n', 'DB Sync', 'Automated Workflows'],
        },
      ],
      prototypes: [
        {
          id: 'med-ia',
          title: 'Med-IA',
          tag: 'Hackathon • AI',
          description:
            'AI-powered medical assistance solution developed during a hackathon.',
          stack: ['Artificial Intelligence', 'Rapid Prototyping', 'Digital Health'],
          accent: 'crimson',
        },
        {
          id: 'ruta-salvaje',
          title: 'Ruta Salvaje',
          tag: 'MVP • Tourism',
          description:
            'Functional prototype (MVP) for an adventure tourism platform.',
          stack: ['MVP', 'Responsive UI', 'Tourism'],
          accent: 'blue',
        },
        {
          id: 'mi-cazuela',
          title: 'Mi Cazuela',
          tag: 'Frontend • Web',
          description:
            'Recipe web application with an adaptive layout built using HTML, CSS, and Bootstrap.',
          stack: ['HTML5', 'CSS3', 'Bootstrap'],
          accent: 'purple',
        },
        {
          id: 'amigo-secreto',
          title: 'Secret Santa Web',
          tag: 'Zero-DB • Single File',
          description:
            'Single-file web app generating client/server encoded links with zero database storage.',
          stack: ['JavaScript', 'Single-File App', 'URL Encoding'],
          accent: 'blue',
        },
      ],
    },
    experience: {
      sectionIndex: '04',
      sectionTag: 'EXPERIENCE',
      title: 'Education, competitions & experience',
      subtitle:
        'A journey combining academic rigor, high-intensity innovation marathons, and entrepreneurial drive.',
      blockLabel: 'Block',
      blocks: [
        {
          id: 'academica',
          blockTitle: 'Education',
          blockIndex: '01',
          accent: 'blue',
          items: [
            {
              title: 'B.S. in Systems Engineering',
              organization:
                'National Autonomous University of Nicaragua (UNAN-León)',
              period: 'In Progress',
              description:
                'Comprehensive training in software architecture, requirements engineering, data structures, relational databases, and operating systems.',
              badge: 'Undergraduate Degree',
            },
          ],
        },
        {
          id: 'competencias',
          blockTitle: 'Innovation Competitions & Hackathons',
          blockIndex: '02',
          accent: 'purple',
          items: [
            {
              title: 'Hackathon Nicaragua',
              organization: '2026 Edition — Team Sinskira',
              period: '2026',
              description:
                'Agile development of technical solutions under tight deadlines within a multidisciplinary team.',
              badge: 'Team Sinskira',
            },
            {
              title: 'Latin American Innovation Rally',
              organization: 'UNAN-León',
              period: '2024 • 2025 • 2026',
              description:
                'Intensive problem-solving across 28-hour continuous technology innovation challenges.',
              badge: '3 Editions',
            },
          ],
        },
        {
          id: 'emprendimiento',
          blockTitle: 'Entrepreneurship & Multimedia',
          blockIndex: '03',
          accent: 'crimson',
          items: [
            {
              title: 'Founder of Untrends',
              organization: 'University E-Commerce',
              period: 'Founder & Operator',
              description:
                'End-to-end brand management, digital catalog operations, and customer support for a university-focused e-commerce venture.',
              badge: 'Leadership & Business',
            },
            {
              title: 'Content Editing & Multimedia',
              organization:
                'Gamers en Acción Program by Tigo / Elemental School',
              period: 'Certified',
              description:
                'Certified in social media video editing (Gamers en Acción Program by Tigo / Elemental School); visual asset production using Canva and CapCut.',
              badge: 'Canva & CapCut',
            },
          ],
        },
      ],
    },
    contact: {
      sectionIndex: '05',
      sectionTag: 'CONTACT',
      title: 'Let’s build something memorable',
      message:
        'Have a project in mind, looking to collaborate on an application, or just want to connect over tech? Let’s talk.',
      directResponseBadge: 'DIRECT RESPONSE',
      emailLabel: 'Email Address',
      sendEmailButton: 'Send Email',
      copyEmailButton: 'Copy Email',
      copiedFeedback: 'Copied!',
      email: 'bjesushc2006@gmail.com',
      socials: [
        {
          id: 'github',
          name: 'GitHub',
          handle: 'Marck2-006',
          url: 'https://github.com/Marck2-006',
          description: 'Repositories, experiments, and source code.',
        },
        {
          id: 'instagram',
          name: 'Instagram',
          handle: '@marck__2',
          url: 'https://www.instagram.com/marck__2?fqnt=dGZrbmVmYXN6aWpl',
          description: 'Creative process, tech, and day-to-day updates.',
        },
      ],
    },
    footer: {
      navAriaLabel: 'Footer navigation links',
      backToTopAriaLabel: 'Back to top',
      backToTopLabel: 'Top',
      copyrightSuffix:
        'Bismarck Hernández Castellón (@Marck). Designed and built with React & Tailwind CSS.',
    },
  },
};

export const navLinks = portfolioContent.es.nav.links;
export const heroData = portfolioContent.es.hero;
export const aboutData = portfolioContent.es.about;
export const skillFilters = portfolioContent.es.skills.filters;
export const skillsData = portfolioContent.es.skills.items;
export const projectsData = portfolioContent.es.projects;
export const experienceData = portfolioContent.es.experience.blocks;
export const contactData = portfolioContent.es.contact;
