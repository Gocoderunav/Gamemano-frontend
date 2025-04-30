import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // ✅ This disables ESLint in production builds
  },
};

export default nextConfig;
