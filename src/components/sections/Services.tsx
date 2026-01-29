'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { IconCloud, IconMicrosoft, IconMonitor, IconCheck, IconArrowRight } from '@/components/ui';

const serviceIcons = {
  cloud: <IconCloud size={48} />,
  microsoft: <IconMicrosoft size={48} />,
  rmm: <IconMonitor size={48} />,
};

const serviceLinks = {
  cloud: '/servicios/soluciones-nube',
  microsoft: '/servicios/licencias-microsoft',
  rmm: '/servicios/rmm',
};

const serviceColors = {
  cloud: 'from-blue-500 to-cyan-500',
  microsoft: 'from-orange-500 to-red-500',
  rmm: 'from-green-500 to-emerald-500',
};

export default function Services() {
  const t = useTranslations('services');

  const services = ['cloud', 'microsoft', 'rmm'] as const;

  return (
    <section className="section-padding bg-white" id="servicios">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-dark-600">
            {t('subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service}
              className="group card-bordered p-8 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${serviceColors[service]} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {serviceIcons[service]}
              </div>

              {/* Content */}
              <div className="mb-6">
                <p className="text-sm font-medium text-primary-600 mb-1">
                  {t(`${service}.subtitle`)}
                </p>
                <h3 className="text-xl font-bold text-dark-900 mb-3">
                  {t(`${service}.title`)}
                </h3>
                <p className="text-dark-600 text-sm leading-relaxed">
                  {t(`${service}.description`)}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {(t.raw(`${service}.features`) as string[]).map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-dark-600">
                    <IconCheck size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={serviceLinks[service]}
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group/link"
              >
                {t(`${service}.cta`)}
                <IconArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
