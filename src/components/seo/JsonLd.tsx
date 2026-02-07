type JsonLdProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HEED',
  url: 'https://heed.mx',
  logo: 'https://heed.mx/logo.svg',
  description:
    'Partner Microsoft y proveedor de soluciones en la nube, ERPs, CRMs, licencias Microsoft y servicios RMM para PYMEs en México.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ciudad de México',
    addressCountry: 'MX',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+52-1-55-8644-3982',
    contactType: 'sales',
    email: 'contacto@heed.mx',
    availableLanguage: ['Spanish', 'English'],
  },
  sameAs: [],
};

export function createServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: 'HEED',
      url: 'https://heed.mx',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Mexico',
    },
  };
}
