import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost"],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/assets": "./assets",
    };
    return config;
  },

  transpilePackages: [],
};

export default nextConfig;
