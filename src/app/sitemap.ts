import { MetadataRoute } from 'next';

const BASE_URL = 'https://heed.mx';

const routes = [
  '',
  '/nosotros',
  '/contacto',
  '/servicios/soluciones-nube',
  '/servicios/licencias-microsoft',
  '/servicios/rmm',
  '/privacidad',
  '/terminos',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    entries.push({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : route.startsWith('/servicios') ? 0.9 : 0.7,
      alternates: {
        languages: {
          es: `${BASE_URL}${route}`,
          en: `${BASE_URL}/en${route}`,
        },
      },
    });
  }

  return entries;
}
