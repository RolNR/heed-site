'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { IconMicrosoft, IconArrowRight, IconArrowDown } from '@/components/ui';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-48 h-48 sm:w-80 sm:h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float will-change-transform" />
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-80 sm:h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float will-change-transform" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 sm:w-72 sm:h-72 bg-amber-200/40 rounded-full mix-blend-multiply filter blur-2xl animate-float will-change-transform" style={{ animationDelay: '3s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem]" />

      <div className="container-custom relative z-10 pt-16 sm:pt-20 pb-20 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full shadow-md mb-6 sm:mb-8 animate-fade-in">
            <IconMicrosoft size={20} className="text-primary-600 mr-2 sm:hidden" />
            <IconMicrosoft size={24} className="text-primary-600 mr-2 hidden sm:block" />
            <span className="text-xs sm:text-sm font-medium text-dark-700">{t('badge')}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-dark-900 mb-4 sm:mb-6 animate-slide-up text-balance">
            {t('title')}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-dark-600 mb-8 sm:mb-10 max-w-2xl mx-auto animate-slide-up text-balance" style={{ animationDelay: '0.1s' }}>
            {t('subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link href="/contacto?demo=rmm" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              {t('ctaPrimary')}
              <IconArrowRight size={18} className="ml-2 sm:hidden" />
              <IconArrowRight size={20} className="ml-2 hidden sm:block" />
            </Link>
            <Link href="/servicios/rmm" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <IconArrowDown size={20} className="text-dark-400 sm:hidden" />
        <IconArrowDown size={24} className="text-dark-400 hidden sm:block" />
      </div>
    </section>
  );
}
