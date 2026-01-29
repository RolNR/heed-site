import { IconCheck } from './Icons';

interface FeatureListProps {
  features: string[];
  color?: 'green' | 'primary' | 'orange' | 'blue';
  size?: 'sm' | 'md';
  className?: string;
}

const colorStyles = {
  green: 'text-green-500',
  primary: 'text-primary-500',
  orange: 'text-orange-500',
  blue: 'text-blue-500',
};

const sizeStyles = {
  sm: 'text-sm',
  md: 'text-base',
};

export default function FeatureList({
  features,
  color = 'green',
  size = 'sm',
  className = '',
}: FeatureListProps) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <IconCheck
            size={size === 'sm' ? 20 : 24}
            className={`mr-2 flex-shrink-0 mt-0.5 ${colorStyles[color]}`}
          />
          <span className={`text-dark-600 ${sizeStyles[size]}`}>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

// Variant for compact lists with custom icons
interface FeatureGridProps {
  features: Array<{
    title: string;
    description?: string;
    icon?: React.ReactNode;
  }>;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function FeatureGrid({
  features,
  columns = 3,
  className = '',
}: FeatureGridProps) {
  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-8 ${className}`}>
      {features.map((feature, index) => (
        <div key={index} className="text-center group">
          {feature.icon && (
            <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl shadow-md flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
              {feature.icon}
            </div>
          )}
          <h3 className="text-lg font-bold text-dark-900 mb-2">{feature.title}</h3>
          {feature.description && (
            <p className="text-dark-600 text-sm leading-relaxed">{feature.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
