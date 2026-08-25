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
- Un cambio lógico por commit (no mezclar docs + fixes + features en uno solo).

### Lint

- `npm run lint` corre sobre `eslint.config.mjs` (flat config, `next/core-web-vitals` + `next/typescript`). Antes de que este archivo existiera, `next lint` caía en un wizard interactivo que se cuelga fuera de una terminal (CI, hooks, agentes) — si algún día se borra o rompe este archivo, restaurarlo en vez de dejar que el wizard decida.

### API `/api/contact`

- Tiene rate limiting en memoria (5 req / 10 min por IP) y un campo honeypot (`website`) en `ContactForm.tsx` — no quitarlos sin reemplazo equivalente, es la única protección anti-spam del formulario público.
- El rate limiter es en memoria por instancia (se resetea en cold start); es suficiente para el tráfico actual pero no es a prueba de instancias múltiples. Si el tráfico crece, migrar a un store compartido (Upstash Redis vía Vercel Marketplace) en vez de escalar el Map.
- Los errores 500 nunca deben devolver el mensaje crudo del error al cliente (ver `catch` en `route.ts`) — solo loguear server-side.

## Pendientes conocidos (actualizado 2026-08-25)

- **`CaseStudies.tsx` / `messages/{es,en}.json` → `caseStudies.cases`**: los 3 casos de éxito (Distribuidora del Norte, Grupo Médico Integral, Textiles Modernos MX) tienen nombres, cifras y testimonios que parecen ficticios, no clientes reales de HEED. Publicar prueba social inventada con nombres propios es riesgoso — reemplazar con casos reales o quitar la sección hasta tenerlos.
- **Footer / redes sociales**: solo hay link a Facebook, a propósito — no agregar LinkedIn hasta tener un plan de contenido/publicaciones para esa red (decisión explícita del usuario, no un olvido).
