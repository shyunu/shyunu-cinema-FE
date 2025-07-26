import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: ["search.pstatic.net"],
    formats: ["image/webp"],
  },
};

export default nextConfig;
