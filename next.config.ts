import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export', // Enables `next export`
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
