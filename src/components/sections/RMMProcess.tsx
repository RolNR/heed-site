'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { IconSearch, IconDownload, IconSettings, IconEye, IconChart, IconChevronRight, IconArrowRight } from '@/components/ui';

const stepIcons = [
  <IconSearch key="0" size={32} />,
  <IconDownload key="1" size={32} />,
  <IconSettings key="2" size={32} />,
  <IconEye key="3" size={32} />,
  <IconChart key="4" size={32} />,
];

export default function RMMProcess() {
  const t = useTranslations('rmmProcess');
  const [activeStep, setActiveStep] = useState(0);

  const steps = t.raw('steps') as Array<{
    number: string;
    title: string;
    description: string;
    details: string;
  }>;

  return (
    <section className="section-padding bg-white overflow-hidden" id="proceso-rmm">
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

        {/* Process Visualization */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Steps Timeline */}
          <div className="space-y-3 lg:space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`relative cursor-pointer p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-primary-50 border-2 border-primary-500 shadow-lg'
                    : 'bg-white border-2 border-dark-100 hover:border-primary-200'
                }`}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-10 top-full w-0.5 h-4 bg-dark-200 z-0" />
                )}

                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Step Number/Icon */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeStep === index
                        ? 'bg-primary-600 text-white'
                        : 'bg-dark-100 text-dark-500'
                    }`}
                  >
                    <span className="scale-75 sm:scale-100">{stepIcons[index]}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold ${
                        activeStep === index ? 'text-primary-600' : 'text-dark-400'
                      }`}>
                        PASO {step.number}
                      </span>
                    </div>
                    <h3 className={`text-lg font-bold mb-1 ${
                      activeStep === index ? 'text-dark-900' : 'text-dark-700'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm ${
                      activeStep === index ? 'text-dark-700' : 'text-dark-500'
                    }`}>
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <IconChevronRight
                    size={20}
                    className={`flex-shrink-0 transition-all duration-300 ${
                      activeStep === index
                        ? 'text-primary-600 rotate-90'
                        : 'text-dark-300'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="lg:sticky lg:top-24 mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl lg:rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
              {/* Step Indicator */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <span className="scale-75 sm:scale-100">{stepIcons[activeStep]}</span>
                </div>
                <div>
                  <span className="text-primary-200 text-xs sm:text-sm font-medium">
                    Paso {steps[activeStep].number} de {steps.length}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              {/* Details */}
              <p className="text-base sm:text-lg text-primary-100 leading-relaxed mb-6 sm:mb-8">
                {steps[activeStep].details}
              </p>

              {/* Progress */}
              <div className="flex gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 flex-grow rounded-full transition-all duration-300 ${
                      index <= activeStep ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/contacto?demo=rmm"
                className="inline-flex items-center justify-center w-full px-4 sm:px-6 py-3 sm:py-4 bg-white text-primary-700 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-primary-50 transition-colors"
              >
                {t('cta')}
                <IconArrowRight size={18} className="ml-2" />
              </Link>

              {/* Guarantee */}
              <p className="text-center text-primary-200 text-xs sm:text-sm mt-3 sm:mt-4">
                {t('guarantee')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
