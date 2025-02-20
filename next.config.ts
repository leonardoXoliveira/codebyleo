import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    viewTransition: true
  },
  webpack: config => {
    config.resolve.preferRelative = true
    return config
  }
}

export default nextConfig
