'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

export default function ContactForm() {
  const t = useTranslations('contact');
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    const demo = searchParams.get('demo');
    const service = searchParams.get('service');
    if (demo === 'rmm') {
      setFormData(prev => ({ ...prev, service: 'rmm' }));
    } else if (service) {
      setFormData(prev => ({ ...prev, service }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            employees: '',
            service: '',
            message: '',
          });
          setStatus('idle');
        }, 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-2">
                        {t('form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-2">
                        {t('form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark-700 mb-2">
                        {t('form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-dark-700 mb-2">
                        {t('form.company')} *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="employees" className="block text-sm font-medium text-dark-700 mb-2">
                        {t('form.employees')}
                      </label>
                      <select
                        id="employees"
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none bg-white"
                      >
                        <option value="">-</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="200+">200+</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-dark-700 mb-2">
                        {t('form.service')} *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none bg-white"
                      >
                        <option value="">{t('form.selectService')}</option>
                        <option value="rmm">{t('serviceOptions.rmm')}</option>
                        <option value="cloud">{t('serviceOptions.cloud')}</option>
                        <option value="licenses">{t('serviceOptions.licenses')}</option>
                        <option value="all">{t('serviceOptions.all')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-2">
                      {t('form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? t('form.submitting') : t('form.submit')}
                  </button>

                  {status === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center">
                      {t('form.success')}
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center">
                      {t('form.error')}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card p-8">
                <h3 className="text-xl font-bold text-dark-900 mb-6">
                  {t('info.title')}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-dark-500">Email</p>
                      <a href={`mailto:${t('info.email')}`} className="text-dark-800 font-medium hover:text-primary-600">
                        {t('info.email')}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-dark-500">Teléfono</p>
                      <a href={`tel:${t('info.phone').replace(/\s/g, '')}`} className="text-dark-800 font-medium hover:text-primary-600">
                        {t('info.phone')}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-dark-500">Ubicación</p>
                      <p className="text-dark-800 font-medium">{t('info.address')}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-dark-500">Horario</p>
                      <p className="text-dark-800 font-medium">{t('info.hours')}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Microsoft Partner Badge */}
              <div className="card p-6 bg-gradient-to-br from-primary-50 to-white text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl shadow-md flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z"/>
                  </svg>
                </div>
                <p className="text-sm font-semibold text-primary-700">Microsoft Partner</p>
                <p className="text-xs text-dark-500">Indirect Reseller</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
