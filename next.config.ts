import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
  },
  transpilePackages: ['framer-motion', 'react-icons']
};

export default nextConfig;
