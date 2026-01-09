/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimization and Performance
  reactStrictMode: true,
  poweredByHeader: false, // Security: Hide Next.js header
  compress: true, // Enable gzip compression

  // Rendering
  trailingSlash: false, // Keep URLs clean (e.g. /about instead of /about/)

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
