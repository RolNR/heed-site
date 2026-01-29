'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { IconBuilding, IconCheckCircle, IconQuote, IconArrowRight } from '@/components/ui';

export default function CaseStudies() {
  const t = useTranslations('caseStudies');
  const [activeCase, setActiveCase] = useState(0);

  const cases = t.raw('cases') as Array<{
    company: string;
    industry: string;
    location: string;
    challenge: string;
    solution: string;
    results: string[];
    testimonial: string;
    author: string;
    role: string;
  }>;

  return (
    <section className="section-padding bg-dark-50" id="casos-exito">
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

        {/* Case Selector */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center sm:overflow-visible">
          {cases.map((caseStudy, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`flex-shrink-0 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${
                activeCase === index
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-dark-600 hover:bg-primary-50 border border-dark-200'
              }`}
            >
              {caseStudy.company}
            </button>
          ))}
        </div>

        {/* Active Case Display */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Company Info & Challenge */}
          <div className="card p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                <IconBuilding size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark-900">
                  {cases[activeCase].company}
                </h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                    {cases[activeCase].industry}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-dark-100 text-dark-700">
                    {cases[activeCase].location}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-dark-500 uppercase tracking-wider mb-2">
                Desafío
              </h4>
              <p className="text-dark-700 leading-relaxed">
                {cases[activeCase].challenge}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-dark-500 uppercase tracking-wider mb-2">
                Solución
              </h4>
              <p className="text-dark-700 leading-relaxed">
                {cases[activeCase].solution}
              </p>
            </div>
          </div>

          {/* Results & Testimonial */}
          <div className="space-y-6">
            <div className="card p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
              <h4 className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-4">
                Resultados
              </h4>
              <ul className="space-y-3">
                {cases[activeCase].results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <IconCheckCircle size={24} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-dark-800 font-medium">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-8 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
              <IconQuote size={40} className="text-primary-300 mb-4" />
              <blockquote className="text-lg leading-relaxed mb-6">
                &ldquo;{cases[activeCase].testimonial}&rdquo;
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg font-bold">
                    {cases[activeCase].author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{cases[activeCase].author}</p>
                  <p className="text-primary-200 text-sm">{cases[activeCase].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/contacto" className="btn-primary text-lg px-8 py-4">
            {t('cta')}
            <IconArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
