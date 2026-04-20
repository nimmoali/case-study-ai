import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Optimize package imports for better bundle splitting
    optimizePackageImports: ["framer-motion"],
  },
  images: {
    // Allow avatar images from UI avatar services in development
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
    ],
  },
};

export default nextConfig;
