import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,  // Allow builds even with TypeScript errors
  },
  eslint: {
    ignoreDuringBuilds: true,  // Ignore eslint errors during build
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    // Handling SVG files with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,  // Ensures that this rule applies only to .js, .ts, .jsx, .tsx files
      use: ['@svgr/webpack'], // Use SVGR for handling SVGs
    });

    return config;
  },
};

export default nextConfig;
