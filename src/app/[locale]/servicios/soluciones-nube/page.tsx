import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHeader, Section, SectionHeader, Button, Card, CardIcon, CardTitle, CardContent, FeatureList, IconCurrency, IconUsers, IconBolt } from '@/components/ui';
import { getPageMetadata } from '@/lib/seo';
import JsonLd, { createServiceSchema } from '@/components/seo/JsonLd';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return getPageMetadata({ locale, path: '/servicios/soluciones-nube', translationKey: 'pages.cloud' });
}

const cloudServiceSchema = createServiceSchema({
  name: 'Soluciones en la Nube - ERP y CRM Microsoft',
  description: 'Implementación de Microsoft Dynamics 365 Business Central y Sales para optimizar las operaciones de PYMEs en México.',
  url: 'https://heed.mx/servicios/soluciones-nube',
});

const solutionIcons = [
  <IconCurrency key="0" size={32} />,
  <IconUsers key="1" size={32} />,
  <IconBolt key="2" size={32} />,
];

function CloudSolutionsContent() {
  const t = useTranslations('services.cloud');
  const p = useTranslations('pages.cloud');

  const solutions = p.raw('solutions') as Array<{ name: string; description: string }>;
  const benefits = p.raw('benefits') as string[];

  return (
    <div className="pt-20">
      <JsonLd data={cloudServiceSchema} />
      <PageHeader
        gradient="blue"
        badge={t('subtitle')}
        title={t('title')}
        description={t('description')}
      />

      <Section background="white">
        <SectionHeader title={p('solutionsTitle')} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} variant="bordered">
              <CardIcon color="bg-blue-100 text-blue-600">
                {solutionIcons[index]}
              </CardIcon>
              <CardTitle>{solution.name}</CardTitle>
              <CardContent>{solution.description}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-900 mb-4 sm:mb-6">
              {p('benefitsTitle')}
            </h2>
            <FeatureList features={benefits} color="green" />
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl lg:rounded-3xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{p('whyUsTitle')}</h3>
            <p className="text-blue-100 mb-4 sm:mb-6 text-sm sm:text-base">
              {p('whyUsDescription')}
            </p>
            <Button href="/contacto" variant="white" withArrow>
              {p('ctaButton')}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default async function CloudSolutionsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CloudSolutionsContent />;
}
