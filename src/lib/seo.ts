import { Metadata } from 'next';
import { getMessages } from 'next-intl/server';

type PageMetadataConfig = {
  locale: string;
  path: string;
  translationKey: string;
};

export async function getPageMetadata({
  locale,
  path,
  translationKey,
}: PageMetadataConfig): Promise<Metadata> {
  const messages = await getMessages({ locale });

  const keys = translationKey.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let section: any = messages;
  for (const key of keys) {
    section = section?.[key];
  }

  const metadata = section?.metadata as
    | { title: string; description: string; keywords?: string }
    | undefined;

  if (!metadata) return {};

  const url = locale === 'es' ? `https://heed.mx${path}` : `https://heed.mx/en${path}`;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: path,
      languages: {
        es: path,
        en: `/en${path}`,
      },
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url,
      locale: locale === 'es' ? 'es_MX' : 'en_US',
    },
    twitter: {
      title: metadata.title,
      description: metadata.description,
    },
  };
}
