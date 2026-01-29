import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import ValueProposition from '@/components/sections/ValueProposition';
import Stats from '@/components/sections/Stats';
import RMMProcess from '@/components/sections/RMMProcess';
import CaseStudies from '@/components/sections/CaseStudies';
import CTASection from '@/components/sections/CTASection';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Services />
      <ValueProposition />
      <Stats />
      <RMMProcess />
      <CaseStudies />
      <CTASection />
    </>
  );
}
