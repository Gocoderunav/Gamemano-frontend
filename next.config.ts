/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables breaking on lint errors
  },
};

export default nextConfig;
