import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/my-next-project',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
