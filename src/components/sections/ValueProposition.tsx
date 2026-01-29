'use client';

import { useTranslations } from 'next-intl';
import { IconUsers, IconMicrosoft, IconLocation, IconBadge } from '@/components/ui';

const icons = [
  <IconUsers key="0" size={32} />,
  <IconMicrosoft key="1" size={32} />,
  <IconLocation key="2" size={32} />,
  <IconBadge key="3" size={32} />,
];

export default function ValueProposition() {
  const t = useTranslations('valueProposition');

  const items = t.raw('items') as Array<{ title: string; description: string }>;

  return (
    <section className="section-padding bg-dark-50">
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

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl shadow-md flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                {icons[index]}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-dark-900 mb-2">
                {item.title}
              </h3>
              <p className="text-dark-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
