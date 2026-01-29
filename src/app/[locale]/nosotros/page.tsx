import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

function AboutContent() {
  const t = useTranslations('about');
  const values = t.raw('values.items') as Array<{ title: string; description: string }>;

  const valueIcons = [
    <svg key="0" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>,
    <svg key="1" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>,
    <svg key="2" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>,
    <svg key="3" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>,
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-12 sm:py-16 md:py-24 pt-20 sm:pt-24 md:pt-28">
        <div className="container-custom text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            {t('title')}
          </h1>
          <p className="text-base sm:text-lg text-primary-100 max-w-2xl mx-auto px-4 sm:px-0">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="card-bordered p-5 sm:p-6 lg:p-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-100 rounded-lg sm:rounded-xl flex items-center justify-center text-primary-600 mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-dark-900 mb-3 sm:mb-4">
                {t('mission.title')}
              </h2>
              <p className="text-dark-600 leading-relaxed text-sm sm:text-base">
                {t('mission.description')}
              </p>
            </div>

            <div className="card-bordered p-5 sm:p-6 lg:p-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary-100 rounded-lg sm:rounded-xl flex items-center justify-center text-secondary-600 mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-dark-900 mb-3 sm:mb-4">
                {t('vision.title')}
              </h2>
              <p className="text-dark-600 leading-relaxed text-sm sm:text-base">
                {t('vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-dark-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-900 mb-3 sm:mb-4">
              {t('values.title')}
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 bg-white rounded-xl sm:rounded-2xl shadow-md flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <span className="scale-75 sm:scale-90 lg:scale-100">{valueIcons[index]}</span>
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-dark-900 mb-1 sm:mb-2">
                  {value.title}
                </h3>
                <p className="text-dark-600 text-xs sm:text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
            {t('cta.title')}
          </h2>
          <Link href="/contacto" className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-700 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-primary-50 transition-colors">
            {t('cta.button')}
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutContent />;
}
