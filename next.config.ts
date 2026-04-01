import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  // 确保支持国际化路由
  experimental: {
    // 如果你使用App Router，确保这个配置正确
  }
};

export default withNextIntl(nextConfig);