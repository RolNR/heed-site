'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { IconArrowRight } from '@/components/ui';

export default function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,white_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,white_0%,transparent_40%)]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            {t('title')}
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 mb-10">
            {t('subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacto?demo=rmm"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-700 bg-white rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-xl hover:shadow-2xl w-full sm:w-auto"
            >
              {t('button')}
              <IconArrowRight size={20} className="ml-2" />
            </Link>
          </div>
          <p className="text-primary-200 text-sm mt-6">
            {t('note')}
          </p>
        </div>
      </div>
    </section>
  );
}
