import { Link } from '@/i18n/routing';
import { IconArrowRight } from './Icons';
import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'white';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButtonProps extends ButtonBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: never;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  href: string;
  disabled?: never;
  type?: never;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl',
  secondary: 'bg-primary-50 text-primary-700 hover:bg-primary-100',
  outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
  white: 'bg-white text-primary-700 hover:bg-primary-50 shadow-xl hover:shadow-2xl',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed';
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {children}
      {withArrow && <IconArrowRight size={20} className="ml-2" />}
    </>
  );

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  const { href, ...buttonProps } = props as ButtonAsButtonProps;
  return (
    <button className={combinedStyles} {...buttonProps}>
      {content}
    </button>
  );
}
