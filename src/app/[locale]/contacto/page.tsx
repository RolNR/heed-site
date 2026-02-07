import { Suspense } from 'react';
import { setRequestLocale } from 'next-intl/server';
import ContactForm from './ContactForm';
import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return getPageMetadata({ locale, path: '/contacto', translationKey: 'contact' });
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Suspense fallback={<ContactPageSkeleton />}>
      <ContactForm />
    </Suspense>
  );
}

function ContactPageSkeleton() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 md:py-24">
        <div className="container-custom text-center">
          <div className="h-12 bg-white/20 rounded-lg w-64 mx-auto mb-4 animate-pulse" />
          <div className="h-6 bg-white/10 rounded-lg w-96 mx-auto animate-pulse" />
        </div>
      </section>
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-6">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-12 bg-dark-100 rounded-xl animate-pulse" />
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-64 animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
