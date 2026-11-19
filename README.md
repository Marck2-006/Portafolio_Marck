# Portafolio Personal — Bismarck Hernández Castellón (`@Marck`)

Portafolio web profesional de **Bismarck Hernández Castellón (Marck)**, estudiante de **Ingeniería en Sistemas** en la UNAN-León y desarrollador enfocado en **Full-Stack Web**, **desarrollo móvil multiplataforma (Flutter)**, bases de datos relacionales orientadas a seguridad y automatización de flujos de trabajo.

![React](https://img.shields.io/badge/React-19-0D0D14?style=flat-square&logo=react&logoColor=3B82F6)
![Vite](https://img.shields.io/badge/Vite-8-0D0D14?style=flat-square&logo=vite&logoColor=8B5CF6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-0D0D14?style=flat-square&logo=tailwindcss&logoColor=38BDF8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-14-0D0D14?style=flat-square&logo=framer&logoColor=FFFFFF)
![ESLint](https://img.shields.io/badge/ESLint-10-0D0D14?style=flat-square&logo=eslint&logoColor=8B5CF6)

---

## Características principales

- **Estética Noir Editorial y Neofuturismo Sobrio:** Paleta oscura basada en negro obsidiana (`#050508`) y grafito translúcido (`#0D0D14`) con acentos tácticos en azul eléctrico, violeta y carmesí, tarjetas interactivas con efecto *spotlight* dinámico (`SpotlightCard`) y tipografía técnica (`Space Grotesk`, `Inter` y `JetBrains Mono`).
- **Internacionalización `ES // EN` sin recarga:** Cambio instantáneo entre español (por defecto) e inglés técnico desde la barra superior mediante `LanguageContext`, con persistencia en `localStorage` y sincronización automática del atributo `lang` en `<html>`, título y metadescripción.
- **Animación de entrada colaborativa estilo Figma/Canva:** Coreografía de 10 segundos en 4 fases con cursores multijugador (`Marck · Dev`, `UI / Design`, `Backend`, `QA`), marcos de selección con medidas dinámicas en `px`, líneas guía de alineación (*snap lines*) y burbuja de comentario resoluble. Optimizada a 60fps (`transform` y `opacity`), con opción inmediata de salto (`Saltar intro` / `ESC`) y respeto a `prefers-reduced-motion`.
- **Diseño responsivo Mobile-First:** Navegación flotante con indicador de sección activa (`IntersectionObserver`) y menú móvil animado, Bento Grid de habilidades con filtros interactivos (`layoutId`), proyectos destacados, línea de tiempo de trayectoria y contacto con copiado de correo al portapapeles.
- **Identidad de marca en navegador:** Monograma geométrico `"M"` en `favicon.svg`, respaldo multi-resolución `favicon.ico`, `apple-touch-icon.png` y `site.webmanifest`.

---

## Stack tecnológico

| Categoría | Tecnologías |
| :--- | :--- |
| **Core & UI** | React 19, React DOM 19 |
| **Estilos** | Tailwind CSS 4 (`@tailwindcss/vite`), CSS personalizado |
| **Animaciones** | Framer Motion 14 |
| **Iconografía** | Lucide React, SVG vectoriales propios |
| **Build & Tooling** | Vite 8, `@vitejs/plugin-react` |
| **Calidad de código** | ESLint 10, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` |

---

## Instalación y uso local

### Requisitos previos
- Node.js (v20 o superior recomendado)
- npm

### Comandos

```bash
# Clonar el repositorio
git clone https://github.com/Marck2-006/Portafolio_Marck.git
cd Portafolio_Marck

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar el build de producción
npm run preview

# Ejecutar análisis estático con ESLint
npm run lint
```

---

## Estructura del proyecto

```text
.
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── public/
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── icon-192.png
│   ├── icon-512.png
│   └── site.webmanifest
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── assets/
    │   └── hero-banner.jpg
    ├── context/
    │   └── LanguageContext.jsx
    ├── data/
    │   └── portfolioData.js
    └── components/
        ├── CollabIntroOverlay.jsx
        ├── SpotlightCard.jsx
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

---

## Contacto

- **Correo:** [bjesushc2006@gmail.com](mailto:bjesushc2006@gmail.com)
- **GitHub:** [github.com/Marck2-006](https://github.com/Marck2-006)
- **Instagram:** [@marck__2](https://www.instagram.com/marck__2?fqnt=dGZrbmVmYXN6aWpl)
