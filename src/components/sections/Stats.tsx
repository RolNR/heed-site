'use client';

import { useTranslations } from 'next-intl';

export default function Stats() {
  const t = useTranslations('stats');

  const stats = [
    { value: t('clients'), label: t('clientsLabel') },
    { value: t('uptime'), label: t('uptimeLabel') },
    { value: t('response'), label: t('responseLabel') },
    { value: t('experience'), label: t('experienceLabel') },
  ];

  return (
    <section className="py-12 bg-primary-600">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-primary-100 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
