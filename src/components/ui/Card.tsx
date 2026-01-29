import { ReactNode } from 'react';

type CardVariant = 'default' | 'bordered' | 'gradient';

interface CardProps {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-white rounded-2xl shadow-lg',
  bordered: 'bg-white rounded-2xl border border-dark-200 hover:border-primary-300',
  gradient: 'rounded-2xl',
};

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function Card({
  variant = 'default',
  children,
  className = '',
  padding = 'lg',
  hover = true,
}: CardProps) {
  const hoverStyles = hover ? 'hover:shadow-xl transition-all duration-300' : '';

  return (
    <div className={`${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}

// Sub-components for structured cards
interface CardIconProps {
  children: ReactNode;
  color?: string;
  className?: string;
}

export function CardIcon({ children, color = 'bg-primary-100 text-primary-600', className = '' }: CardIconProps) {
  return (
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${color} ${className}`}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

export function CardTitle({ children, subtitle, className = '' }: CardTitleProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {subtitle && (
        <p className="text-sm font-medium text-primary-600 mb-1">{subtitle}</p>
      )}
      <h3 className="text-xl font-bold text-dark-900">{children}</h3>
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`text-dark-600 text-sm leading-relaxed ${className}`}>
      {children}
    </div>
  );
}
