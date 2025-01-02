import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // reactCompiler: true,
    ppr: true,
    dynamicIO: true,
    // cacheLife: {
    //   "five-minutes": {
    //     stale: 60 * 5, // 5 minutes
    //     revalidate: 60 * 5, // 5 minutes
    //     expire: 60 * 60, // 1 hour
    //   },
    //   "ten-minutes": {
    //     stale: 60 * 10, // 10 minutes
    //     revalidate: 60 * 10, // 10 minutes
    //     expire: 60 * 60, // 1 hour
    //   },
    // },
  },
};

export default nextConfig;
