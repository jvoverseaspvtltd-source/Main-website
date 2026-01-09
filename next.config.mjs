/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimization and Performance
  reactStrictMode: true,
  poweredByHeader: false, // Security: Hide Next.js header
  compress: true, // Enable gzip compression

  // Rendering
  output: 'standalone', // Required for Render deployment
  traitlingSlash: false, // Keep URLs clean (e.g. /about instead of /about/)

  // Build Configuration
  eslint: {
    ignoreDuringBuilds: true, // Prevent build failure on lint warnings
  },
  
  // Redirects: Canonical domain handling (non-www to www)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'jvoverseas.com',
          },
        ],
        destination: 'https://www.jvoverseas.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
