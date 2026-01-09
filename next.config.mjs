/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  output: 'standalone',
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
