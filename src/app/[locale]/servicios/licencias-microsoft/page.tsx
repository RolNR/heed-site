import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHeader, Section, SectionHeader, Button, Card, FeatureList, IconMicrosoft, IconServer, IconDatabase, IconCloud } from '@/components/ui';
import { getPageMetadata } from '@/lib/seo';
import JsonLd, { createServiceSchema } from '@/components/seo/JsonLd';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return getPageMetadata({ locale, path: '/servicios/licencias-microsoft', translationKey: 'pages.microsoft' });
}

const microsoftServiceSchema = createServiceSchema({
  name: 'Licencias Microsoft - Indirect Reseller Oficial',
  description: 'Licencias originales de Microsoft 365, Windows Server, SQL Server y Azure con precios competitivos para PYMEs en México.',
  url: 'https://heed.mx/servicios/licencias-microsoft',
});

const licenseIcons = [
  <IconMicrosoft key="0" size={32} />,
  <IconServer key="1" size={32} />,
  <IconDatabase key="2" size={32} />,
  <IconCloud key="3" size={32} />,
];

function MicrosoftLicensesContent() {
  const t = useTranslations('services.microsoft');
  const p = useTranslations('pages.microsoft');

  const licenses = p.raw('licenses') as Array<{ category: string; products: string[] }>;
  const advantages = p.raw('advantages') as Array<{ title: string; description: string }>;

  return (
    <div className="pt-20">
      <JsonLd data={microsoftServiceSchema} />
      <PageHeader
        gradient="orange"
        badge={t('subtitle')}
        title={t('title')}
        description={t('description')}
      />

      <Section background="white">
        <SectionHeader title={p('catalogTitle')} />
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {licenses.map((license, index) => (
            <Card key={index} variant="bordered">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                  {licenseIcons[index]}
                </div>
                <h3 className="text-xl font-bold text-dark-900 pt-3">
                  {license.category}
                </h3>
              </div>
              <FeatureList features={license.products} color="orange" />
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <SectionHeader title={p('advantagesTitle')} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl shadow-md flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-600">{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-dark-900 mb-2">{advantage.title}</h3>
              <p className="text-dark-600 text-sm">{advantage.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="py-12 sm:py-16 md:py-24 bg-orange-600">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            {p('ctaTitle')}
          </h2>
          <p className="text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            {p('ctaDescription')}
          </p>
          <Button href="/contacto?service=licenses" variant="white" size="lg" withArrow>
            {p('ctaButton')}
          </Button>
        </div>
      </section>
    </div>
  );
}

export default async function MicrosoftLicensesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <MicrosoftLicensesContent />;
}
