'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { IconFacebook, IconMail, IconPhone, IconLocation, IconMicrosoft } from '@/components/ui';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-3 sm:mb-4">
              <Image
                src="/logo-white.svg"
                alt="HEED"
                width={120}
                height={49}
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
            <p className="text-dark-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              {t('description')}
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/heedmx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <IconFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t('services')}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/servicios/soluciones-nube"
                  className="text-dark-300 hover:text-white transition-colors text-sm"
                >
                  {nav('cloudSolutions')}
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/licencias-microsoft"
                  className="text-dark-300 hover:text-white transition-colors text-sm"
                >
                  {nav('microsoftLicenses')}
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/rmm"
                  className="text-dark-300 hover:text-white transition-colors text-sm"
                >
                  {nav('rmmServices')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t('company')}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/nosotros"
                  className="text-dark-300 hover:text-white transition-colors text-sm"
                >
                  {nav('about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-dark-300 hover:text-white transition-colors text-sm"
                >
                  {nav('contact')}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="text-dark-300 hover:text-white transition-colors text-sm"
                >
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="text-dark-300 hover:text-white transition-colors text-sm"
                >
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t('contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <IconMail size={20} className="text-primary-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:contacto@heed.mx" className="text-dark-300 hover:text-white transition-colors text-sm">
                  contacto@heed.mx
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <IconPhone size={20} className="text-primary-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+5215586443982" className="text-dark-300 hover:text-white transition-colors text-sm">
                  +52 1 55 8644 3982
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <IconLocation size={20} className="text-primary-500 mt-0.5 flex-shrink-0" />
                <span className="text-dark-300 text-sm">
                  Ciudad de México, México
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-dark-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-dark-400 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} HEED. {t('rights')}
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-dark-400 text-xs sm:text-sm">Microsoft Partner</span>
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-dark-700 rounded flex items-center justify-center">
                <IconMicrosoft size={14} className="text-white sm:hidden" />
                <IconMicrosoft size={16} className="text-white hidden sm:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
