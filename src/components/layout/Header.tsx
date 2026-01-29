'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import { IconChevronDown, IconMenu, IconClose } from '@/components/ui';
import Image from 'next/image';

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/nosotros', label: t('about') },
  ];

  const serviceLinks = [
    { href: '/servicios/soluciones-nube', label: t('cloudSolutions') },
    { href: '/servicios/licencias-microsoft', label: t('microsoftLicenses') },
    { href: '/servicios/rmm', label: t('rmmServices') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="HEED"
              width={120}
              height={49}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-primary-600'
                    : 'text-dark-600 hover:text-primary-600'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                  pathname.startsWith('/servicios')
                    ? 'text-primary-600'
                    : 'text-dark-600 hover:text-primary-600'
                }`}
              >
                <span>{t('services')}</span>
                <IconChevronDown
                  size={16}
                  className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-dark-100 overflow-hidden transition-all duration-200 ${
                  isServicesOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-sm text-dark-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contacto"
              className={`text-sm font-medium transition-colors ${
                pathname === '/contacto'
                  ? 'text-primary-600'
                  : 'text-dark-600 hover:text-primary-600'
              }`}
            >
              {t('contact')}
            </Link>
          </div>

          {/* Right Side: Language + CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link href="/contacto?demo=rmm" className="btn-primary text-sm">
              {t('requestDemo')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-dark-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <IconClose size={24} className="text-dark-700" />
            ) : (
              <IconMenu size={24} className="text-dark-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-screen pb-6' : 'max-h-0'
          }`}
        >
          <div className="pt-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium ${
                  pathname === link.href
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-dark-600 hover:bg-dark-50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Services Section */}
            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-dark-400 uppercase tracking-wider mb-2">
                {t('services')}
              </p>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 pl-4 text-sm text-dark-600 hover:text-primary-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              href="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg text-sm font-medium ${
                pathname === '/contacto'
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-dark-600 hover:bg-dark-50'
              }`}
            >
              {t('contact')}
            </Link>

            <div className="px-4 pt-4 flex items-center justify-between">
              <LanguageSwitcher />
              <Link
                href="/contacto?demo=rmm"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-sm"
              >
                {t('requestDemo')}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
