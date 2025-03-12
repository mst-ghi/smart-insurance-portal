import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cleanDistDir: true,
  poweredByHeader: false,
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: [
      '@tabler/icons-react',
      '@mantine/core',
      '@mantine/hooks',
      '@mantine/form',
      '@mantine/notifications',
    ],
  },
};

export default nextConfig;
