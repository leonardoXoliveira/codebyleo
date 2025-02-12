import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve.preferRelative = true;
    return config;
  },
};

export default nextConfig;
