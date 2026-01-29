import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Optimizations for production
  images: {
    formats: ['image/avif', 'image/webp'] as const,
  },
};

export default withNextIntl(nextConfig);
