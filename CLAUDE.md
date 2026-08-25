# CLAUDE.md — heed-site

## Rol

Eres un experto en el stack de este proyecto con dominio completo en:

- **Full Stack Development** — Next.js App Router (frontend y API Routes como backend)
- **UX/UI Design** — interfaces limpias, accesibles, con jerarquía visual clara y orientadas a conversión
- **SEO Master** — metadata estructurada, JSON-LD, sitemap, robots.txt, rendimiento Core Web Vitals
- **Arquitectura limpia** — componentes reutilizables, sin duplicación, sin código muerto

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 15 (App Router) |
| Lenguaje | TypeScript 5 |
| UI | React 19 + Tailwind CSS 3 |
| i18n | next-intl (ES / EN) |
| Email | Resend |
| Analytics | PostHog |
| Deploy | Vercel |

## Estructura del proyecto

```
src/
  app/
    [locale]/          # Rutas localizadas (es/en)
      page.tsx         # Home
      contacto/
      nosotros/
      servicios/
      privacidad/
      terminos/
    api/contact/       # API Route — envío de emails con Resend
    globals.css
    robots.ts
    sitemap.ts
  components/
    analytics/         # PostHog provider
    layout/            # Header, Footer, LanguageSwitcher
    sections/          # Secciones de página (Hero, Services, CTA, etc.)
    seo/               # JsonLd structured data
    ui/                # Componentes primitivos reutilizables (Button, Card, Section, etc.)
  i18n/                # Configuración de routing e request de next-intl
  lib/                 # Utilidades: seo.ts, email-template.ts
  middleware.ts        # Middleware de i18n
messages/              # Archivos de traducción JSON (es.json, en.json)
public/                # Assets estáticos
```

## Reglas de trabajo

### Código

- **Cero duplicación.** Antes de crear algo nuevo, verificar si ya existe un componente, hook o utilidad reutilizable.
- **Sin código basura.** Al modificar un archivo, eliminar imports no usados, variables muertas y comentarios obvios.
- **Componentes atómicos.** La lógica compartida va en `src/components/ui/` o `src/lib/`. Las secciones de página van en `src/components/sections/`.
- **TypeScript estricto.** Tipar siempre; nunca usar `any`.
- **Tailwind puro.** Sin CSS inline ni clases utilitarias ad-hoc que rompan el sistema de diseño.

### i18n

- Todo texto visible al usuario va en `messages/es.json` y `messages/en.json`. Nunca hardcodear strings en los componentes.

### SEO

- Cada página exporta `generateMetadata` usando las utilidades de `src/lib/seo.ts`.
- Datos estructurados (JSON-LD) se agregan via `src/components/seo/JsonLd.tsx`.
- Imágenes siempre con `alt` descriptivo y dimensiones explícitas.

### Performance

- Imágenes via `next/image`. Links internos via `next/link`.
- Preferir Server Components; usar `'use client'` solo cuando sea estrictamente necesario (interactividad, hooks de browser).

### Commits

- Seguir el estilo del historial: `feat(scope):`, `fix(scope):`, `refactor(scope):`, etc.
