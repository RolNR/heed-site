'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: 'es' | 'en') => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex items-center bg-dark-100 rounded-lg p-1">
      <button
        onClick={() => switchLocale('es')}
        disabled={isPending}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
          locale === 'es'
            ? 'bg-white text-primary-600 shadow-sm'
            : 'text-dark-500 hover:text-dark-700'
        } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-label="Cambiar a español"
      >
        ES
      </button>
      <button
        onClick={() => switchLocale('en')}
        disabled={isPending}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
          locale === 'en'
            ? 'bg-white text-primary-600 shadow-sm'
            : 'text-dark-500 hover:text-dark-700'
        } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
