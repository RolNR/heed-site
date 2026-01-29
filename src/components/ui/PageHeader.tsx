import { ReactNode } from 'react';
import Button from './Button';

type GradientColor = 'blue' | 'orange' | 'green' | 'primary' | 'dark';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  description?: string;
  gradient?: GradientColor;
  cta?: {
    label: string;
    href: string;
  };
  children?: ReactNode;
  centered?: boolean;
}

const gradientStyles: Record<GradientColor, { bg: string; text: string; badge: string }> = {
  blue: {
    bg: 'bg-gradient-to-br from-blue-600 to-cyan-700',
    text: 'text-blue-100',
    badge: 'bg-white/20 text-white',
  },
  orange: {
    bg: 'bg-gradient-to-br from-orange-500 to-red-600',
    text: 'text-orange-100',
    badge: 'bg-white/20 text-white',
  },
  green: {
    bg: 'bg-gradient-to-br from-green-600 to-emerald-700',
    text: 'text-green-100',
    badge: 'bg-white/20 text-white',
  },
  primary: {
    bg: 'bg-gradient-to-br from-primary-600 to-primary-800',
    text: 'text-primary-100',
    badge: 'bg-white/20 text-white',
  },
  dark: {
    bg: 'bg-gradient-to-br from-dark-800 to-dark-900',
    text: 'text-dark-300',
    badge: 'bg-white/10 text-white',
  },
};

export default function PageHeader({
  title,
  subtitle,
  badge,
  description,
  gradient = 'primary',
  cta,
  children,
  centered = false,
}: PageHeaderProps) {
  const styles = gradientStyles[gradient];
  const containerClass = centered ? 'text-center' : 'max-w-3xl';

  return (
    <section className={`${styles.bg} py-16 md:py-24 pt-36 md:pt-40`}>
      <div className="container-custom">
        <div className={containerClass}>
          {badge && (
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${styles.badge}`}>
              {badge}
            </span>
          )}

          {subtitle && (
            <p className={`text-sm font-medium mb-2 ${styles.text}`}>
              {subtitle}
            </p>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h1>

          {description && (
            <p className={`text-lg mb-8 ${styles.text}`}>
              {description}
            </p>
          )}

          {cta && (
            <Button href={cta.href} variant="white" withArrow>
              {cta.label}
            </Button>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
