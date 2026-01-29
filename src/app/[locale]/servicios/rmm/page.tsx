import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { PageHeader, Section, SectionHeader, Card, CardIcon, IconClock, IconShield, IconBell, IconMonitor, IconList, IconChart, IconCheck, IconArrowRight } from '@/components/ui';
import RMMProcess from '@/components/sections/RMMProcess';

const featureIcons = [
  <IconClock key="0" size={32} />,
  <IconShield key="1" size={32} />,
  <IconList key="2" size={32} />,
  <IconMonitor key="3" size={32} />,
  <IconBell key="4" size={32} />,
  <IconChart key="5" size={32} />,
];

function RMMServicesContent() {
  const t = useTranslations('services.rmm');
  const p = useTranslations('pages.rmm');

  const features = p.raw('features') as Array<{ title: string; description: string }>;
  const plans = p.raw('plans') as Array<{
    name: string;
    description: string;
    devices: string;
    features: string[];
  }>;

  return (
    <div className="pt-20">
      <PageHeader
        gradient="green"
        badge={t('subtitle')}
        title={t('title')}
        description={t('description')}
        cta={{ label: p('ctaLabel'), href: '/contacto?demo=rmm' }}
      />

      <Section background="white">
        <SectionHeader
          title={p('featuresTitle')}
          subtitle={p('featuresSubtitle')}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} variant="bordered" padding="md">
              <CardIcon color="bg-green-100 text-green-600" className="w-12 h-12 mb-4">
                {featureIcons[index]}
              </CardIcon>
              <h3 className="text-lg font-bold text-dark-900 mb-2">{feature.title}</h3>
              <p className="text-dark-600 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <RMMProcess />

      <Section background="white">
        <SectionHeader
          title={p('pricingTitle')}
          subtitle={p('pricingSubtitle')}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const isPopular = index === 1;
            return (
              <div
                key={index}
                className={`rounded-xl sm:rounded-2xl p-6 sm:p-8 ${
                  isPopular
                    ? 'bg-green-600 text-white ring-4 ring-green-300 sm:scale-105'
                    : 'bg-white border-2 border-dark-200'
                }`}
              >
                {isPopular && (
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                    {p('mostPopular')}
                  </span>
                )}
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-dark-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs sm:text-sm mb-3 sm:mb-4 ${isPopular ? 'text-green-100' : 'text-dark-500'}`}>
                  {plan.description}
                </p>
                <p className={`text-base sm:text-lg font-semibold mb-4 sm:mb-6 ${isPopular ? 'text-white' : 'text-dark-700'}`}>
                  {plan.devices}
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <IconCheck
                        size={18}
                        className={`mr-2 flex-shrink-0 mt-0.5 ${isPopular ? 'text-green-200' : 'text-green-500'}`}
                      />
                      <span className={`text-xs sm:text-sm ${isPopular ? 'text-green-50' : 'text-dark-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contacto?demo=rmm"
                  className={`block text-center py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-colors ${
                    isPopular
                      ? 'bg-white text-green-700 hover:bg-green-50'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {p('requestQuote')}
                </Link>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Portal de Clientes */}
      <Section background="gray">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark-900 mb-3 sm:mb-4">
            {p('portalTitle')}
          </h2>
          <p className="text-sm sm:text-base text-dark-600 mb-6 sm:mb-8">
            {p('portalDescription')}
          </p>
          <a
            href="https://heed.rmmservice.com/auth/#/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm sm:text-base"
          >
            {p('portalButton')}
            <IconArrowRight size={18} className="ml-2 sm:hidden" />
            <IconArrowRight size={20} className="ml-2 hidden sm:block" />
          </a>
        </div>
      </Section>
    </div>
  );
}

export default async function RMMServicesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <RMMServicesContent />;
}
