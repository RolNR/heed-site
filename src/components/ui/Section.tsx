import { ReactNode } from 'react';

type SectionBackground = 'white' | 'gray' | 'primary' | 'dark' | 'gradient';

interface SectionProps {
  children: ReactNode;
  background?: SectionBackground;
  className?: string;
  id?: string;
  padding?: 'sm' | 'md' | 'lg';
}

const bgStyles: Record<SectionBackground, string> = {
  white: 'bg-white',
  gray: 'bg-dark-50',
  primary: 'bg-primary-600',
  dark: 'bg-dark-900',
  gradient: 'gradient-bg',
};

const paddingStyles = {
  sm: 'py-12',
  md: 'py-16 md:py-20',
  lg: 'py-16 md:py-24',
};

export default function Section({
  children,
  background = 'white',
  className = '',
  id,
  padding = 'lg',
}: SectionProps) {
  return (
    <section id={id} className={`${paddingStyles[padding]} ${bgStyles[background]} ${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
}

// Section Header sub-component
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
}: SectionHeaderProps) {
  const alignment = centered ? 'text-center max-w-3xl mx-auto' : '';
  const titleColor = light ? 'text-white' : 'text-dark-900';
  const subtitleColor = light ? 'text-white/80' : 'text-dark-600';

  return (
    <div className={`mb-12 ${alignment} ${className}`}>
      <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
